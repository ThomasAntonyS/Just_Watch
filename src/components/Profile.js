
import React, { useContext } from 'react'
import { ProfileContext } from '../Context/ProfileContext'
import {Link} from 'react-router-dom'
 
const Profile = () => {

  const baseImage = 'https://image.tmdb.org/t/p/w185'
  const {user,watchlist} = useContext(ProfileContext)

  return (
    <div>
      <h1 style={{margin:'20px 0px'}}>Profile</h1>
      {
        (user) ? <div style={{display:'flex',alignItems:'center'}}><h3>Welcome:  </h3> <h4></h4>{user}</div> : <Link to='/register'>Sign In / Sign Up</Link>
      }


    <div className="header" style={{marginTop:'40px'}}>
      <h1>WatchList</h1>
    </div>

    {
      (watchlist) ? 
              
      <div className="popular_movies">
      {
          watchlist.map((watchlist) => (
              <div key={watchlist.id} className="trend_items">
                  <Link className='watchlistlink' to={`/discover/${watchlist.id}`}>
                      <img src={baseImage + watchlist.poster_path} alt={watchlist.id} />
                      <h4>{watchlist.original_title}</h4>
                      <p className='ratings'><i className="fas fa-star"></i> {watchlist.vote_average}</p>
                  </Link>
                  <p>{watchlist.release_date}</p>
              </div>
          ))                    
      } 
  </div>
      : 

      <p>No items in watchlist</p>
    }           
    </div>
    
  )
}

export default Profile