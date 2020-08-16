---
slug: "add-calendly-to-your-react-website"
date: "2020-04-21"
title: "Add Calendly to your React website, quickly and easily."
author: Kayla Gordon
tags: ["Calendly", "Gatsby", "React"]
thumbnailBlog: "./calendly.png"
keywords:
  [
    "how to add calendly to gatsby",
    "how to add calendly to react",
    "react-calendly",
    "calendly gatsby",
    "calendly react",
    "react book demo",
    "gatsby book demo",
    "calendly widget react",
    "calendly widget gatsby",
  ]
---

In this blog post I'll show you how to add your Calendly scheduler to your react website. For this situation we will imagine that we are a company and want to allow others to "Book a demo" for your product. We've all seen this "book a demo" button, some time or another. Now you'll learn how to do it the best way. Quick and easy.

## What is Calendly?

Alright, first things first. In short, Calendly is a tool that helps you schedule meetings or events. Basically it helps you keep track of who you have to meet with or where you need to be. Still need more details? Have a look at their [website](https://calendly.com/).

## Give me the code already!

Alright, alright. Here is the package that you'll need.

`react-calendly`

You can find more information about it [here](https://www.npmjs.com/package/react-calendly).

If you don’t already have an account with Calendly, you'll need to do that. Once you have your account, make a note of your user name. It will be found at the end of the Calendly url. For example: www.calendly.com/your-username

Next you need to decide on how you want your Calendly widget to look. For this, go here:

**https://tcampb.github.io/react-calendly**

Have a look at their components and decide which is best for you. The available components for this package are:

1. InlineWidget
2. PopupText
3. PopupWidget
4. CalendlyEventListener

For this example we will go with the "PopupWidget".

Click the PopupWidget and you'll see a section below appear with some inputs. That is the data for the widget. In those inputs you can change the text on the widget, the color, prefilled data, and utm info. Do your remember the Calendly username that I mentioned earlier? Make sure to add that to the `url` line. Add it to the end of the Calendly url. It should look something like this: `url="https://calendly.com/your-username"`

**Note** If, for whatever reason, you don't see the section below, click ths "Show Info" button at the top right hand side.

Moving on. Now that you've customized the widget, you'll see a "Show Info" button at the top right hand side. Click that. What you see is the code you'll use in your app. Copy that.

Back to your app. In your terminal:

`npm install --save react-calendly`

After it’s installed, create a new page (or go to the page where you want the Calendly widget to appear) and add this:

`import { PopupWidget } from "react-calendly"`

Remember the code you copied? Now is the time to paste it.

```
<PopupWidget
     color="#00a2ff"
     text="Request a Demo"
     textColor="#ffffff"
     url="https://calendly.com/your-username"
   />
```

It’s that easy. Now save and run your code. You now have a quick and easy Calendly widget.

Personally, I had no need for the prefilled data or the utm. The above code works just fine.

## Conclusion

This post demonstrated a quick and easy way to use your Calendly account with your React web app. For this situation, we allowed users to book a product demo, but you can do anything you like with it, even to simply arrange business meetings.
