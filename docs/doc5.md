---
id: doc5
title: Second Example Function
sidebar_label: executeFunction
---

## executeFunction

Created by Siddharth Goel
April 29, 2019

Process to directly call/execute other function from the Developer Section

### Input Parameters

### Output Parameters


So, functions introduce modularity in the code. The code becomes more readable, maintainable, and better able to be debugged.

htere can come a situation when we have already defined a common function that will be called by many different functions.
To execute this function, we have to use the executeFunction function.

### Code Snippet

```javascript
app.executeFunction('functionName', args).then((optional_returned_value) => {
// good practice to return resolve if nothing else has to be done, otherwise use the returned value (optional)
    return resolve();
 }).catch((e) => {
     //handle error
 })
```

1. The first argument is the function name that we want to execute.
1. The second argument deals with the arguments/parameters that we want the function to use.

### Notes 

args is a JSON Object
```JSON
args = {
    time: date,
    mobile: app.context.steps['phone-number'],
    branch: branch_name,
    documents: documents,
    address: branch_addr
};
```

To use it in the function being called, directly use it as -

```javascript
app.sendTextMessage(`Branch name is ${args.branch}`);
```
> There is no need to use .then and .catch but it is good practice since this function will be executed asynchronously and you may resolve the function before even actually setting the value.

> If a value has to be returned, then return it as return value.
