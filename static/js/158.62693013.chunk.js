"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{4158:function(n,e,t){t.r(e),t.d(e,{default:function(){return ln}});var r,i,a,o,s,c,l,d,p,u,x,h,f,g,m,b,Z,j,y,w,v=t(2791),z=t(9434),k=t(6355),C=t(168),A=t(225),I=A.Z.div(r||(r=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n"]))),F=A.Z.span(i||(i=(0,C.Z)(["\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #0084ff3d;\n  margin-right: 15px;\n  padding: 5px;\n  border-radius: 3px;\n  color: inherit;\n"]))),D=A.Z.p(a||(a=(0,C.Z)(["\n  font-weight: 700;\n  margin-right: 15px;\n"]))),S=A.Z.p(o||(o=(0,C.Z)(["\n  font-weight: 700;\n  margin-right: 30px;\n"]))),q=A.Z.button(s||(s=(0,C.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 35px;\n  height: 35px;\n  padding: 5px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background-color 300ms linear;\n  &:hover,\n  &:focus {\n    background-color: #0084ff;\n  }\n"]))),L=t(3634),N=t(3329),T=function(n){var e=n.contactID,t=n.name,r=n.number,i=(0,z.I0)();return console.log("contactID",e),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(I,{children:[(0,N.jsx)(F,{children:(0,N.jsx)(k.$yZ,{})}),(0,N.jsx)(D,{children:t})]}),(0,N.jsxs)(I,{children:[(0,N.jsx)(S,{children:r}),(0,N.jsx)(q,{type:"button",onClick:function(){return i((0,L.GK)(e))},children:(0,N.jsx)(F,{children:(0,N.jsx)(k.Xm5,{})})})]})]})},_=t(6916),K=function(n){return n.contacts.items},$=function(n){return n.contacts.isLoading},B=function(n){return n.contacts.filter},J=(0,_.P1)([K,B],(function(n,e){return e===e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n})),M=A.Z.li(c||(c=(0,C.Z)(["\n  width: 450px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  :last-child {\n    margin-bottom: 0;\n  }\n"]))),P=function(){var n=(0,z.v9)(J);return n&&(0,N.jsx)("ul",{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,N.jsx)(M,{children:(0,N.jsx)(T,{name:t,number:r,contactID:e})},e)}))})},R=t(9439),E=A.Z.form(l||(l=(0,C.Z)(["\n  width: 400px;\n  margin-bottom: 35px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n"]))),G=A.Z.label(d||(d=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px;\n"]))),O=A.Z.span(p||(p=(0,C.Z)(["\n  font-weight: 700;\n  padding: 10px;\n"]))),X=A.Z.input(u||(u=(0,C.Z)(["\n  height: 40px;\n  /* width: 800px; */\n  padding: 5px 10px;\n  font-size: 14px;\n  color: #000;\n  outline: none;\n  border: 1px solid rgb(0, 0, 0);\n  border-radius: 3px;\n  :focus {\n    border-color: rgb(111, 111, 207);\n  }\n  ::placeholder {\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.75);\n  }\n"]))),H=A.Z.button(x||(x=(0,C.Z)(["\n  margin: 15px;\n  height: 50px;\n  width: 200px;\n  font-weight: 500;\n  font-size: 24px;\n  color: #fff;\n  background-color: #0084ff;\n  border: none;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color, color 250ms linear;\n  :hover,\n  :focus {\n    background-color: #000cb6b7;\n    color: #000;\n  }\n"]))),Q=t(5562),U=function(){var n=(0,v.useState)(""),e=(0,R.Z)(n,2),t=e[0],r=e[1],i=(0,v.useState)(""),a=(0,R.Z)(i,2),o=a[0],s=a[1],c=(0,z.v9)(K),l=(0,z.I0)(),d=function(){r(""),s("")};return(0,N.jsxs)(E,{onSubmit:function(n){n.preventDefault();var e={name:t,number:o};c.some((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?Q.Report.warning("".concat(t),"This user is already in the contact list.","OK"):(l((0,L.uK)(e)),d())},children:[(0,N.jsxs)(G,{children:[(0,N.jsx)(O,{children:"Name"}),(0,N.jsx)(X,{onChange:function(n){return r(n.currentTarget.value)},type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,N.jsxs)(G,{children:[(0,N.jsx)(O,{children:"Number"}),(0,N.jsx)(X,{onChange:function(n){return s(n.currentTarget.value)},type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,N.jsx)(H,{type:"submit",children:"Add contact"})]})},V=t(4808),W=A.Z.label(h||(h=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px;\n"]))),Y=A.Z.h2(f||(f=(0,C.Z)(["\n  margin-bottom: 23px;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 1.2;\n  align-items: center;\n"]))),nn=A.Z.p(g||(g=(0,C.Z)(["\n  font-weight: 500;\n  padding: 10px;\n"]))),en=A.Z.input(m||(m=(0,C.Z)(["\n  height: 40px;\n  padding: 5px 10px;\n  font-size: 14px;\n  color: inherit;\n  outline: none;\n  border: 1px solid rgb(0, 0, 0);\n  border-radius: 3px;\n  :focus {\n    border-color: rgb(111, 111, 207);\n  }\n  ::placeholder {\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.75);\n  }\n"]))),tn=function(){var n=(0,z.I0)(),e=(0,z.v9)(B);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Y,{children:"Sort contacts:"}),(0,N.jsxs)(W,{children:[(0,N.jsx)(nn,{children:"Input search query"}),(0,N.jsx)(en,{type:"text",name:"filter",value:e,onChange:function(e){e.preventDefault();var t=e.target.value;n((0,V.T)(t))},placeholder:"Start to enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})]})},rn=A.Z.main(b||(b=(0,C.Z)(["\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex: auto;\n"]))),an=A.Z.section(Z||(Z=(0,C.Z)(["\n  position: relative;\n  margin: 0 auto;\n  padding: 0 35px;\n  max-width: 1280px;\n"]))),on=A.Z.div(j||(j=(0,C.Z)(["\n  display: flex;\n  align-items: flex-start;\n  padding-top: 60px;\n  padding-bottom: 60px;\n"]))),sn=A.Z.div(y||(y=(0,C.Z)(["\n  margin-right: 100px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]))),cn=A.Z.div(w||(w=(0,C.Z)(["\n  width: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"])));function ln(){var n=(0,z.I0)(),e=(0,z.v9)($);return(0,v.useEffect)((function(){n((0,L.yF)())}),[n]),(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(rn,{children:(0,N.jsx)(an,{children:(0,N.jsxs)(on,{children:[(0,N.jsxs)(sn,{children:[(0,N.jsx)(U,{}),(0,N.jsx)("div",{children:e&&"Request in progress..."}),(0,N.jsx)(P,{})]}),(0,N.jsx)(cn,{children:(0,N.jsx)(tn,{})})]})})})})}}}]);
//# sourceMappingURL=158.62693013.chunk.js.map