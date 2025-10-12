import React from 'react'

function About() {
    return (
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
    )
}

export default About
