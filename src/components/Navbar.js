import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="text-bg-info text-center p-3 shadow-sm">
        <div className="container">
            <h1 className="h1">Welcome to My Portfolio</h1>
            <p className="h5">Here you can see my projects and skills</p>
        </div>
    </header>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand ms-lg-3 text-white fs-4 fw-bold" href="#">
                <img src="https://res.cloudinary.com/deqfgxqqe/image/upload/v1755691091/Logo2_e_background_removal_f_png_e_improve_e_sharpen_mm6hlh.png"
                    alt="Logo here" width="50" height="50"></img>TEJAS
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto h4">
                    <li className="nav-item mx-2"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-link" to="/About">About</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-link" to="/Skills">Skills</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-link" to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
