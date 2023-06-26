import React from 'react';
import Menu from './component/Menu';
import { Route, Routes } from 'react-router-dom';
import errorimg from './image/error.jpg';
import Home from './component/Home';
import { Loginform, MemberForm, MemberList } from './member';
import { BoardForm, BoardList } from './board';
import BoardDetailPage from './board/BoardDetailPage';


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