---
slug: "fetch-error-request"
date: "2020-05-15"
title: "FetchError: request to https://cdn.ampproject.org/rtv/metadata failed, reason: socket hang up"
author: Kayla Gordon
tags: ["Error message", "React"]
thumbnailBlog: "./bug.png"
keywords:
  [
    "FetchError: request to https://cdn.ampproject.org/rtv/metadata failed, reason: socket hang up",
  ]
---

Personally, I got this message after running `gatsby build`. I don’t know why I got this error message, but I found it went away after I deleted the `package-lock.json` file and re-installed the packages (`npm install`).
