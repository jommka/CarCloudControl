import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";

import React from "react";

import './styles/App.css';
import './components/UI/Header/styles/Navbar.sass';
import './components/UI/Footer/styles/Footer.sass';
import './pages/styles/Device.sass';

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
