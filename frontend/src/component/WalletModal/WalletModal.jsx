"use client"

import React from 'react'
import styles from './page.module.css'
import { useWeb3React } from '@web3-react/core'
import { CoinbaseWallet, Injected, WalletConnect } from '@/utils/Connector/Connector'
import { useModal } from "@/context/ModalContext";
import coinbase from '@/assets/coinbase.svg'
import metamask from '@/assets/metamask.svg'
import plena from '@/assets/plena.svg'
import walletconnect from '@/assets/walletconnect.svg'
import Image from 'next/image'
import { Plena } from '@/utils/Connector/PlenaConnection'


const WalletModal = () => {

// Plena.on('connect', (error, payload) => {if (error) {throw error;} const { accounts, chainId } = payload.params[0]; });

    const {toggleOpen} = useModal();
    const { activate, deactivate } = useWeb3React();

  return (
    <div onClick={toggleOpen} className={styles.wrapper}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Connect Wallet</h1>
        <p className={styles.desc}>Please connect your wallet to continue. The system supports the following wallets</p>
        </div>
        <button className={styles.button} onClick={() => { activate(CoinbaseWallet) }}><Image className={styles.image} src={coinbase} alt='coinbase'/>Coinbase Wallet</button>
        <button className={styles.button} onClick={() => { activate(WalletConnect) }}><Image className={styles.image} src={walletconnect} alt='coinbase'/>Wallet Connect</button>
        <button className={styles.button} onClick={() => { activate(Injected) }}><Image className={styles.image} src={metamask} alt='coinbase'/>Metamask</button>
        <button className={styles.button} onClick={() => { Plena.on("connect", (error, payload) => {if (error) {throw error;} const { accounts, chainId } = payload.params[0]; })}}><Image className={styles.image}src={plena} alt='coinbase'/>Plena</button>
    </div>
  )
}

export default WalletModal