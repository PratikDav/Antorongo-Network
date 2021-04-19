import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import './ViewReviews.css'

const ViewReview = (props) => {
  AOS.init({
    offset: 200,
    duration: 1000
  });

    const {name,review,occupation} = props.data;
    
    return (
        
          
          <div  data-aos="flip-left" className="card col-md-4 ms-5 mt-4 pt-3" style={{width: "18rem",backgroundColor:'#f5f4f4'}}>
            <div class="card-body text-center mt-3">
                <h5 class="card-title mb-3 fs-2"style={{color: '#0b285d'}}>{name}</h5>
                <h6 class="card-subtitle mb-3 "style={{color: '#414042'}}>{occupation}</h6>
                <p class="card-text text-center" >{review}</p>
            </div>
            </div> 
        
      
    );
};

export default ViewReview;