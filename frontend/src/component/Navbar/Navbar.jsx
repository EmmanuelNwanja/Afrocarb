"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import WalletModal from "../WalletModal/WalletModal";
import { ModalProvider } from "@/context/ModalContext";
import { useModal } from "@/context/ModalContext";
// import 'bootstrap/dist/js/bootstrap.bundle'
import { useWeb3React } from "@web3-react/core";

const Navbar = () => {
  const { active, chainId, account, deactivate } = useWeb3React();

  const { isOpen, toggleOpen } = useModal();

  console.log(account)

  return (
    <>
      <div className={styles.navi}>
        <nav className={styles.mynav}>
          <div className={styles.brand}>
            <Link href="#">
              <Image src={Logo} width={40} height={40} alt="logo" />
            </Link>
          </div>
          <div className={styles.links}>
            <ul className={styles.links}>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Explore</Link>
              </li>
              <li>
                <Link href="#">Airdrop</Link>
              </li>
              <li>
                <Link href="#">Activity</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
            </ul>
            <button className={styles.login}><Link href="/login">Login</Link></button>
            {active ? <button onClick={deactivate} className={styles.connect}>{account.slice(0, 9)}....</button>: <button onClick={toggleOpen} className={styles.connect}>Connect Wallet</button>}
          </div>
        </nav>
        {isOpen && <WalletModal />}
      </div>
    </>
  );
};

export default Navbar;
