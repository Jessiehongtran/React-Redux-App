import React from 'react';

const EachHouse = props => {
    console.log('house', props.house)
    return (
        <div>
            <h3>{props.house.name}</h3>
            <p>Region: {props.house.region}</p>
        </div>
    )
}

export default EachHouse;

