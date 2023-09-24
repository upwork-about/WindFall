import React from "react";
import { Button, Input, Popover } from "antd";
import style from "./index.module.scss";
const AppFooter: React.FC = () => {
  return (
    <div className={style["app-footer"]}>
      <div className="footer-wrap"></div>
    </div>
  );
};
export default AppFooter;
