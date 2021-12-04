import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componentss/Header/Header";
import Footer from "./componentss/Footer/Footer";

import { AuthContext } from './context/AuthContext'

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
  const [user, setUser] = useState({
    _id: '',
    email: '',
    accessToken: '',
  });

  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});
  

  useEffect(() => {
     let user = authService.getUser();


  }, []);

  const login = (authData) => {  
        setUser(authData);
  };


  const onLogout = () => {
   
  }

  return (

    <AuthContext.Provider value={{user,login}}>

    <div className="container">
      <Header email={user.email}/>

      <main id="site-content">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:petId" element={<Details />} />
        </Routes>
      </main>

      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
