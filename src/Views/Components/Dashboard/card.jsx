import React from 'react';
import './card.css';
import priority from '../../../Controllers/priorityController';

export default (props) => {
    const {level, color} = priority(props.priority);

    return(
        <div className='dashboard-card' onClick={props.clicked} style={{color: color}}>
            <h2>Total: {level}</h2>
            <p>{props.count}</p>
        </div>
    )
}
