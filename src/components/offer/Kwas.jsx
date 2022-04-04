import React from "react";
import hero4 from "../../images/hero4.jpg"

import Footer from "../Footer";
import wypelnianiezmarszczek from "../../images/wypelnianiezmarszczek.png";
export default function Kwas() {
  return (
    <>
          <img src={hero4} alt="kosmetologia" className="contact-image"></img>

      <div class="kwas">

        <div class="kwas-container">
    
          <div class="Title">
            <h1>Wypełnianie zmarszczek kwasem hialuronowym</h1>
          </div>
          <div class="Text">
          <img src={wypelnianiezmarszczek} alt="wypelnianie zmarszczek" style={{float: "left"}} />
            
            <p class="zmarszczki">Zmarszczki poprzeczne czoła, lwie zmarszczki, kurze łapki, dolina
              łez, bruzdy nosowo-wargowe, fałdy marionetki, zmarszczki
              śmiechowe, czy to Twój problem?
              <br />
              Przyczyna powstania zmarszczek jest bardzo złożona. Polega na
              zwiększeniu wiotkości skóry z wiekiem, zmniejszeniu ilości tkanki
              tłuszczowej w okolicy centralnej części twarzy oraz postępującym
              zaniku kostnym centralnej części twarzy i oczodołów.
              <br />
              Wypełnianie zmarszczek umożliwia redukcję objawów starzenia skóry
              twarzy. Wypełniacze występujące naturalnie w ludzkich tkankach są
              dobrze tolerowane przez organizm. Obecnie najczęściej wykorzystuje
              się preparaty na bazie kwasu hialuronowego – cechuje je
              bezpieczeństwo, odwracalność działania (za pomocą hialuronidazy) i
              uniwersalność.
           <h4>Co przed zabiegiem? </h4>

            <br />W <b>SKIN CARE</b> zajmiemy się Twoim defektem, zabieg będzie
            poprzedzony dokładną i bezpłatną konsultacją. Działanie wypełniaczy
            jest tymczasowe, a efekt bardzo naturalny. Pacjent, po podaniu
            preparatu wypełniającego, może szybko wrócić do codziennej
            aktywności. Nie są to procedury z zakresu chirurgii plastycznej.
            Wypełniacze to substancje podawane do tkanek śródskórnie lub
            podskórnie w celu wypełnienia bruzd, zmarszczek i innych ubytków.{" "}
            <br />
            Zabieg poprzedzony jest zazwyczaj kremem znieczulającym. Zwykle
            iniekcje wypełniaczy wykonywane są za pomocą strzykawki i igły
            (czasem wykorzystuje się kaniule).
            </p>
            <h4> Zapraszamy do Skin Care!</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
