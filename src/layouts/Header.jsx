import React, { useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import menuBar from '../assets/img/menubar.svg';
import searchIcon from '../assets/img/search.svg';
import $ from 'jquery';

function Header( props ) {


    useEffect( () => {
        searchIconInteractive();
    }, [ searchIconInteractive ] );


    // When click on search field this method will fire
    function searchIconInteractive() {
        $( "input[type = 'search']" ).on( "focus", function () {
            $( ".search_icon" ).css( {
                'transition': '.5s',
                'transform': 'scale(1.3)',
            } );
        } );

        $( "input[type = 'search']" ).on( "focusout", function () {
            $( ".search_icon" ).css( {
                'transform': 'scale(1)',
            } );
        } );
    }

    // When click on Menu Bar this method will fire
    function sidebarMenu() {
        $( ".sidebar_menu" ).animate( {
            width: 300,
            opacity: 1
        } );
    }

    return (
        <header className="header_section bg-white sticky top-0">
            <div className="header_section_inner flex justify-between items-center pr-12 pl-12">
                <div className="left_content flex-1">
                    <div className="main_menu flex items-center">
                        <a href="#" className="flex" onClick={ sidebarMenu }>
                            <img className="mr-2" src={ menuBar } alt="Menu Bar" />
                            <span>Menu</span>
                        </a>
                        <div className="separate mx-5"></div>
                        <div className="search_field">
                            <img src={ searchIcon } alt="" className='search_icon' />
                            <input onClick={ searchIconInteractive() } className="appearance-none block w-full border py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="search" placeholder="Search" />
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
                        <div className="separate mr-3"></div>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                            Creator
                        </button>
                        <button className="bg-gray-300 active hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                            Get App
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;