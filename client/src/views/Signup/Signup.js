import React from "react";
import "./Signup.css";


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
          <h3 className="text-center heading ">
            Delicious garden</h3>
          <form>
           <div>
              <label htmlFor='name' className="labels">Full Name : </label>
              <input type='text' id='name' placeholder='Enter Name' className='user-input'/>
           </div>

           <div>
              <label htmlFor='email' className="labels">Email : </label>
              <input type='email' id='email' placeholder='Enter Email' className='user-input'/>
           </div>

           <div>
              <label htmlFor='phone' className="labels">Phone : </label>
              <input type='text' id='phone' placeholder='Enter Phone' className='user-input'/>
           </div>

           <div>
              <label htmlFor='password' className="labels">Password : </label>
              <input type='password' id='password' placeholder='Enter Password' className='user-input'/>
           </div>

            <div>
              <button type='button' className='signup-button '>Signup</button>
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
