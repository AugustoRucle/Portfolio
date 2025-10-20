import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useIntersectionObserver<T extends HTMLElement>(
    itemsCount: number,
    options: UseIntersectionObserverOptions = {}
) {
    const { threshold = 0.2, rootMargin = '0px' } = options;
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const itemRefs = useRef<(T | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = itemRefs.current.findIndex(ref => ref === entry.target);
                        if (index !== -1) {
                            setVisibleItems(prev => new Set(prev).add(index));
                        }
                    }
                });
            },
            {
                threshold,
                rootMargin
            }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [threshold, rootMargin]);

    const setRef = (index: number) => (el: T | null) => {
        itemRefs.current[index] = el;
    };

    return {
        visibleItems,
        setRef
    };
}
