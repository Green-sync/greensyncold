import { Routes, Route} from "react-router-dom"
import ErrorPage from "./pages/errorPage"
import LoginPage from "./pages/loginPage"
import { SignUp } from "./pages/signUpPage"
import {env} from "./utils"
import DashboardComponent from "./pages/dashboard"
import './style/agriDashboard.css'

function App() {
console.log(env)
  return (
    <>
<Routes>
  <Route index path="/" element={<LoginPage/>}/>
  <Route path="/signUp" element={<SignUp />} />
  <Route path="/dashboard" element={<DashboardComponent/>}/>
  <Route path="*" element={<ErrorPage/>}/>
</Routes>
    </>
  )
}

export default App
