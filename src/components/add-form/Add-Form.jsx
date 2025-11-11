import React, { useState } from 'react'
import './Add-Form.scss'
const AddForm = ({onAdd}) => {
  const [formInfo,setFormInfo] = useState({
    title: '',
    size: '00:00'
  })

  const formChangeHandler = (e) => {
    e.preventDefault()
    setFormInfo(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const addProduct = (e) => {
    e.preventDefault()
    if(!formInfo.size || !formInfo.title) {
      alert("Please, complete form information datas")
    }else {
      onAdd(formInfo)
    }
    setFormInfo({title: '', size: '00:00'})
  }

  return (
    <div className='form'>
      <input 
        required
        onChange={formChangeHandler} 
        name='title' 
        type="text" 
        value={formInfo.title} 
        placeholder='Plans...' 
        className="title" />
      <input 
        required 
        onChange={formChangeHandler} 
        name='size' 
        type="time" 
        value={formInfo.size} 
        className="number" />
      <button onClick={addProduct} className="add">Add</button>
    </div>
  )
}

export default AddForm