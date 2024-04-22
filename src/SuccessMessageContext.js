import React, { createContext, useContext, useState } from 'react';

const SuccessMessageContext = createContext();

export const useSuccessMessage = () => useContext(SuccessMessageContext);

export const SuccessMessageProvider = ({ children }) => {
  const [formDataArray, setFormDataArray] = useState([]);

  const setSuccessMessage = (data) => {
    setFormDataArray(data);
  };
  return (
    <SuccessMessageContext.Provider value={{ formDataArray, setSuccessMessage }}>
      {children}
    </SuccessMessageContext.Provider>
  );
};
