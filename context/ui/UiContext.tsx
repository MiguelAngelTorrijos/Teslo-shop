import { createContext } from 'react';

interface ContexProps {
  isMenuOpen: boolean;

  //Methods
  toggleSideMenu: () => void;
}

export const UiContext = createContext({} as ContexProps);
