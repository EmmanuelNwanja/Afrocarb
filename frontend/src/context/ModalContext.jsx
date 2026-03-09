"use client"

import { createContext, useContext, useState } from "react"

export const ModalContext = createContext({
    isOpen: false,
    toggleOpen: () => {}
});

export const ModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <ModalContext.Provider value={{isOpen, toggleOpen}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);