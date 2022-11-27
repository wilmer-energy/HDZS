import React from 'react';
import img1 from "../../multimedia/Renovable.png";
import img2 from "../../multimedia/Renovable.png";
import img3 from "../../multimedia/disenio.jpg";

const Disenio = () => {
    const services = [
        {
          Imgs: [img1, img2, img3],
          title: "Nombre 1",
          description: "Descripción",
          relevant: "15 KWp",
        },
        {
          Imgs: [img1, img2, img3],
          title: "Nombre 1",
          description: "Descripción",
          relevant: "15 KWp",
        },
        {
          Imgs: [img1, img2, img3],
          title: "Nombre 1",
          description: "Descripción",
          relevant: "15 KWp",
        },
        {
          Imgs: [img1, img2, img3],
          title: "Nombre 1",
          description: "Descripción",
          relevant: "15 KWp",
        },
      ];
    return (
        <><div className="serviceDetails">
       <div>
         <img src={services[0].Imgs[0]} alt="" />
       </div>
       <div>
         <h1>Servicio 1</h1>
         <p>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
           neque ut quaerat. Saepe, expedita fugit. Voluptatum expedita aut
           quis vel!
         </p>
       </div>
     </div></>
    );
};

export default Disenio;