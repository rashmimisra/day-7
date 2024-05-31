import React from 'react'
import A from "./A"
export const nameContext=React.createContext();

const UseContext = () => {
  return (
    <div>
 <h2> USE CONTEXT </h2>
 <nameContext.Provider value="KIET">

  <A/>

 </nameContext.Provider>


    </div>
  )
}

export default UseContext