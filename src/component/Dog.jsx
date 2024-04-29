import React from 'react'

const Dog = (props) => {
    const {name,breed_group,size,lifespan,origin, temperament,color, description,image}=props;


    return (
    <div>
        <div  className="card" style={{width:"18rem"}}>
      <img src={image}  className="card-img-top" alt="..."/>
   <div  className="card-body">
    <div>name:{name}</div>
    <div>breed_group:{breed_group}</div>
    <div>name:{name}</div>
  </div>
</div>
    </div>
  )
}

export default Dog