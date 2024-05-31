import React from 'react'
import { useReducer } from 'react';

export const UseReducer = () =>{

const initstate={color:"#000000",size:"30px"};

const reducer=(state,action)=>{
    switch(action){
        case 'red':return {...state,color:"#ff0000"};
        case 'green':return {...state,color:"#00ff00"};
        case 'blue':return {...state,color:"#0000ff"};
        case '50px':return {...state,size:"50px"};
        default: return state;

};
}

const [state, dispatch]=useReducer(reducer,initstate);



  return (
    <div>
     <h1>
        USE REDUCER
     </h1>
     <h2 style={{color:color.state, fontSize:size.state}}>MCA REACT CLASSES</h2>
     < button className='btn btn-primary m-2' onClick={()=> dispatch("red")}>red</ button>
     < button className='btn btn-primary m-2' onClick={()=> dispatch("green")}>green</ button>
     < button className='btn btn-primary m-2' onClick={()=> dispatch("blue")} >blue</ button>
     < button className='btn btn-primary m-2' onClick={()=> dispatch("50px")} >50px</ button>



    </div>
  )
}