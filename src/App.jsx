import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Components :
import MainLayout from './Layout/MainLayout'
import Todo from './Containers/Todo/Todo'
import Home from './pages/Home'



function App() {
  

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/list'} element={<Todo/>}/>
      </Route>


    </Routes>
  )
}

export default App
