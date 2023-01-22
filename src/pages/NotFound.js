import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="NotFound">
      <Navbar />
      <div className="NotFound-container">
        <div className="oops">
          Oops!
        </div>
        <div className="page-not-found">404 - Page Not Found</div>
        <div style={{ marginBottom: '52px'}}>The page you are looking for might have been removed, had its name changed, or is temporaily unavailable</div>
        <button className="btn-primary" style={{ margin: '0' }}>
          <Link to="/" style={{ color: 'white' }}>Go to Homepage</Link>
        </button>
      </div>
    </div>
  )
}

export default NotFound