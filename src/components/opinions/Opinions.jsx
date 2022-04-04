import React, { Component } from "react";
import Slider from "react-slick";
import quote from "../../images/quote.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      autoplayspeed: 200,
      infiniite: true,
    };
    return (
      <div className="opinions-container" style={{
          display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
      }}>
        <h1 className="opinions-header"> Opinie </h1>
        <p className="opinions-header-text"> Dziękuję za wszystkie miłe słowa! </p>
        <div className="opinions-slider">
          <Slider {...settings}>
            <div className="opinions-box">
              <h1 className="opinions-title">Kasia</h1>
              <p className="opinions-text">
                "Jestem mega zadowolona z makijażu permanentnego brwi wykonanego
                przez Panią Natalię. Przede wszystkim Pani Natalia dobrała
                odpowiedni kształt brwi do mojej twarzy. Zabieg został wykonany
                bardzo profesjonalnie i bez żadnego bólu. Z całego serca polecam
                wykonanie makijażu permanentnego u Pani Natalii."
              </p>
              <img src={quote} alt="quote" className="quote" />
            </div>
            <div className="opinions-box">
              <h1 className="opinions-title">Grzegorz</h1>
              <p className="opinions-text">
                " Jestem wdzięczny za badanie mikroskopowe skory głowy, w porę
                udało się dobrać zabieg mezoterapii i powstrzymać wypadanie
                włosów. Polecam Panią Natalię "{" "}
              </p>
              <img src={quote} alt="quote" className="quote" />
            </div>
            <div className="opinions-box">
              <h1 className="opinions-title">Ryszard</h1>
              <p className="opinions-text">
                " Salon kosmetyczny na najwyższym poziomie, makijaż permanentny
                bardzo estetyczny żona bardzo zadowolona. Polecam "{" "}
              </p>
              <img src={quote} alt="quote" className="quote" />
            </div>
            <div className="opinions-box">
              <h1 className="opinions-title">Dobrosława</h1>
              <p className="opinions-text">
                " Pani Natalia łączy w sobie pasję i profesjonalizm. Każda
                usługa wiąże się z obszernym wykładem na temat jej przebiegu
                oraz efektów po, i tego jak je utrzymać. W końcu trafiłam na
                osobę, która słucha klienta. Dla jego dobra nie zawsze wykona
                czego chce, ale zaproponuje świetny kompromis. "{" "}
              </p>
              <img src={quote} alt="quote" className="quote" />
            </div>
            <div className="opinions-box">
              <h1 className="opinions-title">Karolina</h1>
              <p className="opinions-text">
                " Pani Natalia jest zdolną, ambitną osobą, nikomu innemu nie
                zaufałam tak jak Pani Natalii. Ma ogromną wiedzę, którą ciągle
                pogłębia i się rozwija - i przekazuje ją klientom. Salon
                zdecydowanie zasługuje na większy rozgłos ! {" "}
              </p>
              " <img src={quote} alt="quote" className="quote" />{" "}
            </div>
            <div className="opinions-box">
              <h1 className="opinions-title">Aneta</h1>
              <p className="opinions-text">
                "Ta dziewczyna jest niesamowita! Olbrzymia wiedza
                kosmetologiczna, empatia,uśmiech na twarzy:) Cudowne brewki oraz
                oczyszczona i nawilżona cera. Polecam:* "{" "}
              </p>{" "}
              <img src={quote} alt="quote" className="quote" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
