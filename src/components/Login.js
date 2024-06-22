import {Link} from 'react-router-dom'
import { Visibility, VisibilityOff} from '@mui/icons-material'
import { useContext, useState } from 'react'
import { ProfileContext } from '../Context/ProfileContext'


function Login(){
    const {setUser} = useContext(ProfileContext)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [type,setType] = useState('password')
    const [passIcon,setPassIcon] = useState(<Visibility/>)
    const [showPass,setShowPass] = useState('false')

    const handleLogin=(event)=>{
        event.preventDefault()
        setUser(username)
    }

    const toggleEye=()=>{ 
        if(showPass==='false'){
            setPassIcon(<VisibilityOff />) 
            setType('text')
            setShowPass('true')
        }    
        else{
            setPassIcon(<Visibility/>) 
            setType('password')
            setShowPass('false')
        }
    }


    return(

    <div className="login">

        <div className="login_content">
            

            <div className="left"></div>


            <div className="right">

                <h2>Welcome to <span>JustWatch</span></h2>

                <p>Welcome back! Log in to your account.</p>

         
                <form onSubmit={handleLogin}>

                    <input type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={e=>(setUsername(e.target.value))} 
                    required/>


                    <input type={type}
                    placeholder="Password" 
                    onChange={e=>(setPassword(e.target.value))} 
                    value={password}
                    required/>
                    <span className='eye-icon' onClick={toggleEye}>{passIcon}</span>


                    <button type='submit'>Log in</button>


                    <Link to='/register' id='register_navigation'>Don't have an account ?</Link>

                </form>

            </div>

        </div>

    </div>
    )
}

export default Login