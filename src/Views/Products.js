import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Products(){
    const { id } = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`    
    const [products,setProducts]=useState(null)
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setProducts(response.data)
        })
    },[url])

        let content=null

    if (products) {
        content=
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {products.name}
            </h1>
            <div>
                <img 
                    src={products.images[0].imageUrl}
                    alt={products.name}
                    />           
            </div>
            <div className="font-bold text-xl mb-3">
                $ {products.price}

            </div>
            <div>
                {products.description}
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