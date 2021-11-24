import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componentss/Header/Header";
import Footer from "./componentss/Footer/Footer";

import Dashboard from './componentss/Dashboard/Dashboard'
import Login from './componentss/Login/login';
import Register from './componentss/Register/register';
import MyPets from './componentss/MyPets/mypets';
import Create from './componentss/Create/create';

import Categories from "./componentss/Categories/Categories";

//switch kato machne edin rout i da spre
function App() {
  return (
    <div className="container">
      <Header />
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
