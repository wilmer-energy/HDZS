import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addCartThunk, checkoutThunk, deleteCartThunk, getCartThunk, updateCartThunk } from '../store/slices/car.slice';

const ShoppingCart = ({ show, handleClose }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])


    const itemsInCart = useSelector(state => state.cart)
    console.log("h1")


    let del = (id) => {
        dispatch(deleteCartThunk(id))
    }
    let add = (item) => {
        dispatch(updateCartThunk(item))

    }
    let substract = (itemd) => {
        dispatch(updateCartThunk(itemd))
    }
    const [p,setP]=useState(false)
    const checkout = () => {
        dispatch(checkoutThunk())
        setP(true)
        window.alert("Thank you for your purchase")
        
    }
    console.log(itemsInCart)
    let totalPrice = 0
    itemsInCart.forEach(e => { totalPrice = totalPrice + parseInt(e.price * e.productsInCart.quantity) })
    console.log(totalPrice)



    return (

        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {itemsInCart.map(e => {
                    return (
                        <div key={e.id}>

                            <ul>                                
                                <div>
                                    {e.title} <br /> <span>${e.price}</span>
                                </div>
                                <div className='QuantyCar' style={{padding:"0px 100px"}}>
                                    {e.productsInCart.quantity}
                                </div >
                                <div className='Buttonscar'>
                                    <div className='IconsCar' style={{display:"flex"}}>
                                        <div className='icon' style={{padding:"0px 20px"}} >
                                            <i onClick={() => { del(e.id) }} class="fa-solid fa-trash-can" ></i>
                                        </div>
                                        <div className='icon' style={{padding:"0px 20px"}}>
                                            <i onClick={() => { add({ id: e.id, newQuantity: parseInt(e.productsInCart.quantity) + 1 }) }} class="fa-solid fa-plus"> </i>

                                        </div>
                                        <div className='icon' style={{padding:"0px 20px"}}>
                                            <i onClick={() => { substract({ id: e.id, newQuantity: parseInt(e.productsInCart.quantity) - 1 }) }} class="fa-solid fa-minus"></i>

                                        </div>
                                    </div>

                                </div>


                            </ul>
                            <br />
                        </div>
                    )
                })}
            </Offcanvas.Body>
            <hr />
            <div className='mb-5 w-100 p-3 pt-0'>
                <span className='fs-2 mb-5'> <b>Total:</b> {totalPrice}</span>
                <button className='buton-filter ps-3 pe-3 mt-4 border-0 pt-1 pb-1 fs-4 d-block m-auto' onClick={checkout}>checkout</button>
            </div>
        </Offcanvas>



    );
};

export default ShoppingCart;