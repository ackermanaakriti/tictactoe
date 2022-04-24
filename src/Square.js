import React from 'react'
import './sqaure.css'

function Square({updateValue,value}) {
  const style= value==='X'?'box-X':'Box-O';
  return (
    
        <span className='square' onClick={updateValue}>{value}</span>
    
  )
}

export default Square