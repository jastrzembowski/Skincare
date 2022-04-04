import React, { useState } from "react";
import zdj3 from "../../images/zdj3.jpg";
import hero from "../../images/hero.jpg";
import woman2 from "../../images/woman2.jpg";
import woman1 from "../../images/woman1.jpg";
import geneo2 from "../../images/geneo2.jpg"
import woman7 from "../../images/woman7.jpg"
import mezo9 from "../../images/mezo9.jpg"
import orn1 from "../../images/orn1.jpg";
import Footer from "../Footer";
import { Parallax } from "react-parallax";
import back1 from "../../images/back1.jpg";
import Window from "../Window";
import Opinions from "../opinions/Opinions";
import usta1 from "../../images/usta1.jpg";
import usta2 from "../../images/usta2.jpg";
import usta3 from "../../images/usta3.jpg";

import { Link } from "react-router-dom";

export default function Main() {
  const [smaller, setSmaller] = useState(true);
  const [img, setImg] = useState(false);
  const scrolled = document.documentElement.scrollTop;
  const toggleSmaller = () => {
    if (scrolled > 100) {
      setSmaller(false);
    } else if (scrolled <= 100) {
      setSmaller(true);
    }
  };
  const toggleImg = () => {
    if (scrolled > 500) {
      setImg(false);
    } else if (scrolled <= 500) {
      setImg(true);
    }
  };
  window.addEventListener("scroll", toggleSmaller);
  window.addEventListener("scroll", toggleImg);
  return (
    <>
      <div className="main-container">
        <div className="main-header">
          <img
            src={hero}
            alt="hero"
            style={{ width: smaller ? "100%" : "80%" }}
          />
        </div>

        <div className="main-intro">
        <Link to="./Botox"  style={{ textDecoration: 'none' }}><div className="main-intro-img">
            <img src={woman2} alt="botox"/>
            <p>BOTOX</p>
          </div></Link>
          <Link to="/Kwas"  style={{ textDecoration: 'none' }}> <div className="main-intro-img">
            <img src={woman7} alt="kwas hialuronowy"/>
            <p>KWAS HIALURONOWY</p>
          </div></Link>
          <Link to="./Geneo"  style={{ textDecoration: 'none' }}> <div className="main-intro-img">
            <img src={geneo2} alt="geneo oxygen"/>
            <p>GENEO OXYGEN</p>
          </div></Link>
          <Link to="./MezoterapiaIglowa"  style={{ textDecoration: 'none' }}> <div className="main-intro-img">
            <img src={mezo9} alt="mezoterapia igłowa"/>
            <p>MEZOTERAPIA IGŁOWA</p>
          </div></Link>
        </div>
        <div style={{ height: "50px" }}> </div>
        <div className="main-about">
          <div className="main-about-text">
            <h1> Dzień dobry!</h1>
            <h3> Nazywam się Natalia Luzak</h3>
            <p>
              Klinika medycyny estetycznej Skin Care Natalia Luzak to miejsce, w
              którym możesz kompleksowo zadbać o swój wygląd. Dzięki
              wykorzystaniu najnowocześniejszych technologii oraz preparatów
              możemy zaoferować Ci najlepsze rezultaty zabiegów medycyny
              estetycznej!
            </p>
            <img src={orn1} alt="kosmetology ornament" className="main-orn" />
          </div>
   
          <img
            src={zdj3}
            alt="zdjęcie"
            className={ img ? "main-photo-small" : "main-photo-big" }
          />
      
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <Parallax bgImage={back1} strength={500}>
        <div
          style={{
            height: "300px",
          }}
          className="main-parallax"
        >
          <div className="main-results">
            <h1>Rezultaty</h1>
            <p>Najlepiej je zobaczyć na własne oczy!</p>
            <a href="/gallery">Zobacz galerię</a>
          </div>
        </div>
      </Parallax>
      <Opinions />
      <div className="main-usta">
        <div className="usta-container">
          <div className="usta-img-holder">
       
          <img src={usta3} alt="usta" />
          <img src={usta1} alt="usta" />
          </div>
          <div className="usta-text-holder">
            <img src={usta2} alt="usta" />
            <h1>Jesteś po rozszczepie ust?</h1>
            <p>Zrobimy dla Ciebie makijaż pernamentny ust</p>
            <h3 style={{ fontWeight: "800" }}>GRATIS!</h3>
            <p>Pomogliśmy już wielu kobietom. I Ty możesz mieć piękne usta!</p>
            <p style={{ fontWeight: "800" }}>
              Prześlij zgłoszenie na info@sercem-malowane.pl
            </p>
          </div>
        </div>
      </div>
      <div className="filler"></div>
      <Parallax bgImage={woman1} strength={500}>
        <div
       className="main-contact"
        >
            <div className="main-contact-border">
               
                    <iframe title="map" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Cz%C4%99stochowska%208/100%20Gda%C5%84sk+(Natalia%20Luzak%20Skin%20Care)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="500" height="400" frameborder="0"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=b5d50151253ac3ccfa196d0bf32dd5bc76475f7a'></script>
                    <div>
                    <h1>Zapraszam do kontaktu</h1>
                    <p>Adres: Częstochowska 8/100, 80-180 Gdańsk</p>
                    <p>Telefon: 537 939 011</p>
                    <p>Natalia Luzak</p>
                    </div>
         </div>
        </div>
      </Parallax>
      <Window />

      <Footer />
    </>
  );
}
