import { useState, useCallback } from 'react';

export function useRandomColor() {
    const [currentColor, setCurrentColor] = useState<string>('');

    const generateRandomColor = useCallback(() => {
        const colors = [
            'rgb(59, 130, 246)', // blue
            'rgb(16, 185, 129)', // green  
            'rgb(239, 68, 68)',  // red
            'rgb(245, 158, 11)', // amber
            'rgb(139, 92, 246)', // violet
            'rgb(236, 72, 153)', // pink
            'rgb(34, 197, 94)',  // emerald
            'rgb(168, 85, 247)', // purple
            'rgb(20, 184, 166)', // teal
            'rgb(251, 146, 60)', // orange
        ];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setCurrentColor(randomColor);
        return randomColor;
    }, []);

    return { currentColor, generateRandomColor };
}
