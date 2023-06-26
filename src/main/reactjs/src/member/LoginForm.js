import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Loginform(props) {

    const [myid,setMyid] = useState('');
    const [mypass,setMypass]=useState('');
    const navi=useNavigate();

    // submit 이벤트
    const onSubmitLogin=(e)=>{
        e.preventDefault();

        const url=`/member/login?myid=${myid}&mypass=${mypass}`;
        Axios.get(url)
        .then(res=>{
            if(res.data.success === 'yes'){
                /*
                localStorage : 직접 지우기 전에 브라우저에 남아있다
                sessionStorage : 브라우저 닫으면 지워짐
                */

                sessionStorage.loginok="yes";
                sessionStorage.myname=res.data.myname;
                sessionStorage.myid=myid;
                navi("/")
                
                window.location.reload();   // 새로고침
            }else{
                alert("아이디나 비밀번호가 맞지 않습니다");
                sessionStorage.loginok="no";
                sessionStorage.myname="";
                sessionStorage.myid="";
            }
        })
    }

    return (
        <div className='login'>
            <form onSubmit={onSubmitLogin}>
                <table className='table' style={{width:'315px'}}>
                    <tr>
                        <th style={{width:'100px',backgroundColor:'#ddd'}}>아이디</th>
                        <td>
                            <input type='text' className='form-control'
                            placeholder='아이디' required autoFocus
                            value={myid} onChange={(e)=>setMyid(e.target.value)}/>
                        </td>
                    </tr>
 
                    <tr>
                        <th style={{width:'100px',backgroundColor:'#ddd'}}>비밀번호</th>
                        <td>
                            <input type='password' className='form-control'
                            placeholder='비밀번호' required
                            value={mypass} onChange={(e)=>setMypass(e.target.value)}/>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2} align="center">
                            <button type='submit' className='btn btn-outline-secondary'
                                style={{width:"100px",marginTop:'10px'}}>로그인</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Loginform;