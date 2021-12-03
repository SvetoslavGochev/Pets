import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componentss/Header/Header";
import Footer from "./componentss/Footer/Footer";


import Login from './componentss/Login/login';

import Dashboard from "./componentss/Dashboard/Dashboard";

import Register from './componentss/Register/register';
import MyPets from './componentss/MyPets/mypets';
import Create from './componentss/Create/Create';
import { useState, useEffect } from 'react';
import * as authService from './Service/authService'

import Categories from "./componentss/Categories/Categories";
import Details from "./componentss/Details/Details";

import Logout from "./componentss/Logout/Logout";

//switch kato machne edin rout i da spre
function App() {

  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});

  useEffect(() => {
   let user = authService.getUser();

   setUserInfo({
     isAuthenticated: Boolean(user),
     user,
   })
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username,
    });

  };


  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: "",
    });
  }

  return (
    <div className="container">
      <Header {...userInfo}/>
      <main id="site-content">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin = {onLogin}/>} />
          <Route path="/logout" element={<Logout onLogout = {onLogout}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:petId" element={<Details />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
