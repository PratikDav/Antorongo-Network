import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../SideBar/Sidebar';

const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [iconURL, serIconURL] = useState(null)
    const onSubmit = data => {
        console.log(data)
        const iconData = {
            name : data.name,
            price : data.price,
            imageURL : iconURL
        }
        const url = `https://polar-lowlands-05067.herokuapp.com/addService`
        console.log(iconData)

        fetch(url, {
            method: 'POST',
             headers:{
                 'content-type': 'application/json'
             },
             body: JSON.stringify(iconData)
        })
        .then(res => console.log('response verified', res))
        
    };
    
   

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const iconData = new FormData();
        iconData.set('key', 'a6469aee0040cbac3dcd7fd3a114deda')
        iconData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        iconData)
        .then(res => {
            serIconURL(res.data.data.display_url)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div style={{backgroundColor:'#111430',color:'whitesmoke'}} className="container-fluid row">
            <Sidebar></Sidebar>
           <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <h2 style={{color: "#f7da61"}} >Add Services</h2><br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label style={{color: "#f7da61"}} className='fw-bold'>Product Name</label><br/>
                    <input name="name" style={{border: "none"}}  className='rounded' placeholder="Product Name" {...register("name")} />
                    <br/><br/>
                    <label style={{color: "#f7da61"}} className='fw-bold'>Product Price</label><br/>
                    <input name="price" style={{border: "none"}}  className='rounded'  placeholder="Product Price"  {...register("price")}  />
                    <br/><br/>
                    <label style={{color: "#f7da61"}} className='fw-bold'>Choose a File</label><br/>
                    <input {...register("picture")} name='picture' type='file' onChange={handleImageUpload} className='rounded'  placeholder="Upload Icon"/>
                    <br/><br/>
                    <input style={{border:"none", backgroundColor:'#f7da61',color:'#111430'}} type="submit" value="Upload" className='rounded fw-bold'/>
                </form>
           </div>
        </div>
    );
};

export default Admin;