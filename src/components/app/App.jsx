import './App.scss'
import Information from '../information/Information'
import AddForm from '../add-form/Add-Form'
import Filter from '../filter/Filter'
import { lazy, Suspense, useReducer } from 'react'
import Search from '../search/Search'
import { dataContext } from '../../context/Context'
import { initialState, reducer } from '../../context/reducer'
const List  = lazy(() => import('../list/List'))

function App() {
  const {Provider} = dataContext
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <Provider value={{state,dispatch}}>
      <div className='app'>
        <div className="wrapper">
          <div className="card">
            <div className="card__item">
              <Information />
              <AddForm />
              <Search/>
              <Suspense fallback={<>Loading...</>}>
                <List />
              </Suspense>
              <Filter />
            </div>
          </div>
          <img src="/image.png" alt="right-block-image" className="image" />
        </div>
      </div>
    </Provider>
  )
}

export default App
