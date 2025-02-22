
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Heading from './components/Heading'

function App() {

  return (
      <div>
        <Heading/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element={<About/>} />

        </Routes>
      </div>
        
      
    
  )
}

export default App
