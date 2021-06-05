import React from "react";
import styles from "./AppStyle.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Markdown } from "./components/Markdown";

import md from "./articles/博客系统/博客系统.md";
import md2 from "./articles/函数组合compose使用reduce实现.md";

export const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.header}>博客</div>

        <div className={styles.body}>
          <div className={styles.sider}>
            <Link to={`/ac1`}> 博客系统</Link>
            <Link to={`/ac2`}> 函数组合compose使用reduce实现</Link>
          </div>

          <div className={styles.content}>
            <Switch>
              <Route
                path={`/ac1`}
                component={() => <Markdown content={md}></Markdown>}
              />
              <Route
                path={`/ac2`}
                component={() => <Markdown content={md2}></Markdown>}
              />
              <Route
                path={`/`}
                exact
                component={() => <Markdown content={md}></Markdown>}
              />
            </Switch>
          </div>

          {/* <div className={styles.tableOfContent}>
            <div>基础原理</div>
            <div>问题</div>
            <div>实现</div>
          </div> */}
        </div>
      </div>
    </Router>
  );
};
