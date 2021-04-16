import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import OrderViewSection from './OrderViewSection';
const OrderView = () => {

    const {id} = useParams()
    const [service, setService] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setService(data)
        })
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const orderDetails = {...loggedInUser, order: service, orderTime: new Date()}

    const history = useHistory()

    const handleOrderNow = () => {
        fetch('http://localhost:5000/addOrder',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then({
            if(data){
                alert('We will set a link to your house')
            }
        })
        history.push('/customerOrder')
    }


    return (
        <div className='row'>
            {
                service.map(item => <OrderViewSection item={item} handleOrderNow={handleOrderNow} ></OrderViewSection>)
            }
        </div>
    );
};

export default OrderView;