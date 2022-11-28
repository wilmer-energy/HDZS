import React from 'react';
import img1 from "../../multimedia/Renovable.png";
import img2 from "../../multimedia/Renovable.png";
import img3 from "../../multimedia/disenio.jpg";

const UPS = () => {
    return (
      <div className="serviceDetails">
        <div className="servicesText">
          <h1>Servicio 1</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            neque ut quaerat. Saepe, expedita fugit. Voluptatum expedita aut
            quis vel!
          </p>
        </div>
        <div className="servicesImg">
          <img src={img2} alt="" />
        </div>
      </div>
    );
};

export default UPS;