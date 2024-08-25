'use client';

import {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  FC,
  useContext,
} from 'react';
import { reducer, initialState } from './actions';
import { ContextAction, ContextState } from '@/types';

interface ContextProps {
  state: ContextState;
  dispatch: Dispatch<ContextAction>;
}

export const AppContext = createContext<ContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return {
    state: appContext.state,
    dispatch: appContext.dispatch,
  };
};
