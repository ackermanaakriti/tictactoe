import React from 'react'
import Square from './Square'

function Board({board, onclick}) {
  return (
    <div className='board' >
      {board.map((value, idx)=>{
        return <Square value={value} onClick={()=>onclick(idx)}/>
      })}
    </div>

  )
}

export default Board