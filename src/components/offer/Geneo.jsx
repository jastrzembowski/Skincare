import React from "react";
import geneo from "../../images/geneo.jpg";
import geneo2 from "../../images/geneo3.jpg";
import Footer from "../Footer";
import hero4 from "../../images/hero4.jpg"
export default function Geneo() {
  return (
    <>
      <div className="geneo">
      <img src={hero4} alt="kosmetologia" className="contact-image"></img>

        <div className="geneo-container">
          <div className="geneo-title">
            <h1>GENEO OXYGEN</h1>
            <h2>Złuszczenie, odżywienie, natlenienie skóry</h2>
          </div>
          <img src={geneo} alt="geneo" className="geneo-first-image" />
          <div className="geneo-text">
          <p>
            Zabieg Geneo to rewolucyjny sposób na złuszczanie skóry,
            gwarantujący jej odmłodzenie, odświeżenie i poprawę jędrności.
            Innowacyjna pielęgnacja skóry twarzy przy pomocy Geneo została
            zainspirowana gorącymi źródłami krystalicznie czystej wody.
            Wyjątkowość zabiegu polega na wykorzystaniu bąbelków powietrza
            wzbogaconych o bardzo wysokie stężenie dwutlenku węgla, który ma
            pozytywny wpływ na skórę. CO2, który działa na wierzchniej
            powierzchni skóry, pobudza przemieszczanie się tlenu. Efekt ten to
            tzw. efekt Bohra.
          </p>
          <img src={geneo2} alt="geneo2" className="geneo-image" />
          <p>
            Tym samym skutecznie zwiększa szybkość przepływu krwi – który działa
            pobudzająco na skórę. Dzięki szybszemu krążeniu skóra jest lepiej
            ukrwiona, przez co szybciej się regeneruje, a tym samym zastępuje
            stary i wyeksploatowany naskórek nową warstwą komórek. Szybsze
            krążenie krwi, potęgujące jej złuszczenie, a tym samym stanowi
            świetną podstawę dla kolejnych zabiegów odżywczo-pielęgnacyjnych,
            gdyż znacznie ułatwia wchłanianie składników pielęgnacyjnych przez
            skórę.
          </p>
</div><div>
          <h2>FAQ</h2>
         <h3> WSKAZANIA DO ZABIEGU</h3>

<p>Pierwsze oznaki starzenia, zmarszczki mimiczne, cienie i worki pod
oczami, szara, zmęczona cera, przebarwienia, wiotkość skóry twarzy,
szyi i dekoltu.</p>

<h3>PRZECIWWSKAZANIA</h3>

<p>Choroby nowotworowe skóry, ciąża i karmienie piersią, miejscowe –
wirusowe lub bakteryjne – zapalenie skóry, np. aktywna opryszczka lub
trądzik, cukrzyca, zaburzenia krążenia, kuracja izotretynoiną.</p>

<h3>JAK PRZYGOTOWAĆ SIĘ DO ZABIEGU?</h3>

<p>Nie musisz nic robić przed zabiegiem.</p>

<h3>PIELĘGNACJA PO ZABIEGU</h3>

<p>Nawilżanie skóry kremem zaleconym przez kosmetologa.</p>

<h3>CZEGO MOŻNA SIĘ SPODZIEWAĆ PO ZABIEGU?</h3>

<p>Dyskretne zaczerwienienie i napięcie skóry, które znika po kilku godzinach.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
