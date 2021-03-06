import React, { useEffect, useState } from 'react';
import ViewReview from './ViewReview';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
    const [review,setReview] = useState([])

    useEffect(() => {
        fetch('https://polar-lowlands-05067.herokuapp.com/reviewCollection')
        .then(res =>res.json())
        .then(data =>{
            setReview(data)
        })
    })

    AOS.init({
        offset: 300,
        duration: 1000
      });

    return (
        <div>
             <h1 data-aos="zoom-in-up" className="text-center mb-5"><span style={{color: '#f21e3d'}}>C</span><span style={{color: '#414042'}}>ustomer Reviews</span></h1>
          <div className="d-flex justify-content-center">
          <div className="row">
            {
                review.map(data => <ViewReview data={data}></ViewReview>)
            }
            </div>
          </div>
        </div>
    );
};

export default Reviews;