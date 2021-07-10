// import React, { createContext } from 'react'
// import ComA from './Components/ComA';


import React from 'react';
import UseReducer from './UseEffect/UseReducer';
// import UseEffect1 from "./UseEffect/UseEffect1";
// import CleanUp from "./UseEffect/CleanUp";
// const FirstName = createContext(); 
// const LastName = createContext(); 

const App = () => {
  return (
    <div>
      {/* <UseEffect1 />
      <CleanUp /> */}
      <UseReducer />
      {/* <FirstName.Provider value={"Gopal"}>
        <LastName.Provider value={"Khandelwal"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider> */}
      
    </div>
  )
}

export default App
// export {FirstName,LastName};
