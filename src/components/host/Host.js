import React from 'react';
import host from '../../images/host.jpg'
import '../../styles/host.css'
const Host = (props) => {
    return ( 
        <div className="host">
            <img className="host-image" src={host} />
            <h1 className="host-head">Become a host</h1>
            <p className="host-para">Earn extra income and unlock new opportunities by sharing your space.</p>
            <button className="host-button">Learn more</button>
        </div>
     );
}
 
export default Host;