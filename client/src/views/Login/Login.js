import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

import { currentUser } from "../../util/currentUser";
import './Login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    if(currentUser){
      window.location.href="/"
    }
  }, [])

  async function LoginUser(){
    const response = await axios.post('/login',{
      email: email,
      password: password,
    })
    console.log(response.data)
    if(response.data.success){
      alert(response.data.message)
      localStorage.setItem('currentUser',JSON.stringify(response.data.data))
      window.location.href="/"
    }
    else{
      alert('Error :'+ response.data.message)
      setEmail("")
      setPassword("")
      localStorage.removeItem('currentUser')
    }
    
  }

  return (
    <div className="main-container">
      <div>
         <h1 className='text-center'>Login</h1>
         <div className='row'>
       <div className='col-md-6'>

       </div>

       <div className='col-md-6'>
        <div className='form-container'>
          <h3 className="text-center heading">Delicious Garden</h3>
          <form>
    
           <div>
              <label htmlFor='email'> </label>
              <input type='email' id='email'
               placeholder='Enter Your Email' 
               className='user-input' 
               value={email} onChange={(e)=> setEmail(e.target.value)}/>
           </div>

           <div>
              <label htmlFor='password'> </label>
              <input type='password' id='password'
               placeholder='Enter Your Password'
               className='user-input' 
               value={password} onChange={(e)=> setPassword(e.target.value)}/>
           </div>

            <div>
              <button type='button' className='login-button' onClick={LoginUser}>Login</button>
            </div>
            <div className="not-signup-btn-container">
              <span>Not have an acount ? 
              <button className="not-signup-btn"> <Link to='./../Signup'> Signup here...</Link></button></span>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
