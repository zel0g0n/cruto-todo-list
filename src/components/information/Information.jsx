import { useContext } from 'react'
import './Information.scss'
import { dataContext } from '../../context/Context'
const Information = () => {
  const {state} = useContext(dataContext)
  const {data} = state  
  console.log('info');
  
  return (
    <div className='information'>
      <h1 className="information__title">Create your plans</h1>
      <span className="information__counter">{data.length}</span>
    </div>
  )
}

export default Information