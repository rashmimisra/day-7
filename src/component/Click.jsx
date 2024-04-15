import React , {useState , useEffect} from 'react';

const Click = () => {
    const [count , setCount]= useState(0);  //useState hook
    const checkValue=() =>{
        return count==0?"zero":count;
    }
    const checkCounter=()=>{
        return count===0?
        " bg-danger mx-2 px-4":"bg-success text-white mx-2 px-4";
    }
    // let count=1;
    const decrement=()=>{
       if(count>0){
       setCount(count-1);
       }

    }
    const increment=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        console.log(count)
    } , [count]);

  return (
    <div className='container mt-3'>
        <button className='btn btn-primary' onClick={increment}>increment</button>
        <span className= {checkCounter()}>{checkValue()}</span>
        <button className='btn btn-primary ' onClick={decrement}>decrement</button>
    </div>
  )
}

export default Click