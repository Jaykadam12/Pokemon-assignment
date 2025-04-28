import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Home from './components/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
