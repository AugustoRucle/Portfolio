import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint: number = 1024): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < breakpoint;
            setIsMobile(isTouchDevice && isSmallScreen);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, [breakpoint]);

    return isMobile;
}
