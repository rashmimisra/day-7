import React from 'react'
import Click2 from "./Click2";
import  { useState } from 'react';


const Controlledcomponent = () => {
    const [name,setName]= useState("RASHMI");
  
    return (
      <>
      {/* <Click/> */}
      <Click2 name={name} onUpdate={()=>setName("KIET MCA") }/>

    
      
       </>
) }

export default Controlledcomponent