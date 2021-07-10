
// Program for use of USEFFECT  and changing the  title of website

import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {

    const[count,setCount] = useState(0);

    useEffect(() => {document.title= count>=1 ? `Chats (${count})`:`Chats`})

    // function Clicked(){
    //     setCount(count+1)
    // }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() =>setCount(count+1)}>Increase</button>
        </div>
    )
}

export default UseEffect1
