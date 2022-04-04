import React, { Component } from 'react'
import Footer from "../Footer"
import hero4 from "../../images/hero4.jpg"
import m1 from '../../images/m1.jpg'
import m2 from '../../images/m2.jpg'
import m3 from '../../images/m3.jpg'
import m4 from '../../images/m4.jpg'


export default class Contact extends Component {
    render() {
        return (
            <>
            <div className="contact">
                <img src={hero4} alt="kosmetologia" className="contact-image"></img>
                <div className="about" style={{ marginBottom: "60px" }}>
                    <div className="about-text contact-text">
                        <h2>Kontakt</h2>
                        <p>
                            Zapraszam do kontaktu.
                            <br />
                            Adres: Częstochowska 8/100, 80-180 Gdańsk
                            <br />
                            Telefon: 537 939 011
                        </p>
                        <p style={{ fontWeight: "bold" }}>Natalia Luzak Skin Care – zapraszamy do skorzystania z naszej oferty!</p>

                        <iframe title="map" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=684&amp;height=416&amp;hl=en&amp;q=Cz%C4%99stochowska%208/100%20Gda%C5%84sk+(Natalia%20Luzak%20Skin%20Care)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="416" frameborder="0"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=b5d50151253ac3ccfa196d0bf32dd5bc76475f7a'></script>
                    </div>
                    <div className="about-info">
                        <img src={m1} alt="zabieg" />
                        <img src={m2} alt="kosmetologia" />
                        <img src={m3} alt="kosmetyka" />
                        <img src={m4} alt="zabieg kosmetyczny" />
                    </div>

                </div>
                <Footer />
                </div>
            </>
        )
    }
}
