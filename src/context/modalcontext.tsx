import { useState, createContext } from "react";

interface IModalContext {
  modalFormSignin: boolean;
  toogleFormSignin: () => void;
  closeFormSignin: () => void;

  modalBurger: boolean;
  toogleBurger: () => void;
  closeBurger: () => void;
}

export const ModalContext = createContext<IModalContext>({
  //for form sign in
  modalFormSignin: false,
  toogleFormSignin: () => {},
  closeFormSignin: () => {},

  //for burger menu
  modalBurger: false,
  toogleBurger: () => {},
  closeBurger: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modalFormSignin, setmodalFormSignin] = useState(false);
  const toogleFormSignin = () => setmodalFormSignin(!modalFormSignin);
  const closeFormSignin = () => setmodalFormSignin(false);

  const [modalBurger, setmodalBurger] = useState(false);
  const toogleBurger = () => setmodalBurger(!modalBurger);
  const closeBurger = () => setmodalBurger(false);

  return (
    <ModalContext.Provider
      value={{
        modalFormSignin,
        toogleFormSignin,
        closeFormSignin,
        modalBurger,
        toogleBurger,
        closeBurger,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
