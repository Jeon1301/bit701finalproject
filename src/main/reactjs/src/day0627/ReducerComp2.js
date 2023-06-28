import React, { useReducer, useState } from 'react';
import Students from './Students';

//reducer 설정시 초기값으로 미리 지정
const initialState={
    count:1,
    students:[
        {
            id:new Date(),
            name:'이영지',
            isHere:false
        }
    ]
}

const reducer=(state,action)=>{
    console.log(state,action);

    switch(action.type){
        case 'add-student':
            //payload 를 통해서 name 을 전달받을것임
            const name=action.payload.name;
            //추가할 학생 정보 구성
            const addStudent={
                id:new Date(),
                name,
                isHere:false
            }

            const data={
                count:state.count+1,
                students:[
                    ...state.students,
                    addStudent
                ]
            }
            return data;
        case 'delete-student':
            return {
                count:state.count-1,
                students:
                    state.students.filter(s=>s.id!==action.payload.id)
            };
        case 'mark-student':
            return {
                count:state.count,
                students:
                    state.students.map(s=>{
                        if(s.id===action.payload.id){
                            return {...s,isHere:!s.isHere}
                        }
                        return s;
                    })
            };
        default:
            return state;        
    }
}

function ReducerComp2(props) {

    const [name,setName]=useState('');
    const [studentInfo,dispatch]=useReducer(reducer,initialState);

    return (
        <div>
            <h2>Reducer 비트캠프 701호에 오신 것을 환영합니다</h2>
            <h4>총 학생수 : {studentInfo.count}명</h4>
            <div className='input-group' style={{width:'200px'}}>
                <input type='text' className='form-control' value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                &nbsp;&nbsp;
                <button type='button' className='btn btn-sm btn-outline-info'
                onClick={()=>{
                    dispatch({'type':'add-student',payload:{name}});
                    setName('');
                }}>추가</button>
            </div>
            <br/><br/>
            {
                studentInfo.students.map((stu,idx)=>
                <Students key={idx} stu={stu} dispatch={dispatch}/>)
            }
        </div>
    );
}

export default ReducerComp2;