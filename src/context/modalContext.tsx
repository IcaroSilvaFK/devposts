import { useState, useEffect, createContext, useContext, FC } from "react";

interface IModalContextProps {
  modal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const ModalContext = createContext<IModalContextProps>(
  {} as IModalContextProps
);

export const ModalContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      
    });
  }, []);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <ModalContext.Provider value={{ handleCloseModal, handleOpenModal, modal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModa = () => {
  const data = useContext(ModalContext);

  return data;
};
