import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getProductsThunk, update } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom';
import Carousel from '../Components/Carousel';
import Category from '../Components/Category';
import { useForm } from 'react-hook-form';
import { addCartThunk, updateCartThunk } from '../store/slices/car.slice';

const Home = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const categories = ["Smart TV", "Computers", "Smartphones", "Kitchen"]

    useEffect(() => {
        dispatch(getProductsThunk(dispatch))
    }, [])

    const products = useSelector(state => state.productsSlice)
    const [searchText, setSearchText] = useState("")
    const [productsFilter, setProductsFilter] = useState([])

    useEffect(() => {
        setProductsFilter(products)
    }, [products])


    //------------------FILTERS------------


    const filter = (e) => {
        setSearchText(e)
        let p = products.filter((elem) => {
            return elem.title.toLowerCase().indexOf(e.toLowerCase()) !== -1
        })
        setProductsFilter(p)
    }

    const filterByPrice = (data) => {

        let filtered = products.filter(e => {
            let price = parseInt(e.price)
            let to = parseInt(data.to)
            let from = parseInt(data.from)
            let final = price >= from && price <= to
            return final
        })
        setProductsFilter(filtered)
    }

    const filterByCategory = (index) => {
        let filtered = products.filter((e) => {
            return e.category.name === categories[index]
        })
        setProductsFilter(filtered)

    }
    const showDetails = (index) => {
        window.scrollTo( 0,0 )
        navigate(`/product/${index}`)
    }
    //--------------Cart-----------
    const addCart = (item) => {
        //dispatch(addCartThunk(obj))
        dispatch(addCartThunk(item))
    }

    return (
        <div className='home'>
            <Carousel />
            <Category/>
        </div>
    );
};

export default Home;