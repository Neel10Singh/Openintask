import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Dash from './components/Dash'
import 'font-awesome/css/font-awesome.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useState } from 'react'
function App() {
  const [user, setUser] = useState('')
  return (
    <Routes>
      <Route exact path='/' element={<Login setUser={setUser} />} />
      <Route exact path='/dash' element={<Dash user={user} />} />
    </Routes>
  )
}

export default App
