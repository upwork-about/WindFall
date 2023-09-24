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
  ];
  const columns = [
    {
      title: "WINDFALL",
      render: (text: string, record: any, index: number) => {
        return (
          <div className="column-windfall">
            <div>
              <span>{record.windfall}</span>
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
    <div className={style[`token-table`]}>
      <TableList
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};
export default CantoDeposit;
