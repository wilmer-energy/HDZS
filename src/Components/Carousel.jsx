import React from "react";
import video from "../multimedia/videoplayback.mp4";
import img1 from '../multimedia/Renovable.png'
import cableado from '../multimedia/cableado_estructurado.jpg'
import disenio from '../multimedia/disenio.jpg'
import generador from '../multimedia/Generador.jpg'
import mantenimiento from '../multimedia/mantenimiento-electrico-principal.png'

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            {/* <img src="https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." /> */}
            <video
              src={video}
              autoPlay
              muted
              className="d-block w-100 videoc"
            ></video>
            <div className="carousel-caption d-block">
              <h2>Energias renovables</h2>
              <a href="" className="btn btn-dark ps-4 pe-4">
                Conoce más
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={mantenimiento}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h2>Mantenimiento eléctrico</h2>
              <a href="" className="btn btn-dark ps-4 pe-4">
                Conoce más
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={cableado}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h2>Cableado estructurado</h2>
              <a href="" className="btn btn-dark ps-4 pe-4">
              Conoce más
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={disenio}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h2>Diseño y contrucción</h2>
              <a href="" className="btn btn-dark ps-4 pe-4">
              Conoce más
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={generador}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h2>UPS y generadores</h2>
              <a href="" className="btn btn-dark ps-4 pe-4">
              Conoce más
              </a>
            </div>
          </div>
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
