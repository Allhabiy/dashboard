(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{245:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},250:function(e,a,t){"use strict";var r=t(241),s=t(243),n=t(1),o=t.n(n),i=t(0),l=t.n(i),c=t(240),d=t.n(c),u=t(242),m={tag:u.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},b=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,i=e.tag,l=e.form,c=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(u.m)(d()(a,n?"no-gutters":null,l?"form-row":"row"),t);return o.a.createElement(i,Object(r.a)({},c,{className:m}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},251:function(e,a,t){"use strict";var r=t(241),s=t(243),n=t(245),o=t.n(n),i=t(1),l=t.n(i),c=t(0),d=t.n(c),u=t(240),m=t.n(u),b=t(242),f=d.a.oneOfType([d.a.number,d.a.string]),g=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),push:Object(b.h)(f,'Please use the prop "order"'),pull:Object(b.h)(f,'Please use the prop "order"'),order:f,offset:f})]),p={tag:b.q,xs:g,sm:g,md:g,lg:g,xl:g,className:d.a.string,cssModule:d.a.object,widths:d.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,i=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),d=[];n.forEach(function(a,r){var s=e[a];if(delete c[a],s||""===s){var n=!r;if(o()(s)){var i,l=n?"-":"-"+a+"-",u=h(n,a,s.size);d.push(Object(b.m)(m()(((i={})[u]=s.size||""===s.size,i["order"+l+s.order]=s.order||0===s.order,i["offset"+l+s.offset]=s.offset||0===s.offset,i)),t))}else{var f=h(n,a,s);d.push(f)}}}),d.length||d.push("col");var u=Object(b.m)(m()(a,d),t);return l.a.createElement(i,Object(r.a)({},c,{className:u}))};E.propTypes=p,E.defaultProps=v,a.a=E},253:function(e,a,t){"use strict";var r=t(241),s=t(243),n=t(1),o=t.n(n),i=t(0),l=t.n(i),c=t(240),d=t.n(c),u=t(242),m={tag:u.q,inverse:l.a.bool,color:l.a.string,block:Object(u.h)(l.a.bool,'Please use the props "body"'),body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.color,i=e.block,l=e.body,c=e.inverse,m=e.outline,b=e.tag,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),p=Object(u.m)(d()(a,"card",!!c&&"text-white",!(!i&&!l)&&"card-body",!!n&&(m?"border":"bg")+"-"+n),t);return o.a.createElement(b,Object(r.a)({},g,{className:p,ref:f}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},254:function(e,a,t){"use strict";var r=t(241),s=t(243),n=t(1),o=t.n(n),i=t(0),l=t.n(i),c=t(240),d=t.n(c),u=t(242),m={tag:u.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,i=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),c=Object(u.m)(d()(a,"card-body"),t);return o.a.createElement(i,Object(r.a)({},l,{className:c,ref:n}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},256:function(e,a,t){"use strict";var r=t(241),s=t(243),n=t(1),o=t.n(n),i=t(0),l=t.n(i),c=t(240),d=t.n(c),u=t(242),m={tag:u.q,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(u.m)(d()(a,"card-header"),t);return o.a.createElement(n,Object(r.a)({},i,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},338:function(e,a,t){"use strict";var r=t(241),s=t(243),n=t(1),o=t.n(n),i=t(0),l=t.n(i),c=t(240),d=t.n(c),u=t(242),m={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,inverse:Object(u.h)(l.a.bool,'Please use the prop "dark"'),dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.q,responsiveTag:u.q,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},b=function(e){var a=e.className,t=e.cssModule,n=e.size,i=e.bordered,l=e.borderless,c=e.striped,m=e.inverse,b=e.dark,f=e.hover,g=e.responsive,p=e.tag,v=e.responsiveTag,h=e.innerRef,E=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(u.m)(d()(a,"table",!!n&&"table-"+n,!!i&&"table-bordered",!!l&&"table-borderless",!!c&&"table-striped",!(!b&&!m)&&"table-dark",!!f&&"table-hover"),t),O=o.a.createElement(p,Object(r.a)({},E,{ref:h,className:j}));if(g){var y=!0===g?"table-responsive":"table-responsive-"+g;return o.a.createElement(v,{className:y},O)}return O};b.propTypes=m,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b},370:function(e,a,t){"use strict";a.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"F\xe9lix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}]},790:function(e,a,t){"use strict";t.r(a);var r=t(86),s=t(87),n=t(89),o=t(88),i=t(90),l=t(1),c=t.n(l),d=t(372),u=t(752),m=t(250),b=t(251),f=t(253),g=t(256),p=t(254),v=t(338),h=t(370);function E(e){var a,t=e.user,r="/users/".concat(t.id);return c.a.createElement("tr",{key:t.id.toString()},c.a.createElement("th",{scope:"row"},c.a.createElement(d.a,{to:r},t.id)),c.a.createElement("td",null,c.a.createElement(d.a,{to:r},t.name)),c.a.createElement("td",null,t.registered),c.a.createElement("td",null,t.role),c.a.createElement("td",null,c.a.createElement(d.a,{to:r},c.a.createElement(u.a,{color:(a=t.status,"Active"===a?"success":"Inactive"===a?"secondary":"Pending"===a?"warning":"Banned"===a?"danger":"primary")},t.status))))}var j=function(e){function a(){return Object(r.a)(this,a),Object(n.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=h.a.filter(function(e){return e.id<10});return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(m.a,null,c.a.createElement(b.a,{xl:6},c.a.createElement(f.a,null,c.a.createElement(g.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Users ",c.a.createElement("small",{className:"text-muted"},"example")),c.a.createElement(p.a,null,c.a.createElement(v.a,{responsive:!0,hover:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"id"),c.a.createElement("th",{scope:"col"},"name"),c.a.createElement("th",{scope:"col"},"registered"),c.a.createElement("th",{scope:"col"},"role"),c.a.createElement("th",{scope:"col"},"status"))),c.a.createElement("tbody",null,e.map(function(e,a){return c.a.createElement(E,{key:a,user:e})}))))))))}}]),a}(l.Component);a.default=j}}]);
//# sourceMappingURL=23.a3070480.chunk.js.map