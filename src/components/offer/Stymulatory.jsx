import React from "react";
import woman4 from "../../images/woman4.jpg";
import stymu from "../../images/stymu.jpg";
import Footer from "../Footer";
import hero4 from "../../images/hero4.jpg";
export default function Stymulatory() {
  return (
    <>
      <div className="geneo">
        <img src={hero4} alt="kosmetologia" className="contact-image"></img>

        <div className="geneo-container">
          <div className="stymulatory-title">
            <h1>Stymulatory tkankowe</h1>
          </div>
          <img
            src={woman4}
            alt="stymulatory tkankowe"
            className="stymulatory-first-image"
          />
          <div className="geneo-text">
            <p>
              Stymulatory tkankowe, to gama preparatów do iniekcji i
              najnowocześniejsze rozwiązanie w kosmetologii i zabiegach
              estetycznych! Stymulatory możemy odróżnić ze względu na rodzaj
              substancji czynnych, mechanizm działania, wskazania, obszary
              zabiegowe, techniki iniekcji, rezultaty oraz długość ich
              utrzymywania się. Do grupy stymulatorów tkankowych zaliczamy
              preparaty na bazie hydroksyapatytu wapnia, kolagenu, aminokwasów
              czy kwasu L-polimlekowego.
            </p>
            <img
              src={stymu}
              alt="stymulatory tkankowe"
              className="stymulatory-image"
            />
            <p>
              Działanie stymulatorów tkankowych 1. Służą do odbudowy struktury
              skóry, dzięki stymulacji komórek skóry, kolagenu i elastyny 2.
              Dają naturalne efekty poprawy jędrności, gęstości oraz jakości
              skóry 3. Nadają skórze świeżość i promienność. Stymulatory
              tkankowe nie zmieniają rysów twarzy pod względem wolumetrycznym!
              Przyczyniają się do spiralizowania się włókien kolagenowych, czyli
              ich skracania. W konsekwencji prowadzi to do zagęszczenia struktur
              skóry, poprawy owalu, tworzenia działań anty-grawitacyjnych.
              Zabieg wykonuje się w znieczuleniu miejscowym, za pomocą kremu
              znieczulającego, co zdecydowanie zwiększa komfort pacjenta podczas
              wykonywanego zabiegu.
            </p>
          </div>
          <div className="stymulatory-wskazania">
            <h3> WSKAZANIA DO ZABIEGU</h3>
            <ul>
              <li>oznaki starzenia się, w postaci załamań skórnych</li>
              <li>zarysowana bruzda nosowo-wargowa</li>
              <li>widoczna rynienka doliny łez</li>
              <li>kurze łapki</li>
              <li>zasinienia pod oczami</li>
              <li>utrata jędrności</li>
              <li>spadek gęstości skóry</li>
              <li>zaburzony owal twarzy, tzw. chomiki</li>
              <li>przesuszona i poszarzała skóra</li>
              <li>działanie profilaktyczne,</li>
            </ul>
            <p>
              Dzięki stymulacji naturalnie zachodzących procesów w naszej
              skórze, uzyskujemy naturalny efekt na dłużej! Przy użyciu
              wypełniacza uzyskujemy chwilowy efekt wolumetryczny, który
              stopniowo zanika. Warto wiedzieć, jakie są różnice między
              produktami stymulującymi kolagen a wypełniaczem.
            </p>
            <p>
              Podstawową różnicą między tymi dwoma preparatami jest obecność
              kwasu hialuronowego, o zwiększonej lepkości, który w stymulatorach
              nie występuje w postaci usieciowanej. Przez co nie nadaje skórze
              twarzy efektu wolumetrycznego, tak jak w przypadku zastosowania
              wypełniaczy. W ich składzie znajdziemy wyłącznie usieciowany kwas
              hialuronowy, bez dodatkowych substancji aktywnych. Co za tym
              idzie, przy zastosowaniu stymulatorów nie uzyskamy sztucznego,
              przerysowanego efektu! Potrafimy uwydatnić kości policzkowe,
              zredukować tkankę tłuszczową w strefie policzków oraz zadbać o
              strefę oczu i problematyczną dolinę łez, bez uzyskania
              wolumetrycznego i często niestety przerysowanego efektu
              wypełnienia.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
