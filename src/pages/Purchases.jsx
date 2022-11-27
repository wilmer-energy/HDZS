
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {


    let meses = ["","Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])
    const navigate = useNavigate()

    const purchases = useSelector(state => state.purchases)

    console.log(purchases)

    return (
        <div className='container vh-100'>

            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb mt-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Purchases</li>
                </ol>
            </nav>


            <h2 className='fw-bold'>My Purchases</h2>

            <div className="d-flex flex-column-reverse" >


                {purchases.map(e => {
                    return (

                        <div className="card mt-3" key={e.id}>

                            <div className="card-header pt-3 pb-3  ">
                                <b>
                                {meses[Number(e.createdAt.split('-')[1].substring(0))]} {e.createdAt.split('-')[2].substring(0, 2)}, {e.createdAt.split('-')[0]}
                                </b>
                            </div>

                            <ul className="list-group list-group-flush ">

                                {
                                    e.cart.products.map((m, index) => (
                                        <div key={index} className='li-pro '>


                                            <li className='list-group-item' onClick={() => navigate(`/product/${m.id}`)}>

                                                <div className="container text-center pt-3 pb-3">
                                                    <div className="row">
                                                        <div className="col">
                                                            {m.title}
                                                        </div>
                                                        <div className="col">
                                                            {m.productsInCart.quantity}
                                                        </div>
                                                        <div className="col">
                                                           $ {m.price}
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>



                                        </div>
                                    ))
                                }

                            </ul>

                        </div>
                    )
                })}


            </div>


        </div>
    );
};

export default Purchases;