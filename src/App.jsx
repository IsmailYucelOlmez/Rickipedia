import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CharactersPage from './pages/CharactersPage'
import HomePage from './pages/HomePage'
import LocationsPage from './pages/LocationsPage'
import EpisodesPage from './pages/EpisodesPage'

function App() {
  

  return (
    <div className='font-quicksand '>
      <Header/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/characters' element={<CharactersPage/>} />  
        <Route path='/locations' element={<LocationsPage/>} />
        <Route path='/episodes' element={<EpisodesPage/>} />
      </Routes>
    </div>
  )
}

export default App
