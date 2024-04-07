import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import AppDescription from './components/AppDescription'
import AppTime from './components/AppTime'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='text-center'>
      <AppName/>
      <AppDescription/>
      <AppTime/>
    </div>

    
  )
}

export default App
