---
title: "next.jsの型定義でつまづいた"
date: "2025-07-27"
category: "技術"
tags: ["Next.js"]
---

ブログ記事をmarkdownで記載しておき，表示時にはHTMLに変換するfuncitonを定義したが引数に渡すparamsがbuildするときに永遠と型エラーに陥った．

どうもAppRouterが自動で型判定した際にこちらが想定するものではない型で判定されてしまっているよう・・・

無理やり`eslint-disable-next-line @typescript-eslint/no-explicit-any`で`eslint.config.mjs`のルールを無視するアノテータを記載すればパスした．

```
> tech-blog@0.1.0 build
> next build

   ▲ Next.js 15.4.3

   Creating an optimized production build ...
 ✓ Compiled successfully in 4.0s
   Linting and checking validity of types  ..Failed to compile.

src/app/posts/[slug]/page.tsx
Type error: Type 'PageProps' does not satisfy the constraint 'import("/home/ryosasaki/workspaces/tech-blog/.next/types/app/posts/[slug]/page").PageProps'.
  Types of property 'params' are incompatible.
    Type 'PostParams' is missing the following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]

Next.js build worker exited with code: 1 and signal: null
```