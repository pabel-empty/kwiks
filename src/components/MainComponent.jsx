import React, { useEffect, useState } from 'react';
import VideoContainer from './VideoContainer';
import axios from 'axios';

export default function MainComponent( { openHeaderLogin } ) {

    const [ videos, setVideos ] = useState( null );

    const openLoginForm = () => {
        openHeaderLogin();
    };

    function getVideos( type, skip, limit ) {
        axios.get( `https://staging.kwiks-data.com/video?type=${ type }&skip=${ skip }&limit=${ limit }` )
            .then( ( res ) => {
                setVideos( res.data.data );
            } )
            .catch( err => console.log( err ) );
    }

    useEffect( () => {
        getVideos( 'popular', 0, 50 );
    }, [] );

    return (
        <div className='flex-grow video_card_wrapper_main overflow-auto scrollbar-hide'>
            <div className="video_card_wrapper">
                {
                    videos === null ? <h3>Loading....</h3> : videos.map( ( data, index ) => {
                        return <VideoContainer openLoginForm={ openLoginForm } video={ data } key={ index } />;
                    } )
                }
            </div>
        </div>
    );
}
