import { useEffect, useState} from "react";
import Card from "../Card/Card";
export default function ProductsLists({limit = null, className = ""}){

    // Shuffle Products
    function Shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        }
        return arr;
        }


    // Get Products Data For Cards
        const [productDet, setProductDet] = useState([]);
        useEffect(() => {
            fetch(`${process.env.PUBLIC_URL}/data/products.json`)
            .then(res => res.json())
            .then(data => setProductDet(data))
            .catch(err => console.error('Fetching Error', err))
        }, []);

        const displayedProducts = limit ? Shuffle(productDet).slice(0,limit): productDet;

        return(
            <div className={className}>
            { displayedProducts.map((productData) =>
            <div className="card-container col-12 col-sm-6 col-lg-4" key={productData.id}>
                <Card 
                    id={productData.id}
                    name={productData.name} 
                    beforeImage={productData.beforeImg}
                    afterImage={productData.afterImg}
                    description={productData.description}
                    />
            </div>
            ) }
        </div>
        );
        
}