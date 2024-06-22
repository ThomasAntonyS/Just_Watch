
import React, { useContext } from 'react'
import { ProfileContext } from '../Context/ProfileContext'
import {Link} from 'react-router-dom'

const Profile = () => {

  
  const {user,watchlist} = useContext(ProfileContext)

  return (
    <div>Profile
      {
        (user) ? <p>Username:{user}</p> : <p>SignIn/SignUp</p>
      }

<div>
            <div className="header">
                <h1>WatchList</h1>
            </div>
            <div className="popular_flex">
                <div className="popular_movies">
                    {
                        (watchlist) ? 

                        watchlist.map((watchlist) => (
                          <div key={watchlist.id} className="trend_items">
                              <Link className='movielink' to={`/discover/${watchlist.id}`}>
                                  <img src={watchlist.poster_path} alt={watchlist.id} />
                                  <h4>{watchlist.original_title}</h4>
                                  <p className='ratings'><i className="fas fa-star"></i> {watchlist.vote_average}</p>
                              </Link>
                              <p>{watchlist.release_date}</p>
                          </div>
                      ))   

                      :
                      
                      <p>No Items in WatchList</p>                 
                    } 
                </div>
            </div>            
        </div>

    </div>
    
  )
}

export default Profile