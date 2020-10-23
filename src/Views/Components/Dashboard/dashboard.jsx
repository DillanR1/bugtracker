import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../../Controllers/Redux/bugSlice';
import { getBugs } from '../../../Controllers/Redux/bugSlice'; 
import Card from '../../Components/Dashboard/card';

export default () => {
    const dispatch = useDispatch();
    const bugs = useSelector(state => state.bugs);
    let highCount = 0
    let midCount = 0
    let lowCount = 0
    IF(bugs!=undefined){
        highCount = filterBugs(1);
        highCount = filterBugs(2);
        highCount = filterBugs(3);

    }

    function filterBugs(priority){
        return bugs.filter((bug) => {return bug.priority == priority})
    }

    useEffect(() => {
        dispatch(getBugs)
    },[bugs == undefined])
    
    return(
        <div className='page-container'> 
            <Card priority="1" count={highCount.length} />
            <Card priority="2" count={midCount.length} />
            <Card priority="3" count={lowCount.length} />
        </div>
    )   
}

