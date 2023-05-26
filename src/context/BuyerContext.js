import { useState, createContext } from 'react';
export const BuyerContext = createContext();

export const BuyerProvider = ({ children }) => {
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const resetBuyer = () => {
    setBuyer({});
    setErrors({});
  };

  return (
    <BuyerContext.Provider
      value={{
        buyer,
        errors,
        setErrors,
        setBuyer,
        resetBuyer
      }}
    >
      {children}
    </BuyerContext.Provider>
  );
};