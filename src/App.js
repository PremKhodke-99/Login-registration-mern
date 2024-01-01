import { useState } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>     
        <Routes>
          <Route path='/' exact element={ user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/> } />
          <Route path='/login' exact element={<Login setLoginUser={setLoginUser}/>} />
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
