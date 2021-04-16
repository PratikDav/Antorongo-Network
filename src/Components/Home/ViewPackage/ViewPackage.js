import React from "react";
import { Link } from "react-router-dom";

const ViewPackage = ( props ) => {

  const {name, _id, imageURL,price} = props.service
  console.log(props.service)
  const handleBuying = props.handleBuying;
  console.log(handleBuying)
  return (
    <Link to={`/orderView/${_id}`} onChange={() =>handleBuying(props.service)} className="card col-md-4 ms-4 mt-4 pt-3" style={{width: "18rem",cursor:'pointer',textAlign:'none'}}>
      <img style={{height: "50px",width: "50px"}} src={imageURL} className="card-img-top mx-auto mt-4 mb-3" alt="..." />
      <div className="card-body text-center mt-3">
          <h3 className="mb-3 fw-bold">{name}</h3>
        <h5 className="card-title mb-3 fw-bolder">{price}</h5>
        <p className="card-text text-secondary">
          <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nobis.</small>
        </p>
      </div>
    </Link>
  );
};

export default ViewPackage;
