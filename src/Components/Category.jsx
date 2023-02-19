import React from 'react';
import renewableEnergy from '../multimedia/Servicios/EnergiasRenovables.png';
import electricalMaintenance from '../multimedia/Servicios/mantenimientoElectrico.jpg';
import structuredWiring from '../multimedia/Servicios/CableadoEstructurado.jpg';
import electricalSystems from '../multimedia/Servicios/SistemasElectricos.jpg';
import powerQuality from '../multimedia/Servicios/CalidadDeEnergia.jpg';
import ElectricalEquipment from '../multimedia/Servicios/EquiposElectricos.png';

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
        constructor(img, title) {
            this.img = img;
            this.title = title;
        }
    }
    const titles = [
        'Unidad de Restitución de Tierras',
        'Mantenimiento Electrico Edificio North Point 155',
        'Unidad de Búsqueda Personas Desaparecidas',
        'Adecuación de Puntos Electricos y Datos SGS Colombia',
        'Adecuaciones Sistema de Apuntalamiento Torre ATC',
        'Diseño Electrico Termozipa'
      ];
    const customerImg = [customer1, customer2, customer3, customer4, customer5, customer6, customer7]
    const projects = [
        new Project(renewableEnergy, titles[0]),
        new Project(electricalMaintenance, titles[1]),
        new Project(structuredWiring, titles[2]),
        new Project(electricalSystems, titles[3]),
        new Project(powerQuality, titles[4]),
        new Project(ElectricalEquipment, titles[5])
    ];
    const navigate = useNavigate()
    return (
        <div className='container mt-3' >
            <div className='row mb-3 inicio' style={{marginTop: "80px"}}>
                <h2> <strong>¿QUIÉNES SOMOS?</strong></h2>
                <p>Somos una empresa Colombiana establecida en 2015 con amplia experiencia en infraestructura eléctrica , cableado estructurado y mantenimiento preventivo y correctivo en sectores industriales, comerciales y residencial. También hemos realizado proyectos de energía solar que mejoren las condiciones de ZNI y ayuden a un futuro más sostenible y amigable con el medio ambiente</p>
            </div>
            <div className='row mb-3'style={{marginTop: "80px"}}>
                <h2> <strong>EMPRESAS QUE HAN CONFIADO EN NOSOTROS</strong> </h2>
                {customerImg.map((e) => {
                    return (<>
                        <div className='col-6 col-lg-3'>
                            <div className='text-center mt-3 mb-3 tl'>
                                <img className='customerImgs' src={e} alt="" />
                            </div>
                        </div></>)
                })}

            </div>

            <div className='row' style={{marginBottom: "50px",marginTop: "100px"}}>
            <h2> <strong>MAS DE 7 AÑOS DE EXPERIENCIA</strong></h2>
            <h5>Proyectos realizados</h5>
                {projects.map((e) => {
                    return (
                        <>
                            <div className='col-12 col-sm-6'>
                                <div className='position-relative cur m-2' onClick={() => {
                                    navigate('/experience')
                                    window.scrollTo(0, 0)
                                }}>
                                    <img className='img-fluid  im' src={e.img} alt="" />
                                    <h3 className='position-absolute top-50 start-50 translate-middle text-light sh'>{e.title}</h3>

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
