import React from 'react'
import { ProductsFace } from '../context/Context'

const SingleProducts = ({prod} : {prod:ProductsFace}) => {
  return (
    <div>{prod.name}</div>
  )
}

export default SingleProducts