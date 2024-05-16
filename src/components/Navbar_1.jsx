import React from 'react'
import { RiMenuSearchFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";


export const Navbar_1 = () => {
    return (
        <nav className='navbar'>
            <h1><a href="#"><img src="src\assets\Logo-charitfix.png" alt="logo" className='logoo' /></a></h1>
            <div className='qutu'> 
                <ul className='navbar_lists'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">donation</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <ul className='navbar_login'>
                <li className='icon_li'><FaSearch className='icon' /></li>
                <li ><button className='login_button'>Log In</button></li>
            </ul>
            <div>
            <RiMenuSearchFill className='menuu' />
            </div>
        </nav>
    )
}
