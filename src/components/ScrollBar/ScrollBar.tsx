import React from "react";
import style from "./styles.scss";

export function ScrollBar() {
  return (
    <div className={style["scroll-bar"]}>
      <div className={style["wrapper"]}>
        <div className={style["container"]}>
          <ul>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
