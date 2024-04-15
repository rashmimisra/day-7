import React from 'react'

// const Languages = () => {
//     let lang=[" java ","javascript", "kotlin", "python","c"];
//   return (
//     <div><h1>Best  programming languages </h1>
    
//     <ul>
//         {lang.map((item,index)=>(
//             <li id={index}>{item }</li>

//         ))}
//     </ul>
    
    
    
    
    
//     </div>
//   )
// }
const Languages=()=> {
    let lang=[
      {id :1 , name:"java"},
      {id :2 , name:"javascript"}, 
      {id :3 , name:"kotlin"}, 
      {id :4 , name:"python"},
      {id :5 , name:"c"},
    ];
    var check= false;                          // conditional css class rendaring

  return (
    <div className= {check?'bg-warning': 'bg-secondary text-white'}><h1>{ check?"Best  programming languages": "top 5 programming languages"} </h1>
    
    <ul>
        {lang.map((item, index)=>(
            <li key={index.id}>{item.name}</li>

        ))}
    </ul>
    
    
    
    
    
    </div>
  )
}

export default Languages