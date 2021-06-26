import React from 'react';
import '../../styles/experience.css'
import ExperienceCards from './ExperienceCards';
import online from '../../images/experience-online.jpg'
import wanderlust from '../../images/experience-wanderlust.jpg'
import experience from '../../images/experience.jpg'
const Experience = (props) => {
    return ( 
        <div className="experience">
            <h2 className="experience-head">Discover Experiences</h2>
            <h2 className="experience-head-two">Unique activities with local experts – in person or online.</h2>
            <div className="experience-experience-cards">
                {props.ExperienceCards.map((ec)=>(
                    <ExperienceCards imgName={ec.imgName} head={ec.head} tagline={ec.tagline}/>
                ))}
            </div>
        </div>
     );
}
Experience.defaultProps={
    ExperienceCards:[
        {imgName: online, head: 'Online Experiences', tagline:'Live, Interactive activities by Hosts.',},
        {imgName: wanderlust, head: 'Featured collection: Wanderlust', tagline:'Travel from home with Online Experiences.',},
        {imgName: experience, head: 'Experiences', tagline:'Local things to do wherever you are.',}
    ]
} 
export default Experience;