(this.webpackJsonpprivacy=this.webpackJsonpprivacy||[]).push([[0],{105:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(9),i=n.n(c),s=(n(74),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))}),u=(n(75),n(134)),o=n(16),l=n(137),j=n(140),b=n(4),h=function(t){var e=t.onSetEmail,n=Object(r.useState)(""),a=Object(o.a)(n,2),c=a[0],i=a[1];return Object(b.jsxs)("form",{style:{display:"flex",gap:"4px"},onSubmit:function(t){t.preventDefault(),e(c)},children:[Object(b.jsx)(l.a,{id:"email",label:"Email",type:"email",value:c,onChange:function(t){return i(t.target.value)}}),Object(b.jsx)(j.a,{variant:"contained",color:"primary",type:"submit",children:"Confirm"})]})},p=Object(r.createContext)([]),d=n(133),f=n(131),m=n(132),x=n(29),O=function(){return Object(b.jsx)(f.a,{position:"static",children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(j.a,{color:"inherit",component:x.b,to:"/track-me",children:"Track me"}),Object(b.jsx)(j.a,{color:"inherit",component:x.b,to:"/inquiry",children:"Inquire"}),Object(b.jsx)(j.a,{color:"inherit",component:x.b,to:"/delete-me",children:"Delete me"})]})})},v=function(t){var e=t.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)(d.a,{children:e})]})};function y(){var t=Object(r.useContext)(p);return Object(b.jsxs)(v,{children:[Object(b.jsx)(u.a,{variant:"h2",gutterBottom:!0,children:"Data collection"}),Object(b.jsx)(h,{onSetEmail:function(e){t.forEach((function(t){return t.trackEmail(e)}))}})]})}var g=n(12),k=n(139),w=n(135),S=n(136),C=n(15),E=n.n(C),D=n(11),_=n(45),q=n(24);var B=function(){var t=Object(r.useState)(null),e=Object(o.a)(t,2),n=e[0],a=e[1],c=function(t){var e=Object(r.useContext)(p),n=Object(r.useState)({}),a=Object(o.a)(n,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){null!==t&&e.map(function(){var e=Object(q.a)(E.a.mark((function e(n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchDetails(t);case 2:r=e.sent,i((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(D.a)({},n.name,{name:n.name,data:r}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t,e]),Object.values(c)}(n);return Object(b.jsxs)(v,{children:[Object(b.jsx)(u.a,{variant:"h2",gutterBottom:!0,children:"Inquiries"}),Object(b.jsx)(h,{onSetEmail:a}),Object(b.jsx)(k.a,{m:1,style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:c.map((function(t){return Object(b.jsx)(w.a,{style:{maxWidth:"600px"},children:Object(b.jsxs)(S.a,{children:[Object(b.jsx)(u.a,{variant:"h3",gutterBottom:!0,children:t.name}),null===t.data?Object(b.jsx)(u.a,{variant:"body1",children:"No data"}):Object(b.jsx)("pre",{children:JSON.stringify(t.data,null,2)})]})},t.name)}))})]})},F=function(){var t=Object(r.useContext)(p),e=Object(r.useState)(!1),n=Object(o.a)(e,2),a=n[0],c=n[1];return Object(b.jsxs)(v,{children:[Object(b.jsx)(u.a,{variant:"h2",gutterBottom:!0,children:"Inquiries"}),Object(b.jsx)(h,{onSetEmail:function(e){function n(){return(n=Object(q.a)(E.a.mark((function n(){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.next=3,Promise.all(t.map(function(){var t=Object(q.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.deleteMe(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:c(!1);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}}),a&&"Submitting, please wait"]})};function I(){return Object(b.jsxs)(g.d,{children:[Object(b.jsx)(g.b,{path:"/track-me",children:Object(b.jsx)(y,{})}),Object(b.jsx)(g.b,{path:"/inquiry",children:Object(b.jsx)(B,{})}),Object(b.jsx)(g.b,{path:"/delete-me",children:Object(b.jsx)(F,{})}),Object(b.jsx)(g.a,{to:"/track-me"})]})}var M=n(40),P=n(27),J=n(60),L=n.n(J),T=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";Object(M.a)(this,t),this.name="MailChimp",this.instance=void 0;var r=/-(.+)$/g,a=r.exec(e)[1];this.instance=L.a.create({baseURL:"".concat(n,"https://").concat(a,".api.mailchimp.com/3.0"),timeout:5e3,auth:{username:"anystring",password:e}})}return Object(P.a)(t,[{key:"fetchDetails",value:function(){var t=Object(q.a)(E.a.mark((function t(e){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.instance.get("/search-members?query=".concat(e));case 2:if(n=t.sent,void 0!==(r=n.data.exact_matches.members[0])){t.next=6;break}return t.abrupt("return",null);case 6:return delete r._links,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"trackEmail",value:function(){var t=Object(q.a)(E.a.mark((function t(e){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.instance.get("/lists");case 2:return n=t.sent,r=n.data.lists[0].id,t.next=6,this.instance.post("/lists/".concat(r),{members:[{email_address:e,status:"subscribed"}],update_existing:!0});case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"deleteMe",value:function(){var t=Object(q.a)(E.a.mark((function t(e){var n,r,a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchDetails(e);case 2:if(null!==(n=t.sent)){t.next=5;break}return t.abrupt("return");case 5:return r=n.list_id,a=n.id,t.next=8,this.instance.post("/lists/".concat(r,"/members/").concat(a,"/actions/delete-permanent"),{members:[{email_address:e,status:"unsubscribed"}],update_existing:!0});case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),N="3d45a788f3b4ef7c"+(Math.random()>-1?"cfce50a4df06baef-us8":"");function W(){return Object(b.jsx)(p.Provider,{value:[new T(N,"https://startup-cto-cors-proxy.herokuapp.com/")],children:Object(b.jsx)(x.a,{basename:"/privacy",children:Object(b.jsx)(I,{})})})}i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),s()},74:function(t,e,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.4a4704b0.chunk.js.map