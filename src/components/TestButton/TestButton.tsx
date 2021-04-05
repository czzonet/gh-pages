import React from "react";
import { FileSearchOutlined } from "@ant-design/icons";
import { Button, message, Tooltip } from "antd";
import styles from "./style.scss";
import fileSearch from "../../assets/file_search.svg";

export const TestButton = () => {
  return (
    <div className={styles["test-button"]}>
      <div className={styles["button-control"]}>
        <Button>
          <div className={styles["icon"]}>
            <FileSearchOutlined></FileSearchOutlined>
          </div>
        </Button>
      </div>
      <div className={styles["button-control"]}>
        <Button>
          <div className={styles["icon"]}>
            <img src={fileSearch}></img>
          </div>
        </Button>
      </div>
    </div>
  );
};
