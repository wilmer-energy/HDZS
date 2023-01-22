import React from 'react';
import renewableEnergy from '../multimedia/Servicios/EnergiasRenovables.png';
import electricalMaintenance from '../multimedia/Servicios/mantenimientoElectrico.jpg';
import structuredWiring from '../multimedia/Servicios/CableadoEstructurado.jpg';
import electricalSystems from '../multimedia/Servicios/SistemasElectricos.jpg';
import powerQuality from '../multimedia/Servicios/CalidadDeEnergia.jpg';
import ElectricalEquipment from '../multimedia/Servicios/EquiposElectricos.jpg';

import customer1 from '../multimedia/Clientes/image_2.jpg';
import customer2 from '../multimedia/Clientes/image_3.jpg';
import customer3 from '../multimedia/Clientes/image_4.jpg';
import customer4 from '../multimedia/Clientes/image_5.jpg';
import customer5 from '../multimedia/Clientes/image_6.jpg';
import customer6 from '../multimedia/Clientes/image_7.jpg';
import customer7 from '../multimedia/Clientes/image_8.jpg';

import { useNavigate } from 'react-router-dom';

const Category = () => {
    class Project {
        constructor(img, title, url, id) {
            this.img = img;
            this.title = title;
            this.url = url;
            this.id = id;
        }
    }
    const url = [
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
    const customerImg = [customer1, customer2, customer3, customer4, customer5, customer6, customer7]
    const projects = [
        new Project(renewableEnergy, titles[0], url[0], 1),
        new Project(electricalMaintenance, titles[1], url[1], 2),
        new Project(structuredWiring, titles[2], url[2], 3),
        new Project(electricalSystems, titles[3], url[3], 4),
        new Project(powerQuality, titles[4], url[4], 5),
        new Project(ElectricalEquipment, titles[5], url[5], 6)
    ];
    const navigate = useNavigate()
    return (
        <div className='container mt-3 '>
            <div className='row mb-3'>
                <h1>Empresas que han confiado en nosotros</h1>
                {customerImg.map((e) => {
                    return (<>
                        <div className='col-6 col-lg-3'>
                            <div className='text-center mt-3 mb-3 tl'>
                                <img className='customerImgs' src={e} alt="" />
                            </div>
                        </div></>)
                })}

            </div>

            <h1>Mas de 7 años de experiencia en el mercado</h1>
            <p>Proyectos</p>

            <div className='row'>
                {projects.map((e) => {
                    return (
                        <>
                            <div className='col-12 col-sm-6'>
                                <div className='position-relative cur m-2' onClick={() => {
                                    navigate('/experience')
                                    window.scrollTo(0, 0)
                                }}>
                                    <img className='img-fluid  im' src={e.img} alt="" />
                                    <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>{e.title}</h2>

                                </div>
                            </div>
                        </>
                    )
                })}
            </div>


        </div >
    );
};

export default Category;
/*
<div className='col-12 col-sm-6'>
                    <div className='position-relative cur m-2' onClick={() => {
                        navigate('/eRenovables')
                        window.scrollTo(0, 0)
                    }}>
                        <img className='img-fluid  im' src={img1} alt="" />
                        <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>Energias renovables</h2>

                    </div>
                </div>


                <div className='col-6 col-lg-3'>

                    <div className='border border-dark rounded text-center mt-3 mb-3 tl'>
                        <i className="fa-solid fa-truck pe-1 pt-2 pb-2 pt-md-3 pb-md-3"></i>
                        Eficientes</div>

                </div>

                border border-dark rounded 
*/
