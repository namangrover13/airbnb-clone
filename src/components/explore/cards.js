import React from 'react';
import card from '../../images/card.jpg'
import '../../styles/cards.css'
const Cards = (props) => {
    return ( 
        <div className="card">
            <div >
                <img className="card-image" src={card} alt="image"/>
            </div>
            <div className="card-content">
                <h3>{props.name}</h3>
                <p>{props.time <= 10 ? `${props.time} hours drive` : `${props.time} minutes drive`}</p>
            </div>
        </div>
     );
}
// Cards.defaultProps={
//     details:[
//         { name : "Kasauli", time : "4.5"},
//         { name : "Mussoorie", time : "5"},
//         { name : "Manali", time : "9"},
//         { name : "Haldwani", time : "4.5"},
//         { name : "Almora", time : "6.5"},
//         { name : "Dehradun", time : "4.5"},
//         { name : "Lansdowne", time : "4.5"},
//         { name : "Noida", time : "30"},
        
//     ]
// } 
export default Cards;
