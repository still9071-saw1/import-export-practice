export function hello() {
  return 'Hello';
}

// 変数をexportする
export const foo = "Hello Shinichi";

// 関数をexportする
export const bar = (txt) => {
    console.log(txt);
}
// まとめた書き方：こちらが主流

const foo2 = "Hello Sawaki";
const bar2 = (txt) => {
    console.log(txt);
};
export {foo2, bar2};