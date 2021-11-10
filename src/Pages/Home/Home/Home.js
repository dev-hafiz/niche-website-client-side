import React from 'react';
import OurProducts from '../../OurProducts/OurProducts';
import TestPorducts from '../TestPorducts/TestPorducts';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
     return (
          <div>
              <TopBanner/>
              <TestPorducts/>
              <OurProducts/>
          </div>
     );
};

export default Home;