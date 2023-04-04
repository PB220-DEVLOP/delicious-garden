import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import BookTable from './views/BookTable/BookTable';
import MyOrders from './views/MyOrders/MyOrders';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/BookTable" element={<BookTable/>}/>
        <Route path="/MyOrders" element={<MyOrders/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App