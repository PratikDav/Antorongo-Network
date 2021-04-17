import React from 'react';
import ShowItem from './ShowItem';

const AllOrderList = props => {
    const showItem = props.item.order
    // console.log(order)
    return (
        <div className="">
            {
                showItem.map(item => <ShowItem item={item}></ShowItem>)
            }
            
        </div>
    );
};

export default AllOrderList;