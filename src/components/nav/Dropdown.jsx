import React, {useState} from 'react'
import { Link } from "react-router-dom";

export default function Dropdown() {

const [isActive, setIsActive] = useState(false)

  return (
    <div className="dropdown">
      <div className="dropdown-btn" 
      onClick={(e) => setIsActive(!isActive)}> Oferta</div>
    {isActive && (
        <div className="dropdown-content"  onClick={(e) => setIsActive(!isActive)}>
              <div className="dropdown-item">
              <Link to="/Kwas"> Kwas hialuronowy - wypełnianie zmarszczek</Link>
              </div>
              <div className="dropdown-item">
            <Link to="./Botox">Botox</Link>
              </div>
              <div className="dropdown-item">
              <Link to="/modelowanie"> Modelowanie ust</Link>
              </div>
              <div className="dropdown-item">
              <Link to="./Stymulatory"> Stymulatory tkankowe</Link>
              </div>
              <div className="dropdown-item">
              <Link to="./MezoterapiaSkory">Mezoterapia igłowa skóry głowy</Link>
              </div>
              <div className="dropdown-item">
              <Link to="./MezoterapiaIglowa">Mezoterapia igłowa</Link>
              </div>
              <div className="dropdown-item">
            <Link to="./Mezoterapia">Mezoterapia mikroigłowa</Link>
              </div>
              <div className="dropdown-item">
              <Link to="./Hydrotec">Oczyszczanie wodorowe Hydrotec</Link>
              </div>
              <div className="dropdown-item">
            <Link to="./Geneo">GENEO OXYGEN</Link>
              </div>
        </div>
    )}
    </div>
  )
}


