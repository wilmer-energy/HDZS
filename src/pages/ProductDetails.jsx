import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { addCartThunk } from '../store/slices/car.slice';

const ProductDetails = () => {
    const dispatch= useDispatch()
    const navigate=useNavigate()

   
    const [indexPhoto, setIndexPhoto] = useState(0)   
    let { id } = useParams()
    

    let Products = useSelector(state => state.productsSlice)
        .filter((e) => {
            return parseInt(e.id) === parseInt(id)
        })

   
    let allProducts = useSelector(state => state.productsSlice)
    let Product=(Products[0]);
    const [ProductSelect, setProductSelect] = useState(Product)
    let category = Product?.category.name
    let ProductsFiltered = allProducts.filter((e) => {
        return e.category.name === category
    })

    const addCart = (item) => {
        //dispatch(addCartThunk(obj))
       dispatch(addCartThunk(item)) 
    }

    let ProductsHTML = [];
    ProductsFiltered.forEach((filterProduct) => {

        ProductsHTML.push(
            <div className='Productcard'>
                <div className='ImgproductPreview' onClick={() => { 
                    setProductSelect(filterProduct) 
                    navigate(`/product/${filterProduct.id}`)
                    window.scrollTo( 0,0 )
                }}>
                    <img className='Primary' src={filterProduct.productImgs[0]} alt="" />
                    <img className='Secundary' src={filterProduct.productImgs[1]} alt=""/>
                </div>

                <div className='Inf-product-preview'>
                    <div className='ProductTittlePreview'>
                        <b>{filterProduct.title}</b>
                    </div>
                    <div className='ProductPricePreview'>
                        <a>Price</a>
                        <div>
                            <b> ${filterProduct.price} </b>
                        </div>
                    </div>

                </div>

                <div className='ButtoCardPreview'>
                    <button className='p-2 border-0 fs-4 buton-cart' onClick={()=>{addCart({id:filterProduct.id,quantity: 1})}}>
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        )
    })

    return (
        <div className='Produc-detail-Container'>

            <Header />

            <div className='DetailsProduct'>
                <div className='history'>
                    <a href="#">Home</a>
                    <b>{ProductSelect?.title}</b>
                </div>
                <div className='Produc-inf'>

                    <div className='Product-images'>
                        <div className='Product-Photo'>
                            <img src={ProductSelect?.productImgs?.[indexPhoto]} alt="" />
                        </div>
                        <div className='Product-gallery'>
                            <ul>
                                <li onClick={() => { setIndexPhoto(0) }}> <img src={ProductSelect?.productImgs?.[0]} alt="" /></li>
                                <li onClick={() => { setIndexPhoto(1) }}> <img src={ProductSelect?.productImgs?.[1]} alt="" /> </li>
                                <li onClick={() => { setIndexPhoto(2) }}> <img src={ProductSelect?.productImgs?.[2]} alt="" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className='Product-details'>
                        <h2>{ProductSelect?.title}</h2>

                        <div className='Product-Descripcion'>
                            {ProductSelect?.description}
                        </div>

                        <div className='ProducOptions'>
                            <div className='Price'>
                                <div>
                                    <span className='label'>Price </span>
                                </div>
                                <span className='amount'>
                                    <b>$ {ProductSelect?.price}</b>
                                </span>
                            </div>
            
                        </div>

                        <button className='add-cart-button' onClick={()=>{addCart({id:id,quantity: 1})}}>
                            Add to shop card <i className="fa-solid fa-cart-plus" ></i>
                        </button>

                    </div>
                </div>
                <div className='ProductPreviewtitle'>
                    <strong>Discover similar items</strong>
                </div>
                <div className='Container-product-card-preview'>

                    {ProductsHTML}

                </div>
            </div>

            <Footer />



        </div>


    );
};

export default ProductDetails;