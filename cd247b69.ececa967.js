(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),o=(a(0),a(183)),i={id:"heroku",title:"Self Hosting with Heroku",sidebar_label:"Heroku"},c={id:"self-hosting/heroku",isDocsHomePage:!1,title:"Self Hosting with Heroku",description:"Getting started",source:"@site/docs/self-hosting/heroku.md",permalink:"/self-hosting/heroku",editUrl:"https://github.com/standardnotes/docs/edit/master/docs/self-hosting/heroku.md",lastUpdatedAt:1593569680,sidebar_label:"Heroku",sidebar:"someSidebar",previous:{title:"Self Hosting with Docker",permalink:"/self-hosting/docker"},next:{title:"Managing options",permalink:"/self-hosting/managing-options"}},b=[{value:"Getting started",id:"getting-started",children:[]},{value:"Using your new server",id:"using-your-new-server",children:[]}],s={rightToc:b};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Configure the Heroku Command Line Interface (CLI) using these steps: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/heroku-cli"}),"Heroku CLI"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy the Standard Notes server to your account using the following deploy link: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://heroku.com/deploy?template=https://github.com/standardnotes/syncing-server"}),"https://heroku.com/deploy?template=https://github.com/standardnotes/syncing-server"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install a MySQL add-on. Here we'll use the JawsDB add-on: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://elements.heroku.com/addons/jawsdb"}),"https://elements.heroku.com/addons/jawsdb"),". If you already have a database, you can skip this step.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After installing JawsDB, choose it from the add-ons list in your Heroku dashboard. This will take you to your JawsDB dashboard. You'll need the information found here for the next step.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'In your Heroku application, choose the "Settings" tab.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'In the "Config Variables" section, click "Reveal Config Variables".')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add 4 new variables:"),Object(o.b)("table",{parentName:"li"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_HOST")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Use the "Host" value from your JawsDB dashboard.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_DATABASE")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'In your JawsDB dashboard, you should see at the top "Connection String". Copy the part after "3306/". That will be the name of your database.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_USERNAME")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Use the "Username" value.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_PASSWORD")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Use the "Password" value.'))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Restart your Heroku instance using either the web interface (you\'ll find this option under "More" in the top right) or using the command line:'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku restart --app name_of_app\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Perform initial database setup:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku run rake db:migrate --app name_of_app\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You're done!"))),Object(o.b)("h2",{id:"using-your-new-server"},"Using your new server"),Object(o.b)("p",null,"You can immediately start using your new server by using the Standard Notes app at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.standardnotes.org"}),"https://app.standardnotes.org"),"."),Object(o.b)("p",null,"In the account menu, choose ",Object(o.b)("inlineCode",{parentName:"p"},"Advanced Options")," and enter the address of your new server in ",Object(o.b)("inlineCode",{parentName:"p"},"Sync Server Domain"),"."),Object(o.b)("p",null,"Then, register for a new account or log into an existing account and begin using your private new secure Standard Notes server!"),Object(o.b)("p",null,"Note that you should understand the limitations of Heroku's free tier. In particular, your instance will sleep after 30 minutes of idleness, and may take several seconds to start up again on subsequent requests."))}l.isMDXComponent=!0},183:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);