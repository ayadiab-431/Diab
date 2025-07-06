import { useRef, useState, useEffect } from 'react';
import Header from '../../Components/Header/Header.js'
import MainSection from '../../Components/MainSection/MainSection.js';
export default function Home(){

    
    // ------------------ Handle header ---------------
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight)
            }
        };
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight)

        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, [])
    
    return (
        <div className="home">
            <Header ref={headerRef}/>
            <MainSection headerHeight={headerHeight}/>
        </div>
    );
}
