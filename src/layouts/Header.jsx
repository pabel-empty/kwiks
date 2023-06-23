import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import searchIcon from '../assets/img/search.svg';
import $ from 'jquery';
import axios from 'axios';

function Header( { opened, formClose } ) {

    const [ showModal, setShowModal ] = useState( false );
    const [ isLogin, setIsLogin ] = useState( true );
    const [ email, setEmail ] = useState( '' );
    const [ fullName, setFullName ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ verify, setVerify ] = useState( false );
    const [ verificationCode, setVerificationCode ] = useState( '' );
    const [ signUpErrorMessage, setSignUpErrorMessage ] = useState( '' );
    const [ signInErrorMessage, setSignInErrorMessage ] = useState( '' );
    const [ loading, setLoading ] = useState( false );
    const [ isLoggedIn, setIsLoggedIn ] = useState( false );


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

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setLoading( true );
        if ( verify ) {
            const credential = {
                email: email,
                code: verificationCode
            };
            console.log( credential );
            axios.post( `https://staging.kwiks-data.com/user/verify`, credential )
                .then( response => {
                    localStorage.setItem( 'token', response.data.data );
                    setShowModal( false );
                    setLoading( false );
                    setVerify( false );
                    setSignInErrorMessage( '' );
                    setSignUpErrorMessage( '' );
                } )
                .catch( error => console.log( error ) );
        } else {
            if ( isLogin ) {
                const credential = {
                    email: email
                };
                axios.post( `https://staging.kwiks-data.com/user/signin`, credential )
                    .then( response => {
                        // console.log( response.data );
                        // localStorage.setItem( 'xdxx', response.data );
                        // setShowModal( false );
                        console.log( response );
                        setLoading( false );
                        setVerify( true );
                        setSignInErrorMessage( '' );
                    } )
                    .catch( error => {
                        setLoading( false );
                        setSignInErrorMessage( error.response.data.errors[ 0 ] );
                    } );
            } else {
                const credential = {
                    email: email
                };
                axios.post( `https://staging.kwiks-data.com/user/signup`, credential )
                    .then( response => {
                        setLoading( false );
                        setVerify( true );
                        setSignUpErrorMessage( '' );
                    } )
                    .catch( error => {
                        setLoading( false );
                        setSignUpErrorMessage( error.response.data.errors[ 0 ] );
                    } );
            }
        }

    };

    const logout = () => {
        localStorage.removeItem( 'token' );
        setIsLoggedIn( false );
    };

    useEffect( () => {
        const token = localStorage.getItem( 'token' );
        if ( token === null ) {
            setIsLoggedIn( false );
        } else {
            setIsLoggedIn( true );
        }

        searchIconInteractive();
    }, [ searchIconInteractive, logout ] );


    return (
        <header className="header_section header_section2 bg-white fixed top-0">

            {/* Second Version */ }
            <div className="flex second_version_of_header justify-between w-9/12">
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
                    {/* <div className="separate mx-3"></div> */ }
                    { !isLoggedIn ? <button onClick={ () => {
                        setShowModal( true );
                    } } className="bg-gray-300 active text-gray-800 font-bold py-2 px-4 rounded-r">
                        Login
                    </button> : <button onClick={ logout } className="bg-gray-300 active text-gray-800 font-bold py-2 px-4 rounded-r">
                        Logout
                    </button> }
                    <button className="bg-gray-300 active text-gray-800 font-bold py-2 px-4 rounded-r">
                        Get App
                    </button>
                </div>
            </div>


            {/* Login and Signup Modal */ }
            {/* { showModal ? ( */ }
            <>
                <div className={ showModal || opened ? 'overLayer overLayerUp' : 'overLayer overLayerDown' } onClick={ () => {
                    setShowModal( false );
                    formClose( false );
                } }></div>
                <div className={ showModal || opened ? 'input_box input_box_up' : 'input_box input_box_down' }>

                    <div className="header_part">
                        <button onClick={ () => {
                            setShowModal( false );
                            formClose( false );
                        } }>+</button>
                    </div>

                    {/*body*/ }
                    <div className="relative p-6 flex-auto">
                        <div className="lg:px-8">
                            { verify === false ? <h3 className="mb-4 text-xl font-medium text-center">
                                { isLogin ? 'Login' : 'Sign up' } to Kwiks
                            </h3> : <h3 className="mb-4 text-xl font-medium text-center">Verification Code</h3> }

                            { verify === false ? <p className="text-center">Inter your valid email address and password<br />{ isLogin ? 'login' : 'register' } to your account</p> : <p className="text-center">Please check your email</p> }
                            <form onSubmit={ handleSubmit }>
                                {
                                    verify === false ? isLogin ? <><div>
                                        <input
                                            onChange={ ( event ) => setEmail( event.target.value ) }
                                            type="email"
                                            name="email"
                                            id="email"
                                            className=""
                                            value={ email }
                                            placeholder="Email / Username / Phone"
                                        />
                                        { signInErrorMessage.length !== 0 ? <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                            <span class="sr-only">Info</span>
                                            <div>
                                                { signInErrorMessage }
                                            </div>
                                        </div> : null }
                                    </div>
                                        {/* <div>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="password"
                                                className=""
                                            />
                                        </div> */}
                                    </> : <>
                                        {/* <div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            className=""
                                            placeholder="Full Name"
                                            value={ fullName }
                                            onChange={ event => setFullName( event.target.value ) }
                                        />
                                    </div> */}
                                        <div>
                                            <input
                                                type="email"
                                                name="createEmail"
                                                id="createEmail"
                                                className=""
                                                placeholder="Email / Username / Phone"
                                                value={ email }
                                                onChange={ event => setEmail( event.target.value ) }
                                            />
                                            { signUpErrorMessage.length !== 0 ? <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                                <span class="sr-only">Info</span>
                                                <div>
                                                    { signUpErrorMessage }
                                                </div>
                                            </div> : null }
                                        </div>
                                        {/* <div>
                                            <input
                                                type="password"
                                                name="createPassword"
                                                id="createPassword"
                                                placeholder="Create Password"
                                                className=""
                                                value={ password }
                                                onChange={ event => setPassword( event.target.value ) }
                                            />
                                        </div> */}
                                    </> : <div>
                                        <input
                                            onChange={ ( event ) => setVerificationCode( event.target.value ) }
                                            type="text"
                                            name="verification"
                                            id="verification"
                                            className=""
                                            value={ verificationCode }
                                            placeholder="Verification Code"
                                        />

                                    </div>
                                }
                                {
                                    loading ? <button disabled type="button" class="flex justify-center w-full text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 items-center">
                                        <div class="text-center">
                                            <div role="status">
                                                <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill_gree" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </button> : <button
                                        type="submit"
                                        className="w-full text-white"
                                    >
                                        { verify ? 'Submit' : isLogin ? 'Login' : 'Create Account' }
                                    </button>
                                }


                                {
                                    verify === false ? <p className="text-center temrs_condition_para">
                                        By clicking here and continuing,<br /> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                                    </p> : null
                                }

                                {
                                    verify === false ? isLogin ? <h4 className="text-center">Don't have an account? <a onClick={ () => setIsLogin( false ) } href="javascript:void(0)">Sign up</a></h4> : <h4 className="text-center">Already have an account? <a onClick={ () => setIsLogin( true ) } href="javascript:void(0)">Login</a></h4> : null
                                }
                            </form>
                        </div>

                    </div>
                </div>
            </>
            {/* ) : null } */ }
        </header>
    );
}

export default Header;



