import './App.scss'
import Information from '../information/Information'
import AddForm from '../add-form/Add-Form'
import List from '../list/List'
import Filter from '../filter/Filter'
import { useEffect, useState } from 'react'
import Search from '../search/Search'


function App() {
  const [data, setData] = useState([
    { 
      id: 1,
      active: true, 
      title: 'Wake Up',
      size: '05:30',
      notified: false
    },
    { 
      id: 2,
      active: false,
      title: 'Get up',
      size: '05:40',
      notified: false

    },
    { 
      id: 3,
      active: false,
      title: 'Breakfast',
      size: '11:00',
      notified: false

    },
    
  ])
  const [deleted,setDeleted] = useState([])

  const idCover = () => {
    const newId = Math.ceil(100000*Math.random())
    return newId
  }
  const [keyword, setKeyword] = useState('')
  const [filter,setFilter] = useState('all')
  const onDelete = (id) => {
    const remainData = data.filter(item => {
      if(item.id !== id) {
        return item
      }else {
        setDeleted(prev => ([...prev,item]))
      }
    })
    setData(remainData)
  }

  const onToggleActive = (id) => {
    const filteredData = data.map(item => (item.id == id ? {...item,active: !item.active}:item))
    setData(filteredData)
  }

  const onAdd = (item) => {
    const {title,size} = item
    const newListItem = {title, size, active: false, notified: false, id: idCover()}
    setData(prev => ([...prev,newListItem]))
  }

  const onSearch = (arr, key) => {
    if(!key) {
      return arr
    }
    else {
      return arr.filter(item => item.title.toLowerCase().includes(key.toLowerCase()))
    }
  }

  const onFilter = (arr,key) => {
    switch (key) {
      case 'all':
        return arr
      case 'deleted':
        return deleted
      case 'completed':
        return arr.filter(item => item.active)
    }
  }

  const updateKey = (searchedItem) => {
    setKeyword(searchedItem)
  } 
  const updateFilter = (filterKeyWord) => {
    setFilter(filterKeyWord)
  }


  const recycledData = onSearch(data,keyword)
  const lastChangedData = onFilter(recycledData,filter)

  return (
    <div className='app'>
      <div className="wrapper">
        <div className="card">
          <div className="card__item">
            <Information data={data}/>
            <AddForm onAdd={onAdd}/>
            <Search updateKey={updateKey}/>

            <List setData={setData} onDelete={onDelete} onToggleActive={onToggleActive} data={lastChangedData}/>
            <Filter updateFilter={updateFilter}/>
          </div>
        </div>
        <img src="/image.png" alt="right-block-image" className="image" />
      </div>
    </div>
  )
}

export default App
