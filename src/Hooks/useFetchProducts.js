import { useEffect, useState } from "react";

export default function useFetchProducts(){

    // Get Products Data    
    const [productsDet, setProductDet] = useState([]);
    const [isLoading, setLoading] = useState(true);
        useEffect(() => {
            fetch(`${process.env.PUBLIC_URL}/data/products.json`)
            .then(res => res.json())
            .then(data => {
                const products = data.map(item => item.product);
                setProductDet(products);
            })
            .catch(err => console.error('Fetching Error', err))
            .finally(() => setLoading(false));
        }, []);
        

    return {productsDet, isLoading}
}