import React from 'react'
import {FirstName} from '../App';
import {LastName} from '../App';


const ComC = () => {
    return (
        <div>
            <FirstName.Consumer >{(fname) => {return(<LastName.Consumer>{(lname) => {return(<h1>This is {fname}{lname}</h1>)}}</LastName.Consumer>)} }</FirstName.Consumer>
            
        </div>
    )
}

export default ComC
