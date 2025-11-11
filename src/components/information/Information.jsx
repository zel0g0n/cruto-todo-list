import React from 'react'
import './Information.scss'
const Information = ({data}) => {
  return (
    <div className='information'>
      <h1 className="information__title">Create your plans</h1>
      <span className="information__counter">{data.length}</span>
    </div>
  )
}

export default Information