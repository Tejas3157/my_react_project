import React from 'react'

function Contact() {
  return (
    <div>
      <div id="Register" class="container my-5 h6">
            <div class="card p-4 shadow-sm">
                <h2 class="text-center mb-4">Register Your Interest</h2>
                <form action="/submit">
                    <div class="mb-3">
                        <label for="fullname" class="form-label">Full Name</label>
                        <input type="text" class="form-control" name="fullname" id="fullname"
                            placeholder="Enter your full name" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Enter your Email"
                            required></input>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" id="password"
                                placeholder="Enter Password" required></input>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="confirm-password" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" name="confirm_password"
                                id="confirm-password" placeholder="Confirm Password" required></input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label d-block">Gender:</label>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="male" value="male"></input>
                                <label class="form-check-label" for="male">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="female"
                                    value="female"></input>
                                <label class="form-check-label" for="female">Female</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="other" value="other"></input>
                                <label class="form-check-label" for="other">Other</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label d-block">Hobbies:</label>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" name="hobbies" id="playingGames"
                                    value="playing games"></input>
                                <label class="form-check-label" for="playingGames">Playing Games</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" name="hobbies" id="listeningMusic"
                                    value="listening music"></input>
                                <label class="form-check-label" for="listeningMusic">Listening Music</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="dob" class="form-label">Date of Birth:</label>
                            <input type="date" class="form-control" name="dob" id="dob" required></input>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="subject" class="form-label">Favorite Subject</label>
                            <select class="form-select" name="subject" id="subject">
                                <option selected value="">--Select--</option>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="javascript">JavaScript</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="resume" class="form-label">Upload Resume:</label>
                        <input class="form-control" type="file" name="resume" id="resume" required></input>
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" id="terms" required></input>
                        <label class="form-check-label" for="terms">
                            I agree to the terms and conditions
                        </label>
                    </div>

                    <div class="d-grid col-md-6 mx-auto">
                         <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
