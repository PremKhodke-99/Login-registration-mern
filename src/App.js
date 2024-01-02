import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [user, setLoginUser] = useState({})

useEffect(() => {
  setLoginUser(JSON.parse(localStorage.getItem('MyUser')))
}, [])

  const updateUser = (user) => {
    localStorage.setItem('MyUser', JSON.stringify(user));
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>     
        <Routes>
          <Route path='/' exact element={ user && user._id ? <Homepage updateUser={updateUser}/> : <Login updateUser={updateUser}/> } />
          <Route path='/login' exact element={<Login updateUser={updateUser}/>} />
          <Route path='/register' exact element={<Register />} />
            
          
          {/* <Route path="/" exact>
            <Homepage/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
