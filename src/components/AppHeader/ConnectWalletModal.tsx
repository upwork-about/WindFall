import React from "react";
import { Button, Input, Popover } from "antd";
import style from "./index.module.scss";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "@wagmi/core";
const ConnectWalletModal: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const connectWallet = () => {
    connect();
  };
  return (
    <div className={style["connect-wallet-modal"]}>
      <h4>Connect your wallet</h4>

      <div
        className={"connect-btn"}
        onClick={connectWallet}>
        Metamask
      </div>
    </div>
  );
};
export default ConnectWalletModal;
