import React from 'react'
import SimpleSlider from './SimpleSlider'
import ScrollButton from '../ScrollButton'
import Opinions from '../opinions/Opinions'
import About from './About'
import Footer from '../Footer'
import Window from '../Window'
export default function Main() {
    return (
        <div
        style={{
          justifyContent: "center",
          overflowY: "hidden",
          overflowX: "hidden"

        }}
      >
            <SimpleSlider/>
            <About/>
            <Opinions/>
            <ScrollButton />
            <Window/>
            <Footer/>
        </div>
    )
}
