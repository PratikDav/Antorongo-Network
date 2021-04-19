import React from 'react';
import image from '../../../image/speed.gif'
import network from '../../../image/network.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import eye from '../../../image/eye.gif'

const HeaderRoot = () => {
    AOS.init({
        offset: 300,
        duration: 500
      });

    return (
        <section style={{height: '700px'}} className ='row d-flex align-items-center'>
            <div  className ='col-md-4 offset-md-1'>
                <h1 data-aos="slide-right"> <span style={{color: '#f8a11b'}}>B</span><img style={{height: '70px'}} src={eye} alt=""/><span style={{color: '#f8a11b'}}>st</span> <span style={{color: '#414042'}}>your Speed with</span> </h1>
                <br/>
                <h1 data-aos="slide-left"><img style={{height: '120px'}} src={network} alt=""/><span style={{color: '#f21e3d'}}>A</span><span style={{color: '#5d7b9f'}}>ntorongo</span>  <span style={{color: '#e6ac00'}}>N</span><span style={{color: '#5d7b9f'}}>etwork</span> </h1>
                <p data-aos="slide-right" className ='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque beatae sequi ipsum architecto! Provident quae atque quisquam molestias quidem libero ad maxime eius eaque corrupti, exercitationem, ipsam dignissimos fuga!</p>
                <button data-aos="slide-left"className="btn btn-primary">Get A Link</button>
            </div>
            <div className ='col-md-6 '>
                <img style={{marginLeft: '20px',height:'700px',width:'900px'}} src={image} alt="" className="img-fluid rounded"/>
                
            </div>
        </section>
    );
};

export default HeaderRoot;