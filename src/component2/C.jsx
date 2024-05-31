import React from 'react'
import UseContext from './UseContext'
import { nameContext } from './UseContext'

const C = () => {
    const name=UseContext(nameContext)
  return (
    <div>
        <h1>C component</h1>
        <h2>Name :{name}</h2>
       




    </div>
  )
}

export default C