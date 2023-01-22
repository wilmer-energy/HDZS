import React from "react";
import renewableEnergy from '../multimedia/Servicios/EnergiasRenovables.png';
import electricalMaintenance from '../multimedia/Servicios/mantenimientoElectrico.jpg';
import structuredWiring from '../multimedia/Servicios/CableadoEstructurado.jpg';
import electricalSystems from '../multimedia/Servicios/SistemasElectricos.jpg';
import powerQuality from '../multimedia/Servicios/CalidadDeEnergia.jpg';
import ElectricalEquipment from '../multimedia/Servicios/EquiposElectricos.jpg';

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Services = () => {
  class Service {
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
  const services = [
    new Service(renewableEnergy, titles[0], descriptions[0], 1),
    new Service(electricalMaintenance, titles[1], descriptions[1], 2),
    new Service(structuredWiring, titles[2], descriptions[2], 1),
    new Service(electricalSystems, titles[3], descriptions[3], 2),
    new Service(powerQuality, titles[4], descriptions[4], 1),
    new Service(ElectricalEquipment, titles[5], descriptions[5], 2)
  ];

  const clases = ['project_card', 'service_details_', 'services_text', 'services_img']
  return (
    <div className="serviceCards">
      {services.map((e) => {
        return (
          <Card style={{ width: "20rem" }} className='serviceCard'>
            <Card.Img variant="top" src={e.img} id='serviceCardImg'/>
            <Card.Body>
              <Card.Title className='serviceCardTitle'>{e.title}</Card.Title>
              <Card.Text>
                {e.description}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      })}

    </div>
  );
};

export default Services;