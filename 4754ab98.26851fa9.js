(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(92)),c={id:"executeFunction",title:"executeFunction",sidebar_label:"executeFunction"},u={unversionedId:"executeFunction",id:"executeFunction",isDocsHomePage:!1,title:"executeFunction",description:"Created by Siddharth Goel",source:"@site/docs/executeFunction.md",slug:"/executeFunction",permalink:"/docusaurus-v2/docs/executeFunction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/executeFunction.md",version:"current",sidebar_label:"executeFunction",sidebar:"someSidebar",previous:{title:"sendTextMessage",permalink:"/docusaurus-v2/docs/doc4"},next:{title:"Sept 2020 Release Notes",permalink:"/docusaurus-v2/docs/Sept 2020"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Code Snippet",id:"code-snippet",children:[]},{value:"Notes",id:"notes",children:[]}],l={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Created by Siddharth Goel\nApril 29, 2019"),Object(o.b)("p",null,"Process to directly call/execute other function from the Developer Section"),Object(o.b)("h3",{id:"input-parameters"},"Input Parameters"),Object(o.b)("h3",{id:"output-parameters"},"Output Parameters"),Object(o.b)("p",null,"So, functions introduce modularity in the code. The code becomes more readable, maintainable, and better able to be debugged."),Object(o.b)("p",null,"htere can come a situation when we have already defined a common function that will be called by many different functions.\nTo execute this function, we have to use the executeFunction function."),Object(o.b)("h3",{id:"code-snippet"},"Code Snippet"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.executeFunction('functionName', args).then((optional_returned_value) => {\n// good practice to return resolve if nothing else has to be done, otherwise use the returned value (optional)\n    return resolve();\n }).catch((e) => {\n     //handle error\n })\n")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The first argument is the function name that we want to execute."),Object(o.b)("li",{parentName:"ol"},"The second argument deals with the arguments/parameters that we want the function to use.")),Object(o.b)("h3",{id:"notes"},"Notes"),Object(o.b)("p",null,"args is a JSON Object"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-JSON"}),"args = {\n    time: date,\n    mobile: app.context.steps['phone-number'],\n    branch: branch_name,\n    documents: documents,\n    address: branch_addr\n};\n")),Object(o.b)("p",null,"To use it in the function being called, directly use it as -"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.sendTextMessage(`Branch name is ${args.branch}`);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"There is no need to use .then and .catch but it is good practice since this function will be executed asynchronously and you may resolve the function before even actually setting the value.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If a value has to be returned, then return it as return value.")))}s.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,u(u({ref:t},l),{},{components:n})):a.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);