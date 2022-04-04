import React from "react";
import hero4 from "../../images/hero4.jpg";
import logo4 from "../../images/logo4.png"
import Footer from "../Footer";
import woman1 from "../../images/woman1.jpg";
export default function Kwas() {
  return (
    <>
      <img src={hero4} alt="kosmetologia" className="contact-image"></img>

      <div class="kwas">
        <div class="kwas-container">
          <div class="hydro-title">
            <h1>Hydrotec+</h1>
            <h2>Oczyszczanie wodorowe skóry</h2>
          </div>
          <div class="hydrotec-text-container">
         

            <p class="hydrotec-text">   <img
              src={woman1}
              alt="hydro"
            />
              {" "}
             Hydrotec+ to innowacyjne urządzenie bazujące na działaniu
              aktywnego wodoru. Aparat posiada dwie funkcje: oczyszczania
              wodorowego oraz hydrabrazji. Podstawą działania zabiegu jest
              aktywny wodór wytwarzany dzięki zastosowaniu wysokiej generatora
              wysokiej mocy – 160W. Hydrotec+ usuwa z wody tlen oraz
              niekorzystne jony chloru, siarki, fosforu i nasyca ją aktywnym
              wodorem wraz z jonami wapnia, magnezu i potasu. Aplikacja tych
              dobroczynnych substancji możliwa jest dzięki wytworzonemu
              podciśnieniu. W ten sposób uzyskujemy efekt peelingu zewnętrznych
              warstw naskórka. Hydrotec+ oferuje szereg innowacyjnych
              technologii doskonale przynoszących rezultaty w procesie
              rewitalizacji skóry. Aparatura Hydrotec+ wykorzystuje z
              powodzeniem biofizyczne właściwości aktywnego wodoru – będącego
              najsilniejszym antyoksydantem.
            </p>
            <div className="hydro-logo-container">            <img src={logo4} alt="hydrotec-logo"/>
            </div>
 <p>
              Innowacyjne oczyszczanie wodorowe skóry to nowość w dziedzinie
              kosmetologii w zakresie pielęgnacji skóry twarzy. Zabieg
              oczyszczania wodorowego realizowany przy zastosowaniu
              specjalistycznego urządzenia Hydrotec+, polega na wprowadzeniu do
              wewnątrz skóry mikroskopijnych cząsteczek aktywnego wodoru.
              Cząsteczki te doskonale oczyszczają komórki skóry oraz
              neutralizują tak zwane wolne rodniki znajdujące się na jej
              powierzchni. Pełen zabieg składa się z trzech etapów. Pierwszym z
              nich jest peeling, który ma za zadanie oczyścić skórę z resztek
              makijażu czy też zrogowaciałego naskórka. Następnie do głębszych
              warstw skóry wprowadzany jest aktywny wodór. Oczyszczanie wodorowe
              wykorzystuje technikę strugi wody pod zwiększonym ciśnieniem.
              Dzięki impulsom elektrycznym w skórze tworzą się mikro-kanały
              będące idealną drogą do warstwy skóry właściwej. Jako najmniejszy
              i najlżejszy z pierwiastków – wodór z łatwością wnika w głąb,
              gdzie wiąże się z najbardziej szkodliwymi wolnymi rodnikami
              tlenowymi. Skutecznie je neutralizuje pozbawiając szkodliwych dla
              skóry właściwości, a następnie w postaci wody wydalany jest z
              organizmu, a mikroskopijne cząsteczki wodoru pozwalają dotrzeć w
              wewnętrzne warstwy skóry dobroczynnym jonom. Na koniec, skóra
              twarzy poddawana jest przyjemnemu masażowi z zastosowaniem
              odpowiednio dobranych kosmetyków.
            </p>

            <p>
              Po zabiegu oczyszczania wodorowego warto zabezpieczyć skórę przed
              ponownym namnażaniem się wolnych rodników. Efekt ten można uzyskać
              dzięki rozprowadzeniu antyoksydantów na obszarze poddanemu
              zabiegowi. Tutaj warto wspomnieć, że antyoksydanty to nic innego
              jak substancje ochronne charakteryzujące się małą reaktywnością.
              Związki te możemy określić jako „zamiatacze wolnych rodników”. Do
              procesu laminacji można wykorzystać takie substancje jak: kwas
              askorbinowy, witamina E czy koenzym Q10. Dzięki wszystkim etapom
              zabiegu możemy oczekiwać długotrwałych rezultatów w postaci
              nawilżenia, elastyczności i rozświetlenia skóry.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
