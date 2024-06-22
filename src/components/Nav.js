import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Logo from '../image/Logo.png'

function Nav() {
    return (
        <div>
            <nav>
                <Link className='links'  to='/'>
                    <img src={Logo} height={25} width={100}></img>
                </Link>
                <ul className='nav-links'>

                <Link className='links' to='/profile'><li>Profile</li></Link>

                    <div className='dropdown'>
                        <li>Movies </li>
                        <div className="dropdown-content">
                            <Link className='links' to='/movies'><li>Popular</li></Link>
                            <Link className='links' to='/nowplaying'><li>Now Playing</li></Link>
                            <Link className='links' to='/upcoming'><li>Upcoming</li></Link>
                            <Link className='links' to='/toprated'><li>Top Rated</li></Link>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <li>Tv Shows </li>
                        <div className='dropdown-content'>
                            <Link className='links' to='/tvs'><li>Popular</li></Link>
                            <Link className='links' to='/airing'><li>Airing Today</li></Link>
                            <Link className='links' to='/ontv'><li>On TV</li></Link>
                            <Link className='links' to='/toprated'><li>Top Rated</li></Link>
                        </div>
                    </div>
                    <Link className='links' to='/trending'>
                        <li>Trending </li>
                    </Link>

                    <Link className='links' to='/login'><li>SignIn/SignUp</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
