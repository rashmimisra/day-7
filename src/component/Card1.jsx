import React from 'react'

const Card1 = (props) => {
    const {name,ingridents,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine, caloriesPerServing,image}=props;
  return (
    <>
    <div className=' d-flex  flex-wrap'>
    <div  className="card m-4 border border-dark border:5 " style={{width:"35rem " , height:"65rem"}}>
    <img src={image} className="card-img-top "/>
    <div  className=" card-body">
      <div  className="card-text m-2 text-start">
        <div className='mt-2'> <b>Name:</b>{name}</div>
        <div className='mt-2  '><b>Ingridents:</b>{ingridents}</div>
        <div className='mt-2  '><b>Instructions:</b>{instructions}</div>
        <div className='mt-2  '><b>PrepTimeMinutes:</b>{prepTimeMinutes}</div>
        <div className='mt-2  '><b>CookTimeMinutes:</b>{cookTimeMinutes}</div>
        <div className='mt-2  '><b>Servings:</b>{servings}</div>
        <div className='mt-2  '><b>Difficulty:</b>{difficulty}</div>
        <div className='mt-2  '><b>Cuisine:</b>{cuisine}</div>
        <div className='mt-2  '><b>CaloriesPerServing:</b>{caloriesPerServing}</div>

      </div>
    </div>
  </div></div>
  </>
  )
}

export default Card1