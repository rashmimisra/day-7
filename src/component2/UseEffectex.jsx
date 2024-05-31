import React, { useEffect, useState} from 'react'

const UseEffectex = () => {
    const [name,setName]=useState("kiet");
   const [course,setCourse]=useState("mca");
    useEffect(()=> {
        console.log('useEffect hook');
    },[]);
    useEffect(()=> {
        console.log(name);
    },[name]);
const changename=()=>{
    setName("KIET");
};
const changecourse=()=>{
    setCourse("Btech");
}

  return (
    <div>
<h1>Use Effect Example</h1>
<h2>name:{name}</h2>
<h2>course:{course}</h2>
<button className="btn btn-danger" onClick={changename}>Refresh</button>

<button className="btn btn-danger mx-2" onClick={changecourse}>Refresh</button>


    </div>
  )
}

export default UseEffectex