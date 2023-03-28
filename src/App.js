import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import Gallery from './components/Gallery'
import Favorites from './components/Favorites'
import './index.css'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/' element={<Gallery />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
