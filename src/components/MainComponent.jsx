import React, { useEffect, useState } from 'react';
import VideoContainer from './VideoContainer';
import axios from 'axios';

export default function MainComponent() {

    const [ videos, setVideos ] = useState( null );

    function getVideos( type, skip, limit ) {
        axios.get( `http://staging.eba-2sjjggtm.us-east-2.elasticbeanstalk.com/video?type=${ type }&skip=${ skip }&limit=${ limit }` )
            .then( ( res ) => {
                setVideos( res.data.data );
            } )
            .catch( err => console.log( err ) );
    }

    useEffect( () => {
        getVideos( 'popular', 0, 20 );
    }, [] );

    return (
        <div className='flex-grow'>
            <div className="video_card_wrapper overflow-auto scrollbar-hide">
                {
                    videos === null ? <h3>Loading....</h3> : videos.map( ( data, index ) => {
                        return <VideoContainer video={ data } key={ index } />;
                    } )
                }
            </div>
        </div>
    );
}
