import React from "react";
import hero4 from "../../images/hero4.jpg";
import mezo11 from "../../images/mezo11.jpg";
import Footer from "../Footer";
import mezo10 from "../../images/mezo10.jpg";
export default function MezoterapiaSkory() {
  return (
    <>
      <img src={hero4} alt="kosmetologia" className="contact-image"></img>

      <div class="kwas">
        <div class="kwas-container">
          <div class="mezo-title">
            <h1>Mezoterapia igłowa skóry głowy</h1>
          </div>
          <div class="hydrotec-text-container">
            <p class="hydrotec-text">
              {" "}
              <img
                src={mezo10}
                alt="hydro"
                style={{ width: "100%", margin: "10px" }}
              />
              Mezoterapia igłowa skóry głowy to zabieg wykonywany przy pomocy
              igły, dzięki czemu możemy dotrzeć z substancjami odżywczymi
              dokładnie tam, gdzie skóra głowy ich potrzebuje. Substancje czynne
              dobierane są indywidualne do potrzeb, na podstawie konsultacji i
              badania trychologicznego. Mezoterapia igłowa skóry głowy daje
              bardzo dobre efekty. Nawilża skórę głowy, zagęszcza włosy i
              niweluje ich wypadanie, ten zabieg to coraz częściej wybierany
              przez osoby, którym doskwiera łysienie i wypadanie kosmyków
              włosów.
            </p>
            <p>
            Mezoterapia igłowa skóry głowy daje bardzo dobre efekty. Nawilża skórę
głowy, zagęszcza włosy i niweluje ich wypadanie, ten zabieg to coraz
częściej wybierany przez osoby,  którym doskwiera łysienie i wypadanie
kosmyków włosów.
</p>
            <div style={{ textAlign: "center" }} className="mezo-img">
              {" "}
              <img
                src={mezo11}
                alt="mezoterapia skóry głowy" 
              />
            </div>
            <p>
              Mezoterapia igłowa głowy działa bezpośrednio na włosy. Lecznicze
              substancje, czyli mikro i makroelementy, aminokwasy, minerały i
              witaminy z grupy B są podawane w strukturę skóry głowy. Komórki
              włosa są pobudzone do wzrostu, a skóra zostaje nawilżona, dzięki
              czemu poziom sebum staje się wyraźnie zredukowany.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
