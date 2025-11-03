import { useEffect, useState } from "react";
export default function useIsNarrow(threshold = 900) {
    const [isNarrow, setIsNarrow] = useState(() => window.innerWidth < threshold);

    useEffect(() => {
        const onResize = () => setIsNarrow(window.innerWidth < threshold);
        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, [threshold]);

    return isNarrow;
}