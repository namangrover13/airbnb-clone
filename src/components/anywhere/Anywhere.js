import React from 'react';
import Varieties from './Varieties';
import '../../styles/anywhere.css'
import outdoor from '../../images/outdoor.jpg'
import entire from '../../images/entire.jpg'
import pet from '../../images/pet.jpg'
import unique from '../../images/unique.jpg'
const Anywhere = (props) => {
    return ( 
        <div className="anywhere">
            <h1>Live Anywhere!</h1>
            <div className="anywhere-varieties">
                {props.Variety.map((v) => (
                    <Varieties imgName={v.imgName} tagline={v.tagline}/>
                ))}
            </div>
        </div>
     );
}
Anywhere.defaultProps={
    Variety : [
        { imgName : outdoor, tagline : 'Outdoor Getaway' },
        { imgName : entire, tagline : 'Entire Homes' },
        { imgName : pet, tagline : 'Pets Allowed' },
        { imgName : unique, tagline : 'Unique Stays', }
    ]
}
 
export default Anywhere;