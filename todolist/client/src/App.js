import React from 'react'
import Home from './conponent/Home/Home'
import Add from './conponent/Add/Add'
import Edit from './conponent/Edit/Edit'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add />} />
      <Route path='/edit' element={<Edit />} /> 
      </Routes>
      
    </BrowserRouter>
 )
}

export default App