import React from 'react'
import './Filter.scss'
const Filter = () => {
  return (
    <div className='filter'>
      <div className="filter__buttons">
        <button className='active-btn'>All products</button>
        <button>Completed</button>
        <button>Big Size</button>
      </div>
    </div>
  )
}

export default Filter