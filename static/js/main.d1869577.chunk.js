(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{194:function(e,t,a){e.exports=a.p+"static/media/covid.d7265326.png"},195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=a(20),u=a.n(s),l=a(32),i=a(11),d=a(231),m=a(229),p=a(228),f=a(223),v=a(227),h=a(75),b=a.n(h);var g=function(e){var t;return r.a.createElement(f.a,{style:{padding:"20px"}},r.a.createElement(v.a,null,r.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},e.title),r.a.createElement(p.a,{variant:"h5",component:"h2"},r.a.createElement(b.a,{end:null!==(t=e.value)&&void 0!==t?t:0,duration:1.2,separator:","})),r.a.createElement(p.a,{color:"textSecondary"},(new Date).toDateString())))};var y=function(e){return r.a.createElement("div",{style:{margin:"20px 0"}},r.a.createElement(p.a,{variant:"h5",component:"h4",align:"center"},e.title),r.a.createElement("br",null),r.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(m.a,{item:!0,xs:10,md:4},r.a.createElement(g,{title:"Confirmed",value:e.confirmed})),r.a.createElement(m.a,{item:!0,xs:10,md:4},r.a.createElement(g,{title:"Recovered",value:e.recovered})),r.a.createElement(m.a,{item:!0,xs:10,md:4},r.a.createElement(g,{title:"Deaths",value:e.deaths}))))},E=a(230),x=a(234),j=a(232),C=a(233),O=a(78);var S=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({}),d=Object(i.a)(s,2),m=d[0],p=d[1],f=function(){var t=Object(l.a)(u.a.mark((function t(a){var n,r,c,s,l,i,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(e.countries[a.target.value]),t.next=3,fetch("".concat("https://api.covid19api.com","/dayone/country/").concat(e.countries[a.target.value].Slug,"/status/confirmed"));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.next=9,fetch("".concat("https://api.covid19api.com","/dayone/country/").concat(e.countries[a.target.value].Slug,"/status/recovered"));case 9:return c=t.sent,t.next=12,c.json();case 12:return s=t.sent,t.next=15,fetch("".concat("https://api.covid19api.com","/dayone/country/").concat(e.countries[a.target.value].Slug,"/status/deaths"));case 15:return l=t.sent,t.next=18,l.json();case 18:i=t.sent,d=r.map((function(e){return new Date(e.Date).toDateString()})),p({labels:d,datasets:[{label:"Deaths",data:i.map((function(e){return e.Cases})),backgroundColor:"rgba(230, 57, 70, 1)"},{label:"Recovered",data:s.map((function(e){return e.Cases})),backgroundColor:"rgba(69, 123, 157, 1)"},{label:"Confirmed",data:r.map((function(e){return e.Cases})),backgroundColor:"rgba(168, 218, 220, 1)"}]}),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){function t(){return(t=Object(l.a)(u.a.mark((function t(){var a,n,r,c,s,l,i,d,m;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="india",n=e.countries.filter((function(e){return e.Slug===a}))[0],o(n),t.next=5,fetch("".concat("https://api.covid19api.com","/dayone/country/").concat(a,"/status/confirmed"));case 5:return r=t.sent,t.next=8,r.json();case 8:return c=t.sent,t.next=11,fetch("".concat("https://api.covid19api.com","/dayone/country/").concat(a,"/status/recovered"));case 11:return s=t.sent,t.next=14,s.json();case 14:return l=t.sent,t.next=17,fetch("".concat("https://api.covid19api.com","/dayone/country/").concat(a,"/status/deaths"));case 17:return i=t.sent,t.next=20,i.json();case 20:d=t.sent,m=c.map((function(e){return new Date(e.Date).toDateString()})),p({labels:m,datasets:[{label:"Deaths",data:d.map((function(e){return e.Cases})),backgroundColor:"rgba(230, 57, 70, 1)"},{label:"Recovered",data:l.map((function(e){return e.Cases})),backgroundColor:"rgba(69, 123, 157, 1)"},{label:"Confirmed",data:c.map((function(e){return e.Cases})),backgroundColor:"rgba(168, 218, 220, 1)"}]});case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.countries]),r.a.createElement("div",null,r.a.createElement(E.a,{fullWidth:!0},r.a.createElement(x.a,{id:"country-label"},"Select Country"),r.a.createElement(j.a,{labelId:"country-label",onChange:f,autoWidth:!0},e.countries.map((function(e,t){return r.a.createElement(C.a,{key:t,value:t},e.Country)})))),Object.keys(c).length?r.a.createElement(y,{confirmed:c.TotalConfirmed,recovered:c.TotalRecovered,deaths:c.TotalDeaths,title:c.Country}):null,Object.keys(m).length?r.a.createElement(O.Line,{data:null!==m&&void 0!==m?m:[],className:"covid-chart"}):null)},k=a(79),w=a.n(k);var D=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)([]),p=Object(i.a)(s,2),f=p[0],v=p[1],h=Object(n.useState)(!0),b=Object(i.a)(h,2),g=b[0],E=b[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!1),e.next=3,fetch("".concat("https://api.covid19api.com","/summary"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.Global,r=a.Countries,o(n),v(r),E(!0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(d.a,{className:"App"},r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement("img",{src:a(194),alt:"covid header",className:"header-img",align:"center",style:{marginTop:"20px"}})),r.a.createElement(y,{confirmed:c.TotalConfirmed,recovered:c.TotalRecovered,deaths:c.TotalDeaths,title:"Global Stats"}),r.a.createElement(w.a,{loaded:g},r.a.createElement(S,{countries:f})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))},84:function(e,t,a){e.exports=a(195)}},[[84,1,2]]]);
//# sourceMappingURL=main.d1869577.chunk.js.map