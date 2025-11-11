import React, { useState } from 'react'
import './Filter.scss'
const Filter = ({updateFilter}) => {
  
  const [buttonGroup,setButtonGroup] = useState([
    {
      name: 'All plans',
      active: true,
      id: 1,
      content: 'all'
    },
    {
      name: 'Deleted',
      active: false,
      id: 2,
      content: 'deleted'
    },
    {
      name: 'Completed',
      active: false,
      id: 3,
      content: 'completed'
    }
  ]) 
  const filterHandler = (item) => {
    updateFilter(item.content)
    
    const changedData = buttonGroup.map(i => {
      if(i.id == item.id) {
        return {...i,active: true}
      }else {
        return {...i, active: false}
        
      }
    })
    setButtonGroup(changedData)
    
  }

  return (
    <div className='filter'>
      <div className="filter__buttons">
        {
          buttonGroup.map(item => (
            <button onClick={() => filterHandler(item)} className={`${item.active ? 'active-btn': ''}`} key={item.id}>{item.name}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Filter