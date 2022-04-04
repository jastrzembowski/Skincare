import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Footer from '../Footer';
import hero4 from "../../images/hero4.jpg"
import monstera from "../../images/monstera.png"
import sakura from "../../images/sakura.png"
export default function prices() {
  return (
    <>
    <div style={{height:"100%", overflow: "hidden", position: "relative"}}>
      <img src={monstera} alt="monstera" className="monstera" />
      <img src={sakura} alt="sakura" className="sakura"/>
     <img src={hero4} alt="kosmetologia" className="contact-image"></img>
     <div className="prices-container">
     <h2 style={{textAlign: "center"}}>Cennik</h2>
    <div className="tabs-container">
  <Tabs style={{
    marginTop: "100px",
  }}>
    <div style={{display: "flex", height: "520px"}}>
    <TabList >
      <div style={{display: "flex", flexDirection:"column", overflow: "hidden", overflowY: "scroll", height: "100%", width: "150px"}}>
      <Tab>Makijaż <br/> permanentny</Tab>
      <Tab>Mezoterapia</Tab>
      <Tab>Botox</Tab>
      <Tab>PH Formuła</Tab>
      <Tab>Stymulatory<br/>tkankowe</Tab>
      <Tab>Kwas<br/>hialuronowy</Tab>
      <Tab>Stylizacja<br/>oprawy oka</Tab>
      <Tab>Geneo</Tab>
      <Tab>Terapia na<br/>wypadanie włosów</Tab>
      <Tab>Peelingi<br/>Chemiczne</Tab>
      <Tab>Oczyszczanie<br/>wodorowe</Tab>
      <Tab>Zabiegi<br/>oczyszczające</Tab>
      <Tab>Fale<br/>radiowe</Tab>
      <Tab>Usługi dodatkowe</Tab>
      </div>
    </TabList>
<div style={{width: "80%"}}>
    <TabPanel>
      <div className="tab1">
      <p>Brwi ombre</p><p>600zł</p>
      </div>
      <div className="tab2">
      <p>Brwi pudrowe</p><p>600zł</p>
      </div>
      <div className="tab1">
      <p>Brwi microblading</p><p>700zł</p>
      </div>
      <div className="tab2">
      <p>Eyeliner</p><p>500zł</p>
      </div>
      <div className="tab1">
      <p>Linia zagęszczająca</p><p>400zł</p>
      </div>
      <div className="tab2">
      <p>Usta natural lips</p><p>700zł</p>
      </div>
      <div className="tab1">
      <p>Usta kontur + cień</p><p>700zł</p>
      </div>
      <div className="tab2">
      <p>HIT! Ptotopen + Age!</p><p>350zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Twarz</p><p>350zł</p>
      </div>
      <div className="tab2">
      <p>Oczy</p><p>200zł</p>
      </div>
      <div className="tab1">
      <p>Boostery</p><p>600zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>1 okolica</p><p>350zł</p>
      </div>
      <div className="tab2">
      <p>2 okolice</p><p>600zł</p>
      </div>
      <div className="tab1">
      <p>3 okolice</p><p>750zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Age</p><p>200zł</p>
      </div>
      <div className="tab2">
      <p>Acne</p><p>200zł</p>
      </div>
      <div className="tab1">
      <p>Mela</p><p>280zł</p>
      </div>
      <div className="tab2">
      <p>C.R.</p><p>190zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Sunekos 200 (oczy) </p><p>400zł</p>
      </div>
      <div className="tab2">
      <p>Sunekos (twarz) </p><p>500zł</p>
      </div>
      <div className="tab1">
      <p>Polifill Dives Med</p><p>800zł</p>
      </div>
      <div className="tab2">
      <p>Ejal 40</p><p>450zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Bruzdy nosowo-wargowe</p><p>550zł</p>
      </div>
      <div className="tab2">
      <p>Kurze łapki</p><p>550zł</p>
      </div>
      <div className="tab1">
      <p>Zmarszczki palacza</p><p>550zł</p>
      </div>
      <div className="tab2">
      <p>Modelowanie ust</p><p>650zł</p>
      </div>
      <div className="tab1">
      <p>Dolina łez</p><p>800zł</p>
      </div>
      <div className="tab2">
      <p>Modelowanie żuchwy</p><p>1600zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Geometria + farba żelowa </p><p>50zł</p>
      </div>
      <div className="tab2">
      <p>Laminacja + botoks </p><p>90zł</p>
      </div>
      <div className="tab1">
      <p>Laminacja + botoks + farba żelowa</p><p>120zł</p>
      </div>
      <div className="tab2">
      <p>Regulacja wosk / brzytwa</p><p>30zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Bright - rozświetlenie </p><p>220zł</p>
      </div>
      <div className="tab2">
      <p>Revive - ujędrnienie </p><p>220zł</p>
      </div>
      <div className="tab1">
      <p>+ szyja i dekolt</p><p>40zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Hair Care </p><p>300zł</p>
      </div>
      <div className="tab2">
      <p>Micro. + Placenta</p><p>300zł</p>
      </div>
      <div className="tab1">
      <p>Dr. Cyj</p><p>450zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Retinowy </p><p>220zł</p>
      </div>
      <div className="tab2">
      <p>Ferulowy </p><p>170zł</p>
      </div>
      <div className="tab1">
      <p>Migdałowy</p><p>170zł</p>
      </div>
      <div className="tab2">
      <p>Striva derm 70%</p><p>170zł</p>
      </div>
      <div className="tab1">
      <p>Traneksamowy</p><p>170zł</p>
      </div>
      <div className="tab2">
      <p>Pro - Ge - Lift </p><p>250zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Wieloetapowy zabieg z hydrabrazją <br/>nasyconą w substancje aktywne kwasyzłuszczające</p><p style={{paddingRight: "20px"}}>190zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Chemiabrazja + vit. C</p><p>170zł</p>
      </div>
      <div className="tab2">
      <p>Oczyszczanie manualne</p><p>160zł</p>
      </div>
      <div className="tab1">
      <p>Peeling kawitacyjny</p><p>150zł</p>
      </div>
     
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Twarz </p><p>150zł</p>
      </div>
      <div className="tab2">
      <p>Twarz, szyja, dekolt </p><p>200zł</p>
      </div>
      <div className="tab1">
      <p>Brzuch / uda / pośladki</p><p>90zł</p>
      </div>
      <div className="tab2">
      <p>Ciało - komplet</p><p>230zł</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab1">
      <p>Dopigmentowanie od 4-6 tygodni</p><p>100zł</p>
      </div>
      <div className="tab2">
      <p>Dopigmentowanie do 1,5 roku</p><p>-50% aktualnej ceny</p>
      </div>
      <div className="tab1">
      <p>Wybielenie, rozjaśnienie</p><p>100zł</p>
      </div>
      <div className="tab2">
      <p>Pakiet brwi / usta + kreska</p><p>-15% aktualnej ceny</p>
      </div>
    </TabPanel>
    </div>
    </div>
  </Tabs>
  </div>
  </div>
  <Footer/>
  </div>
  </>
)}