import React from "react";
import renewableEnergy from '../multimedia/Logo/logo HDZ 2023_page-0001.jpg';
import electricalMaintenance from '../multimedia/QuienesSomos.png';

const AboutUs = () => {
  class Project {
    constructor(img, title, description, id) {
      this.img = img;
      this.title = title;
      this.description = description;
      this.id = id;
    }
  }
  const descriptions = [
    'HDZ Ingeniería y Soluciones es una empresa de ingeniería eléctrica creada en el año 2015 en la ciudad de Bogotá con una alineación estratégica enfocada en aportar al cumplimiento de los objetivos de desarrollo sostenible de la ONU a través de la prestación de servicios de infraestructura eléctrica con altos estándares de calidad y eficiencia energética a los sectores de la cadena productiva y las poblaciones apartadas de la geografía colombiana.',
    'Nuestra visión a 2030 está enfocada en ser una empresa con  reconocimiento a nivel nacional por promover, diseñar y ejecutar proyectos socialmente responsables de infraestructura eléctrica que aporten al cumplimiento de los objetivos de desarrollo sostenible mediante la implementación de metodologías y tecnologías amigables con el medio ambiente.',
  ];
  const titles = [
    'Quienes somos',
    'Visión',
  ];
  const projects = [
    new Project(renewableEnergy, titles[0], descriptions[0], 1),
    new Project(electricalMaintenance, titles[1], descriptions[1], 2),
  ];

  const clases = ['project_card', 'service_details_', 'services_text', 'services_img']
  return (
    <>
      {projects.map((e) => {
        return (
          <div className={clases[0]}>
            <div className={clases[1] + e.id}>
              <div className={clases[2]}>
                <h1>{e.title}</h1>
                <p>
                  {e.description}
                </p>
              </div>
              <div className={clases[3]}>
                <img src={e.img} alt="" />
              </div>
            </div>
          </div>
        )
      })}

    </>
  );
};

export default AboutUs;
