import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul className='sidebar'>
          <li><Link to="/">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/contactus">Contact us</Link></li>
        </ul>
      </div>
    )
  }
}
