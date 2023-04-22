import { Routes, Route} from "react-router-dom"
import ErrorPage from "./pages/errorPage"
import LoginPage from "./pages/loginPage"
import DashboardPage from "./pages/dashboard"
import { SignUp } from "./pages/signUpPage"
function App() {

  return (
    <>
<Routes>
  <Route index path="/" element={<LoginPage/>}/>
  <Route path="/signUp" element={<SignUp />} />
  <Route path="/dashboard" element={<DashboardPage/>}/>
  <Route path="*" element={<ErrorPage/>}/>
</Routes>
    </>
  )
}

export default App
