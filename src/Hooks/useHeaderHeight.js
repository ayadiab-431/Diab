import { useRef, useState, useEffect } from 'react';
export default function useHeaderHeight(){
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
    }, []);

    return [headerRef, headerHeight];
}