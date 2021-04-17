import React from 'react';
import ViewData from './ViewData';
import './Viewdata.css'

const ViewOrderList = (props) => {
    const order = props.item
    const fullList = order.order
    // console.log(fullList)

    

    return (
        <div className=""> 
           <div>
           {
                fullList.map(data => <ViewData data={data} order={order}></ViewData>)
            }
            
           </div>
           {/* <div className="d-flex ms-5 table-info text-black justify-content-center email col-3">
                
           </div> */}
        </div>
    );
};

export default ViewOrderList;