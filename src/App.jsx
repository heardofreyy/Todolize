import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Todo from './Containers/Todo/Todo'
import MainLayout from './Layout/MainLayout'



function App() {
  

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path={'/'} element={<Todo/>}/>
      </Route>


    </Routes>
  )
}

export default App
