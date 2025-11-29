import { useContext } from 'react'
import './List-Item.scss'
import { dataContext } from '../../context/Context'
const ListItem = ({product}) => {
  
  const {dispatch} = useContext(dataContext)

  return (
    <div className={`list__item ${product.active?'active-item':''}`}>
      <div className="list__item-info">
        <span className='num'>{product.size}</span>
        <span className='name'>{product.title}</span>
      </div>
      <div className="list__item-action">
        <span onClick={() => dispatch({type: 'activeToggle', payload: product.id})} className="check ">&#10003;</span>
        <span onClick={() => dispatch({type: 'delete', payload: product.id})} className="times">&times;</span>
      </div>
    </div>
  )
}

export default ListItem