import React, { createContext, useContext, useState } from 'react';

const SuccessMessageContext = createContext();

export const useSuccessMessage = () => useContext(SuccessMessageContext);

export const SuccessMessageProvider = ({ children }) => {
  const [successMessage, setSuccessMessage] = useState('');


  return (
    <SuccessMessageContext.Provider value={{ successMessage, setSuccessMessage }}>
      {children}
    </SuccessMessageContext.Provider>
  );
};
