import React from 'react'

const Card = (props) => {
    const {title ,description ,price, brand, category,thumbnail}=props;
  return (
    <div className='container flex-wrap ' >
        <div className="card " style={{width:"20rem" , height:"35rem" }} >
     <img src={thumbnail} className="card-img-top " style={{ height:"10rem"}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <div className=' d-flex flex-column justify-content-center'>
       <div className='m-2'> Price:{price}</div>
       <div className='m-2'> Brand:{brand}</div>
       <div className='m-2 '> Category:{category}</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card