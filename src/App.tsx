import React from "react";
import { ButtonDisable } from "./components/ButtonDisable";
import styles from "./AppStyle.scss";
import { TestButton } from "./components/TestButton/TestButton";
import { ScrollBar } from "./components/ScrollBar/ScrollBar";

export default function App() {
  return (
    <div className={styles["app"]}>
      <h1>Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        reiciendis voluptate, perferendis maiores possimus voluptatem officia
        harum, voluptas accusamus nobis commodi aliquid doloremque eaque
        eligendi, dolores corporis ipsam quod non.
      </p>
      <ul>
        <li>{new Date().toLocaleString()}</li>
      </ul>
      <input type="text" />
      <ButtonDisable></ButtonDisable>
      <TestButton></TestButton>
      <ScrollBar></ScrollBar>
    </div>
  );
}
