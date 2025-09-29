import React from 'react'

function Header() {
  return (
    <div>
      <header class="text-bg-info text-center p-3 shadow-sm">
        <div class="container">
            <h1 class="h1">Welcome to My Portfolio</h1>
            <p class="h5">Here you can see my projects and skills</p>
        </div>
    </header>

    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand ms-lg-3 text-white fs-4 fw-bold" href="#">
                <img src="https://res.cloudinary.com/deqfgxqqe/image/upload/v1755691091/Logo2_e_background_removal_f_png_e_improve_e_sharpen_mm6hlh.png"
                    alt="Logo here" width="50" height="50"></img>TEJAS
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto h4">
                    <li class="nav-item mx-2"><a class="nav-link" href="#About">Home</a></li>
                    <li class="nav-item mx-2"><a class="nav-link" href="#Skills">Skills</a></li>
                    <li class="nav-item mx-2"><a class="nav-link" href="#Register">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Header
