import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import menuBar from '../assets/img/menubar.svg';
import searchIcon from '../assets/img/search.svg';
import $ from 'jquery';

function Header( props ) {

    const [ showModal, setShowModal ] = useState( false );
    const [ isLogin, setIsLogin ] = useState( true );

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
        <header className="header_section header_section2 bg-white sticky top-0">

            {/* First Version */ }
            {/* <div className="header_section_inner flex justify-between items-center pr-10 pl-10">
                <div className="left_content flex-1">
                    <div className="main_menu flex items-center">
                        <a href="#" className="flex" onClick={ sidebarMenu }>
                            <img className="mr-2" src={ menuBar } alt="Menu Bar" />
                            <span>Menu</span>
                        </a>
                        <div className="separate mx-8"></div>
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
                        <button onClick={ () => setShowModal( true ) } className="bg-gray-300 active hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                            Login
                        </button>
                    </div>
                </div>
            </div> */}


            {/* Second Version */ }
            <div className="flex second_version_of_header justify-between">
                <div className="logo flex-1">
                    <a href="#"><img className="w-full" src={ logo } alt="Logo" /></a>
                </div>

                <div className="search_field flex-1">
                    <img src={ searchIcon } alt="" className='search_icon' />
                    <input onClick={ searchIconInteractive() } className="appearance-none block w-full border py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="search" placeholder="Search" />
                </div>

                <div className="inline-flex items-center flex-1 justify-end flex_inherit">
                    <button className="bg-transparent text-gray-800 font-bold py-2 px-4 rounded-l">
                        Creator
                    </button>
                    <div className="separate mx-3"></div>
                    <button onClick={ () => setShowModal( true ) } className="bg-gray-300 active text-gray-800 font-bold py-2 px-4 rounded-r">
                        Login
                    </button>
                </div>
            </div>


            {/* Login and Signup Modal */ }
            { showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/ }
                            <div className="input_box border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="header_part">
                                    <button onClick={ () => setShowModal( false ) }>+</button>
                                </div>

                                {/*body*/ }
                                <div className="relative p-6 flex-auto">
                                    <div className="lg:px-8">
                                        <h3 className="mb-4 text-xl font-medium text-center">
                                            { isLogin ? 'Login' : 'Sign up' } to Kwiks
                                        </h3>
                                        <p className="text-center">Inter your valid email address and password<br />{ isLogin ? 'login' : 'register' } to your account</p>
                                        <form action="#">
                                            {
                                                isLogin ? <><div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className=""
                                                        placeholder="email / username / phone"
                                                    />
                                                </div>
                                                    <div>
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            placeholder="password"
                                                            className=""
                                                        />
                                                    </div></> : <><div>
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            id="fullName"
                                                            className=""
                                                            placeholder="Full Name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="email"
                                                            name="createEmail"
                                                            id="createEmail"
                                                            className=""
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="password"
                                                            name="createPassword"
                                                            id="createPassword"
                                                            placeholder="Create Password"
                                                            className=""
                                                        />
                                                    </div></>
                                            }

                                            <button
                                                type="submit"
                                                className="w-full text-white"
                                            >
                                                { isLogin ? 'Login' : 'Create Account' }
                                            </button>

                                            <p className="text-center temrs_condition_para">
                                                By clicking here and continuing,<br /> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                                            </p>

                                            {
                                                isLogin ? <h4 className="text-center">Don't have an account? <a onClick={ () => setIsLogin( false ) } href="javascript:void(0)">Sign up</a></h4> : <h4 className="text-center">Already have an account? <a onClick={ () => setIsLogin( true ) } href="javascript:void(0)">Login</a></h4>
                                            }
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null }
        </header>
    );
}

export default Header;



