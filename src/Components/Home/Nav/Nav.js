import React from "react";
import {Link} from "react-router-dom"
import network from '../../../image/network.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

  return (
    <section>
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#111430'}}>
  <div class="container-fluid">
  <Link className="navbar-brand " href="#"><img style={{height: '100px'}} src={network} alt=""/><span  style={{color: '#f7da61',fontSize: '40px'}}>A</span><span style={{color: 'whitesmoke',fontSize: '27px'}}>ntorongo</span></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link ms-5 active fw-bold"  style={{color:'#111430',fontSize:'20px',color:'#f7da61'}} aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5 fw-bold" style={{color:'#111430',fontSize:'20px',color:'#f7da61'}} to="/admin">Admin</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link ms-5 fw-bold" style={{color:'#111430',fontSize:'20px',color:'#f7da61'}} aria-current="page" to="/service">Internet Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5 fw-bold" style={{color:'#111430',fontSize:'20px',color:'#f7da61'}} to="/advice">Advice</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5 fw-bold" style={{color:'#111430',fontSize:'20px',color:'#f7da61'}} to="/footer">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5 me-2 fw-bold" style={{color:'#111430',fontSize:'20px',color:'#f7da61'}} to="/bookingList"> Cart <FontAwesomeIcon  icon={faCartPlus} /></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </section>
  );
};

export default Nav;
