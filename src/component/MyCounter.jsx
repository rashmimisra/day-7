import React ,{useState} from 'react'
import Click from './Click'

const MyCounter = () => {


    const [counter,setCounter]=useState(
        [
            {id:1,count:0},
            {id:2,count:0},
            {id:3,count:0},
            {id:4,count:0},
        ]
    );
    const decrement=(acounter)=>{
        if(acounter.count>0){
            const lcounter=[...counter];
            const index=lcounter.indexOf(acounter);
            lcounter[index].count--;
            setCounter(lcounter);

        }
        }
 

     const increment=(acounter)=>{
        const lcounter=[...counter ];
        const index = lcounter.indexOf(acounter);
        lcounter[index].count++;
        setCounter(lcounter);

      };
      const deleteCounter=(acounter)=>{
        const lcounter= counter.filter(item=>item!==acounter);
        setCounter(lcounter);
          }
          const reset=()=>{
            const lcounter=counter.map(item=>{
                item.count=0;
                return item;
            })
            setCounter(lcounter);
          };
   const active=()=>{
       return counter.filter(item=>item.count>0).length;
   }
  return (
    <>
    <div className='container'>
    <div> 
        <button className='btn btn-success m-2' onClick={reset}>Reset</button>
        <p className='container m-2'> active:{active()}</p>
        </div>  
     {counter.map(item=>(
        <Click key={item.id}
        counter={item}
        decrement={decrement}
        increment= {increment}
        deleteCounter={deleteCounter}
        />
     ))}
    </div>


   
    </>
  )
};

export default MyCounter