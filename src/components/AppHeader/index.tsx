import React from "react";
import { Button, Input, Popover } from "antd";
import style from "./index.module.scss";
import { useAccount } from "wagmi";
import { useModalContext } from "../modal/useModalContext";
import ConnectWalletModal from "./ConnectWalletModal";
const AppHeader: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { openModal } = useModalContext();
  return (
    <div className={style["app-header"]}>
      <div className="logo-wrap">
        <img src="/img/common/logo.png" alt="" />
        <h3>WINDFALL</h3>
      </div>
      <div className="connect-wrap">
        {isConnected ? (
          <div>{address}</div>
        ) : (
          <Button onClick={() => openModal({ dom: <ConnectWalletModal /> })}>Connect</Button>
        )}
      </div>
    </div>
  );
};
export default AppHeader;
