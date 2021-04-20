import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import OrderViewSection from './OrderViewSection';
import loader from '../../image/loader-1.gif'
const OrderView = () => {

    const {id} = useParams()
    const [service, setService] = useState([])
    const [isDataLoad,setIsDataLoad] = useState(true)
    useEffect(() => {
        const url = `https://polar-lowlands-05067.herokuapp.com/service/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setService(data)
            setIsDataLoad(false)
        })
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const orderDetails = {...loggedInUser, order: service, orderTime: new Date()}

    const history = useHistory()

    const handleOrderNow = () => {
        fetch('https://polar-lowlands-05067.herokuapp.com/addOrder',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('We will set a link to your house')
            }
        })
        history.push('/bookingList')
    }


    return (
        <div className='row'>
            {
                        isDataLoad && <div class=" container mt-4" style={{textAlign: 'center'}}  role="status">
                            <img style={{height:'250px',width:'250px'}} src={loader} alt=""/>
                        </div>
            }
            {
                service.map(item => <OrderViewSection item={item} handleOrderNow={handleOrderNow} ></OrderViewSection>)
            }
        </div>
    );
};

export default OrderView;