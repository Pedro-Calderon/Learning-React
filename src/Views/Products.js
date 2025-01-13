import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader"
import { useAxiosGet } from "../Hooks/HttpRquests";

function Products(){
    let content=null
    const { id } = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`    
    let products=useAxiosGet(url)

        if (products.error) {
            content=<p>Error al cargar el producto, intentelo mas tarde.</p>
        }      
        if (products.loading) {
            content=<Loader></Loader>
        }

    if (products.data) {
        content=
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {products.data.name}
            </h1>
            <div>
                <img 
                    src={products.data.images[0].imageUrl}
                    alt={products.data.name}
                    />           
            </div>
            <div className="font-bold text-xl mb-3">
                $ {products.data.price}

            </div>
            <div>
                {products.data.description}
            </div>
       </div>
    }


    return(
        <div>
           {content}
        </div>
    )
}

export default Products;