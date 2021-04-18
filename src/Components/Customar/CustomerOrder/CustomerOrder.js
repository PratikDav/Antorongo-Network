import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import CustomerSidebar from '../CustomerSidebar/CustomarSideber';
import AllOrderList from './AllOrderList';



const CustomerOrder = () => {

    const [orderedItem, setOrderedItem] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = loggedInUser.email
    useEffect(() => {
        fetch('http://localhost:5000/orderPreview/' + email)
        .then(res => res.json())
        .then(data => {
            setOrderedItem(data)
            })
    },[])

    return (
        
        <div style={{backgroundColor:'#111430',color:'whitesmoke'}} className="container-fluid row">
            <CustomerSidebar></CustomerSidebar>
            <div className="col-md-10  p-4 pr-5 d-flex" style={{ position: "absolute", right: 0 }}>
                {
                    orderedItem.map(item => <AllOrderList item={item} ></AllOrderList>)
                }
            </div>
        </div>
       
    );
};

export default CustomerOrder;