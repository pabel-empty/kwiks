import React from 'react';
import userIcon from '../assets/img/user.svg';
import videoIcon from '../assets/img/video.svg';
import trendingIcon from '../assets/img/trending.svg';
import p1 from '../assets/img/p1.png';
import p2 from '../assets/img/p2.png';
import p3 from '../assets/img/p3.png';
import p4 from '../assets/img/p4.png';
import p5 from '../assets/img/p5.png';
import rightArrow from '../assets/img/right_arrow.png';
import appStore from '../assets/img/app_store.svg';
import playStore from '../assets/img/play_store.svg';

function Sidebar( props ) {

    return (
        <div className='sidebar_wrapper w-2/12'>
            <div className="sidebar_inner fixed overflow-auto scrollbar-hide">
                <div className="sidebar">
                    <ul className="list-none">
                        <li>
                            <a href="#" className='items-center flex pb-5 active'>
                                <img src={ trendingIcon } alt="" />
                                <span>Trending</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='items-center flex pb-5' onClick={ () => props.openLoginForm() }>
                                <img src={ userIcon } alt="" />
                                <span>Following</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='items-center flex pb-5'>
                                <img src={ videoIcon } alt="" />
                                <span>Explore</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="popular_creators mt-6">
                    <h4>Popular Creators</h4>
                    <a href="#">
                        <div className="creator_box flex mb-5">
                            <div className="img">
                                <img src={ p1 } alt="" />
                            </div>
                            <div className="details">
                                <h5>Makenna Rosser</h5>
                                <p>@rosser_makenna</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="creator_box flex mb-5">
                            <div className="img">
                                <img src={ p2 } alt="" />
                            </div>
                            <div className="details">
                                <h5>Desirae Bator</h5>
                                <p>@batorbaby</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="creator_box flex mb-5">
                            <div className="img">
                                <img src={ p3 } alt="" />
                            </div>
                            <div className="details">
                                <h5>James Workman</h5>
                                <p>@workman</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="creator_box flex mb-5">
                            <div className="img">
                                <img src={ p4 } alt="" />
                            </div>
                            <div className="details">
                                <h5>Talan Stanton</h5>
                                <p>@stanton</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="creator_box flex mb-5">
                            <div className="img">
                                <img src={ p5 } alt="" />
                            </div>
                            <div className="details">
                                <h5>Madelyn</h5>
                                <p>@madelynbips</p>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="see_more">
                        <span>See More</span>
                        <img src={ rightArrow } alt="" />
                    </a>
                </div>

                <div className="download_buttons mt-6">
                    <h4>Download Kwiks App</h4>
                    <div className="download_store flex">
                        <a href="#" className='mr-2'>
                            <img src={ appStore } alt="" />
                        </a>
                        <a href="#">
                            <img src={ playStore } alt="" />
                        </a>
                    </div>
                </div>

                <div className="others_link mt-6 mb-5">
                    <h4>About Kwiks</h4>
                    <div className="links">
                        <a href="#">About Us</a>
                        <a href="#">Partnership</a>
                        <a href="#">Help</a>
                        <a href="#">Safety</a>
                        <a href="#">Community Guidelines</a>
                    </div>
                    <div className="following_credentials">
                        <p>Follow us</p>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Sidebar;
