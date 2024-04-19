import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Student = () => {
    const param=useParams();
    const [studentInfo,setStudentInfo]=useState([
        {sid:"1",sname:"Rashmi",marks:"90%", gender:"Female" },
        {sid:"2",sname:"Rashmi1",marks:"70%", gender:"Female"},
        {sid:"3",sname:"Rashmi2",marks:"80%", gender:"Female"},

    ]);
  return (
    <div>
        {param.name?"hello":JSON.stringify(studentInfo)}
    </div>
  )
}

export default Student