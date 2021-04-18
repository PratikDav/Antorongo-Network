import React, { useEffect, useState } from 'react';
import Nav from '../../Home/Nav/Nav';

const Permission = () => {


    const [isEmail, setIsEmail] = useState([])


  useEffect(() => {
    fetch('http://localhost:5000/addedAdmin')
    .then(res => res.json())
    .then(data =>{
        setIsEmail(data)
    })
  })


    return (
        <div>
            {
                isEmail.map((data => <Nav data={data}></Nav>))
            }
        </div>
    );
};

export default Permission;