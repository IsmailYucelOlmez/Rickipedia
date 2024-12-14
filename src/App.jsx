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
import useSettingsStore from './store/settingsStore'
import { useEffect } from 'react'
import { ToastContainer  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const {theme,setTheme}=useSettingsStore();

  useEffect(()=>{

    //local storage for theme
    const localStorageTheme=localStorage.getItem('theme')
    if(localStorageTheme==null || localStorageTheme=="light"){ setTheme("light"); localStorage.setItem('theme',"light") }
    else{ setTheme(localStorageTheme); localStorage.setItem('theme',localStorageTheme); }
    
  },[])

  return (
    <div className={`font-quicksand ${theme=="dark" ? 'dark':''} dark:bg-[#293241] dark:text-white`}>
      <div className={` dark:bg-[#000] dark:text-white min-h-screen`}>
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

        <ToastContainer theme={`${theme=="light" ? 'light':'dark' }`} />
      </div>
    </div>
  )
}

export default App
