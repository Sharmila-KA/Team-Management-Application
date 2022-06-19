import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import {
    Link
  } from "react-router-dom";
import LoginUi from './Login Ui/LoginUi';
import UserDetails from './UserDetails/UserDetails';
import AddTask from './AddTask/AddTask';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/AddTask'}>
                    AddTask
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/UserDetails'}>
                    AddUser
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/LoginUi'}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/LoginUi" element={<LoginUi />} />
              <Route path="/AddTask" element={<AddTask />} />
              <Route path="/UserDetails" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App