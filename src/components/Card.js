import React from 'react'
import Navbar from './Navbar'; 
import Footer from './Footer';
import cat1 from '../Image/cat1.jpg';
import cat2 from '../Image/cat2.jpg';
import cat3 from '../Image/cat3.gif';   
import cat4 from '../Image/cat4.jpg';
import cat5 from '../Image/cat5.jpg';
import cat6 from '../Image/cat6.jpg';
import cat7 from '../Image/cat7.jpg';
import cat8 from '../Image/cat8.jpg';
import cat9 from '../Image/cat9.jpg';
import cat10 from '../Image/cat10.jpg';

function Card() {
  return (
    <div>
      <Navbar />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src={cat1} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cat2} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cat3} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cat4} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cat5} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cat6} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cat7} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cat8} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cat9} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cat10} className="card-img-top" style={{ width: "100%", height: "250px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Card
