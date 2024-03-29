import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import "./app.css"
function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
