import React , { useState,useEffect , reset} from 'react'


const Message = () => {
  const [count,setCount]=useState(0);
  const checkValue=()=>{
    
    return count==0?"zero":count;
  }
  const checkCounter=()=>{
    return count===0?" badge bg-danger m-2 p-2 rounded":" badge bg-success text-white m-2 p-2 rounded ";

  }
  const  increment =()=>{

             setCount(count+1);
  }
  const decrement =()=>{
    if(count>0){
    setCount(count-1);
    }
  }
  const del=()=>{
    setCount(0);

  }
  const reset=()=>{

  }
  useEffect(()=>{console.log(count)},[count])
    
  return (
   
    
    <div className='container'>
     <button className=' btn btn-outline-warning mx-3 my-3' onClick={decrement}> decrement </button>
     <span className={checkCounter()}>{checkValue()} </span>
     <button className='btn btn-outline-warning mx-3 my-3 ' onClick={increment}> increment 
     </button>
      <button className='btn btn-outline-secondary mx-3 my-3' onClick={del}> delete </button>

        </div>
       
  );
 
}

export default Message