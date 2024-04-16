import React, { createContext, useState, useContext } from "react";

interface GalleryContextProps {
  isCardOpened: boolean;
  setCardOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GalleryContext = createContext<GalleryContextProps>({
  isCardOpened: false,
  setCardOpened: () => {},
});

export const GalleryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isCardOpened, setCardOpened] = useState(false);

  return (
    <GalleryContext.Provider value={{ isCardOpened, setCardOpened }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  return useContext(GalleryContext);
};
