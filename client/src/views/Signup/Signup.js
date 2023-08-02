import React,{useState,useEffect} from "react";
import axios from 'axios';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

import { currentUser } from "../../util/currentUser";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')

  useEffect(()=>{
    if(currentUser){
      window.location.href="/"
    }
  }, [])

  async function signupUser(){
    const response = await axios.post('/signup',{
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: role
    })
    console.log(response.data)
    if(response.data.success){
        await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Aww yiss!",
      });
      window.location.href = '/login'
    }
    else{
      swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
      setName('')
      setEmail('')
      setPhone('')
      setPassword('')
    }
  }

  return (
    <div className="row signup-bg">
      <div>
         <h1 className='text-center'>Signup</h1>
         <div className='row'>
       <div className='col-md-6'>

       </div>

       <div className='col-md-6'>
        <div className='form-container signup-form-container'>
          <h3 className="text-center heading">Delicious Garden</h3>
          <form>
           <div>
              <label htmlFor='name'> </label>
              <input type='text' id='name' 
               placeholder='Enter Your FullName' 
               className='user-input' 
               value={name} onChange={(e)=> setName(e.target.value)}/>
           </div>

           <div>
              <label htmlFor='email'> </label>
              <input type='email' id='email'
               placeholder='Enter Your Email' 
               className='user-input' 
               value={email} onChange={(e)=> setEmail(e.target.value)}/>
           </div>

           <div>
              <label htmlFor='phone'> </label>
              <input type='text' id='phone'
               placeholder='Enter Your Phone'
               className='user-input' 
               value={phone} onChange={(e)=> setPhone(e.target.value)}/>
           </div>

           <div>
              <label htmlFor='password'> </label>
              <input type='password' id='password'
               placeholder='Enter Your Password'
               className='user-input' 
               value={password} onChange={(e)=> setPassword(e.target.value)}/>
           </div>

            <div>
              <button type='button' className='signup-button' onClick={signupUser}>Signup</button>
            </div>
            <div className="already-login-btn-container">
              <span>Already have an acount ? 
              <button className="already-login-btn"> <Link to='./../Login'> Log in here...</Link></button></span>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
