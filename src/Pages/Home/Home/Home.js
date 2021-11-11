import React from 'react';
import Reviews from '../../DashBoard/Reviews/Reviews';
import OurProducts from '../../OurProducts/OurProducts';
import Navbar from '../../Shared/Navbar/Navbar';
import BottomBaner from '../BottomBaner/BottomBaner';
import InfoAccordian from '../InfoAccordian/InfoAccordian';
import NewsBanner from '../NewsBanner/NewsBanner';
import TestPorducts from '../TestPorducts/TestPorducts';
import TopBanner from '../TopBanner/TopBanner';
import TopContact from '../TopContact/TopContact';

const Home = () => {
     return (
          <div>
              <TopContact/>
              <Navbar/>
              <TopBanner/>
              <TestPorducts/>
              <OurProducts/>
              <NewsBanner/>
              <InfoAccordian/>
              <Reviews/>
              <BottomBaner/>
              
          </div>
     );
};

export default Home;