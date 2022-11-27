import React, { useEffect } from 'react';
import cableado from '../multimedia/cableado_estructurado.jpg'
import disenio from '../multimedia/disenio.jpg'
import generador from '../multimedia/Generador.jpg'
import mantenimiento from '../multimedia/mantenimiento-electrico-principal.png'
import img1 from '../multimedia/Renovable.png'

const Category = () => {



    return (
        <div className='container mt-3 '>
            <div className='row mb-3'>

                <div className='col-6 col-lg-3'>
                    <div className='border border-dark rounded text-center mt-3 mb-3 tl'>
                        <i className="fa-solid fa-credit-card pe-1 ps-1 pt-2 pb-2 pt-md-3 pb-md-3"></i>
                        Seguridad
                    </div>

                </div>


                <div className='col-6 col-lg-3'>

                    <div className='border border-dark rounded text-center mt-3 mb-3 tl'>
                        <i className="fa-solid fa-truck pe-1 pt-2 pb-2 pt-md-3 pb-md-3"></i>
                        Eficientes</div>

                </div>


                <div className='col-6 col-lg-3'>

                    <div className='border border-dark rounded text-center mt-3 mb-3 tl'>
                        <i className="fa-solid fa-lock pe-1 pt-2 pb-2 pt-md-3 pb-md-3"></i>
                        Expertos</div>
                </div>


                <div className='col-6 col-lg-3'>
                    <div className='border border-dark rounded text-center mt-3 mb-3 tl'>
                        <i className="fa-solid fa-tag pe-1 pt-2 pb-2 pt-md-3 pb-md-3"></i>
                        Responsables</div>

                </div>

            </div>
            <h1>Mas de 7 años de experiencia en el mercado</h1>
            <p>Servicios</p>

            <div className='row'>
                <div className='col-12 col-sm-6'>

                    <div className='position-relative cur m-2' onClick={() => {
                        window.scrollTo( 0, 1400 )
                    }}>
                    <img className='img-fluid  im' src={img1} alt="" />
                    <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>Energias renovables</h2>

                </div>

                <div className='position-relative cur m-2' onClick={() => { 
                    window.scrollTo( 0, 1400 )}}>
                    <img className='img-fluid im' src={mantenimiento} alt="" />
                    <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>Mantenimiento eléctrico</h2>
                </div>

            </div>

            <div className='col-12 col-sm-6'>
                <div className='position-relative cur m-2' onClick={() => {  
                    window.scrollTo( 0, 1400 )}}>
                    <img className='img-fluid im' src={cableado} alt="" />
                    <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>Cableado estructurado</h2>
                </div>

                <div className='position-relative cur m-2'>
                    <img className='img-fluid im' src={disenio} alt="" />
                    <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>Diseño y contrucción</h2>
                </div>

            </div>

        </div>


        </div >
    );
};

export default Category;