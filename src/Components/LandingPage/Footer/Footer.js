import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    AOS.init({
        offset: 400,
        duration: 900
      });

    return (
        <footer className="footer-area clear-both mt-5 " style={{backgroundColor:'#f7da61',height:'325px'}}>
                <div className="row">
                    <div className="container col-md-9 row">
                        <div data-aos="slide-right" className="col-md-3 mt-5 container">
                            <h2>Let's Make a Touch</h2>
                            <input class="form-control" name="Email" placeholder="Enter Your Email" required/><br/>
                            <button data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Select a Package" style={{border:'none',backgroundColor:'#111430',color:'white',height:'37px',width:'80px'}} className="rounded">Sign up</button>
                        </div>
                        <div data-aos="slide-right" className="col-md-3 mt-5 container">
                            <h4>Support</h4><br/>
                            <div >
                                <ul className="list-unstyled">
                                    <Link style={{textDecoration:'none',color:'#111430'}}>Contact us</Link><br/>
                                    <Link style={{textDecoration:'none',color:'#111430'}}>FAQ</Link><br/>
                                    <Link style={{textDecoration:'none',color:'#111430'}}>Download</Link>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="slide-left" className="col-md-3 mt-5 container">
                            <h4>Antorongo</h4><br/>
                            <div>
                                <ul className="list-unstyled">
                                    <Link style={{textDecoration:'none',color:'#111430'}}>About Antorongo</Link><br/>
                                    <Link style={{textDecoration:'none',color:'#111430'}}>Achievements</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-aos="slide-left" className="col-md-3 pt-5">
                        <div className="row py-5 ms-5">
                                <ul className="social-media list-inline">
                                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                </ul>
                                <div className="mt-3">
                                    <h6>Call now</h6>
                                    <button style={{border: '1px solid #111430'}} className="btn">01877559966</button>
                                </div>
                        </div>
                    </div>
                </div>
            <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;