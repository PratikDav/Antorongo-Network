import React from "react";
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <section>
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link ms-5 active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to="/admin">Admin</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link ms-5" aria-current="page" to="/service">Internet Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to="/advice">Advice</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to="/contact">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5 me-2" to="/bookingList">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </section>
  );
};

export default Nav;
