# 函数组合compose使用reduce实现



功能：

- 传入多个参数，每一个都是函数类型，并且函数执行的结果将传入下个函数参数。

即，每个参数

- 函数
- 只接受一个参数
- 传出一个参数

由于是只接受一个参数，所以需要柯里化的配合，把多参数函数转化为单参数即可。

例子：

写一个程序将数组的第一个元素中的字符串变成大写

流水线

数组-》获取一个元素-》大写-》结束

两个基础函数

```ts
function getFirst(arr: string[]) {
  return arr[0];
}

function toUpperCase(str: string) {
  return str.toUpperCase();
}
```

普通方法

```ts
// 先获取一个元素，再把获得的这个元素当成入参传到toUpperCase
function useoriginal(arr: string[]) {
  return toUpperCase(getFirst(arr));
}
```

函数组合方法

```ts
function usecompose(arr: string[]) {
  const fn = mycompose(mylog, getFirst, mylog, toUpperCase, mylog);
  const res = fn(arr);
  return res;
}
```

组合函数

```ts
/**
 * 组合函数
 * @param fns 待执行的函数
 */
export function mycompose(...fns: any[]) {
  return function (initValue: any) {
    return fns.reduce((p, v) => v(p), initValue);
  };
}
```

调试方法

```ts
function mylog(src: any) {
  console.log(src);
  return src;
}
```

