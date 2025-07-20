import useHeaderHeight from '../../Hooks/useHeaderHeight.js';
import Header from '../../Components/Header/Header.jsx'
import MainSection from '../../Components/MainSection/MainSection.jsx';
import ProductsSection from '../../Components/ProductsSection/ProductsSection.jsx';
import CustomeOrderSection from '../../Components/CustomeOrderSection/CustomeOrderSection.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
export default function Home(){

    // Get Header Height
    const [headerRef, headerHeight] = useHeaderHeight();

    return (
        <div className="home">
            <Header ref={headerRef}/>
            <MainSection paddingTop={headerHeight}/>
            <ProductsSection limit={6} headerAddress='نماذج من أعمالنا'/>
            <CustomeOrderSection />
            <Footer/>
        </div>
    );
}
