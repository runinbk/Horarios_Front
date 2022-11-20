
import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Navegador } from './pages/navegador'
import { Pagina1 } from './pages/pagina1'
import { Pagina2 } from './pages/pagina2'
import { Pagina3 } from './pages/pagina3'
import { Pagina4 } from './pages/pagina4'
import { Pagina5 } from './pages/pagina5'
import { Pagina6 } from './pages/pagina6'

function App() {


  return (
    <div>
       <Navegador/>
       <Routes>
          <Route path='/' element={<Pagina1/>}/>
          <Route path='pagina2' element={<Pagina2/>}/>
          <Route path='pagina3' element={<Pagina3/>}/>
          <Route path='pagina4' element={<Pagina4/>}/>
          <Route path='pagina5' element={<Pagina5/>}/>
          <Route path='pagina6' element={<Pagina6/>}/>
          
          
       </Routes>
    </div>
    
  )
}

export default App
