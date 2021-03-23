(this["webpackJsonpbeers-app"]=this["webpackJsonpbeers-app"]||[]).push([[0],{46:function(e,n,t){"use strict";t.r(n);var c,i,r,a,o,s,d,u,b,l,j,f,p,x,h,O,m,g,v,y,w,S,k,z,C,L=t(2),_=t(0),E=t.n(_),B=t(20),P=t.n(B),R=t(3),T=t(16),F=t(5),M=t(19),J=t(18),N=function(){return Object(J.b)()},A=J.c,D=t(34),G=t(15),I=t(21),U=Object(G.b)({name:"beers",initialState:{list:[]},reducers:{updateBeersList:function(e,n){return{list:[].concat(Object(D.a)(e.list),[n.payload])}},eraseBeersList:function(){return{list:[]}}}}),q=U.actions,H=q.updateBeersList,K=q.eraseBeersList,Q=function(e){return e.beers.list},V=function(e){return Object(I.a)(Q,(function(n){var t;return null!==(t=n[e])&&void 0!==t?t:[]}))},W=U.reducer,X=Object(G.b)({name:"fetch",initialState:{search:null,page:1,slide:0},reducers:{incrementPage:function(e){e.page+=1},decrementPage:function(e){e.page-=1},resetPage:function(e){e.page=1},updateSearch:function(e,n){return Object(M.a)(Object(M.a)({},e),{},{search:n.payload})},increaseSlide:function(e){e.slide+=10},decreaseSlide:function(e){e.slide-=10},resetSlide:function(e){e.slide=0}}}),Y=X.actions,Z=Y.incrementPage,$=Y.decrementPage,ee=Y.resetPage,ne=Y.updateSearch,te=Y.increaseSlide,ce=Y.decreaseSlide,ie=Y.resetSlide,re=function(e){return e.fetch.page},ae=function(e){return e.fetch.search},oe=function(e){return e.fetch.slide},se=X.reducer,de=t(13),ue=function(){var e=Object(_.useState)(!0),n=Object(de.a)(e,2),t=n[0],c=n[1],i=Object(_.useState)(null),r=Object(de.a)(i,2),a=r[0],o=r[1],s=N(),d=A(re),u=A(ae),b=A(function(e){return Object(I.a)(Q,(function(n){return!!n[e-1]}))}(d)),l=Object(_.useRef)(!1);return Object(_.useEffect)((function(){if(l.current&&"string"===typeof u){var e=setTimeout((function(){s(ee()),s(K())}),1e3);return function(){return clearTimeout(e)}}l.current=!0}),[u,s]),Object(_.useEffect)((function(){b||(c(!1),fetch("https://api.punkapi.com/v2/beers?".concat(u?"beer_name=".concat(u,"&"):"","page=").concat(d,"&per_page=3")).then((function(e){if(!e.ok)throw Error("There was a problem to fetch data");return e.json()})).then((function(e){c(!0);var n=e.map((function(e){return{id:e.id,name:e.name,description:e.description,image_url:e.image_url}}));s(H(n))})).catch((function(e){return o(e.message)})))}),[u,s,d,b]),{isLoaded:t,error:a}},be=R.c.div(c||(c=Object(L.a)(["\n    width: 80%;\n    margin: auto;\n    margin-top: 30px;\n"]))),le=R.c.div(i||(i=Object(L.a)(["\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),je=R.c.div(r||(r=Object(L.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n"]))),fe=R.c.div(a||(a=Object(L.a)(["\n    height: 696px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 50px;\n"]))),pe="solid 1px",xe=function(){return Object(R.b)(o||(o=Object(L.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])))},he=R.c.div(s||(s=Object(L.a)(["\n    ","\n    height: 100%;\n    width: 55px;\n    background-color: ",";\n    transition: background-color 0.3s;\n    border-top: ",";\n    border-bottom: ",";\n    :nth-last-of-type(n+3){\n        border-right: ",";\n    }\n    font-size: 30px;\n"])),xe,(function(e){return e.active?"#05aff1":"white"}),pe,pe,pe),Oe=R.c.div(d||(d=Object(L.a)(["\n    ","\n    height: 100%;\n    width: 55px;\n    font-size: 25px;\n    border: ",";\n    :nth-of-type(1){\n        border-radius: 10px 0 0 10px;\n    }\n    :nth-last-of-type(1){\n        border-radius: 0 10px 10px 0;\n    }\n    cursor: ",";\n"])),xe,pe,(function(e){return e.disabled?"no-drop":"pointer"})),me=R.c.div(u||(u=Object(L.a)(["\n    ","\n    text-align: center;\n    height: 50px;\n    bottom: 30px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"])),xe),ge=t(1),ve=String.fromCharCode(8680),ye=String.fromCharCode(8678),we=function(){var e=A(re),n=A(oe),t=N(),c=Object(_.useRef)(!1),i=Array.from({length:10},(function(e,t){return t+1+n})),r=3===A(V(e-1)).length;Object(_.useEffect)((function(){c.current&&1===e?t(ie()):c.current=!0}));return Object(ge.jsxs)(me,{children:[Object(ge.jsx)(Oe,{onClick:function(){e>1&&(t($()),e%10===1&&t(ce()))},disabled:1===e,children:ye}),i.map((function(n){return Object(ge.jsx)(he,{active:n===e,children:n},n)})),Object(ge.jsx)(Oe,{onClick:function(){r&&(t(Z()),e%10===0&&t(te()))},disabled:!r,children:ve})]})},Se=R.c.div(b||(b=Object(L.a)(["\n    height: 200px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    border: solid 1px;\n    border-radius: 30px;\n    margin-bottom: 30px;\n"]))),ke=R.c.div(l||(l=Object(L.a)(["\n    width: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),ze=R.c.div(j||(j=Object(L.a)(["\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 20px;\n"]))),Ce=R.c.div(f||(f=Object(L.a)(["\n    font-size: 30px;\n    font-weight: bold;\n"]))),Le=R.c.div(p||(p=Object(L.a)(["\n    width: 20%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 50px;\n    cursor: pointer;\n"]))),_e=String.fromCharCode(10148),Ee=function(e){var n=e.id,t=e.image_url,c=e.name,i=e.description,r=Object(F.f)().push;return Object(ge.jsxs)(Se,{children:[Object(ge.jsx)(ke,{children:Object(ge.jsx)("img",{src:t,height:"150px"})}),Object(ge.jsxs)(ze,{children:[Object(ge.jsx)(Ce,{children:c}),Object(ge.jsx)("div",{children:"".concat(i.substr(0,100),"...")})]}),Object(ge.jsx)(Le,{onClick:function(){return r("/".concat(n))},children:_e})]})},Be=R.c.input(x||(x=Object(L.a)(["\n    font-size: 30px;\n    border: solid 1px;\n    border-radius: 16px;\n    &:focus {\n        outline: none;\n        box-shadow: 0px 0px 4px #05aff1;\n    }\n    padding: 12px 20px;\n"]))),Pe=function(){var e=A(ae),n=N();return Object(ge.jsx)(Be,{type:"text",placeholder:"Gimme the BEER!",onChange:function(e){e.preventDefault(),n(ne(e.target.value))},value:null!==e&&void 0!==e?e:"",autoFocus:!0})},Re=R.c.button(h||(h=Object(L.a)(["\n    height: 60px;\n    width: 200px;\n    border-radius: 16px;\n    border: solid 1px;\n    font-size: 30px;\n    background: #05aff1;\n    outline: none;\n"]))),Te=function(e){var n=e.label,t=e.destination,c=Object(F.f)().push;return Object(ge.jsx)(Re,{type:"button",onClick:function(){return c(t)},children:n})},Fe=function(){var e=ue(),n=e.isLoaded,t=e.error,c=A(re),i=A(V(c-1));return Object(ge.jsxs)(be,{children:[Object(ge.jsxs)(je,{children:[Object(ge.jsx)(Pe,{}),Object(ge.jsx)(Te,{label:"Random",destination:function(){var e=Math.floor(50*Math.random())+1;return"/".concat(e)}()})]}),Object(ge.jsx)(le,{children:t?Object(ge.jsx)(fe,{children:t}):n?i.length?i.map((function(e){return Object(ge.jsx)(Ee,Object(M.a)({},e),e.id)})):Object(ge.jsx)(fe,{children:"Not Found"}):Object(ge.jsx)(fe,{children:"...Loading"})}),Object(ge.jsx)(we,{})]})},Me=function(e){var n=Object(_.useState)(!0),t=Object(de.a)(n,2),c=t[0],i=t[1],r=Object(_.useState)(null),a=Object(de.a)(r,2),o=a[0],s=a[1],d=Object(_.useState)(null),u=Object(de.a)(d,2),b=u[0],l=u[1];return Object(_.useEffect)((function(){i(!1),fetch("https://api.punkapi.com/v2/beers/".concat(e)).then((function(e){if(!e.ok)throw Error("There was a problem to fetch data");return e.json()})).then((function(e){i(!0);var n=e[0],t=n.name,c=n.description,r=n.first_brewed,a=n.abv,o=n.ibu,s=n.image_url;l({name:t,description:c,first_brewed:r,abv:a,ibu:o,image_url:s})})).catch((function(e){return s(e.message)}))}),[e]),{isLoaded:c,error:o,beer:b}},Je=R.c.div(O||(O=Object(L.a)(["\n    width: 80%;\n    display: flex;\n    flex-direction: row;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]))),Ne=R.c.div(m||(m=Object(L.a)(["\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]))),Ae=R.c.div(g||(g=Object(L.a)(["\n    width: 40%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),De=R.c.div(v||(v=Object(L.a)(["\n    font-size: 30px;\n    font-weight: bold;\n    margin-bottom: 10px;\n"]))),Ge=R.c.div(y||(y=Object(L.a)(["\n    font-size: 20px;\n    text-align: justify;\n    margin-bottom: 5px;\n"]))),Ie=R.c.div(w||(w=Object(L.a)(["\n    display: flex;\n    flex-direction: row;\n    font-size: 20px;\n    margin-bottom: 5px;\n"]))),Ue=R.c.div(S||(S=Object(L.a)(["\n    font-weight: bold;\n"]))),qe=R.c.div(k||(k=Object(L.a)(["\n    padding-left: 10px;\n"]))),He=R.c.div(z||(z=Object(L.a)(["\n    margin: 30px;\n"]))),Ke=function(){var e=Object(F.g)().id,n=Me(Number(e)),t=n.isLoaded,c=n.error,i=n.beer,r=i&&Object(ge.jsxs)(Je,{children:[Object(ge.jsx)(Ae,{children:Object(ge.jsx)("img",{src:i.image_url,height:"400px"})}),Object(ge.jsxs)(Ne,{children:[Object(ge.jsx)(De,{children:i.name}),Object(ge.jsx)(Ge,{children:i.description}),function(e){return Object.keys(e).slice(2,5).map((function(n){return Object(ge.jsxs)(Ie,{children:[Object(ge.jsx)(Ue,{children:n}),Object(ge.jsx)(qe,{children:e[n]})]},n)}))}(i)]})]});return Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(He,{children:Object(ge.jsx)(Te,{label:"Back to List",destination:"/"})}),c?Object(ge.jsx)(fe,{children:c}):t?r:Object(ge.jsx)(fe,{children:"...Loading"})]})},Qe=function(){return Object(ge.jsx)(T.a,{children:Object(ge.jsxs)(F.c,{children:[Object(ge.jsx)(F.a,{path:"/",component:Fe,exact:!0}),Object(ge.jsx)(F.a,{path:"/:id",component:Ke,exact:!0})]})})},Ve=Object(G.a)({reducer:{beers:W,fetch:se}}),We=Object(R.a)(C||(C=Object(L.a)(["\n  html,\n  body {\n    margin: 0;\n    font-family: -apple-system, Oxygen, Ubuntu;\n  }\n"])));P.a.render(Object(ge.jsxs)(E.a.StrictMode,{children:[Object(ge.jsx)(We,{}),Object(ge.jsx)(J.a,{store:Ve,children:Object(ge.jsx)(Qe,{})})]}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.53dfd3fa.chunk.js.map