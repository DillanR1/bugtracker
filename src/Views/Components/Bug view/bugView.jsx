import React from 'react';
import ViewSection from './component/bugViewSection';
import BugModel from '../../../Models/bugModel';
import { useDispatch } from 'react-redux';
import { markComplete } from '../../../Controllers/Redux/bugSlice';

import './bugView.css';


export default(props) => {
    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);

    return(
        <div className='bug-view'>
            <button onClick={props.clicked} className='close-button'>Close</button>
            <h1>{bug.name}</h1>
            <ViewSection title='Details' info={bug.details} />
            <ViewSection title='Steps' info={bug.steps} />
            <ViewSection title='Priority' info={bug.details} />
            <ViewSection title='Creator' info={bug.creator} />
            <ViewSection title='Version' info={bug.version} />
            <ViewSection title='Time Created' info={bug.time} />
            <button onClick={() => {dispatch(markComplete())}}>Mark Complete</button>
        </div>
    )
}