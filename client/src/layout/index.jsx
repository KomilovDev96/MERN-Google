import React from 'react';
import { Layout } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Content, Footer } = Layout;
import "./style.scss";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/reducers/userReducers';
const LayoutCustom = () => {
    
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <Layout>
            <div className='header'>
                <div className='header_logo'>MERN LOGO</div>
                <ul className='header_menu'>
                    {!isAuth && <li> <Link to={"login"}> Login </Link></li>}
                    {!isAuth && <li><Link to={"register"}>Register </Link></li>}
                    {isAuth && <li><Link onClick={() => dispatch(logout())} to={"/"}>Chiqish </Link></li>}
                    {isAuth && <li><Link to={"file"}>File </Link></li>}
                </ul>
            </div>
            <Content style={{ padding: '50px 48px', height: "100vh" }} >
                <Outlet />
            </Content>
            <Footer>
                MERN CLOUND
            </Footer>
        </Layout>
    );
};
export default LayoutCustom;