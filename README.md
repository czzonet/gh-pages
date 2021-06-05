# 博客系统

使用webpack打包md，github托管

## 基础原理

### md

md可以统一由webpack打包，可以只上传写好的md

### GitHub

仓库的settings=>pages，然后dronci或GitHubaction进行自动部署。

## 问题

### 抄袭？

容易被复制 无关紧要

### 目的

展示自己的技术栈，日常知识记录。历程。

## 实现

### md打包loader：

```sh
yarn add  markdown-loader html-loader highlight.js
```

react组件里使用生成的html：

```tsx
import md from 'xxx.md'
...  
  return <div dangerouslySetInnerHTML={{ __html: md }}></div>
```

图片都正常打包了。

代码高亮用highlight.js，需要引入highlight.js的主题，直接引入。

## 流程

编写md并引入，编译的结果提交ghpages分支即可。

可以提交master分支，用ci处理。

## 进阶

### 目录预览？

参考antd文档

左中右结构即可，不要预览。

### 路由

需要提取生成比较好

## Reference 

1. [让 React 正常显示你的 html 代码： dangerouslySetInnerHTML – 冰冰的小屋](https://16bing.com/2017/08/11/react-html-dangerouslysetinnerhtml/)
2. [在 React Apps 中使用 Webpack 渲染 Markdown](https://intoli.com/blog/webpack-markdown-setup/)

