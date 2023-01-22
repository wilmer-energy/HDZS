import React from "react";
import renewableEnergy from '../multimedia/Servicios/EnergiasRenovables.png';
import electricalMaintenance from '../multimedia/Servicios/mantenimientoElectrico.jpg';
import structuredWiring from '../multimedia/Servicios/CableadoEstructurado.jpg';
import electricalSystems from '../multimedia/Servicios/SistemasElectricos.jpg';
import powerQuality from '../multimedia/Servicios/CalidadDeEnergia.jpg';
import ElectricalEquipment from '../multimedia/Servicios/EquiposElectricos.png';

const Experience = () => {
  class Project {
    constructor(img, title, description, id) {
      this.img = img;
      this.title = title;
      this.description = description;
      this.id = id;
    }
  }
  const descriptions = [
    'Desarrollo soluciones energéticas a partir de fuentes no convencionales que brindan autonomía y contribuyen al cuidado del medio ambiente',
    'Ejecución de labores de mantenimiento preventivo y correctivo para sistemas eléctricos y fotovoltaicos',
    'Diseño y ejecución de obras de cableado estructurado, CCTV y seguridad y control',
    'Diseño y construcción de sistemas eléctricos de baja y media tensión y sistemas de apantallamiento para el sector industrial y comercial',
    'Análisis de la calidad de energía e implementación de sistemas de compensación de reactivas',
    'Suministro, instalación y mantenimiento de UPS y generadores eléctricos'
  ];
  const titles = [
    'Energías renovables',
    'Mantenimiento eléctrico',
    'Cableado estructurado',
    'Sistemas eléctricos',
    'Calidad de energía',
    'Equipos eléctricos'
  ];
  const projects = [
    new Project(renewableEnergy, titles[0], descriptions[0], 1),
    new Project(electricalMaintenance, titles[1], descriptions[1], 2),
    new Project(structuredWiring, titles[2], descriptions[2], 1),
    new Project(electricalSystems, titles[3], descriptions[3], 2),
    new Project(powerQuality, titles[4], descriptions[4], 1),
    new Project(ElectricalEquipment, titles[5], descriptions[5], 2)
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

export default Experience;
