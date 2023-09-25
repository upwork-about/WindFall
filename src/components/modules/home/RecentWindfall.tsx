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
      type: "DAILY",
      date: "June 23,2023",
      nft: "C-31",
      amount: "46",
      amountUnit: "CANTO",
    },
    {
      windfall: "ETHEREUM",
      type: "DAILY",
      date: "June 23,2023",
      nft: "E-208",
      amount: ".0002",
      amountUnit: "ETH",
    },
    {
      windfall: "MATIC",
      type: "DAILY",
      date: "June 23,2023",
      nft: "M-77",
      amount: "9",
      amountUnit: "MATIC",
    },
    {
      windfall: "CANTO",
      type: "DAILY",
      date: "June 22,2023",
      nft: "C-445",
      amount: "66",
      amountUnit: "CANTO",
    },
    {
      windfall: "ETHEREUM",
      type: "DAILY",
      date: "June 22,2023",
      nft: "E-13",
      amount: ".000t",
      amountUnit: "ETH",
    },
    {
      windfall: "MATIC",
      type: "DAILY",
      date: "June 22,2023",
      nft: "M-909",
      amount: "9",
      amountUnit: "MATIC",
    },
  ];

  const columns = [
    {
      title: "WINDFALL",
      align:"left" as const,
      render: (text: string, record: any, index: number) => {
        return (
          <div className="column-windfall">
            <div className="element">
              <span className={`${record.windfall.toLowerCase()}`}>{record.windfall}</span>
              <span className={`${record.type.toLowerCase()}`}>{record.type}</span>
            </div>
            {responsive.md ? null : <div>{record.date}</div>}
          </div>
        );
      },
    },
    {
      title: "NFT",
      render: (text: string, record: any, index: number) => {
        return (
          <div className="column-nft">
             <div className={`${record.nft.toLowerCase()}`}>{record.nft}</div>
          </div>
        )
      },
    },
    {
      title: "AMOUNT",
      align:"right" as const,
      render: (text: string, record: any, index: number) => {
        const mapNumberToClassName = (number:Number) => {
          const amount = parseFloat(record.amount);
          if (amount === 250 || amount === 0.01 || amount === 123) {
            return 'yellow';
          }
          return '';
        };
    
        const amountClassName = mapNumberToClassName(record.amount);
        return (
          <div className="column-amount">
                   <span className={amountClassName}>{record.amount}</span>
            <span className={`${record.amountUnit.toLowerCase()}`}>{record.amountUnit}</span>
          </div>
        );
      },
    },
  ];
  if (responsive.md) {
    columns.splice(1, 0,
      {
      title: "DATE",
      render: (text: string, record: any, index: number) => {
        const isYellowDate = record.date === "June 24,2023";
        const dateClassName = isYellowDate ? 'yellow' : '';
        return(
          <div className="column-date">
             <div className={`${dateClassName}`}>{record.date}</div>
          </div>
        )
      },
    }

    );
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
