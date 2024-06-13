
import './App.css'
import NewLogin from './components/NewLogin'
import Profile from './components/Profile'


import UserContextProvider from './context/UserContextProvider'


function App() {
  

  return (
    <UserContextProvider>
     <h1>react with yash !!!!!!!!</h1>
     <NewLogin />
     <Profile />
    </UserContextProvider>
  )
}

export default App
