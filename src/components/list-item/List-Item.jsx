import React from 'react'
import './List-Item.scss'
const ListItem = () => {
  return (
    <div className='list__item active-item'>
      <div className="list__item-info">
        <span className='num'>14</span>
        <span className='name'>Bananas</span>
      </div>
      <div className="list__item-action">
        <span className="check ">&#10003;</span>
        <span className="times">&times;</span>
      </div>
    </div>
  )
}

export default ListItem