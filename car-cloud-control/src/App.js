import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";

import React from "react";

import './styles/App.css';
import './components/UI/Header/styles/Header.css';
import './components/UI/Header/styles/Navbar.css';
import './components/UI/Footer/styles/Footer.css';
import './pages/styles/Device.css';

import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Header/>
          <AppRouter/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
