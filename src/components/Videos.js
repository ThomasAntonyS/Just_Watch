/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
function Videos({moviedId}) {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetchVideo()
    }, [])
    const fetchVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${moviedId}/videos?api_key=3a1152dfeee6a71281e7628c90d5e229&language=en-US`);
        const movie = await data.json();
        setVideos(movie.results)
    }
    const src = 'https://www.youtube.com/embed/' 
    return (
        <div className='video'>
            <div className="video_header">
                <h1>Trailers</h1>
            </div>
            <div className='videos'>
                {
                    videos.map((video) => (
                            <div key={video.id} className='trailer'>
                            <iframe width='1000'
                                height='600'
                                title={video.name}
                                key={video.id}
                                src={src + video.key}
                                allowFullScreen
                                frameorder="0"></iframe>
                            </div>
                        ))
                    }
            </div>
            
         </div>
    )
}

export default Videos
