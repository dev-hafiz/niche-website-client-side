import React from 'react';
import Reviews from '../../DashBoard/Reviews/Reviews';
import OurProducts from '../../OurProducts/OurProducts';
import Navbar from '../../Shared/Navbar/Navbar';
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
              <Reviews/>
              
          </div>
     );
};

export default Home;