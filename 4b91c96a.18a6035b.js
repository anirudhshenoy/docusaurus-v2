(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(92)),i={id:"doc4",title:"sendTextMessage",sidebar_label:"sendTextMessage"},s={unversionedId:"doc4",id:"doc4",isDocsHomePage:!1,title:"sendTextMessage",description:"Created by Siddharth Goel",source:"@site/docs/doc4.md",slug:"/doc4",permalink:"/docusaurus-v2/docs/doc4",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc4.md",version:"current",sidebar_label:"sendTextMessage",sidebar:"someSidebar",previous:{title:"allSteps",permalink:"/docusaurus-v2/docs/allSteps"},next:{title:"executeFunction",permalink:"/docusaurus-v2/docs/doc5"}},c=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Code",id:"example-code",children:[]},{value:"Notes",id:"notes",children:[]}],u={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Created by Siddharth Goel\nLast Updated April 28, 2019"),Object(o.b)("p",null,"The Process to send text message in the bot"),Object(o.b)("h3",{id:"input-parameters"},"Input Parameters"),Object(o.b)("h3",{id:"output-parameters"},"Output Parameters"),Object(o.b)("h3",{id:"example-code"},"Example Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"app.sendTextMessage(`Your message with value ${variable_name}`).then(() => {\n    // do this part if something has to be done only after sending the message\n})\n")),Object(o.b)("p",null,"So, there is no parameter that needs to be passed apart from the obvious message that we want to display."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The message is generally a string but a variable\u2019s value can be directly passed too.\nAnother popular way to pass the variable value is to use ",Object(o.b)("inlineCode",{parentName:"p"},"notation (present just below Esc key) and write your message as you will and add a variable value as ${variable_name}."))),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If the variable is a JS Object or a JSON Object, then using JSON.stringify(variable_name) would be better so that you don\u2019t miss any of the fields."),Object(o.b)("li",{parentName:"ol"},"It would be better to not use text messages to display an object in practice, apart from testing and debugging purposes."),Object(o.b)("li",{parentName:"ol"},"The function is asynchronous and hence it may happen that the text message may not come in the order that you expect. So, since the function is Promisified writing further instructions inside the .then block is the best practice.")))}l.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,s(s({ref:t},u),{},{components:r})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);