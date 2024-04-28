import React from 'react'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import {Route,Routes,} from "react-router-dom";

function Admin() {
  return (
    <div className="row m-0 p-0">
      <div className="col-md-3 m-0 p-0 bg-dark" style={{ height: '100vh' }}>
        <SideBar />
      </div>
      <div className="col-md-9">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blog/*" element={<BlogApp />} /> */}
          <Route path="*" element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin