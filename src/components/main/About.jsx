import React, {useEffect} from 'react'
import m1 from '../../images/m1.jpg'
import m2 from '../../images/m2.jpg'
import m3 from '../../images/m3.jpg'
import m4 from '../../images/m4.jpg'
import Aos from "aos"
import "aos/dist/aos.css"

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 800});
    
    },[]);
    return (
        <div className="about">
            <div className="about-text">
                <h2>O mnie</h2>
                <div className="about-text-container"  data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
                <span>
                    Klinika medycyny estetycznej <span style={{fontWeight: 800}}>Skin Care Natalia Luzak </span> to miejsce, w którym możesz kompleksowo zadbać o swój wygląd. Dzięki wykorzystaniu najnowocześniejszych technologii oraz preparatów możemy zaoferować Ci <span style={{fontWeight: 800}}>najlepsze</span> rezultaty zabiegów medycyny estetycznej!<br />

                    Nasza specjalność to medycyna estetyczna, dzięki której można uzyskać doskonałe rezultaty – szybko, wygodnie i bezpiecznie. Zaawansowane procedury prowadzone bez skalpela mogą zaoferować długotrwałe efekty – bez konieczności korzystania z inwazyjnych zabiegów.<br />

                    W Skin Care Natalia Luzak  uzyskasz dostęp do szerokiej gamy procedur dedykowanych dla kobiet oraz mężczyzn – bez ograniczeń wiekowych, ponieważ wierzymy, że piękno osiągalne jest dla każdego bez względu na metrykę!<br />

                    </span>
                </div>
                <div className="about-text-container-s"  data-aos="fade-left"
     data-aos-offset="200"
     data-aos-easing="ease-in">
                    <span>
                    <span style={{fontWeight: 800}}>Skin Care Natalia Luzak</span> – szeroka gama zabiegów
                    W klinice medycyny estetycznej Skin Care w Gdańsku można skorzystać z pełnej palety zabiegów odmładzających na twarz.<br />

                    Oferujemy między innymi zabiegi bazujące na kwasie hialuronowym, peelingi medyczne, zabiegi mezoterapii igłowej, powiększanie i modelowanie ust, lipolizę iniekcyjną.<br />

                    Skutecznie usuwamy niedoskonałości, w tym zmarszczki, blizny, przebarwienia, cellulit, rozstępy, a także pomagamy w przedłużeniu młodości skóry.<br />

                    Jesteśmy skoncentrowani na indywidualnych oczekiwaniach i potrzebach naszych pacjentów, dlatego doradzamy takie zabiegi, które pozwalają na osiągnięcie wymarzonego efektu.<br />

                 
                </span>
                </div>
            </div>
            <div className="about-info"  data-aos="fade-up"    data-aos-offset="400">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnatalialuzakpermanentmakeup&tabs=timeline&width=300&height=850&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="850" style={{border:"none", overflow:"hidden", marginTop:"50px"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>

        </div>
    )
}
