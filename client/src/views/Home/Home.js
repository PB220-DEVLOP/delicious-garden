import React from 'react';
import { currentUser } from '../../util/currentUser';
import './Home.css';

function Home() {
  function LogOut(){
    localStorage.removeItem('currentUser');
    window.location.href = "/login"
  }

  if(!currentUser){
    alert('Login is required')
    window.location.href = "/login"
  }

  return (
    <div>
    <div>Home Component</div>
    <h2>{currentUser?.name}</h2>

    <div className="search-container">
      <input type="text" placeholder='search' className='input-search'/>
    </div>

    <button type="button" className="btn btn-primary" onClick={LogOut}>Logout</button>
    </div>
  )
}

export default Home