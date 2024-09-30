import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the type for the hover context
interface HoverContextType {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  clearHoverState: () => void;
}

// Create a hover context
export const HoverContext = createContext<HoverContextType | undefined>(undefined);

// Provider component to wrap around the app
export const HoverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHovered, setIsHovered] = useState<boolean>(() => {
    const savedState = localStorage.getItem('hoverState');
    return savedState === 'true' ? true : false;
  });

  // Persist the state in localStorage on change
  useEffect(() => {
    localStorage.setItem('hoverState', isHovered.toString());
  }, [isHovered]);

  // Clear hover state function
  const clearHoverState = () => {
    localStorage.removeItem('hoverState');
    setIsHovered(false);
  };

  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered, clearHoverState }}>
      {children}
    </HoverContext.Provider>
  );
};
