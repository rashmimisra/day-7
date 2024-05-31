import React, { useEffect, useRef, useState } from 'react'
import { redirect } from 'react-router-dom';

const Login = () => {
    const [userInfo,setInfo]=useState({user:"",pass:""});
    const userRef=useRef();
    useEffect(()=>{
   userRef.current.focus();
   userRef.current.style.color="#ff0000";

    },[])

   
    const changeUserInfo=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInfo({...userInfo,[name]:value});
    }
    // const chnagePass=(event)=>{
    //     setPass(event.target.value);
    // }
  return (
    <div  className=' container flex-column col-10 text-center  justify-content-center mt-5 align-item-center   '>
   <h2> Login Information</h2>
   <form className='  d-flex  flex-column  m-2 font-family-sans-serif    '>
    <label htmlFor="user"  >
    Enter user name</label>
    <input  className='container col-3  rounded  ' ref={userRef} type="text" name='user' value={userInfo.user} onChange={changeUserInfo}/>



<label htmlFor="password"> Enter password</label>

    <input  className='container col-3  rounded '  type="password" name='pass'value={userInfo.pass} onChange={changeUserInfo}/>
      

   </form>
   <button className=" btn btn-success col-3  mt-2  radius-rounded" type='submit'> Submit </button>


    </div>
  )
}

export default Login