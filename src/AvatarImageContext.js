import React, { createContext, useContext, useState } from 'react';

const AvatarImageContext = createContext();

export const AvatarImageProvider = ({ children }) => {
  const [avatarImageURL, setAvatarImageURL] = useState('');

  return (
    <AvatarImageContext.Provider value={{ avatarImageURL, setAvatarImageURL }}>
      {children}
    </AvatarImageContext.Provider>
  );
};

export const useAvatarImage = () => useContext(AvatarImageContext);