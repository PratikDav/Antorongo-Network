import React from 'react';
import { Link } from 'react-router-dom';
import network from '../../../image/network.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog,faUserShield,faStream,faHome } from '@fortawesome/free-solid-svg-icons'
import {faArtstation} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    return (
        <div  className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh",backgroundColor:'#fbdf69' }}>
            <ul className="list-unstyled">
                <li>
                    <Link className="fw-bold" style={{textDecoration:'none',color:'#111430'}} to='/admin'><FontAwesomeIcon icon={faUserShield} /> Admin</Link>
                </li><br/>
                <li>
                    <Link className="fw-bold" style={{textDecoration:'none',color:'#111430'}} to='/orderList'><FontAwesomeIcon icon={faStream} /> Order List</Link>
                </li><br/>
                <li>
                    <Link className="fw-bold" style={{textDecoration:'none',color:'#111430'}} to='/makeAdmin'><FontAwesomeIcon icon={faUserCog} /> Make Admin</Link>
                </li><br/>
                <li>
                    <Link className="fw-bold" style={{textDecoration:'none',color:'#111430'}} to='/manageServices'><FontAwesomeIcon icon={faArtstation} /> Manage Orders</Link>
                </li>
            </ul>
            <Link to='/home' className="fw-bold" style={{textDecoration:'none',color:'#111430',fontSize:'20px'}}> <FontAwesomeIcon icon={faHome} /> Go to Home</Link>
            <div className="d-flex">
            <h3 style={{color:'#111430'}}>Antorongo Network</h3> <img style={{height:'100px',marginRight:'80px'}} src={network} alt="" className="img-fluid rounded"/>
        </div>
        </div>
    );
};

export default Sidebar;