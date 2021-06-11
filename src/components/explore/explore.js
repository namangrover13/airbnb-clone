import React from 'react';
import Cards from './cards';
import '../../styles/explore.css';

const Explore = (props) => {
    return ( 
        <div className="explore">
            <h1>Explore Nearby</h1>
            <div className="explore-cards">
                {props.details.map((d) => (
                    <Cards name={d.name} time={d.time} />
                ))}
            </div>
        </div>
     );
}
Explore.defaultProps={
    details:[
        { name : "Kasauli", time : "4.5"},
        { name : "Mussoorie", time : "5"},
        { name : "Manali", time : "9"},
        { name : "Haldwani", time : "4.5"},
        { name : "Almora", time : "6.5"},
        { name : "Dehradun", time : "4.5"},
        { name : "Lansdowne", time : "4.5"},
        { name : "Noida", time : "30"},
        
    ]
}
export default Explore;