import './styles/App.css';
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import React from "react";

function App() {
  return (
      <div>
          <Header/>
          <main style={{ height: "50vh" }}></main>
          <Footer/>
      </div>
  );
}

export default App;
