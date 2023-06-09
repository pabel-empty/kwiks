import React from 'react';
import logo from '../assets/img/logo.png';
import menuBar from '../assets/img/menubar.png';
import searchIcon from '../assets/img/search.png';

function Header( props ) {
    return (
        <header className="header_section flex justify-between bg-white p-4 items-center sticky top-0 pr-12 pl-12">
            <div className="left_content flex-1">
                <div className="main_menu flex items-center">
                    <a href="#" className="flex">
                        <img className="mr-2" src={ menuBar } alt="Menu Bar" />
                        <span>Menu</span>
                    </a>
                    <div className="separate mx-5"></div>
                    <div className="search_field">
                        <img src={ searchIcon } alt="" />
                        <input class="appearance-none block w-full border py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Search"></input>
                    </div>
                </div>
            </div>

            <div className="middle_content flex-1">
                <div className="logo m-auto">
                    <a href="#"><img className="w-full" src={ logo } alt="Logo" /></a>
                </div>
            </div>

            <div className="right_content flex-1 text-right">
                <div className="inline-flex items-center">
                    <div className="separate mr-5"></div>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Creator
                    </button>
                    <button className="bg-gray-300 active hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        Get App
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;