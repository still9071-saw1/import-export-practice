# import-export-practice

JavaScript の `import / export` を学習するためのサンプルプロジェクト。

## 学習目的

- JavaScript のモジュール分割を理解する
- `import` / `export` の基本を確認する
- ファイル分割と責務分離を学ぶ
- Vite 環境での ES Modules を確認する

---

## 学習内容

### Named Export

```js
export function hello() {
  return 'Hello';
}
```

```js
import { hello } from './utils.js';
```

---

### Default Export

```js
export default function hello() {
  return 'Hello';
}
```

```js
import hello from './utils.js';
```

---

## ファイル構成

```plaintext
src/
├── main.js
├── utils.js
└── sample.js
```

---

## 実行方法

### Vite 起動

```bash
npm install
npm run dev
```

---

## 学習メモ

- `import/export` は JavaScript 標準機能（ES Modules）
- Vite 固有機能ではない
- `type="module"` が必要
- path (`./`, `../`) 理解が重要

---

## 今後試したい内容

- 複数 export
- export default
- Firebase 分割
- utils 化
- フォルダ分割