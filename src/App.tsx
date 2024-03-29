import {Routes, Route, Router} from 'react-router-dom'
import './global.css'
import SigninForm from './_auth/forms/SinginForm'
import SingupForm from './_auth/forms/SingupForm'
import {Home} from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
       {/* public routes */}
      <Route element={<AuthLayout/>}>
        <Route path='/sign-in' element={<SigninForm/>}/>
        <Route path='/sign-up' element={<SingupForm/>}/>
      </Route>
      {/* private routes */}
      <Route element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      </Routes>
    </main>
  )
}

export default App