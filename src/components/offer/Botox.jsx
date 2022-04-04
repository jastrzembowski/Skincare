import React from "react";
import woman7 from "../../images/woman7.jpg";
import Footer from "../Footer";
import hero4 from "../../images/hero4.jpg";
export default function Botox() {
  return (
    <>
      <div className="geneo">
        <img src={hero4} alt="kosmetologia" className="contact-image"></img>

        <div className="geneo-container">
          <div className="botox-title">
            <h2>Botox</h2>
          </div>
          <img
            src={woman7}
            alt="stymulatory tkankowe"
            className="stymulatory-first-image"
          />
          <div className="geneo-text">
              <h3>Botox to najskuteczniejszy zabieg medycyny estetycznej wykorzystywany na zmarszczki mimiczne.</h3>
            <p>
            Zmarszczki mimiczne mogą pojawić się już w młodym wieku. Są wynikiem ruchów mięśni twarzy i widoczne są przede wszystkim u osób z bogatą mimiką – szeroko uśmiechających się czy marszczących czoło. Walka z takimi zmarszczkami z wykorzystaniem zwykłych kremów czy serum nie jest skuteczna – zaleca się wtedy botox (botoks), który działa na zmarszczki mimiczne w miejscu ich powstawania, czyli w mięśniu.
            </p>
            
          </div>
          <div className="stymulatory-wskazania">
            <h3> Botox jest skuteczny na:</h3>
            <ul>
              <li>zmarszczki poprzeczne czoła</li>
              <li>zmarszczki pionowe między brwiami, tak zwane lwie zmarszczki</li>
              <li>zmarszczki wokół oczu takie jak kurze łapki</li>
              <li>bruzdy na dekolcie i szyi</li>
              <li>Oprócz tego botoks wykorzystywany jest na opadające powieki, opadające kąciki ust, przy leczeniu nadmiernej potliwości, migren czy bruksizmu – zgrzytania zębów.</li>
          
            </ul>
            <h3>Jak działa botoks?</h3>
            <p>
            Botox to nazwa toksyny botulinowej typu A, która wytwarzana jest przez bakterie Clostridium botulinum. W dużych dawkach jest ona silnie trująca, ale w niewielkich używana jest powszechnie w zabiegach medycznych, w tym medycyny estetycznej.

Związek ten jest neurotoksyną, która oddziałuje na układ nerwowy. Powoduje zablokowanie połączeń pomiędzy zakończeniami nerwów oraz unerwianymi przez nie mięśniami, dlatego mięsień staje się wtedy rozluźniony. Właśnie dlatego botoks jest obecnie używany w redukcji zmarszczek mimicznych, czyli tych wywoływanych przez ruchy mięśni twarzy.

Po wstrzyknięciu toksyny botulinowej typu A cienką igłą w miejsce zmarszczki, dochodzi do jej stopniowego wygładzenia. Efekt nie jest jednak widoczny od zaraz. Najczęściej należy poczekać na niego od 3 do 10 dni w zależności od indywidualnych predyspozycji, w tym od wieku, stanu skóry, a także okolic, w które botoks został podany.

Warto przy tym zaznaczyć, że botox nie daje efektu trwałego – jest on odwracalny. Dochodzi wówczas do neutralizacji toksyny, a tym samym mięsień odzyskuje swoją wcześniejszą sprawność i zmarszczka znów zaczyna być widoczna.

Na szczęście, botoks można powtarzać systematycznie wtedy, gdy efekt zaczyna się zmniejszać.
            </p>
            <h3>Wygładzenie zmarszczek botoksem – efekt na 3-6 miesięcy</h3>
            <p>
            W zależności od indywidualnych cech każdej osoby, czas działania botoksu wynosi najczęściej od 3 do 6 miesięcy, ale u niektórych osób może być to nawet 8 miesięcy. Po tym czasie mimika twarzy zaczyna powoli powracać i to właśnie wtedy można dokonać kolejnego zabiegu.

Zaleca się, aby zabieg nie był przeprowadzany częściej niż raz na 3 miesiące. Warto przy tym zaznaczyć, że po wykonaniu każdego zabiegu wstrzyknięcia botoksu czas pomiędzy kolejnymi zabiegami będzie się wydłużał. Jeśli jednak zabieg nie będzie wykonany przez dłuższy okres, wtedy zmarszczki zaczną się pogłębiać, co wynika z naturalnych procesów starzeniowych skóry.

Aby dobrać optymalną częstotliwość wykonania zabiegu, zaleca się konsultację z profesjonalistą – lekarzem medycyny estetycznej. Będzie on mógł wtedy określić stan skóry oraz jej indywidualne potrzeby związane z zabiegiem wstrzyknięcia botoksu.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
