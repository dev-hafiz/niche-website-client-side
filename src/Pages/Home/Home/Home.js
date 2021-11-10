import React from 'react';
import Reviews from '../../DashBoard/Reviews/Reviews';
import OurProducts from '../../OurProducts/OurProducts';
import Navbar from '../../Shared/Navbar/Navbar';
import TestPorducts from '../TestPorducts/TestPorducts';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
     return (
          <div>
              <Navbar/>
              <TopBanner/>
              <TestPorducts/>
              <OurProducts/>
              <Reviews/>
          </div>
     );
};

export default Home;