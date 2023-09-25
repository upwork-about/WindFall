import React from "react";
import TableList from "@/components/TableList"
import Timer from "./Timer";
const TokenTable: React.FC = () => {
  const columns = [
    {
      title: "Token",
      align: "left" as const,
      width:"30%",
      render: (text: string, record: any, index: number) => {
        return (
          <div className="">
            <div>
              <span>{record.Token}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "Deposits",
      align: "left" as const,
      width:"33%",
      render: (text: string, record: any, index: number) => {
        return (
          <div className="">
            <div>
              <span>{record.Deposits}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "Daily",
      align: "left" as const,
      width:"25%",
      render: (text: string, record: any, index: number) => {
        return (
          <div className="">
            <div>
              <span>{record.Daily}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "Super",
      render: (text: string, record: any, index: number) => {
        return (
          <div className="">
            <div>
              <span>{record.Super}</span>
            </div>
          </div>
        );
      },
    },
  ];
  const dataSource = [
    {
      Token: "CANTO",
      Deposits: "1,030,888",
      Daily: "14.2",
      Super: "84.8",
    },
    {
      Token: "Ethereum",
      Deposits: "788",
      Daily: "0.001",
      Super: "0.014",
    },
    {
      Token: "Matic",
      Deposits: "84.665",
      Daily: "3.54",
      Super: "15.7",
    },
  ];
  return <div className="home-token-table">
    <div className="header-bg">
    </div>
    <div className="cen-wrap">
      <div className="token-table">
        <div className="table-title-wrap">
          <div className="left-wrap">
          <img src="/img/home/tokenTable/timer.png" alt="" />
          <p>Time until next draw</p>
          </div>
          <Timer></Timer>
        </div>
        <div className="table-list">
          <TableList
            columns={columns}
            dataSource={dataSource}
          ></TableList>
        </div>
        <div className="btn">
        DEPOSIT
        </div>
      </div>
      <div className="position-wrap">
      <img className="zero-left-list1" src="/img/home/tokenTable/left-list1.png" alt="" />
      <img className="zero-left-list2" src="/img/home/tokenTable/left-list2.png" alt="" />
      <img className="zero-left-list3" src="/img/home/tokenTable/left-list3.png" alt="" />
      <img className="zero-right-list1" src="/img/home/tokenTable/right-list1.png" alt="" />
      <img className="zero-right-list2" src="/img/home/tokenTable/right-list2.png" alt="" />
      <img className="zero-right-list3" src="/img/home/tokenTable/right-list3.png" alt="" />
    </div>
    </div>
  </div>;
};
export default TokenTable;
