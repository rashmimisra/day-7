// import React, { useState } from 'react'

// const click2 = ({sname}) => {
//     const [name,setName]= useState(sname);
// const click2 = (props) => {                    ////destructuring 
//     let {sname}=props;
//     const [name,setName]= useState(sname);
const click2 = (props) => {                    ////controlled component 
    let {name,onUpdate}=props;
    

  return (
    <div>
        
    {name}
    <div>
    <button className='btn btn-warning' onClick={onUpdate}> change name </button>
    </div>
    </div>
  )
}

export default click2