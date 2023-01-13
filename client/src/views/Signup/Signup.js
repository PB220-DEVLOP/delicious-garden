import React from "react";
import "./Signup.css";
import {Link} from 'react-router-dom'


function Signup() {
  return (
    <div className="main-container">
      <div>
         <h1 className='text-center'>Signup</h1>
         <div className='row'>
       <div className='col-md-6'>

       </div>

       <div className='col-md-6'>
        <div className='form-container'>
          <h3 className="text-center heading">Delicious Garden</h3>
          <form>
           <div>
              <label htmlFor='name'> </label>
              <input type='text' id='name'  placeholder='Enter Your FullName'  className='user-input'/>
           </div>

           <div>
              <label htmlFor='email'> </label>
              <input type='email' id='email' placeholder='Enter Your Email' className='user-input'/>
           </div>

           <div>
              <label htmlFor='phone'> </label>
              <input type='text' id='phone' placeholder='Enter Your Phone' className='user-input'/>
           </div>

           <div>
              <label htmlFor='password'> </label>
              <input type='password' id='password' placeholder='Enter Your Password' className='user-input'/>
           </div>

            <div>
              <button type='button' className='signup-button '>Signup</button>
            </div>
            <div className="already-login-container">
              <span>Already have an acount ? 
              <button className="already-login"> <Link to='./../Login'> Log in here...</Link></button></span>
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
