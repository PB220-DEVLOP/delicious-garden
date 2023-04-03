import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import BookTable from './views/BookTable/BookTable';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/BookTable" element={<BookTable/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App