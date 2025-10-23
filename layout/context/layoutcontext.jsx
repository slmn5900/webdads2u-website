
'use client';
import { useState, createContext } from 'react';

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [layoutConfig, setLayoutConfig] = useState({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14
    });

    const [layoutState, setLayoutState] = useState({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });

    const onMenuToggle = () => {
        if (isOverlay()) {
            setLayoutState((prev) => ({
                ...prev,
                overlayMenuActive: !prev.overlayMenuActive
            }));
        }

        if (isDesktop()) {
            setLayoutState((prev) => ({
                ...prev,
                staticMenuDesktopInactive: !prev.staticMenuDesktopInactive
            }));
        } else {
            setLayoutState((prev) => ({
                ...prev,
                staticMenuMobileActive: !prev.staticMenuMobileActive
            }));
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prev) => ({
            ...prev,
            profileSidebarVisible: !prev.profileSidebarVisible
        }));
    };

    const isOverlay = () => layoutConfig.menuMode === 'overlay';

    const isDesktop = () => {
        if (typeof window !== 'undefined') {
            return window.innerWidth > 991;
        }
        return false; // safe fallback for SSR
    };

    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar
    };

    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    );
};
