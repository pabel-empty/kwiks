import React from 'react';
import userIcon from '../assets/img/user.svg';
import videoIcon from '../assets/img/video.svg';
import trendingIcon from '../assets/img/trending.svg';

export default function SmallDeviceSidebar() {
    return (
        <div className='small_device_sidebar'>
            <a href="#">
                <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="icon_box border p-2 rounded-md shadow-md m-2">
                    <img src={ trendingIcon } alt="" />
                </button>
                <div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip on right
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </a>
            <a href="#">
                <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="icon_box border p-2 rounded-md shadow-md m-2">
                    <img src={ userIcon } alt="" />
                </button>
                <div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip on right
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </a>
            <a href="#">
                <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="icon_box border p-2 rounded-md shadow-md m-2">
                    <img src={ videoIcon } alt="" />
                </button>
                <div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip on right
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </a>
        </div>
    );
}
