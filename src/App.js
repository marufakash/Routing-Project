import React from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Shop from "./Components/Shop/Shop";
import Details from "./Components/Details/Details";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monitor" element={<Shop />} />
          <Route path="/laptop" element={<Shop />} />
          <Route path="/monitor/:title" element={<Details />} />
          <Route path="/laptop/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App;