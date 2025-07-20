import useHeaderHeight from '../../Hooks/useHeaderHeight.js';
import Header from '../../Components/Header/Header.jsx';
// import Footer from '../../Components/Footer/Footer.jsx';
import ProductsSection from '../../Components/ProductsSection/ProductsSection.jsx';
export default function ProductsPage(){

    // Get Header Height
    const [headerRef, headerHeight] = useHeaderHeight();

    return(
        <div className="products-page">
            <Header ref={headerRef}/>
            <ProductsSection headerAddress='اعمالنا' paddingTop = {{'--padding-top':`${headerHeight}px`}}/>
            {/* <Footer/> */}
        </div>
    );
}