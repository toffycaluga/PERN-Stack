import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskForm from './comonents/TaskForm'
import Navbar from './comonents/Navbar'

import TaskList from './comonents/TaskList'
import Container from '@mui/material/Container'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>

          <Route path="/" element={<TaskList />} />
          <Route path="/task/new" element={<TaskForm />} />
          <Route path="/task/:id/edit" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter >
  )
}

export default App