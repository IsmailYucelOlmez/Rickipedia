import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CharactersPage from './pages/CharactersPage'
import HomePage from './pages/HomePage'
import LocationsPage from './pages/LocationsPage'
import EpisodesPage from './pages/EpisodesPage'
import CharacterDetailsPage from './pages/detailspages/CharacterDetailsPage'
import LocationDetailsPage from './pages/detailspages/LocationDetailsPage'
import EpisodeDetailsPage from './pages/detailspages/EpisodeDetailsPage'

function App() {
  

  return (
    <div className='font-quicksand '>
      <Header/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/characters' element={<CharactersPage/>} />  
        <Route path='/locations' element={<LocationsPage/>} />
        <Route path='/episodes' element={<EpisodesPage/>} />
        <Route path='/character/:id' element={<CharacterDetailsPage/>} />  
        <Route path='/location/:id' element={<LocationDetailsPage/>} />
        <Route path='/episode/:id' element={<EpisodeDetailsPage/>} />
      </Routes>
    </div>
  )
}

export default App
