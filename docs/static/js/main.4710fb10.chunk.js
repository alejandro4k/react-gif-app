(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(8),i=n.n(r),s=n(2),u=n(11),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){return o(e.target.value)}})})},j=n(7),l=n(9),d=n.n(l),f=n(6),b=n.n(f),m=n(10),p=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&rating=r&api_key=dwkAv3Z92zCkB089sB4AS1d9BekIEjTx"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.id,n=e.title,c=e.url;e.selected;return Object(a.jsxs)("div",{className:"card animate__animated animate__backInLeft",children:[Object(a.jsx)("img",{src:c,alt:n}),Object(a.jsx)("p",{children:n})]},t)},x=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(t),r=n.data,i=n.loading,u=Object(c.useState)(""),o=Object(s.a)(u,2),l=o[0],f=o[1],b=function(e){var t=e.text,n=e.className;return Object(a.jsx)("div",{className:n,children:t})},m=b({text:"<",className:"arrow-prev"}),x=b({text:">",className:"arrow-next"}),h=r.map((function(e){return Object(a.jsx)(O,Object(j.a)(Object(j.a)({},e),{},{selected:l}),e.id)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__slideInLeft",children:t}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(a.jsx)(d.a,{data:h,arrowLeft:m,arrowRight:x,selected:l,onSelect:function(e){f(e)}})]})},h=function(){var e=Object(c.useState)(["Dragon Ball"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(o,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(x,{category:e},e)}))})]})},g=(n(18),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))});i.a.render(Object(a.jsx)(h,{}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.4710fb10.chunk.js.map