import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './ViewPackage.css'

const ViewPackage = ( props ) => {

  AOS.init({
    offset: 300,
    duration: 1000
  });

  const {name, _id, imageURL,price} = props.service
  console.log(props.service)
  const handleBuying = props.handleBuying;
  console.log(handleBuying)
  return (
    <Link data-aos="flip-right" to={`/orderView/${_id}`} onChange={() =>handleBuying(props.service)} key={_id} className="card col-md-4 ms-5 mt-4 pt-3 cardStyle" style={{width: "18rem",textDecoration:'none', boxShadow:'10px 10px 20px gray'}}>
      <img style={{height: "50px",width: "50px"}} src={imageURL} className="card-img-top mx-auto mt-4 mb-3 cardImg" alt="..." />
      <div className="card-body text-center mt-3">
          <h3 className="mb-3 fw-bold" style={{color: "#d51004"}}>{name}</h3>
        <h5 className="card-title mb-3 fw-bolder" style={{color: "#d51004"}}>${price}</h5>
        <p className="card-text ">
          <small style={{color: '#333333'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nobis.</small>
        </p>
      </div>
    </Link>
  );
};

export default ViewPackage;
