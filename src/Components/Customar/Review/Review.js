import React from 'react';
import { useForm } from 'react-hook-form';

import CustomerSidebar from '../CustomerSidebar/CustomarSideber';

const Review = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        console.log(data)
        const Review = {
            name : data.name,
            review : data.review,
            occupation : data.occupation
        }
        const url = `http://localhost:5000/addReview`
        console.log(Review)

        fetch(url, {
            method: 'POST',
             headers:{
                 'content-type': 'application/json'
             },
             body: JSON.stringify(Review)
        })
        .then(res => console.log('response verified', res))
        
    }


    return (
       
        <div className="container-fluid row">
            <CustomerSidebar></CustomerSidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
            <h2>Add a Review</h2><br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label><br/>
                    <input class="form-control" name="name" placeholder="Enter Your Name" {...register("name")} required/><br/>
                    <br/>
                    <label>Your Occupation</label><br/>
                    <input class="form-control" name="occupation" placeholder="Enter Your occupation" {...register("occupation")} required/><br/>
                    <br/>
                    <label>Give Your Review</label><br/>
                    <input className="form-floating form-control" type="text" name="review" placeholder="Leave a comment here" {...register("review")} required/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
        
    );
};

export default Review;