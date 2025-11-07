import React from 'react'
import './Add-Form.scss'
const AddForm = () => {
  return (
    <div className='form'>
      <input type="text" placeholder='Title...' className="title" />
      <input type="number" placeholder='№' className="number" />
      <button className="add">Add</button>
    </div>
  )
}

export default AddForm