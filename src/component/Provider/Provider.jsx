"use client"

import React from 'react'
import { Web3Provider } from "@ethersproject/providers"; 
import { Web3ReactProvider } from '@web3-react/core'

const Provider = ({ children}) => {
    const getLibrary = (provider) => {
        return new Web3Provider(provider);
    }
    
  return (
    <Web3ReactProvider getLibrary={getLibrary}> { children } </Web3ReactProvider>
 )
}

export default Provider