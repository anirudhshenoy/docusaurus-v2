---
id: doc4
title: First Example Function
sidebar_label: First Example Function
slug: /
---

# sendTextMessage

Created by Siddharth Goel
Last Updated April 28, 2019


The Process to send text message in the bot


## Use Case

So, the main purpose of a bot is to have a conversation with a user and simultaneously serve the requests.

A text message is the most basic form of serving those requests by sending the reply back as you can most probably guess, a text message.
In the majority of cases, a text message is all we need.

An additional benefit of using a plain old text message is that it is supported by every channel, be it chat, voice and even calls!
So, text messages are very useful despite being very basic in how it can be formatted.


## Format of the Function

```javascript
app.sendTextMessage(`Your message with value ${variable_name}`).then(() => {
    // do this part if something has to be done only after sending the message
})
```

So, there is no parameter that needs to be passed apart from the obvious message that we want to display.

> The message is generally a string but a variable’s value can be directly passed too.
Another popular way to pass the variable value is to use `` notation (present just below Esc key) and write your message as you will and add a variable value as ${variable_name}. ``

## Notes

1. If the variable is a JS Object or a JSON Object, then using JSON.stringify(variable_name) would be better so that you don’t miss any of the fields.
1. It would be better to not use text messages to display an object in practice, apart from testing and debugging purposes.
1. The function is asynchronous and hence it may happen that the text message may not come in the order that you expect. So, since the function is Promisified writing further instructions inside the .then block is the best practice.


