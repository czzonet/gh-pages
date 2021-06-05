import { Configuration } from "webpack";
import { projectName, projectRoot, resolvePath } from "../env";
import webpackBar from "webpackbar";
import FriendlyErrorsWebpackPlugin from "@soda/friendly-errors-webpack-plugin";
import webpackBuildNotifier from "webpack-build-notifier";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import highlight from "highlight.js";

const isDev = process.env.NODE_ENV != "prod";
const publicPath = isDev ? "/" : "/gh-pages/";
// const publicPathSvg = process.env.NODE_ENV ? "gh-pages" : undefined;

export const commonConfig: Configuration = {
  context: projectRoot,
  entry: resolvePath(projectRoot, "./src/index.tsx"),
  output: {
    publicPath: publicPath,
    path: resolvePath(projectRoot, "./dist"),
    filename: "js/[name]-[fullhash].bundle.js",
    hashSalt: projectName,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: "babel-loader",
        options: {},
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
                exportLocalsConvention: "camelCase",
              },
              sourceMap: isDev,
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // publicPath: publicPathSvg,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              highlight: (code: string, lang: string) => {
                if (
                  !lang ||
                  ["text", "literal", "nohighlight"].includes(lang)
                ) {
                  return `<pre class="hljs">${code}</pre>`;
                }

                const html = highlight.highlight(lang, code).value;

                return `<span class="hljs">${html}</span>`;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpackBar({
      name: "react-template",
      color: "#61dafb",
    }),
    new FriendlyErrorsWebpackPlugin({}),
    new webpackBuildNotifier(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolvePath(projectRoot, "./public/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*",
          to: resolvePath(projectRoot, "./dist"),
          context: resolvePath(projectRoot, "./public"),
          filter: (resourcePath) =>
            resourcePath != resolvePath(projectRoot, "./public/index.html"),
        },
      ],
    }),
  ],
};
