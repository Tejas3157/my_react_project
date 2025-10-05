import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <Navbar />
            <div>

                <div id="About" className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center">
                            <img src="https://res.cloudinary.com/deqfgxqqe/image/upload/v1755690463/226E5A0505_lhsmla.jpg"
                                alt="profile" className="img-fluid rounded-circle shadow-lg"
                                style={{ "width": "220px", "height": "220px", "objectPosition": "top", "objectFit": "cover", "border": "3px solid #0dcaf0" }}></img>
                        </div>
                        <div className="col-md-8  mt-4 mt-md-0">
                            <h2 className="mb-3 text-center">About Me</h2>
                            <div className="text-start">
                                <p>My name is <strong>D.Tejas</strong>. I'm a UI/UX developer driven by a fascination for how
                                    people interact with technology. My journey into this field started with a love for graphic
                                    design, which gave me a strong eye for aesthetics, typography, and color theory. I quickly
                                    realized I wanted to do more than just create beautiful visuals; I wanted to create experiences
                                    that were functional, intuitive, and solved real-world problems.</p>
                                <p>My design philosophy is rooted in empathy. I believe the best digital products are created with a
                                    deep understanding of the user. I enjoy the entire design process, from initial research and
                                    creating user flows to building interactive prototypes in Figma.</p>
                                <p>As someone new to the industry, I am a dedicated and fast learner, always excited to tackle new
                                    challenges and collaborate with creative teams. I'm passionate about building products that not
                                    only look good but feel good to use.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="container my-5 border border-info border-2 opacity-50"></hr>
            </div>

            <div>

                <div id="Skills" className="container my-5">
                    <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                        <h2 className="text-center mb-4">My Skills</h2>
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <h3 className="text-center fs-4">Soft Skills</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item list-group-item-action">Team Work</li>
                                    <li className="list-group-item list-group-item-action">Time Management</li>
                                    <li className="list-group-item list-group-item-action">Communication</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3 className="text-center fs-4">Technical Skills</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item list-group-item-action">HTML</li>
                                    <li className="list-group-item list-group-item-action">CSS</li>
                                    <li className="list-group-item list-group-item-action">JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="container my-5 border border-info border-2 opacity-50"></hr>

                <div className="container my-5">
                    <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                        <h2 className="text-center mb-4">Subjects & Grades</h2>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover text-center mb-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Subject</th>
                                        <th>Marks</th>
                                        <th>Grades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>HTML</td>
                                        <td>90</td>
                                        <td>A</td>
                                    </tr>
                                    <tr>
                                        <td>CSS</td>
                                        <td>80</td>
                                        <td>B+</td>
                                    </tr>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>70</td>
                                        <td>B</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <hr className="container my-5 border border-info border-2 opacity-50"></hr>
            </div>

            <div>
                <div id="Register" className="container my-5 h6">
                    <div className="card p-4 shadow-sm">
                        <h2 className="text-center mb-4">Register Your Interest</h2>
                        <form action="/submit">
                            <div className="mb-3">
                                <label for="fullname" className="form-label">Full Name</label>
                                <input type="text" className="form-control" name="fullname" id="fullname"
                                    placeholder="Enter your full name" required></input>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Enter your Email"
                                    required></input>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" id="password"
                                        placeholder="Enter Password" required></input>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="confirm-password" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" name="confirm_password"
                                        id="confirm-password" placeholder="Confirm Password" required></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label d-block">Gender:</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="male" value="male"></input>
                                        <label className="form-check-label" for="male">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="female"
                                            value="female"></input>
                                        <label className="form-check-label" for="female">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="other" value="other"></input>
                                        <label className="form-check-label" for="other">Other</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label d-block">Hobbies:</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="hobbies" id="playingGames"
                                            value="playing games"></input>
                                        <label className="form-check-label" for="playingGames">Playing Games</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="hobbies" id="listeningMusic"
                                            value="listening music"></input>
                                        <label className="form-check-label" for="listeningMusic">Listening Music</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="dob" className="form-label">Date of Birth:</label>
                                    <input type="date" className="form-control" name="dob" id="dob" required></input>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="subject" className="form-label">Favorite Subject</label>
                                    <select className="form-select" name="subject" id="subject">
                                        <option selected value="">--Select--</option>
                                        <option value="html">HTML</option>
                                        <option value="css">CSS</option>
                                        <option value="javascript">JavaScript</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="resume" className="form-label">Upload Resume:</label>
                                <input className="form-control" type="file" name="resume" id="resume" required></input>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" type="checkbox" id="terms" required></input>
                                <label className="form-check-label" for="terms">
                                    I agree to the terms and conditions
                                </label>
                            </div>

                            <div className="d-grid col-md-6 mx-auto">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
