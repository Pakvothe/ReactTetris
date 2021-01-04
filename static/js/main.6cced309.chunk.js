(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],{22:function(t,n,e){},29:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e(0),o=e.n(c),i=e(13),a=e.n(i),l=(e(22),e(2)),s=function(){return Array.from(Array(20),(function(){return Array(12).fill([0,"clear"])}))},u=function(t,n,e){for(var r=e.x,c=e.y,o=0;o<t.tetromino.length;o+=1)for(var i=0;i<t.tetromino[o].length;i+=1)if(0!==t.tetromino[o][i]&&(!n[o+t.pos.y+c]||!n[o+t.pos.y+c][i+t.pos.x+r]||"clear"!==n[o+t.pos.y+c][i+t.pos.x+r][1]))return!0;return!1},d=e(3),f=e(4);function b(){var t=Object(d.a)(["\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\talign-items: flex-start;\n\tjustify-content: center;\n\tpadding: 40px;\n\tmargin: 0 auto;\n\twidth: 100vw;\n\n\taside {\n\t\twidth: 100%;\n\t\tmax-width: 200px;\n\t\tdisplay: block;\n\t\tmargin-right: 3em;\n\t}\n\n\t.info_container{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t\tmargin-left: 3em;\n\n\t\t.box_info{\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-around;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: 3px solid #2a9d8f;\n\t\t\tborder-radius: 20px;\n\t\t\tmargin-bottom: 2em;\n\t\t\tpadding: 1em;\n\t\t\tbackground-color: rgba(42, 157, 143,0.6);\n\t\t\tcolor: white;\n\t\t\t\n\t\t\tp {\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin: -0.1em;\n\t\n\t\t\t\t&:last-child{\n\t\t\t\t\tmargin-bottom: 0.5em;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.controls{\n\t\t\t\tdisplay:flex;\n\t\t\t}\n\n\t\t\ta {\n\t\t\t\tmargin-bottom: 1em;\n\t\t\t\ttext-decoration: none;\n\t\t\t\tcolor: white;\n\t\t\t\tfont-weight: 600;\n\t\n\t\t\t\t&:hover {\n\t\t\t\t\tcolor: #E9C46A;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return b=function(){return t},t}function x(){var t=Object(d.a)(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: #264653;\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e76f51' stroke-width='2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23e9c46a'%3E%3Ccircle cx='769' cy='229' r='9'/%3E%3Ccircle cx='539' cy='269' r='9'/%3E%3Ccircle cx='603' cy='493' r='9'/%3E%3Ccircle cx='731' cy='737' r='9'/%3E%3Ccircle cx='520' cy='660' r='9'/%3E%3Ccircle cx='309' cy='538' r='9'/%3E%3Ccircle cx='295' cy='764' r='9'/%3E%3Ccircle cx='40' cy='599' r='9'/%3E%3Ccircle cx='102' cy='382' r='9'/%3E%3Ccircle cx='127' cy='80' r='9'/%3E%3Ccircle cx='370' cy='105' r='9'/%3E%3Ccircle cx='578' cy='42' r='9'/%3E%3Ccircle cx='237' cy='261' r='9'/%3E%3Ccircle cx='390' cy='382' r='9'/%3E%3C/g%3E%3C/svg%3E\");\n\toverflow: hidden;\n"]);return x=function(){return t},t}var j=f.a.div(x()),p=f.a.div(b()),h=e(8),O=e.n(h);var m=e(9),g={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},v=function(){var t="IJLOSTZ",n=t[Math.floor(Math.random()*t.length)];return g[n]},y=function(t,n){var e=Object(c.useState)(s()),r=Object(l.a)(e,2),o=r[0],i=r[1],a=Object(c.useState)(0),u=Object(l.a)(a,2),d=u[0],f=u[1];return Object(c.useEffect)((function(){f(0);var e=function(e){var r=e.map((function(t){return t.map((function(t){return"clear"===t[1]?[0,"clear"]:t}))}));return t.tetromino.forEach((function(n,e){n.forEach((function(n,c){0!==n&&(r[e+t.pos.y][c+t.pos.x]=[n,"".concat(t.collided?"merged":"clear")])}))})),t.collided?(n(),function(t){return t.reduce((function(n,e){return-1===e.findIndex((function(t){return 0===t[0]}))?(f((function(t){return t+1})),n.unshift(new Array(t[0].length).fill([0,"clear"])),n):(n.push(e),n)}),[])}(r)):r};i((function(t){return e(t)}))}),[t.collided,t.pos.x,t.pos.y,t.tetromino,n]),[o,i,d]};function w(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: repeat(\n\t\t",",\n\t\tcalc(25vw / ",")\n\t);\n\tgrid-template-columns: repeat(",", 1fr);\n\tgrid-gap: 1px;\n\tborder: 3px solid #2A9D8F;\n\twidth: 100%;\n\tmax-width: 25vw;\n\tbackground-color: #2A9D8F;\n\tborder-radius: 5px;\n"]);return w=function(){return t},t}var E=f.a.div(w(),(function(t){return t.height}),(function(t){return t.width}),(function(t){return t.width}));function C(){var t=Object(d.a)(["\n  width: auto;\nborder-radius: 4px;\n  background: rgba(",", 0.6);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"]);return C=function(){return t},t}var k=f.a.div(C(),(function(t){return t.color}),(function(t){return 0===t.type?"0px solid":"4px solid"}),(function(t){return t.color}),(function(t){return t.color}),(function(t){return t.color}),(function(t){return t.color})),L=function(t){var n=t.type;return Object(r.jsx)(k,{type:n,color:g[n].color})},S=o.a.memo(L),M=function(t){var n=t.stage;return Object(r.jsx)(E,{width:n[0].length,height:n.length,children:n.map((function(t){return t.map((function(t,n){return Object(r.jsx)(S,{type:t[0]},n)}))}))})};function A(){var t=Object(d.a)(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-bottom: 1em;\n\tpadding: 20px;\n\tborder: 3px solid #2a9d8f;\n\tmin-height: 30px;\n\twidth: 100%;\n\tborder-radius: 20px;\n\tcolor: ",";\n\tbackground-color: rgba(42, 157, 143,0.6);\n\tfont-family: Pixel, Arial, Helvetica, sans-serif;\n\tfont-size: 0.8rem;\n"]);return A=function(){return t},t}var I=f.a.div(A(),(function(t){return t.gameOver?"red":"white"})),J=function(t){var n=t.gameOver,e=t.text;return Object(r.jsx)(I,{gameOver:n,children:e})};function N(){var t=Object(d.a)(["\n\tbox-sizing: border-box;\n\tmargin-bottom: 1em;\n\tpadding: 1.5em;\n\twidth: 100%;\n\tborder-radius: 20px;\n\tborder: 3px solid #2A9D8F;\n\tcolor: white;\n\tbackground: rgba(38, 70, 83, 0.7);\n\tfont-family: Pixel, Arial, Helvetica, sans-serif;\n\tfont-size: 1rem;\n\toutline: none;\n\tcursor: pointer;\n\ttransition: background .2s ease-in-out;\n\n\t&:hover{\n\t\tbackground: #2a9d8f;\n\t}\n"]);return N=function(){return t},t}var T=f.a.button(N()),z=function(t){var n=t.callback,e=Object(c.useState)(!0),o=Object(l.a)(e,2),i=o[0],a=o[1];return Object(r.jsx)(T,{onClick:function(){a(!i),n()},children:!0===i?"Start Game":"Reset Game"})},F=function(){var t=Object(c.useState)(null),n=Object(l.a)(t,2),e=n[0],o=n[1],i=Object(c.useState)(!1),a=Object(l.a)(i,2),d=a[0],f=a[1],b=function(){var t=Object(c.useState)({pos:{x:0,y:0},tetromino:g[0].shape,collided:!1}),n=Object(l.a)(t,2),e=n[0],r=n[1];function o(t,n){var e=t.map((function(n,e){return t.map((function(t){return t[e]}))}));return n>0?e.map((function(t){return t.reverse()})):e.reverse()}var i=Object(c.useCallback)((function(){r({pos:{x:4,y:0},tetromino:v().shape,collided:!1})}),[]);return[e,function(t){var n=t.x,e=t.y,c=t.collided;r((function(t){return Object(m.a)(Object(m.a)({},t),{},{pos:{x:t.pos.x+=n,y:t.pos.y+=e},collided:c})}))},i,function(t,n){var c=JSON.parse(JSON.stringify(e));c.tetromino=o(c.tetromino,n);for(var i=c.pos.x,a=1;u(c,t,{x:0,y:0});)if(c.pos.x+=a,(a=-(a+(a>0?1:-1)))>c.tetromino[0].length)return o(c.tetromino,-n),void(c.pos.x=i);r(c)}]}(),x=Object(l.a)(b,4),h=x[0],w=x[1],E=x[2],C=x[3],k=y(h,E),L=Object(l.a)(k,3),S=L[0],A=L[1],I=function(t){var n=Object(c.useState)(0),e=Object(l.a)(n,2),r=e[0],o=e[1],i=Object(c.useState)(0),a=Object(l.a)(i,2),s=a[0],u=a[1],d=Object(c.useState)(0),f=Object(l.a)(d,2),b=f[0],x=f[1],j=[40,100,300,1200],p=Object(c.useCallback)((function(){t>0&&(o((function(n){return n+j[t-1]*(b+1)})),u((function(n){return n+t})))}),[b,j,t]);return Object(c.useEffect)((function(){p()}),[p,t,r]),[r,o,s,u,b,x]}(L[2]),N=Object(l.a)(I,6),T=N[0],F=N[1],R=N[2],Z=N[3],_=N[4],D=N[5];console.log("re-render");var G=function(t){u(h,S,{x:t,y:0})||w({x:t,y:0})},P=function(){R>10*(_+1)&&(D((function(t){return t+1})),o(1e3/(_+1)+200)),u(h,S,{x:0,y:1})?(h.pos.y<1&&(console.log("GAME OVER!!!"),f(!0),o(null)),w({x:0,y:0,collided:!0})):w({x:0,y:1,collided:!1})};!function(t,n){var e=Object(c.useRef)();Object(c.useEffect)((function(){e.current=t}),[t]),Object(c.useEffect)((function(){if(null!==n){var t=setInterval((function(){e.current()}),n);return function(){clearInterval(t)}}}),[n])}((function(){P()}),e);var B=function(t){var n=t.keyCode;d||(37===n?G(-1):39===n?G(1):40===n?(o(null),P()):38===n&&C(S,1))};return Object(r.jsx)(j,{role:"button",tabIndex:"0",onKeyDown:function(t){return B(t)},onKeyUp:function(t){var n=t.keyCode;d||40===n&&o(1e3/(_+1))},children:Object(r.jsxs)(p,{children:[Object(r.jsx)(O.a,{left:!0,children:Object(r.jsxs)("div",{className:"info_container",children:[Object(r.jsxs)("aside",{className:"box_info",children:[Object(r.jsx)("h2",{children:"Tetris Game"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Created by"}),Object(r.jsx)("p",{children:"Franco Ortiz"})]}),Object(r.jsx)("a",{href:"https://github.com/Pakvothe/ReactTetris",target:"_blank",rel:"noreferrer",children:" ~ Repository ~ "})]}),Object(r.jsxs)("aside",{className:"box_info",children:[Object(r.jsx)("h2",{children:"Controls"}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{className:"controls",children:[Object(r.jsx)("span",{children:"\u21e7 "})," = Spin Tetromino"]}),Object(r.jsxs)("p",{className:"controls",children:[Object(r.jsx)("span",{children:"\u21e9 "})," = Fast Fall"]}),Object(r.jsxs)("p",{className:"controls",children:[Object(r.jsx)("span",{children:"\u21e8 "})," = Right"]}),Object(r.jsxs)("p",{className:"controls",children:[Object(r.jsx)("span",{children:"\u21e6 "})," = Left"]})]})]})]})}),Object(r.jsx)(M,{stage:S}),Object(r.jsx)(O.a,{right:!0,children:Object(r.jsxs)("aside",{children:[d?Object(r.jsx)(J,{gameOver:d,text:"Game Over"}):Object(r.jsxs)("div",{children:[Object(r.jsx)(J,{text:"Score: ".concat(T)}),Object(r.jsx)(J,{text:"rows: ".concat(R)}),Object(r.jsx)(J,{text:"Level: ".concat(_)}),Object(r.jsx)(J,{text:"Down Speed: ".concat(Math.round(e)," ms")})]}),Object(r.jsx)(z,{callback:function(){A(s()),o(1e3),E(),F(0),D(0),Z(0),f(!1)}})]})})]})})},R=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(F,{})})};a.a.render(Object(r.jsx)(R,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6cced309.chunk.js.map