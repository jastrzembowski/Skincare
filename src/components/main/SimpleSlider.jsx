import React from "react";
import Slider from "react-slick";
import hero from "../../images/hero.jpg";
import hero2 from "../../images/hero2.jpg";

export default function SimpleSlider() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplayspeed: 500,
    infinite: true,
    fade: true,
    height: "655px",
  };

  return (
    <div
      id="header"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
        height: "655px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          zIndex: 100,
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Slider
          {...settings}
          style={{
            width: "100vw",
          }}
        >
          <div>
            <img
              src={hero}
              alt="skin care"
              style={{
                height: "655px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <img
              src={hero2}
              alt="natalia luzak"
              style={{
                height: "655px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
