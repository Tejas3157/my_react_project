import React from 'react' 

function Contact() {
  return (
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
  )
}

export default Contact
