
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProfileContext } from '../Context/ProfileContext';

function Movies() {
    const {setWatchlist} = useContext(ProfileContext)
    const [movie, setmovie] = useState([]);
    const [page, setPage] = useState(1)
    const [watchList_movies,setwatchList_movies] = useState([])

    const fetchMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3a1152dfeee6a71281e7628c90d5e229&language=en-US&page=${page}`);
        const movie = await data.json();
        setPage(movie.page)
        setmovie(movie.results);
    }
    useEffect(() => {
        fetchMovie()
    }, [page])
    const baseImage = 'https://image.tmdb.org/t/p/w185'
    function next(){
        setPage(page + 1)
    }
    function previous() {
        if (page !== 1) {
            setPage(page - 1)
        }
    }

    
    function handleWatchlist(movie,e){
        e.preventDefault()
        setwatchList_movies([...watchList_movies,movie])
        console.log(watchList_movies);
        setWatchlist(watchList_movies)
    
    }


    return (
        <div className='popular'>
            <div className="header">
                <h1>Popular Movies</h1>
            </div>
            <div className="popular_flex">
                <div className="popular_movies">
                    {
                        movie.map((movie) => (
                            <div key={movie.id} className="trend_items">
                                <Link className='movielink' to={`/discover/${movie.id}`}>
                                    <img src={baseImage + movie.poster_path} alt={movie.id} />
                                    <h4>{movie.original_title}</h4>
                                    <p className='ratings'><i className="fas fa-star"></i> {movie.vote_average}</p>
                                </Link>
                                <p>{movie.release_date}</p>
                                <button onClick={(e)=>handleWatchlist(movie,e)}>Add to WatchList</button>
                            </div>
                        ))                    
                    } 
                </div>
                <div className="btns">
                    <button className='buttons' onClick={previous}><i className="fas fa-chevron-left fa-2x"></i></button>
                    <button className='buttons' onClick={next}><i className="fas fa-chevron-right fa-2x"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Movies
