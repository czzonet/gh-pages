import React from "react";
import styles from "./index.scss";

/** 简单参数包裹的处理 */
const wrapMarkup = (html: string) => ({
  __html: html,
});

type Props = {
  content: string;
};

/** 渲染md，可以自定义样式覆盖 */
export const Markdown = (props: Props) => {
  const { content } = props;

  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={wrapMarkup(content)}
    ></div>
  );
};
