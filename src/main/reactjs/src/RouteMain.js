import React from 'react';
import Menu from './component/Menu';
import { Route, Routes } from 'react-router-dom';
import errorimg from './image/error.jpg';
import Home from './component/Home';
import { Loginform, MemberForm, MemberList } from './member';
import { BoardForm, BoardList } from './board';
import BoardDetailPage from './board/BoardDetailPage';
import ReducerComp1 from './day0627/ReducerComp1';
import ReducerComp2 from './day0627/ReducerComp2';
import CallBackTest from './callback/CallBackTest';


function RouteMain(props) {
    return (
        <div style={{marginLeft:'20px'}}>
            <Menu/>
            <br style={{clear:'both'}}/><br/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Loginform/>}/>

                <Route path='/member'>
                    <Route path='form' element={<MemberForm/>}/>
                    <Route path='list' element={<MemberList/>}/>
                </Route>

                <Route path='/board'>
                    <Route path='form' element={<BoardForm/>}/>
                    <Route path='list' element={<BoardList/>}/>
                    <Route path='list/:currentPage' element={<BoardList/>}/>
                    <Route path='detail/:num/:currentPage' element={<BoardDetailPage/>}/>
                </Route>

                {/* Reducer 연습 라우터 추가 */}
                <Route path='/reducer1' element={<ReducerComp1/>}/>
                <Route path='/reducer2' element={<ReducerComp2/>}/>

                {/* useCallback 연습 라우터 추가 */}
                <Route path='/callback' element={<CallBackTest/>}/>

                <Route path='*' element={
                    <div style={{marginLeft:'20px'}}>
                        <h1>잘못된 URL 주소입니다</h1>
                        <br/><br/>
                        <img alt='' src={errorimg}/>
                    </div>
                }/>
            </Routes>

        </div>
    );
}

export default RouteMain;