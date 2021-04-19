import React from 'react';
import Permission from '../../AdminPanal/Permission/Permission';
import Benefites from '../../LandingPage/Benefites';
import Community from '../../LandingPage/Community/Community';
import Footer from '../../LandingPage/Footer/Footer';
import Reviews from '../../LandingPage/Reviews';
import Header from '../Header/Header';
import Messenger from '../Messenger/Messenger';
import OurPackage from '../OurPackage/OurPackage';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurPackage></OurPackage>
            <Benefites></Benefites>
            <Community></Community>
            <Reviews></Reviews>
            <Footer></Footer>
            <Messenger></Messenger>
            {/* <Permission></Permission> */}
        </div>
    );
};

export default Home;