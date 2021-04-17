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
                    <div className="d-flex table-info text-black justify-content-center col-3">
                        <h4>{name}</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3">
                        <h4>{price}</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3">
                            <h4>{email}</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3">
                        <button className="btn btn-danger" style={{color: 'white'}} onClick={() => handleDelete()}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllItems;