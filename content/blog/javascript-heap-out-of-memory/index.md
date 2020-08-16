---
slug: "javascript-heap-out-of-memory"
date: "2020-05-29"
title: "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory"
author: Kayla Gordon
tags: ["Error message", "React"]
thumbnailBlog: "./bug.png"
keywords:
  [
    "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory",
  ]
---

To solve this, there are two solutions:

## Solution 1

You need to increase the Node JS memory. In your VS Code terminal, type:

`export NODE_OPTIONS="--max-old-space-size=8192"`

where the values of max-old-space-size can be: 2048, 4096, 8192, 16384 and so on.

## Solution 2

Try the following step:

1. Delete the `node_modules` folder.
2. Delete the `package-lock.json` file.
3. Re-install node.js or update to the latest version.
4. Then `npm install`.

If this solution doesn't work, try **Solution 1**.
