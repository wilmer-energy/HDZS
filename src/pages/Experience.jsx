import React from "react";
import renewableEnergy from '../multimedia/Servicios/EnergiasRenovables.png';
import electricalMaintenance from '../multimedia/Servicios/mantenimientoElectrico.jpg';
import structuredWiring from '../multimedia/Servicios/CableadoEstructurado.jpg';
import electricalSystems from '../multimedia/Servicios/SistemasElectricos.jpg';
import powerQuality from '../multimedia/Servicios/CalidadDeEnergia.jpg';
import ElectricalEquipment from '../multimedia/Servicios/EquiposElectricos.png';

const Experience = () => {
  class Project {
    constructor(img, title, description, date, client, direction) {
      this.img = img;
      this.title = title;
      this.description = description;
      this.direction = direction;
      this.client = client;
      this.date = date;
    }
  }
  const images=[renewableEnergy,electricalMaintenance,structuredWiring,electricalSystems,powerQuality,ElectricalEquipment];
  const descriptions = [
    'Remodelaciones y traslados de oficinas Territoriales',
    'Mantenimiento Transformadores Media Tensión y sistemas eléctricos',
    'Cableado Estructurado Oficinas Regionales UBPD (15 Sedes)',
    'Instalación de puntos Cableado estructurado oficinas',
    'Diseño y construcción de sistema de apantallamiento y protección de descargas atmosféricas Torre Movistar ATC',
    'Diseño Electrico Detallado Planta Carbon Termozipa'
  ];
  const titles = [
    'Unidad de Restitución de Tierras',
    'Mantenimiento Electrico Edificio North Point 155',
    'Unidad de Búsqueda Personas Desaparecidas',
    'Adecuación de Puntos Electricos y Datos SGS Colombia',
    'Adecuaciones Sistema de Apuntalamiento Torre ATC',
    'Diseño Electrico Termozipa'
  ];
  const clients=[
    'Comunicaciones Redes y Sistemas',
    'Smart Green & Energy',
    'Comunicaciones Redes y Sistemas',
    'Fire Energy',
    'Smart Green & Energy',
    'Fire Energy'
  ];
  const dates=[
    'ENERO 2019',
    'DICIEMBRE 2019',
    'FEBRERO 2020',
    'MARZO 2020',
    'MARZO 2020',
    'MAYO 2020'
  ];
 const projects = [
    new Project(renewableEnergy, titles[0], descriptions[0],dates[0],clients[0], 1),
    new Project(electricalMaintenance, titles[1], descriptions[1],dates[1],clients[1], 2),
    new Project(structuredWiring, titles[2], descriptions[2],dates[2],clients[2], 1),
    new Project(electricalSystems, titles[3], descriptions[3],dates[3],clients[3], 2),
    new Project(powerQuality, titles[4], descriptions[4],dates[4],clients[4], 1),
    new Project(ElectricalEquipment, titles[5], descriptions[5],dates[5],clients[5], 2)
  ];

  const clases = ['project_card', 'service_details_', 'services_text', 'services_img']
  return (
    <div style={{marginBottom: "80px"}}>
      {projects.map((e) => {
        return (
          <div className={clases[0]}>
            <div className={clases[1] + e.direction}>
              <div className={clases[2]}>
                <h1>{e.title}</h1>
                <p>
                 <strong>CLIENTE: </strong>{e.client}
                </p>
                <p>
                  <strong>ACTIVIDADES REALIZADAS: </strong>{e.description}
                </p>
                <p>
                 <strong>FECHA: </strong>{e.date}
                </p>
              </div>
              <div className={clases[3]}>
                <img src={e.img} alt="" />
              </div>
            </div>
          </div>
        )
      })}

    </div>
  );
};

export default Experience;
