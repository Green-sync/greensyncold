import { Routes, Route} from "react-router-dom"
import ErrorPage from "./pages/errorPage"
import DashboardPage from "./pages/dashboard"
import {env} from "./utils"
import LoginForms from "./components/forms/LoginForms"
import { RouteGuard } from "./components/authentication/auth.guard"
function App() {
console.log(env)
  return (
    <>
<Routes>
  <Route index path="/" element={
    <RouteGuard>
      <DashboardPage/>
    </RouteGuard>
  }/>
  <Route path="/signIn" element={<LoginForms />} />
  <Route path="*" element={<ErrorPage/>}/>
</Routes>
    </>
  )
}

export default App
