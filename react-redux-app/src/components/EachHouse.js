import React from 'react';
import Lord from './Lord'

const EachHouse = props => {
    console.log('house', props.house)
    return (
        <div className="house-card">
            <h3>{props.house.name}</h3>
            <p>Region: {props.house.region}</p>
            <p><Lord lord={props.house.currentLord}/></p>
            <p>Coat of Arms: {props.house.coatOfArms}</p>
        </div>
    )
}

export default EachHouse;

