import React from 'react';
import image from '../../../image/HMain.jpg'

const HeaderRoot = () => {
    return (
        <section style={{height: '600px'}} className ='row d-flex align-items-center'>
            <div className ='col-md-4 offset-md-1'>
                <h1>Boost your Speed with <br/> Goblin Network </h1>
                <p className ='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque beatae sequi ipsum architecto! Provident quae atque quisquam molestias quidem libero ad maxime eius eaque corrupti, exercitationem, ipsam dignissimos fuga!</p>
                <button className="btn btn-primary">Get A Link</button>
            </div>
            <div className ='col-md-6 '>
                <img style={{}} src={image} alt="" className="img-fluid rounded"/>

            </div>
        </section>
    );
};

export default HeaderRoot;