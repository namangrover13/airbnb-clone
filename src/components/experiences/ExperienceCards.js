import React from 'react';
import '../../styles/experience-cards.css'
const ExperienceCards = (props) => {
    return ( 
        <div className="experience-cards-card">
            <img className="experience-cards-image" src={props.imgName} alt={props.head} />
            <h5 className="experience-cards-head">{props.head}</h5>
            <p className="experience-cards-para">{props.tagline}</p>
        </div>
     );
}
 
export default ExperienceCards;