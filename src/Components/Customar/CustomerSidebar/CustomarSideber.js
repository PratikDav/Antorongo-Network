import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faCommentDots,faHome } from '@fortawesome/free-solid-svg-icons'
import {faCcStripe} from '@fortawesome/free-brands-svg-icons'
import network from '../../../image/network.gif'

const CustomerSidebar = () => {

   

    return (
        <div  className="sidebar d-flex flex-column justify-content-between col-sm-6 col-md-2 py-5 px-4" style={{ height: "100vh",backgroundColor:'#fbdf69' }}>
            
        <ul className="list-unstyled">
            <li>
                <Link  className="fw-bold" style={{textDecoration:'none',color:'#111430'}} to='/payment'> <FontAwesomeIcon icon={faCcStripe} /> Payment</Link>
            </li><br/>
            <li>
                <Link  className="fw-bold" style={{textDecoration:'none',color:'#111430'}} to='/bookingList'><FontAwesomeIcon icon={faList} /> Booking List</Link>
            </li> <br/>
            <li>
                <Link  className="fw-bold" style={{textDecoration:'none',color:'#111430'}} to='/review'><FontAwesomeIcon icon={faCommentDots} /> Review</Link>
            </li>
        </ul>
        <Link to='/home' className="fw-bold" style={{textDecoration:'none',color:'#111430',fontSize:'20px'}}> <FontAwesomeIcon icon={faHome} /> Go to Home</Link>
        <div className="d-flex">
            <h3 style={{color:'#111430'}}>Antorongo Network</h3> <img style={{height:'100px',marginRight:'80px'}} src={network} alt="" className="img-fluid rounded"/>
        </div>
    </div>
    );
};

export default CustomerSidebar;