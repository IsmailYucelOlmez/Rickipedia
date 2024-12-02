import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CharactersPage from './pages/CharactersPage'

function App() {
  

  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<CharactersPage/>} />
        <Route path='' element={""} />
        <Route path='' element={""} />
        <Route path='' element={""} />
      </Routes>
    </div>
  )
}

export default App
