import React from "react";
import { Button, Input, Popover } from "antd";
import style from "./index.module.scss";
import TableList from "@/components/TableList";
import { useMyResponsive } from "@/hooks/useMyResponsive";
const CantoDeposit: React.FC = () => {
  const responsive = useMyResponsive();
  const dataSource = [
    {
      windfall: "CANTO",
      type: "DAILY",
      date: "June 25,2023",
      nft: "c-155",
      amount: "55",
      amountUnit: "CANTO",
    },
    {
      windfall: "ETGEREUM",
      type: "DAILY",
      date: "June 25,2023",
      nft: "E-35",
      amount: ".001",
      amountUnit: "ETH",
    },
    {
      windfall: "MATIC",
      type: "DAILY",
      date: "June 25,2023",
      nft: "M-1091",
      amount: "11",
      amountUnit: "MATIC",
    },
    {
      windfall: "CANTO",
      type: "SUPER",
      date: "June 24,2023",
      nft: "C-28",
      amount: "250",
      amountUnit: "CANTO",
    },
    {
      windfall: "ETGEREUM",
      type: "SUPER",
      date: "June 24,2023",
      nft: "E-101",
      amount: ".01",
      amountUnit: "ETH",
    },
    {
      windfall: "MATIC",
      type: "SUPER",
      date: "June 24,2023",
      nft: "M-88",
      amount: "123",
      amountUnit: "MATIC",
    },
    {
      windfall: "CANTO",
      type: "SUPER",
      date: "June 24,2023",
      nft: "C-28",
      amount: "250",
      amountUnit: "CANTO",
    },
    {
      windfall: "CANTO",
      type: "SUPER",
      date: "June 24,2023",
      nft: "C-28",
      amount: "250",
      amountUnit: "CANTO",
    },
  ];
  const columns = [
    {
      title: "WINDFALL",
      render: (text: string, record: any, index: number) => {
        return (
          <div className="column-windfall">
            <div>
              <span className={`${record.windfall.toLowerCase()}`}>{record.windfall}</span>
              <span>{record.type}</span>
            </div>
            {responsive.md ? null : <div>{record.date}</div>}
          </div>
        );
      },
    },
    {
      title: "NFT",

      render: (text: string, record: any, index: number) => {
        return <div className="column-nft">{record.nft}</div>;
      },
    },
    {
      title: "AMOUNT",

      render: (text: string, record: any, index: number) => {
        return (
          <div className="column-amount">
            <span>{record.amount}</span>
            <span>{record.amountUnit}</span>
          </div>
        );
      },
    },
  ];
  if (responsive.md) {
    columns.splice(1, 0, {
      title: "DATE",

      render: (text: string, record: any, index: number) => {
        return <div className="column-date">{record.date}</div>;
      },
    });
  }
  return (
    <div className="home-recent-windfalls">
      <div className="con-main-wrap">
        <h3>Recent Windfalls</h3>
        <div className="hr"></div>
        <div className="table-list">
          <TableList
            columns={columns}
            dataSource={dataSource}
          />
        </div>
      </div>
    </div>
  );
};
export default CantoDeposit;
