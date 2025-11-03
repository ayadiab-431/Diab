import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
// import CustomeOrderSection from "../Components/CustomeOrderSection/CustomeOrderSection";
import useHeaderHeight from "../Hooks/useHeaderHeight";
import { HeaderHeight } from "../Contexts/Contexts";
export default function MainLayout () {

    // Get Header Height
    const [headerRef, headerHeight] = useHeaderHeight();
    return (
        <>
        <HeaderHeight.Provider value={{headerHeight}}>
            <Header ref={headerRef}/>
            <Outlet/>
            <Footer/>
        </HeaderHeight.Provider>
        </>
    );
}