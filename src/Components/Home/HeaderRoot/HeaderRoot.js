import React from 'react';
import image from '../../../image/Header.gif'
import network from '../../../image/network.gif'

const HeaderRoot = () => {
    return (
        <section style={{height: '700px'}} className ='row d-flex align-items-center'>
            <div className ='col-md-4 offset-md-1'>
                <h1>Boost your Speed with <br/><img style={{height: '120px'}} src={network} alt=""/>  Antogongo Network </h1>
                <p className ='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque beatae sequi ipsum architecto! Provident quae atque quisquam molestias quidem libero ad maxime eius eaque corrupti, exercitationem, ipsam dignissimos fuga!</p>
                <button className="btn btn-primary">Get A Link</button>
            </div>
            <div className ='col-md-6 '>
                <img style={{marginLeft: '20px',height:'700px',width:'900px'}} src={image} alt="" className="img-fluid rounded"/>
            </div>
        </section>
    );
};

export default HeaderRoot;