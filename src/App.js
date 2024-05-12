import React from 'react'
import Nav from './Nav'
import Completed from './Completed'
import Todo from './Todo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
return (
    <BrowserRouter>
        <Nav /><br/>
        <Routes>
            <Route path='/' element={<Todo/>} />
            <Route path='/Completed' element={<Completed/>}/>
        </Routes>
        </BrowserRouter>
)
}

export default App
