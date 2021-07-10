import React , { useContext }from 'react'
import {FirstName} from '../App';
import {LastName} from '../App';
// import ComC from './ComC'

const ComB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <div>
            <h1>This is {fname}{lname}</h1>
        </div>
    )
}

export default ComB
