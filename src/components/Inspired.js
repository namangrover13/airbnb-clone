import React from 'react';
import inspired from '../../src/images/inspired.jpg'
import '../../src/styles/inspired.css'
const Inspired = (props) => {
    return ( 
        <div className="inspired">
            <img className="inspired-image" src={inspired} />
            <h1 className="inspired-head">The Greatest Outdoors</h1>
            <p className="inspired-para">Wishlists curated by airbnb</p>
            <button className="inspired-button">Get Inspired</button>
        </div>
     );
}
 
export default Inspired;