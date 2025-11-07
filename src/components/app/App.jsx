import './App.scss'
import Information from '../information/Information'
import AddForm from '../add-form/Add-Form'
import List from '../list/List'
import Filter from '../filter/Filter'


function App() {

  return (
    <div className='app'>
      <div className="wrapper">
        <div className="card">
          <div className="card__item">
            <Information/>
            <AddForm/>
            <List/>
            <Filter/>
          </div>
        </div>
        <img src="/image.png" alt="right-block-image" className="image" />
      </div>
    </div>
  )
}

export default App
