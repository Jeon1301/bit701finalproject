import React, { useReducer, useState } from 'react';

// Reducer를 이용해서 간단하게 입출금 관리를 하는 간단한 예제
// action.type 을 미리 상수화 해서 등록

const ACTION_TYPES={
    add:'addmoney',
    sub:'submoney'
}

const reducer=(state,action)=>{
    console.log("reducer가 일을 합니다", state,action);

    switch(action.type){
        case ACTION_TYPES.add:
            return state+Number(action.payload);
        case ACTION_TYPES.sub:
            return state-Number(action.payload);
        default:
            return state;
    }
}



function ReducerComp1(props) {

    const [number,setNumber] = useState(0);

    // money의 state 값 변경 시 dispatch로 호출
    const [money,dispatch] = useReducer(reducer,0)  // 0은 money 변수의 초기값

    return (
        <div>
            <h2>useReducer 은행에 오신 것을 환영합니다</h2>
            <h3>잔고 : {money}원</h3>

            <input type='number' value={number} step={1000}
            onChange={(e)=>setNumber(e.target.value)}/>

            <br/><br/>
            {/* <button type='button' className='btn btn-outline-success'
            onClick={()=>dispatch({'type':'addmoney',payload:number})}>입금</button>
            
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type='button' className='btn btn-outline-danger'
            onClick={()=>dispatch({'type':'submoney',payload:number})}>출금</button> */}

            {/* type을 상수를 이용해서 호출 */}
            <button type='button' className='btn btn-outline-success'
            onClick={()=>dispatch({'type': ACTION_TYPES.add, payload:number})}>
                입금</button>
            
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type='button' className='btn btn-outline-danger'
            onClick={()=>dispatch({'type': ACTION_TYPES.sub, payload:number})}>
                출금</button>
        </div>
    );
}

export default ReducerComp1;