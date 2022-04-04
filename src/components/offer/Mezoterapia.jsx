import React from "react";
import woman5 from "../../images/woman5.jpg";
import mezo1 from "../../images/mezo1.jpg";
import mezo2 from "../../images/mezo2.jpg";
import mezo3 from "../../images/mezo3.jpg";
import mezo4 from "../../images/mezo4.jpg";
import Footer from "../Footer";
import hero4 from "../../images/hero4.jpg";

export default function Mezoterapia() {
  return (
    <>
      <div className="geneo">
        <img src={hero4} alt="kosmetologia" className="contact-image"></img>

        <div className="geneo-container">
          <div className="mezo-title">
            <h1>Mezoterapia mikroigłowa</h1>
          </div>
          <img
            src={woman5}
            alt="geneo"
            className="geneo-first-image"
            style={{ paddingBottom: "50px" }}
          />
          <div className="geneo-text">
            <p>
              Mezoterapia mikroigłowa (cienkoigłowa) polega na mechanicznym
              nakłuwaniu skóry urządzeniem wyposażonym w sterylny kartridż z
              mikroigiełkami. Poprzez otwarcie kilku tysięcy mikrokanalików
              możemy wprowadzić skoncentrowane składniki odżywcze w specjalnym
              preparacie w głąb skóry, pomijając barierę ochronną naskórka.
            </p>
            <img
              src={mezo1}
              alt="mezoterapia mikroigłowa"
              className="mezo-image"
            />
            <p>
              Nakłuwanie naskórka jest kontrolowane i regulowane w zależności od
              odczuć i potrzeb klientki. Dodatkową zaletą wytworzenia
              mikrourazów jest to, że stymulują one dodatkowo skórę do
              nasilonych procesów regeneracyjnych. Zabieg może być stosowany na
              twarz, w tym okolice oczu, szyję, dekolt, ale także na inne,
              wybrane partie ciała. Poza dogłębną penetracją preparatem
              mikronakłucia są tu istotne. Za ich sprawą zostają uwolnione
              czynniki wzrostu znajdujące się w płytkach krwi. Następuje podział
              fibroblastów i komórek macierzystych, dzięki czemu powstają
              kolagen i elastyna. Nakłucia poprawiają ponadto mikrokrążenie
              podskórne.
            </p>
            <p>
              W trakcie zabiegu wykonuje się kilkadziesiąt tysięcy mikronakłuć.
              Ich głębokość zależy od spodziewanego efektu, obszaru ciała
              poddawanego zabiegowi, a także techniki. Głębokość początkowa to
              0,25 mm. Skóra w ciągu około 20 minut wchłania nawet 90%
              zaaplikowanego preparatu. Po zabiegu dajemy skórze czas do
              wchłonięcia reszty specyfiku, po czym możemy nałożyć maskę
              łagodzącą zaczerwienienia.
            </p>
            <p>
              <span style={{ fontWeight: "700px" }}>
                Zabieg zazwyczaj poprzedzony jest znieczuleniem w kremie np.:
                Emla.
              </span>
            </p>
            <p>
              Do zalet mezoterapii mikroigłowej należy bezpieczeństwo tej metody
              (kontrola głębokości nakłuć, sterylność) oraz efekty widoczne już
              po jednej kuracji. A jakie są zalety przeprowadzonego zabiegu?
              Skóra twarzy po zabiegu mezoterapii jest przez kilka dni
              podrażniona i zaczerwieniona, może również wystąpić obrzęk oraz
              uczucie świądu. W końcu zewnętrzna warstwa naskórka ulega
              złuszczeniu. Wszystkie te objawy są normalne i nie należy się nimi
              martwić. Mikronakłucia wywołują stan zapalny skóry, aby pobudzić
              ją do wzmożonej regeneracji. Bardzo ważna w tym czasie jest
              właściwa pielęgnacja podrażnionej skóry. Zrezygnuj z makijażu
              przynajmniej w ciągu doby po zabiegu, staraj się także nie dotykać
              twarzy. Zwiąż włosy, aby nie drażniły skóry.
            </p>
          </div>
          <div className="mezo-boxes">
            <div className="mezo-content">
              <h3>Zalety Mezoterapii Mikroigłowej</h3>
              <ul>
                <li>
                  pozwala na uzyskanie efektu liftingu (przy wykorzystaniu kwasu
                  hialuronowego)
                </li>
                <li>poprawia jędrność i elastyczność skóry</li>
                <li>modeluje kontury twarzy</li>
                <li>redukuje zmarszczki mimiczne i statyczne</li>
                <li>stymuluje produkcję kolagenu i elastyny</li>
                <li>ogranicza wydzielania sebum</li>
                <li>rozświetla skórę</li>
                <li>redukuje cellulit</li>
              </ul>
            </div>
            <div className="mezo-content">
              <h3>Działanie</h3>
              <ul>
                <li>
                  w krótkim czasie (około 20 minut) skóra absorbuje nawet do 90%
                  produktu kosmetycznego
                </li>
                <li>ściśle kontrolowana, sterylna i bezpieczna metoda</li>
                <li>stymuluje procesy samonaprawcze</li>
                <li>wzmaga produkcję kolagenu i elastyny</li>
                <li>
                  pozwala na szybki powrót do codziennych obowiązków, bez
                  potrzeby rekonwalescencji
                </li>
                <li>efekty są widoczne już po pierwszym zabiegu</li>
              </ul>
            </div>
          </div>
          <div className="zalecenia">
            <h3>Zalecenia</h3>
            <p>
              {" "}
              Częstotliwość oraz liczba zabiegów są dostosowywane do potrzeb
              skóry Klienta. Najlepsze efekty uzyskuje się po serii 3-4
              zabiegów, wykonywanych w odstępach co 3-4 tygodnie. Następnie
              zalecamy powtórzenie takiej kuracji co pół roku. W wieku około
              25-30 lat można wykonać profilaktycznie jednorazowy zabieg
              pielęgnacyjny.
            </p>
          </div>
          <div className="zalecenia">
            <h3>Przeciwwskazania</h3>
            <ul>
              <li>
                ciąża i okres karmienia piersią (przeciwwskazanie względne)
              </li>
              <li>podatność na alergie skórne</li>
              <li>cukrzyca</li>
              <li>
                miejscowe stany zapalne (infekcje wirusowe i bakteryjne, w tym
                opryszczka w stanie aktywnym)
              </li>
              <li> skóra źle tolerująca iniekcje</li>
              <li> przyjmowanie preparatów przeciwzakrzepowych i aspiryny</li>
              <li> choroby krwi (anemia, małopłytkowość)</li>
              <li> choroby ogólnoustrojowe (metaboliczne, nowotwory)</li>
              <li> skłonność do bliznowacenia</li>
              <li> terapia Roaccutanem lub jego odpowiednikami</li>
              <li> skóra opalona</li>
              <li> trądzik różowaty</li>
              <li>liczne teleangiektazje (rozszerzone naczynka krwionośne)</li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap:"wrap"
            }}
          >
            <img
              src={mezo2}
              alt="mezoterapia mikroigłowa"
              className="mezo-image"
            />
            <img
              src={mezo3}
              alt="mezoterapia mikroigłowa"
              className="mezo-image"
            />
            <img
              src={mezo4}
              alt="mezoterapia mikroigłowa"
              className="mezo-image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
