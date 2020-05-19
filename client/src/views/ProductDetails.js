import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = props => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
            console.log(res)
            setProduct(res.data)
            });
    }, [props.id])

    return (
        <div>
            <hr/>
            <p>Title : {product.title}</p>
            <p>Price : {product.price}</p>
            <p>Description : {product.description}</p>
        </div>
    )
}

export default ProductDetails;
