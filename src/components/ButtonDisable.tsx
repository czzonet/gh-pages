import React, { useState } from "react";
import { Button } from "antd";
import styles from "./ButtonDisableStyle.scss";

export function ButtonDisable() {
  const [isDisabled, setIsDiabled] = useState(false);

  return (
    <div className={styles["button-disable"]}>
      <div className={styles["button-test"] + " " + styles["disabled"]}>
        <Button disabled={isDisabled}>111</Button>
      </div>
      <Button onClick={() => setIsDiabled(!isDisabled)}>s</Button>
    </div>
  );
}
