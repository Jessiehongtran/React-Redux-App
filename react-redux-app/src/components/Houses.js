import React from 'react';

const Houses = props => {
    console.log('props in Houses', props)
    return (
        <div>{props.test}</div>
    )
}

export default Houses;