import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductoCard from "../Components/ProductCard";


function Home(){
     let content=null
     const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`  
     const [products,setProducts]=useState({
            loading: false,
            data: null,
            error: false
        })

        useEffect(()=>{
            setProducts({
                loading: true,
                data: null,
                error: false
    
            })
            axios.get(url)
            .then(response=>{
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(()=>{
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
            })
        },[url])

        if (products.error) {
            content=<p>Error al cargar el producto, intentelo mas tarde.</p>
        }      
        if (products.loading) {
            content=<Loader></Loader>
        }


        if (products.data) {
            content=
            products.data.map((products)=>
                <div key={products.id}  className="w-full md:w-1/4 md:px-4">
                    <ProductoCard 
                    product={products}
                    />
                </div>
        )
        }

    return(
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
          {content}
        </div>

    )

}

export default Home;
