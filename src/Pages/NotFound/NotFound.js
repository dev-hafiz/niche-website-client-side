import React from 'react';
import error from '../../images/notfound.jpg';

const NotFound = () => {
     return (
          <div>
               <img style={{width:'60%', marginTop:'30px'}} src={error} alt="" />
          </div>
     );
};

export default NotFound;