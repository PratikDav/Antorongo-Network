import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const ShowItem = props => {
    console.log(props)
    const {name, imageURL,price} = props.item
    return (
        <div className="row ms-3">
            <div className="col-sm-12 col-md-12 ">
                <div className="card ">
                    <div className="d-flex">
                    <img style={{height:'80px', width:'80px'}} src={imageURL} className="card-img-left mx-3 mt-3" alt="..."/>
                    <FontAwesomeIcon style={{height:'30px', width:'30px',cursor:'pointer',color:'#111430'}} className="ms-auto mt-4 mx-4 m-2"  icon={faMinusCircle} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{color:'#111430'}}>{name}</h5>
                        <h6 className="card-title"style={{color:'#111430'}}>Price: ${price}</h6>
                        <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nihil.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowItem;