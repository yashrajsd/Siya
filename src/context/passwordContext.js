import React, { createContext, useState } from 'react';

const PasswordContext = createContext();

const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState('');

  const updatePassword = (pass) => {
    setPassword(pass);
  };


  return (
    <PasswordContext.Provider value={{password, setPassword, updatePassword }}>
      {children}
    </PasswordContext.Provider>
  );
};

export { PasswordProvider, PasswordContext };
