import React, { useEffect, useState } from 'react';
import ViewPackage from '../ViewPackage/ViewPackage';
import './OurPackage.css'
const OurPackage = () => {

    const [item,setItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setItem(data)
        })
    },[])

    const [selectedService, setSelectedService] = useState([])

    const handelBuying = (product) => {
        const newSelectedService = [...selectedService, product]
        setSelectedService(newSelectedService)
        // console.log(newSelectedService)
        console.log(selectedService)
    }


    return (
       <div className="package">
            <section className="package-container mt-5 pt-1">
                <div className='text-center mb-5'>
                <h1><span style={{color: '#f21e3d'}}>O</span><span style={{color: '#414042'}}>ur Incredible Package</span> </h1>
                    <h6 className='mt-4'>Take your Package</h6>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='row'>
                        {
                        item.map(service => <ViewPackage service={service} handleBuying={handelBuying} key= {service._id}></ViewPackage>)
                        }
                    </div>
                </div>
            </section>
       </div>
    );
};

export default OurPackage;