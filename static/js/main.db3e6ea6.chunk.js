(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),i=(n(15),n(3)),s=(n(16),n(5)),u=(n(17),n(18),n(1));var l=function(e){var t=e.onChange,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),r("")):s.b.error("Enter name of image, what would you like to find")},className:"SearchForm",children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",value:o,autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){r(e.currentTarget.value.toLowerCase())}})]})})},j=n(9);n(20);var b=function(e){var t=e.children;return Object(u.jsx)("ul",{className:"ImageGallery",children:t})};n(21);var h=function(e){var t=e.onLoadMore;return Object(u.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})};var m={fetchImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=23101905-f5de468dd217ea275d2e77ee2&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}},f=m;n(22);var d=function(e){var t=e.onClick,n=e.list,a=function(e){var n=e.target.dataset.url,a=e.target.dataset.alt;t(n,a)};return n.map((function(e){return Object(u.jsx)("li",{onClick:a,className:"ImageGalleryItem",children:Object(u.jsx)("img",{src:e.webformatURL,alt:e.tags,"data-alt":e.tags,"data-url":e.largeImageURL,className:"ImageGalleryItem-image"})},e.id)}))},O=(n(23),document.querySelector("#modal-root"));function g(e){var t=e.onClick,n=e.largeImageURL,c=e.alt;Object(a.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(o.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:n,alt:c})})}),O)}n(24);var v=n(10),p=n.n(v);n(45);var x=function(e){var t=e.name,n=Object(a.useState)([]),c=Object(i.a)(n,2),o=c[0],r=c[1],l=Object(a.useState)(!1),m=Object(i.a)(l,2),O=m[0],v=m[1],x=Object(a.useState)(!1),S=Object(i.a)(x,2),y=S[0],w=S[1],k=Object(a.useState)(1),C=Object(i.a)(k,2),N=C[0],I=C[1],F=Object(a.useState)(!1),L=Object(i.a)(F,2),E=L[0],M=L[1],R=Object(a.useState)(""),T=Object(i.a)(R,2),U=T[0],B=T[1],G=Object(a.useState)(""),q=Object(i.a)(G,2),J=q[0],_=q[1];Object(a.useEffect)((function(){t&&(w(!0),f.fetchImage(t).then((function(e){return 0===e.hits.length?D():function(e){r(e),v(!0),I((function(e){return e+1}))}(e.hits)})).catch((function(e){return console.log(e)})).finally((function(){return w(!1)})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}),[t]);var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";M(!E),B(e),_(t)},D=function(){r([]),v(!1),s.b.error("Nothing not found")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{children:Object(u.jsx)(d,{list:o,onClick:z})}),O&&Object(u.jsx)(h,{onLoadMore:function(){v(!1),w(!0),f.fetchImage(t,N).then((function(e){r((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e.hits))})),I(N+1)})).finally((function(){w(!1),v(!0)}))}}),E&&Object(u.jsx)(g,{largeImageURL:U,alt:J,onClick:z}),y&&Object(u.jsx)("div",{className:"Spinner",children:Object(u.jsx)(p.a,{type:"TailSpin",color:"#00BFFF",height:50,width:50,timeout:2e4})})]})};var S=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{onChange:function(e){c(e)}}),Object(u.jsx)(s.a,{autoClose:3e3}),Object(u.jsx)(x,{name:n})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.db3e6ea6.chunk.js.map