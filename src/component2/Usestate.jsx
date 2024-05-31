import React, { useState } from 'react'

const Usestate = () => {
    const [userInfo, setUserInfo]=useState({name:"KIET" , class:"mca"});
    const [counter,setCounter]=useState(0);
    const changeName=()=>{
       setUserInfo({...userInfo,name:"kiet mca"});
        console.log(userInfo.name);
    }

  return (
    <div className='container '>
        <h1>Name:{userInfo.name}</h1>
        <h1>counter:{counter}</h1>
        <h1>Class:{userInfo.class}</h1>
        <button className='btn btn-primary' onClick={changeName}>Change Name </button>
        <button className='btn btn-primary' onClick={()=> {
            
            
            setCounter((prevalue)=>prevalue+1);
            
            setCounter((prevalue)=>prevalue+1);
            
            setCounter((prevalue)=>prevalue+1);
    }}>Increment </button>

    </div>
   

 



  );
}

export default Usestate