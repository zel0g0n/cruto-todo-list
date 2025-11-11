import React, { useState } from 'react'
import './Search.scss'

const Search = ({updateKey}) => {
  const searchItem = (e) => {
    updateKey(e.target.value)
  }
  return (
    <div className='search'>
      <input onChange={searchItem} type="text" placeholder='Search...'  name='keyword' className="search__item" />
    </div>
  )
}

export default Search