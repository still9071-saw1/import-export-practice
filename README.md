# import-export-practice

JavaScript の `import / export` を学習するためのサンプルプロジェクト。

---

# 学習目的

- JavaScript のモジュール分割を理解する
- `import / export` の役割を理解する
- ファイル分割と責務分離を学ぶ
- ES Modules の基本構造を確認する
- Vite と JavaScript 標準機能の違いを整理する

---

# この学習で重要だったこと

## import / export は Vite 専用機能ではない

`import / export` は JavaScript 標準機能（ES Modules）。

Vite 固有機能ではない。

---

## HTML は入口だけ指定する

```html
<script type="module" src="./main.js"></script>
```

HTML は `main.js` のみを読み込む。

その後は `main.js` 側で必要な module を `import` する。

---

## import はコピーではなく参照

```js
import { foo } from "./utils.js";
```

これはコードをコピーしている訳ではなく、
別ファイルを参照している。

---

## import/export は別ファイル間で使う

```plaintext
utils.js
↓ export

main.js
↓ import
```

module 同士を接続する仕組み。

---

## script タグ時代との違い

以前：

```html
<script src="utils.js"></script>
<script src="main.js"></script>
```

順番管理が必要だった。

現在：

```js
import { foo } from "./utils.js";
```

依存関係を自動解析する。

---

## JavaScript は部品組み立て型

現在の JavaScript は：

- 必要なものを install
- 必要なものを import
- 必要な場所で使う

という構造。

LEGO や Notion の block / DB 構造に近い。

---

# 最低実行構成

```plaintext
import-export-practice/
├── index.html
├── main.js
└── utils.js
```

---

# index.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>import export practice</title>
</head>
<body>
  <script type="module" src="./main.js"></script>
</body>
</html>
```

---

# utils.js

```js
// 変数をexportする
export const foo = "Hello Shinichi";

// 関数をexportする
export const bar = (txt) => {
    console.log(txt);
};

// まとめてexportする例
const foo2 = "Hello Sawaki";

const bar2 = (txt) => {
    console.log(txt);
};

export { foo2, bar2 };
```

---

# main.js

```js
import { foo, bar, foo2, bar2 } from "./utils.js";

// import/export 確認
bar(foo);
bar2(foo2);
```

---

# アロー関数について

```js
const bar2 = (txt) => {
    console.log(txt);
};
```

これは：

```js
function bar2(txt) {
    console.log(txt);
}
```

とほぼ同じ意味。

---

## txt について

`txt` は引数（parameter）。

関数実行時に値を受け取るための変数。

```js
bar2("Hello");
```

↓

```plaintext
txt = "Hello"
```

になる。

---

# 実行方法

## Live Server

Visual Studio Code + Live Server を使用。

---

# 確認場所

ブラウザ DevTools Console

---

# 学習時の気付き

今回の学習は、
コード量よりも以下の理解が重要だった。

- import/export の役割
- module の考え方
- 実行構造
- HTML の役割
- Browser と Vite の関係
- 「コードを書く」より「構造を作る」感覚

---

# 今後試したい内容

- default export
- 複数 module 分割
- path (`./`, `../`) 確認
- Firebase 分割
- Vite 環境との比較
- Node.js での import/export