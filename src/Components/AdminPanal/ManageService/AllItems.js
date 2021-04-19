import React from 'react';

const AllItems = (props) => {

    const {name,price} = props.data
    const email = props.email
    
    const handleDelete =() =>{
        
    }

    return (
        <div>
            <div className="container">
                <div className="row  text-white p-2 pt-3 mb-3 rounded">
                    <div className="d-flex table-info text-black justify-content-center col-3 mx-2 ">
                        <h4 style={{color:'whitesmoke'}}>{name}</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3 ms-5 mx-5 ps-5">
                        <h4 style={{color:'whitesmoke'}}>{price}</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3 ms-5 ps-5">
                            <h4 style={{color:'whitesmoke'}}>{email}</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AllItems;