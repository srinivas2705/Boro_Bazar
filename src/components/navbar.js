import React from "react";
import { Input } from 'antd';
import "../styles/navbar.css";
import {ShoppingCartOutlined, UserOutlined, BarsOutlined} from '@ant-design/icons';
const Navbar = () =>{
    return(
        <div className="Navbar">
            <p className="bars"><BarsOutlined /></p>
            <img src="https://borobazar.vercel.app/assets/images/logo.svg" alt="logo"></img>
            <Input type="text" name="search_bar" className="search_bar" placeholder="What are you looking...." />
            <p>English-EN</p>
            <p><span className="cart"><ShoppingCartOutlined /></span> Cart</p>
            <p><span className="user"><UserOutlined /></span> Sign In</p>
        </div>
    )
}

export default Navbar;