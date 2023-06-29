import { createContext, useState } from 'react';

export const myContext = createContext({});

export function ContextProvider({ children }) {
  const [inputs, setInputs] = useState({
    name: '',
    age: null,
    jobTitle: '',
    country: '',
  });

  return (
    <myContext.Provider
      value={{
        inputs,
        setInputs,
      }}
    >
      {children}
    </myContext.Provider>
  );
}
