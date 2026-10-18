import './HomePage.css'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import axios from 'axios'
import { ProductGrid } from './ProductGrid'
import { useSearchParams } from 'react-router'

export function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([])
    window.axios = axios
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')
    // useEffect(()=>{
    //     axios.get('/api/products')
    //         .then((res)=>{
    //             setProducts(res.data);
    //         })
    // },[])
    useEffect(() => {
        const getHomeData = async () => {
            if (search) {
                const response = await axios.get(`/api/products?search=${search}`)
                setProducts(response.data)
            } else {
                const response = await axios.get('/api/products')
                setProducts(response.data)
            }

        }
        getHomeData()
    }, [search])
    console.log('cart');

    console.log(cart);


    console.log('Productss');

    console.log(products);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
            <title>Ecommerce Project</title>

            <Header cart={cart} />
            <div className="home-page">
                <ProductGrid products={products} loadCart={loadCart} />
            </div>
        </>
    )
}