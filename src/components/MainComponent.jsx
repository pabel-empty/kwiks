import React from 'react';
import userProfile from '../assets/img/user_profile.png';
import heartIcon from '../assets/img/heart.png';
import commentIcon from '../assets/img/message.png';
import shareIcon from '../assets/img/share.png';
import musicIcon from '../assets/img/music-one.png';

export default function MainComponent() {
    return (
        <div className='flex-1'>
            <div className="video_card_wrapper">

                {/* Video Card */ }
                <div className="video_card">
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
                            <video src="https://assets.codepen.io/2629920/gt3.mp4" className="video" autoPlay loop playsInline></video>

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

                {/* Video Card */ }
                <div className="video_card">
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
                            <video src="https://assets.codepen.io/2629920/gt3.mp4" className="video" autoPlay loop playsInline></video>

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

                {/* Video Card */ }
                <div className="video_card">
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
                            <video src="https://assets.codepen.io/2629920/gt3.mp4" className="video" autoPlay loop playsInline></video>

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

                {/* Video Card */ }
                <div className="video_card">
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
                            <video src="https://assets.codepen.io/2629920/gt3.mp4" className="video" autoPlay loop playsInline></video>

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

                {/* Video Card */ }
                <div className="video_card">
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
                            <video src="https://assets.codepen.io/2629920/gt3.mp4" className="video" autoPlay loop playsInline></video>

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


            </div>
        </div>
    );
}
