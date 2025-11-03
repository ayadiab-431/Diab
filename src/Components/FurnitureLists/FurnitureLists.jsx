// import { useEffect, useState} from "react";
import { useContext } from "react";
import { ProductsPerPage } from "../../Contexts/Contexts";
import useFetchProducts from "../../Hooks/useFetchProducts";
import { CategoryFilter } from "../../Contexts/Contexts";
import Card from "../Card/Card";
import SkeletonCard from "../SkeltonCard/SkeltonCard";
export default function FurnitureLists({limit = null, className = ""}){
 

    // Shuffle Products
    function Shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        }
        return arr;
        }

    // Extract Data of product
    function FormatDataProduct (product) {
        const {id, name, description, product_images} = product;
        return {
            id,
            name,
            description,
            beforeImage : product_images.find((img) => img.before_or_after === 0)?.image_url,
            afterImage : product_images.find((img) => img.before_or_after === 1)?.image_url,
        }
    }

        const {productsDet,loading} = useFetchProducts();

        const {filteredProducts} = useContext(CategoryFilter);

        const {startIndex, endIndex} = useContext(ProductsPerPage);

        
        // Show products
        const displayedProducts = limit ? Shuffle(productsDet).slice(0,limit): filteredProducts.slice(startIndex, endIndex);


        return( 
            <div className={className}>
                {loading ? <SkeletonCard/> : displayedProducts.map((product) => {
                    const productData = FormatDataProduct(product);
                    return (<div className="card-container col-12 col-sm-6 col-lg-4" key={productData.id}>
                        <Card {...productData}/>
                </div>
                );
                }
            )     
            }
        </div>
        );
        
}