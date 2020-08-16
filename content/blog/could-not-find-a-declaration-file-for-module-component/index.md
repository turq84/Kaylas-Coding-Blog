---
slug: "could-not-find-a-declaration-file-for-module-component"
date: "2020-05-15"
title: “Could not find a declaration file for module component”
author: Kayla Gordon
tags: ["Error message", "React"]
thumbnailBlog: "./bug.png"
keywords: [“Could not find a declaration file for module component”]
---

If you get the error message: `“Could not find a declaration file for module component”` and the path to the component is underlined in red, instead of importing the component as normal, require it. Make sure to add `default` at the end.

`const YourComponent = require("../path/to/YourComponent").default`
