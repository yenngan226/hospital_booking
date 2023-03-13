import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useRoute from './hooks/useRoute'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)
  const routes = useRoute()
  return (
    <div className='App'>
      {routes}
      <ToastContainer />
    </div>
  )
}

export default App
