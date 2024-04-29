import React, { useEffect, useState } from 'react'
import Dog from './Dog';

const Mydog = () => {
    const [dogs,setDogs]=useState([]

);
    useEffect(()=>{
    fetch("https://freetestapi.com/api/v1/dogs")
    .then(result=>result.json())
    .then(data=>
    
      setDogs(data))
    } ,[]);
  return (
    <div>
        {dogs.map(dogs=>(
            <Dog
            key={dogs.id}
             name={dogs.name}
             breed_group={dogs.breed_group}
             size={dogs.size}
             lifespan={dogs.lifespan}
             origin={dogs.origin}
             temperament={dogs.temperament}
             colors={dogs.colors}
            description={dogs.description}
            image={dogs.image}/>
        
    
        ))}







    </div>
  )
}

export default Mydog