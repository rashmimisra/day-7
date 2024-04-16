import React , {useState } from 'react';

const Click = (props) => {
    const {counter , increment,decrement,deleteCounter}=props;
    console.log(counter);
    const checkValue=() =>{
        return counter.count==0?"zero":counter.count;
    }
    const checkCounter=()=>{
        return counter.count===0?
        " bg-danger mx-2 px-4":"bg-success text-white mx-2 px-4";
    }
    // let count=1;
    
    // useEffect(()=>{
    //     console.log(count)
    // } , [count]);

  return (
    <div className='container mt-3'>
        <button className='btn btn-primary' onClick={()=>increment(counter)}>increment</button>
        <span className= {checkCounter()}>{checkValue()}</span>
        <button className='btn btn-primary ' onClick={()=>decrement(counter)}>decrement</button>
        <button className='btn btn-primary m-2' onClick={()=>deleteCounter(counter)}>Delete</button>
    </div>
  )
}

export default Click