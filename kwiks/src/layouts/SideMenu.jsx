import React from 'react';
import $ from 'jquery';

export default function SideMenu() {


    // When click on Menu Bar this method will fire
    function slideMenuClose() {
        $( ".sidebar_menu" ).animate( {
            width: 0,
            opacity: 0
        }, 500 );
    }

    return (
        <div className='sidebar_menu'>
            <div className="menu_header">
                {/* <h4>Sidebar Menu</h4> */ }
                <button onClick={ slideMenuClose }><i class="fa-solid fa-xmark"></i></button>
            </div>

            <ul>
                <li>
                    <a href="#"><i class="fa-regular fa-user"></i> <span>Dashboard</span></a>
                </li>
                <li>
                    <a href="#"><i class="fa-regular fa-user"></i> <span>Dashboard</span></a>
                </li>
                <li>
                    <a href="#"><i class="fa-regular fa-user"></i> <span>Dashboard</span></a>
                </li>
                <li>
                    <a href="#"><i class="fa-regular fa-user"></i> <span>Dashboard</span></a>
                </li>
                <li>
                    <a href="#"><i class="fa-regular fa-user"></i> <span>Dashboard</span></a>
                </li>
                <li>
                    <a href="#"><i class="fa-regular fa-user"></i> <span>Dashboard</span></a>
                </li>
                <li>
                    <a href="#"><i class="fa-regular fa-user"></i> <span>Dashboard</span></a>
                </li>
            </ul>
        </div>
    );
}
