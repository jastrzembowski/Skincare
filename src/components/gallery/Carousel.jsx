import React, { Component } from "react";
import i1 from "../../images/gallery/i1.jpg";
import i2 from "../../images/gallery/i2.jpg";
import i3 from "../../images/gallery/i3.jpg";
import i11 from "../../images/gallery/i11.jpg";
import i12 from "../../images/gallery/i12.jpg";
import i13 from "../../images/gallery/i13.jpg";
import i14 from "../../images/gallery/i14.jpg";
import i15 from "../../images/gallery/i15.jpg";
import i16 from "../../images/gallery/i16.jpg";
import i17 from "../../images/gallery/i17.jpg";
import i18 from "../../images/gallery/i18.jpg";
import i19 from "../../images/gallery/i19.jpg";
import i20 from "../../images/gallery/i20.jpg";
import i21 from "../../images/gallery/i21.jpg";
import i22 from "../../images/gallery/i22.jpg";
import i23 from "../../images/gallery/i23.jpg";
import i24 from "../../images/gallery/i24.jpg";
import i25 from "../../images/gallery/i25.jpg";
import i26 from "../../images/gallery/i26.jpg";
import i27 from "../../images/gallery/i27.jpg";
import i28 from "../../images/gallery/i28.jpg";
import i29 from "../../images/gallery/i29.jpg";
import i30 from "../../images/gallery/i30.jpg";
import i31 from "../../images/gallery/i31.jpg";
import Footer from "../Footer";
import Window from "../Window";
export default class Carousel extends Component {
  render() {
    return (
      <>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "30px" }}
        >
          <div style={{ width: "80%" }}>
            <h1 className="gallery-text">Galeria </h1>
            <div class="container">
              <div class="gallery-container w-3 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i1} alt="nature" />
                  </div>
                </div>
              </div>

              <div class="gallery-container w-3 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i30} alt="people" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i18} alt="sport" />
                  </div>
                </div>
              </div>

              <div class="gallery-container w-1 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i2} alt="fitness" />
                  </div>
                </div>
              </div>

              <div class="gallery-container w-4 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i11} alt="food" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-3">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i31} alt="travel" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i17} alt="art" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i20} alt="cars" />
                  </div>
                </div>
              </div>
              <div class="gallery-container w-3 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i22} alt="nature" />
                  </div>
                </div>
              </div>

              <div class="gallery-container w-3 h-3">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i23} alt="people" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i15} alt="sport" />
                  </div>
                </div>
              </div>

              <div class="gallery-container w-2 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i3} alt="fitness" />
                  </div>
                </div>
              </div>

              <div class="gallery-container w-4 h-3">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i12} alt="food" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2 w-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i13} alt="travel" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i16} alt="cars" />
                  </div>
                </div>
              </div>
              <div class="gallery-container w-3 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i19} alt="nature" />
                  </div>
                </div>
              </div>

              <div class="gallery-container w-3 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i21} alt="people" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i24} alt="sport" />
                  </div>
                </div>
              </div>

              <div class="gallery-container w-2 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i25} alt="fitness" />
                  </div>
                </div>
              </div>

              <div class="gallery-container w-4 h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i26} alt="food" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2 w-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i27} alt="travel" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2 w-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i28} alt="art" />
                  </div>
                </div>
              </div>

              <div class="gallery-container h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i29} alt="cars" />
                  </div>
                </div>
              </div>
              <div class="gallery-container h-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src={i14} alt="art" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Window />
        <Footer />
      </>
    );
  }
}
