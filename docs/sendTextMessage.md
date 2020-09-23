---
id: sendTextMessage
title: sendTextMessage
sidebar_label: sendTextMessage
---

Created by Siddharth Goel
Last Updated April 28, 2019


The Process to send text message in the bot

### Input Parameters

### Output Parameters


### Example Code

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


