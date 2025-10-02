"use client";

import { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    showCursor?: boolean;
    showCursorDuringDelay?: boolean;
    hideCursorOnComplete?: boolean;
}

export default function Typewriter({
    text,
    speed = 100,
    delay = 0,
    className = "",
    showCursor = true,
    showCursorDuringDelay = false,
    hideCursorOnComplete = false
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDelaying, setIsDelaying] = useState(delay > 0);

    useEffect(() => {
        if (delay > 0 && isDelaying) {
            const delayTimeout = setTimeout(() => {
                setIsDelaying(false);
            }, delay);

            return () => clearTimeout(delayTimeout);
        }
    }, [delay, isDelaying]);

    useEffect(() => {
        if (isDelaying) return;

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed, isDelaying]);

    const isComplete = currentIndex >= text.length;
    const shouldShowCursor = showCursor && (showCursorDuringDelay || !isDelaying) && !(hideCursorOnComplete && isComplete);

    return (
        <span className={className}>
            {displayedText}
            {shouldShowCursor && (
                <span className="inline-block w-[3px] h-[1.2em] bg-current ml-1 animate-blink align-middle"></span>
            )}

            <style jsx>{`
                @keyframes blink {
                    0%, 49% {
                        opacity: 1;
                    }
                    50%, 100% {
                        opacity: 0;
                    }
                }
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
            `}</style>
        </span>
    );
}
