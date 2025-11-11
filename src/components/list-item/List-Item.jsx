import React, { useState } from 'react'
import './List-Item.scss'
const ListItem = ({product,deleteHandler, activeToggle}) => {
  


  return (
    <div className={`list__item ${product.active?'active-item':''}`}>
      <div className="list__item-info">
        <span className='num'>{product.size}</span>
        <span className='name'>{product.title}</span>
      </div>
      <div className="list__item-action">
        <span onClick={activeToggle} className="check ">&#10003;</span>
        <span onClick={deleteHandler} className="times">&times;</span>
      </div>
    </div>
  )
}

export default ListItem