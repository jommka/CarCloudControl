import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Main from "./pages/Main";

import React from "react";

import './styles/App.css';
import './components/UI/Header/styles/Header.css';
import './components/UI/Footer/styles/Footer.css';
import './pages/styles/Main.css';


function App() {
  return (
      <div>
          <Header/>
          <Main/>
          <Footer/>
      </div>
  );
}

export default App;
