import React from 'react'

const Reset1 = () => {
    const reset=()=>{
         window.location.reload();


    }
    const total=()=>{
        let sum=0;
        
        
    }

  return (
    <div className='container mx-2 my-2 p-2 '>
        <button className='btn btn-outline-dark  m-4 col-4 'onClick={reset} >Reset</button>
         <button className='btn btn-outline-dark m-4 col-4' onClick={total}>total</button>
    </div>
  )
}

export default Reset1