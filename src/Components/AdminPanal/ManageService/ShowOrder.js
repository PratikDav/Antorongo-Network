import React from 'react';
import AllItems from './AllItems';

const ShowOrder = (props) => {
    const email = props.item.email
    // console.log(email)
    const items = props.item.order
    // console.log(items)
    return (
        <div>
            {
                items.map(data => <AllItems data={data} email={email}></AllItems>)
            }
        </div>
    );
};

export default ShowOrder;