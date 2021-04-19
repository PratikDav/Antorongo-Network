import React from 'react';
import noNet from '../../image/noNet.gif'
import sad from '../../image/sad.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefites = () => {

    AOS.init({
        offset: 300,
        duration: 1000
      });

    return (
        <section className ='row d-flex  mt-5 pt-5' style={{height: '600px'}}>
            <div className ='col-md-4 offset-md-1'>
                <img data-aos="slide-right" style={{height: '500px'}} src={noNet} alt=""/>
            </div>
            <div data-aos="slide-left" style={{marginLeft: '100px',marginTop: '100px'}}className ='col-md-6'>
                <h1 style={{color: '#ff3333'}}>Slow Internet? <img style={{height:'40px'}}src={sad} alt=""/></h1>
                <h6>Contact us </h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum fugit modi explicabo vero, cumque molestiae nesciunt maiores eaque aut vel, repellendus, molestias dolor? Molestiae suscipit asperiores natus ipsam et!</p>
            </div>
        </section>
    );
}

export default Benefites;