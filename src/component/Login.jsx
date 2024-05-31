import React, { useEffect, useRef, useState } from 'react'

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
    <div className='  d-flex  flex-column col-6 m-2  '>
   <h2> Login Information</h2>
   <form>
    <label htmlFor="user" className='container m-2 flex-cloumn' >
    Enter user name
    <input  ref={userRef} type="text" name='user' value={userInfo.user} onChange={changeUserInfo}/>
</label>


<label htmlFor="password" className='container m-2'> enter password

    <input type="password" name='pass'value={userInfo.pass} onChange={changeUserInfo}/>


</label>

   </form>



    </div>
  )
}

export default Login