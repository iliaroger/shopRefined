import React, { createContext } from 'react';

interface Context {
  currentState: string;
  changeState: React.Dispatch<React.SetStateAction<string>>;
}

export const toggleContext = createContext<Context>({
  currentState: 'login',
  changeState: () => {},
});

export const ToggleProvider = toggleContext.Provider;
export const ToggleConsumer = toggleContext.Consumer;
