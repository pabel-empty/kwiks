import React from 'react';
import VideoContainer from './VideoContainer';

export default function MainComponent() {

    return (
        <div className='flex-grow'>
            <div className="video_card_wrapper overflow-auto scrollbar-hide">
                {
                    [ 1, 2, 3, 4, 5 ].map( ( data, index ) => {
                        return <VideoContainer key={ index } />;
                    } )
                }
            </div>
        </div>
    );
}
