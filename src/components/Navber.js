import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navber(props) {
  return (
    <nav className={`navbar navbar-expand-lg navber-${props.mode} bg-${props.mode} body-tertiary my-3 mx-4`}>
    <div className="container-fluid">
      <Link className={`navbar-brand text-${props.mode === 'light'?'dark' : 'light'}`} to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link active text-${props.mode === 'light'?'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode === 'light'?'dark' : 'light'}`} to="/about">About us</Link>
          </li>
        </ul>
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" 
            onClick={props.toggleMood} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
      </div>
    </div>
  </nav>
  )
}
//define props type that are must be string
Navber.propType = {
  title:PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

//define default props type

Navber.defaultPropType = {
  title:'Set the title',
  aboutText: 'Set about text here'
}
