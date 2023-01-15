import React from 'react';
import { currentUser } from '../../util/currentUser';

function Home() {
  return (
    <>
    <div>Home Component</div>
    <h2>{currentUser?.name}</h2>
    </>
  )
}

export default Home