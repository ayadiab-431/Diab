import { useEffect, useState, useContext } from 'react';
import { ProductsPerPage } from '../../Contexts/Contexts';
import { CategoryFilter } from '../../Contexts/Contexts';
import { HeaderHeight } from '../../Contexts/Contexts';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import FurnitureSection from '../../Components/FurnituresSection/FurnituresSection.jsx';
import PageTitle from '../../Components/Common/PageTitle.jsx';
import Pagination from '../../Components/Pagination/Pagination.jsx';
// Hooks
import useFetchProducts from '../../Hooks/useFetchProducts.js';

export default function FurnituresPage(){

    // Save current page while reload
    const [searchParams, setSearchParams] = useSearchParams();

    const initialPage = Number(searchParams.get("page")) || 1;
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        setSearchParams({page : currentPage});
    }, [setSearchParams,currentPage]);

    // ------------- Get Header Height -----------
    const {headerHeight} = useContext(HeaderHeight);
    
    // Number of products per page
    const productsPerPage = 12;

    // Get Products
    const {productsDet} = useFetchProducts();

    // Filtered Products
    const [selectedCategoryId, setSelectedCategoryId] = useState("all");
    const filteredProducts = useMemo(() => {
        if (selectedCategoryId === "all") return productsDet;
        
        return productsDet.filter(product =>{ 
            console.log(product.product_categories);
            return product.product_categories?.category_id === Number(selectedCategoryId)});
    }, [productsDet, selectedCategoryId]);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setCurrentPage(1);
    }

    // Calculate the start and the end of the show products
    const endIndex = currentPage * productsPerPage;
    const startIndex = endIndex - productsPerPage;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);



    return(
        <div className="products-page">
            {/*  */}
            <PageTitle title='دياب | معرض الآثاث'/>
        <CategoryFilter.Provider value = {{onCategoryChange : handleCategoryChange, filteredProducts : filteredProducts}}>
        <ProductsPerPage.Provider value={{startIndex: startIndex, endIndex : endIndex}}>
            <FurnitureSection
            filter = {true} 
            headerAddress='معرض الآثاث'
            paddingTop = {{'--padding-top':`${headerHeight}px`}}/>
        </ProductsPerPage.Provider>
        </CategoryFilter.Provider>
        {totalPages > 1 && <Pagination
            currentPage = {currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            totalPages={totalPages}
            />}
        </div>
    );
}