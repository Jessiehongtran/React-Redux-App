import React from 'react';
import EachHouse from './EachHouse'

const Houses = props => {
    console.log('props in Houses', props)
    return (
        <div>
            {props.houses.map(house => <EachHouse house={house}/>)}
        </div>
    )
}

export default Houses;