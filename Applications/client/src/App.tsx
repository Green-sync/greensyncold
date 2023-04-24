import { Routes, Route} from "react-router-dom"
import ErrorPage from "./pages/errorPage"
import LoginPage from "./pages/loginPage"
import DashboardPage from "./pages/dashboard"
import {env} from "./utils"
import LoginComponent from "./components/authentication/loginComponent"
import LoginForms from "./components/forms/LoginForms"
function App() {
console.log(env)
  return (
    <>
<Routes>
  <Route path="/signIn" element={<LoginForms />} />
  <Route path="/dashboard" element={<DashboardPage/>}/>
  <Route path="*" element={<ErrorPage/>}/>
</Routes>
    </>
  )
}

export default App
