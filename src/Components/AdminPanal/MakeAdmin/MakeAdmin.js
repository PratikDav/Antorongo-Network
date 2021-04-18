import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import { useForm } from 'react-hook-form';


const MakeAdmin = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const admin ={
            email : data.email,

        }
        const url = `http://localhost:5000/addAdmin`

        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
       })
       .then(res => console.log('response verified', res))
    
    }

    return (
        <div className="container-fluid row" style={{backgroundColor:'#111430'}}>
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
            <h1 className="fw-bold" style={{color:'#fbdf69'}}>Make a Admin</h1><br/><br/>
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                        <input className="form-control rounded" name="email" placeholder="Enter Email to Add" type="text" {...register("email")}/><br/>
                        <input style={{backgroundColor:'#fbdf69',border:'none',color:'#111430'}} className="rounded fw-bold" type="submit" value="Add Admin"/>
                </div>
           </form>
        </div>
    </div>
    );
};

export default MakeAdmin;