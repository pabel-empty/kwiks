import React, { useState, useEffect, useRef, useCallback } from 'react';
import userProfile from '../assets/img/user_profile.svg';
import heartIcon from '../assets/img/heart.svg';
import commentIcon from '../assets/img/message.svg';
import shareIcon from '../assets/img/share.svg';
import musicIcon from '../assets/img/music-one.png';

export default function VideoContainer() {

    const videoRef = useRef( null );
    const [ playing, setPlaying ] = useState( false );

    const [ observer, setObserver ] = useState( null );

    const [ debugText, setDebugText ] = useState( "" );

    const handleViewChange = useCallback(
        ( entries ) => {
            for ( let entry of entries ) {
                if ( entry.intersectionRatio > 0.5 ) {
                    if ( videoRef.current ) {

                        document.querySelectorAll( "video" ).forEach( ( video ) => {
                            video.pause();
                        } );

                        videoRef.current.play();
                    }
                } else {
                    if ( videoRef.current ) {
                        videoRef.current.pause();
                    }
                }
            }
        },
        []
    );


    const onVideoPress = () => {
        if ( playing ) {
            videoRef.current.pause();
            setPlaying( false );
        } else {
            videoRef.current.play();
            setPlaying( true );
        }
    };


    useEffect( () => {
        const observer = new IntersectionObserver( handleViewChange, {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        } );
        setObserver( observer );
        if ( videoRef.current ) {
            observer.observe( videoRef.current );
        }
        return () => {
            if ( observer ) {
                observer.disconnect();
            }
        };
    }, [ handleViewChange ] );

    return (
        <div className="video_card" id='one'>
            {/* User Profile Credentials */ }
            <div className="user_profile flex justify-between items-center">
                <div className="creator_box flex">
                    <div className="img">
                        <a href="#"><img src={ userProfile } alt="" /></a>
                    </div>
                    <div className="details">
                        <a href="#"><h5 className='font-bold'>Makenna Rosser</h5></a>
                        <a href="#"><p className='font-normal'>@rosser_makenna</p></a>
                    </div>
                </div>
                <button className="follow_btn">
                    Follow
                </button>
            </div>

            {/* User Videos */ }
            <div className="video_details_box">
                <h4>Good Morning! Here is my latest magic video.</h4>

                <div className="video relative">
                    <video ref={ videoRef } autoPlay onClick={ onVideoPress } loop src="https://assets.codepen.io/2629920/gt3.mp4" className="video"></video>

                    <div className="like_comment_share_area">
                        <a href="#">
                            <div className="icons_box">
                                <img src={ heartIcon } alt="" />
                            </div>
                            <p>22 M</p>
                        </a>
                        <a href="#">
                            <div className="icons_box">
                                <img src={ commentIcon } alt="" />
                            </div>
                            <p>15.5 K</p>
                        </a>
                        <a href="#">
                            <div className="icons_box">
                                <img src={ shareIcon } alt="" />
                            </div>
                            <p>3.5 K</p>
                        </a>
                    </div>

                    <div className="video_title_music_wrapper">
                        <div className="video_title_music_inner">
                            <a href="#">Good morining every one #goodmorning</a>
                            <div className="music_name">
                                <img src={ musicIcon } alt="" />
                                <p>On the way - (alan walker) - music hip hop...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}