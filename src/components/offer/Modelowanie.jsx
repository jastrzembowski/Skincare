import React from "react";
import hero4 from "../../images/hero4.jpg";
import modelowanie1 from "../../images/modelowanie1.jpg";
import modelowanie2 from "../../images/modelowanie2.jpg";
import Footer from "../Footer";
export default function Modelowanie() {
  return (
    <>
      <img src={hero4} alt="kosmetologia" className="contact-image"></img>

      <div className="modelowanie">
        <div className="modelowanie-container">
          <h2>Modelowanie ust </h2>
          <img
            src={modelowanie1}
            alt="modelowanie ust"
            classname="modelowanie-image"
          />
          <div className="modelowanie-text">
            <p>
              Powiększanie czy modelowanie ust to najczęściej wykonywany zabieg
              w medycynie estetycznej. Powiększanie ust kwasem hialuronowym
              przynosi natychmiastowe efekty. Łuk kupidyna jest zmysłowo
              podkreślony, a wydatne, kształtne i błyszczące usta, bardziej
              przyciągają spojrzenia.
              <br />
              Dzięki temu, że kwas hialuronowy powoduje wiązanie wody, powoduje
              to iż usta są cały czas jędrne i wilgotne, a przy tym mają piękny
              naturalny koloryt.
              <br />
              Kwas hialuronowy powoduje wiązanie wody, przez co usta są cały
              czas wilgotne.
            </p>
            <img
              src={modelowanie2}
              alt="modelowanie ust"
              className="modelowanie-text-image"
            />
            <h4>Kiedy zobaczę efekt? </h4>
            <p>
              Efekt jest widoczny zaraz po zabiegu. Jeszcze lepszy po 2-3
              tygodniach, kiedy ustąpi niewielki obrzęk lub zdarzające się
              czasami siniaki i krwiaczki ustąpią.
              <br />
              Przez 2 tygodnie należy unikać rozgrzewania i masowania. Efekt
              powiększania kiedy kwas hialuronowy „ułoży się” w tkankach nastąpi
              do około 4 tygodni. Do tego czasu może być niekiedy wyczuwalne
              niewielkie stwardnienie tkanek. Osoby mające skłonność do
              występowania opryszczki powinny stosować profilaktycznie przez 3
              dni przed zabiegiem leki p/wirusowe np. Hascovir / Heviran, leki
              te należy kontynuować przez 2 dni po zabiegu.
              <br />
              Efekty zabiegu zależą od wieku pacjentki oraz stosowania się do
              zaleceń pozabiegowych. Najczęściej utrzymują się od 10 do 12
              miesięcy.
            </p>{" "}
            <h4>Jakie są przeciwskazania? </h4>
            <p>
              Kwas hialuronowy to substancja całkowicie bezpieczna i naturalna,
              ponieważ jest fizjologiczna, biozgodna i w pełni biodegradowalna.
              Ryzyko wystąpienia reakcji alergicznej jest więc znikome.
              Sa jednak następujące przeciwskazania:
              <br/>
              Ciąża i okres karmienia piersią
              <br />
              Choroby nowotworowe
              <br />
              Tendencja do bliznowców
              <br />
              Aktualnie istniejące infekcje – np. opryszczka
              <br />
              Niewyrównana cukrzyca
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
