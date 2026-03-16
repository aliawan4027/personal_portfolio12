"use client";

/**
 * Accessibility utilities for WCAG compliance
 * Provides helper functions for common accessibility patterns
 */

import React, { useState, useEffect, useRef, KeyboardEvent, MouseEvent, ReactNode } from 'react';

// Skip link for keyboard navigation
export interface SkipLinkProps {
    targetId: string;
    children: ReactNode;
}

export const SkipLink: React.FC<SkipLinkProps> = ({ targetId, children }) => {
    return React.createElement(
        'a',
        {
            href: `#${targetId}`,
            className: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-accent-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50'
        },
        children
    );
};

// Announce messages to screen readers
export interface Announcer {
    announce: (message: string, priority: 'polite' | 'assertive') => void;
}

export const useAnnouncer = (): Announcer => {
    const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', priority);
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;

        document.body.appendChild(announcement);

        // Remove after announcement
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    };

    return { announce };
};

// Focus trap for modals
export interface FocusTrapProps {
    isActive: boolean;
}

export const useFocusTrap = ({ isActive }: FocusTrapProps) => {
    useEffect(() => {
        if (!isActive) return;

        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: Event) => {
            const keyboardEvent = e as unknown as KeyboardEvent;
            if (keyboardEvent.key !== 'Tab') return;

            if (keyboardEvent.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    keyboardEvent.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    keyboardEvent.preventDefault();
                }
            }
        };

        document.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => {
            document.removeEventListener('keydown', handleTabKey);
        };
    }, [isActive]);
};

// Reduced motion detection
export const useReducedMotion = () => {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return reducedMotion;
};

// Color contrast checker
export const checkContrast = (foreground: string, background: string): boolean => {
    // Simple contrast ratio calculation
    // In production, use a proper library like chroma-js
    const getLuminance = (hex: string): number => {
        const rgb = parseInt(hex.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = rgb & 0xff;

        const [rs, gs, bs] = [r, g, b].map(c => {
            c = c / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });

        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

    return contrast >= 4.5; // WCAG AA standard
};

// Keyboard navigation utilities
export interface KeyboardNavigationProps {
    items: HTMLElement[];
    onSelect?: (index: number) => void;
}

export const useKeyboardNavigation = ({ items, onSelect }: KeyboardNavigationProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                e.preventDefault();
                const nextIndex = (activeIndex + 1) % items.length;
                setActiveIndex(nextIndex);
                items[nextIndex]?.focus();
                break;

            case 'ArrowUp':
            case 'ArrowLeft':
                e.preventDefault();
                const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
                setActiveIndex(prevIndex);
                items[prevIndex]?.focus();
                break;

            case 'Home':
                e.preventDefault();
                setActiveIndex(0);
                items[0]?.focus();
                break;

            case 'End':
                e.preventDefault();
                setActiveIndex(items.length - 1);
                items[items.length - 1]?.focus();
                break;

            case 'Enter':
            case ' ':
                e.preventDefault();
                onSelect?.(activeIndex);
                break;

            case 'Escape':
                // Let parent handle escape
                break;
        }
    };

    return { activeIndex, handleKeyDown };
};

// Screen reader utilities
export enum ARIA_LIVE_REGIONS {
    POLITE = 'polite',
    ASSERTIVE = 'assertive',
    OFF = 'off'
}

export const createAriaLiveRegion = (priority: ARIA_LIVE_REGIONS) => {
    const region = document.createElement('div');
    region.setAttribute('aria-live', priority);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    return region;
};

// Touch gesture accessibility
export interface TouchGesturesProps {
    element: React.RefObject<HTMLElement>;
}

export const useTouchGestures = ({ element }: TouchGesturesProps) => {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const handleTouchStart = () => setIsTouch(true);
        const handleMouseStart = () => setIsTouch(false);

        const el = element.current;
        if (!el) return;

        el.addEventListener('touchstart', handleTouchStart);
        el.addEventListener('mousedown', handleMouseStart);

        return () => {
            el.removeEventListener('touchstart', handleTouchStart);
            el.removeEventListener('mousedown', handleMouseStart);
        };
    }, [element]);

    return isTouch;
};

// Semantic HTML helpers
export enum SEMANTIC_ROLES {
    NAVIGATION = 'navigation',
    MAIN = 'main',
    COMPLEMENTARY = 'complementary',
    CONTENTINFO = 'contentinfo',
    BANNER = 'banner',
    SEARCH = 'search',
    TABLIST = 'tablist',
    TAB = 'tab',
    TABPANEL = 'tabpanel',
    DIALOG = 'dialog',
    ALERT = 'alert',
    STATUS = 'status',
    TIMER = 'timer',
    MARQUEE = 'marquee',
    LOG = 'log',
    REGION = 'region'
}

// Form accessibility utilities
export interface FormAccessibility {
    announceError: (fieldName: string, error: string) => void;
    announceSuccess: (message: string) => void;
}

export const useFormAccessibility = (): FormAccessibility => {
    const announceError = (fieldName: string, error: string) => {
        const announcement = `Error in ${fieldName}: ${error}`;
        const region = createAriaLiveRegion(ARIA_LIVE_REGIONS.ASSERTIVE);
        region.textContent = announcement;
        document.body.appendChild(region);

        setTimeout(() => {
            document.body.removeChild(region);
        }, 3000);
    };

    const announceSuccess = (message: string) => {
        const region = createAriaLiveRegion(ARIA_LIVE_REGIONS.POLITE);
        region.textContent = message;
        document.body.appendChild(region);

        setTimeout(() => {
            document.body.removeChild(region);
        }, 3000);
    };

    return { announceError, announceSuccess };
};
