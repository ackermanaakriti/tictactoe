import React from 'react'
import './sqaure.css'

function Square({onClick,value}) {
  const style= value==='X'?'box-X':'Box-O';
  return (
    
        <span className='square'  onClick={onClick}>{value}</span>
    
  )
}

export default Square