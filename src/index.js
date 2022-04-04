import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/main/Main"
import Navbar from "./components/nav/Navbar"
import Offers from "./components/offer/Offers"
import Contact from "./components/contact/Contact"
import Prices from "./components/prices/Prices";
import Gallery from "./components/gallery/Gallery";
import Geneo from "./components/offer/Geneo"
import Botox from "./components/offer/Botox"
import Hydrotec from "./components/offer/Hydrotec"
import Kwas from "./components/offer/Kwas"
import Mezoterapia from "./components/offer/Mezoterapia"
import MezoterapiaIglowa from "./components/offer/MezoterapiaIglowa"
import MezoterapiaSkory from "./components/offer/MezoterapiaSkory"
import Modelowanie from "./components/offer/Modelowanie"
import Stymulatory from "./components/offer/Stymulatory"
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/geneo" element={<Geneo/>}/>
        <Route path="/kwas" element={<Kwas/>}/>
        <Route path="/mezoterapiaskory" element={<MezoterapiaSkory/>}/>
        <Route path="/mezoterapiaiglowa" element={<MezoterapiaIglowa/>}/>
        <Route path="/mezoterapia" element={<Mezoterapia/>}/>
        <Route path="/hydrotec" element={<Hydrotec/>}/>
        <Route path="/modelowanie" element={<Modelowanie/>}/>
        <Route path="/stymulatory" element={<Stymulatory/>}/>
        <Route path="/botox" element={<Botox/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/prices" element={<Prices/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
