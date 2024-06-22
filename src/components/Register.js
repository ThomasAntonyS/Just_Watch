import {Link} from 'react-router-dom'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import { useState } from 'react'

function Register(){

    const [formData,setFormData] = useState({
        username:'',
        email:'',
        password:'',
        cnfpassword:''
    })
    const [type,setType] = useState('password')
    const [typeCnf,setTypeCnf] = useState('password')
    const [passIcon,setPassIcon] = useState(<Visibility/>)
    const [passIconCnf,setPassIconCnf] = useState(<Visibility/>)
    const [showPass,setShowPass] = useState('false')
    const [showPassCnf,setShowPassCnf] = useState('false')



    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const toggleEyePass=()=>{
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


    const toggleEyePassCnf=()=>{
        if(showPassCnf==='false'){
            setPassIconCnf(<VisibilityOff />) 
            setTypeCnf('text')
            setShowPassCnf('true')
        }    
        else{
            setPassIconCnf(<Visibility/>) 
            setTypeCnf('password')
            setShowPassCnf('false')
        }
    }



    return(

        <div className="register">

            <div className="register_content">

            <div className="left"></div>
            
                <div className="right">
                    <h2>Hello User, <span>Join Us !</span></h2>
                    <p>Lets Sign Up.</p>

         
                    <form onSubmit={handleSubmit}>


                        <input type="text" 
                        placeholder="Name" 
                        onChange={e=>setFormData({...formData,username:e.target.value})} 
                        required />


                        <input type="email" 
                        placeholder="Email ID"
                        onChange={e=>setFormData({...formData,email:e.target.value})} 
                        required/>


                        <input type={type}
                        placeholder="Password" 
                        onChange={e=>setFormData({...formData,password:e.target.value})} 
                        required/>
                        <span className='eye-icon1' onClick={toggleEyePass}>{passIcon}</span>


                        <input type={typeCnf} 
                        placeholder="Confirm Password" 
                        onChange={e=>setFormData({...formData,cnfpassword:e.target.value})}  
                        required/>
                        <span className='eye-icon2' onClick={toggleEyePassCnf}>{passIconCnf}</span>


                        <button >Sign Up</button>


                        <Link to='/login' id='register_navigation'>Already have an account ?</Link>

                    </form>

                 </div>
 
            </div>

        </div>
        
    )
}


export default Register