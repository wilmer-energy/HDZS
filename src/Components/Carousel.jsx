import React from "react";
import video from "../multimedia/videoplayback.mp4";
import img1 from '../multimedia/Renovable.png'
import cableado from '../multimedia/cableado_estructurado.jpg'
import disenio from '../multimedia/disenio.jpg'
import generador from '../multimedia/Generador.jpg'
import mantenimiento from '../multimedia/mantenimiento-electrico-principal.png'

import renewableEnergy from '../multimedia/Servicios/EnergiasRenovables.png';
import electricalMaintenance from '../multimedia/Servicios/mantenimientoElectrico.jpg';
import structuredWiring from '../multimedia/Servicios/CableadoEstructurado.jpg';
import electricalSystems from '../multimedia/Servicios/SistemasElectricos.jpg';
import powerQuality from '../multimedia/Servicios/CalidadDeEnergia.jpg';
import ElectricalEquipment from '../multimedia/Servicios/EquiposElectricos.png';

const Carousel = () => {
  class Services {
    constructor(img, title) {
      this.img = img;
      this.title = title;
    }
  }
  const titles = [
    'Energías renovables',
    'Mantenimiento eléctrico',
    'Cableado estructurado',
    'Sistemas eléctricos',
    'Calidad de energía',
    'Equipos eléctricos'
  ];
  const service = [
    new Services(electricalMaintenance, titles[1]),
    new Services(structuredWiring, titles[2]),
    new Services(electricalSystems, titles[3]),
    new Services(powerQuality, titles[4]),
    new Services(ElectricalEquipment, titles[5])
  ];
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            {/* <img src="https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." /> */}
            <video
              src={video}
              autoPlay
              muted
              loop
              className="d-block w-100 videoc"
            ></video>
            <div className="carousel-caption d-block carouselText">
              
              <a href="#/services" className="btn btn-dark ps-4 pe-4 headerLink">
              Energías renovables
              </a>
            </div>
          </div>
          
          {service.map((e) => {
            return (
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={e.img}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-block carouselText">
                  
                  <a href="#/services" className="btn btn-dark ps-4 pe-4 headerLink">
                  {e.title}
                  </a>
                </div>
              </div>
            )
          })}

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
