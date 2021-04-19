import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import People from '../../../image/People.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Community = () => {

    AOS.init({
        offset: 300,
        duration: 1000
      });

    return (
        <div>
            <h1 className="text-center mb-5"><span style={{color: '#f21e3d'}}>O</span><span style={{color: '#414042'}}>ur Community</span> </h1>
           <main className=" row d-flex">
                <div data-aos="slide-left" className="col-md-6 container">
                    <img src={People} alt=""/>
                </div>
                <div data-aos="slide-right" className="col-md-6 container" style={{marginTop:'100px'}}> 
                    <div>
                        <h3>Community is like a Banyan Tree</h3>
                        <p className="text-secondary mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe sint quis neque voluptates nostrum soluta qui, tenetur autem numquam! Praesentium perspiciatis blanditiis quibusdam laudantium velit tenetur autem veritatis minus vero alias, vitae placeat eligendi consectetur voluptatum ratione itaque nam ducimus nesciunt! Deleniti nulla voluptatem quisquam omnis enim inventore dolores? </p>
                        <div className="d-flex ">
                            <div className="ms-2">
                                <span style={{color:'#3f7ffc'}} className="fs-3 fw-bold">  <CountUp end={ 2000 } start={1500} duration={4}>
                                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                                </CountUp></span> <span className="fs-3 fw-bold mt-3"> <p>Customers</p> </span> 
                            </div>
                            <div className="ms-5">
                                <span style={{color:'#3f7ffc'}} className="fs-3 fw-bold">  <CountUp end={ 20 } start={0}>
                                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                                </CountUp></span> <span className="fs-3 fw-bold mt-3"> <p>Developers</p> </span> 
                            </div>
                            <div className="ms-5">
                                <span style={{color:'#3f7ffc'}} className="fs-3 fw-bold">  <CountUp end={ 150 } start={50} duration={4}>
                                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                                </CountUp></span> <span className="fs-3 fw-bold mt-3"> <p>Workers</p> </span> 
                            </div>
                        </div>
                    </div>  
                </div>
           </main>
        </div>
    );
};

export default Community;