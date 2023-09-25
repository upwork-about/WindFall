"use client";
import React from "react";
import { Button, Input, Popover } from "antd";
import style from "./index.module.scss";
import { useAccount } from "wagmi";
import { useModalContext } from "../modal/useModalContext";
import ConnectWalletModal from "./ConnectWalletModal";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWallet } from "@/hooks/walletConnect";
const AppHeader: React.FC = () => {
  const { account, isConnected, disconnect } = useWallet();
  const { openModal } = useModalContext();
  return (
    <div className={style["app-header"]}>
      <div className="logo-wrap">
        <img
          src="/img/common/logo.png"
          alt=""
        />
        <h3>WINDFALL</h3>
      </div>
      <div className="connect-wrap">
        {isConnected ? (
          <div onClick={() => disconnect()}>{account}</div>
        ) : (
          <ConnectButton />
          // <Button size="large" ghost onClick={() => openModal({ dom: <ConnectWalletModal /> })}>Connect</Button>
        )}
      </div>
    </div>
  );
};
export default AppHeader;
