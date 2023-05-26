import { useState, createContext } from 'react';
export const BuyerContext = createContext();

export const BuyerProvider = ({ children }) => {
  const [buyer, setBuyer] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setBuyer({
      ...buyer,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const resetBuyer = () => {
    setBuyer({});
    setErrors({});
  };

  return (
    <BuyerContext.Provider
      value={{
        handleChange,
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