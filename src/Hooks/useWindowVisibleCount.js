import { useState, useEffect } from "react";
export default function useWindowVisibleCount() {

    const [visibleCount, setVisibleCount] = useState(4);

    // Responsive Visible Count
  useEffect (()=> {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 210) {
        setVisibleCount(1); // very small screen
      }
      else if (width < 768){
        setVisibleCount(2); // small screen
      }
      else if (width < 992){
        setVisibleCount(3); // tablet
      }
      else {
        setVisibleCount(4); // desktop
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    };
  }, []);
  return visibleCount;
}