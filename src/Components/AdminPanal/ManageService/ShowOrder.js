import React from 'react';
import AllItems from './AllItems';

const ShowOrder = (props) => {
    const email = props.item.email
    
    const Id = props.item._id
    
    const items = props.item.order

    const handleDelete = props.handleDelete

    
    
    return (
        <div className="row">
           <div className="col-md-9">
           {
                items.map(data => <AllItems data={data} email={email}></AllItems>)
            }
           </div>
            <div style={{marginLeft:''}} className="col-md-3">
                        <button className="btn btn-danger" onClick={() => handleDelete(Id)} style={{color: 'white'}} >Delete</button>
            </div>
        </div>
    );
};

export default ShowOrder;