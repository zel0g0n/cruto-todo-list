import { useContext } from 'react'
import './Search.scss'
import { dataContext } from '../../context/Context'

const Search = () => {
  
  const {dispatch} = useContext(dataContext)
  
  const searchItem = (e) => {
    const value = e.target.value
    dispatch({type:'updateKey',payload: {keyword: value}})

  }
  
  return (
    <div className='search'>
      <input onChange={searchItem} type="text" placeholder='Search...'  name='keyword' className="search__item" />
    </div>
  )
}

export default Search