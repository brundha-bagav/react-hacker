(this["webpackJsonphacker-app"]=this["webpackJsonphacker-app"]||[]).push([[0],{226:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),a=t(86),i=t.n(a),r=(t(98),t(5)),l=(t(99),t(8)),o=t(41),j=t(3),d=t(4),b=t(87),m=t.n(b).a.create({baseURL:"https://mysterious-headland-43478.herokuapp.com/",headers:{"content-type":"application/json"}}),h=m;m.interceptors.request.use((function(e){var s=sessionStorage.getItem("token");return s&&(e.headers.Authorization="Bearer "+s),e}),(function(e){Promise.reject(e)})),m.interceptors.response.use((function(e){return e}),(function(e){var s=e.config,t=sessionStorage.getItem("Rtoken");return t&&403===e.response.status&&!s._retry?(s._retry=!0,m.post("/user/refresh_token",{token:t}).then((function(e){if(200===e.status)return sessionStorage.setItem("token",e.data.result.accessToken),console.log("Access token refreshed!"),m(s)}))):Promise.reject(e)}));var u=new(function(){function e(){Object(j.a)(this,e)}return Object(d.a)(e,[{key:"getAll",value:function(){return h.get("/hacker/getall")}},{key:"signup",value:function(e){return h.post("/user/signup",e)}},{key:"signin",value:function(e){return h.post("/user/signin",e)}},{key:"getById",value:function(e){return h.get("/hacker/"+e)}},{key:"logout",value:function(e){return h.post("/user/logout",{token:e})}}]),e}()),O=t(228),x=new function e(){Object(j.a)(this,e),this.spinnerSub=new O.a(!1),this.username=new O.a(""),this.loggerIn=new O.a(!1);var s=sessionStorage.getItem("username");console.log(s),s?(this.loggerIn.next(!0),this.username.next(s)):(this.loggerIn.next(!1),this.username.next(""))},p=t(2),f=t(0),g=[{Header:"Hacker Image",accessor:"imageURl"},{Header:"Hacker Name",accessor:"name"},{Header:"Location",accessor:"location"},{Header:"Overall Rank",accessor:"overallRank"}];var v=function(){var e=Object(c.useState)([]),s=Object(r.a)(e,2),t=s[0],n=s[1],a=Object(p.g)();Object(c.useEffect)((function(){x.spinnerSub.next(!0),u.getAll().then((function(e){console.log("master",e),n(e.data),x.spinnerSub.next(!1)})).catch((function(e){console.log(e),x.spinnerSub.next(!1)}))}),[]);var i=Object(o.useTable)({columns:g,data:t},o.useSortBy,o.usePagination),j=i.getTableProps,d=i.getTableBodyProps,b=i.headerGroups,m=i.page,h=i.nextPage,O=i.previousPage,v=i.canPreviousPage,N=i.canNextPage,S=i.pageOptions,y=i.state,k=i.gotoPage,w=i.pageCount,P=i.prepareRow,I=y.pageIndex;return Object(f.jsxs)("div",{className:"p-2",children:[Object(f.jsxs)("h3",{children:["Hacker List: ",Object(f.jsx)("i",{className:"fa fa-info-circle",style:{fontSize:"23px",cursor:"pointer"},title:"Click on Header to sort"})," "]}),Object(f.jsxs)("table",Object(l.a)(Object(l.a)({className:"table table-hover border"},j()),{},{children:[Object(f.jsx)("thead",{className:"tableHeader",children:b.map((function(e){return Object(f.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(f.jsxs)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header")+" ",Object(f.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(f.jsx)("i",{className:"fa fa-chevron-down"}):Object(f.jsx)("i",{className:"fa fa-chevron-up"}):null})]}))}))}))}))}),Object(f.jsx)("tbody",Object(l.a)(Object(l.a)({},d()),{},{children:m.map((function(e){return P(e),Object(f.jsx)("tr",Object(l.a)(Object(l.a)({className:"rowss",onClick:function(){var s;console.log(e),s=e.original.hackerId,a.push("/"+s)}},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(f.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:"imageURl"===e.column.id?Object(f.jsx)("img",{alt:e.value,className:"image",src:e.value}):e.render("Cell")}))}))}))}))}))]})),Object(f.jsxs)("div",{className:"text-right pr-3 mb-2 page",children:[Object(f.jsxs)("button",{className:"btn",onClick:function(){return k(0)},disabled:!v,children:[Object(f.jsx)("i",{className:"fa fa-chevron-left"}),Object(f.jsx)("i",{className:"fa fa-chevron-left"})]}),Object(f.jsx)("button",{className:"btn",onClick:O,disabled:!v,children:Object(f.jsx)("i",{className:"fa fa-chevron-left"})}),Object(f.jsxs)("span",{children:["Page"," ",Object(f.jsxs)("strong",{children:[I+1," of ",S.length]})," "]}),Object(f.jsx)("button",{className:"btn",onClick:h,disabled:!N,children:Object(f.jsx)("i",{className:"fa fa-chevron-right"})}),Object(f.jsxs)("button",{className:"btn",onClick:function(){return k(w-1)},disabled:!N,children:[Object(f.jsx)("i",{className:"fa fa-chevron-right"}),Object(f.jsx)("i",{className:"fa fa-chevron-right"})]})]})]})},N=(t(126),t(127),t(9)),S=t(14);var y=function(e){return Object(f.jsxs)("div",{className:"invalid-feedback",style:{display:"block"},children:[Object(f.jsx)("i",{className:"fa fa-exclamation-triangle"})," ",e.children]})},k=t(19),w={email:"",password:""},P=k.a({email:k.b().required("Email is Required").email("Invaid Format"),password:k.b().required("Password is Required")});var I=function(){var e=Object(c.useState)(""),s=Object(r.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(""),i=Object(r.a)(a,2),l=i[0],o=i[1],j=Object(p.g)();return Object(f.jsxs)("div",{className:"login-container",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("i",{className:"fa fa-user",style:{fontSize:"18px"}})," Login"]}),Object(f.jsx)("div",{className:"body",children:Object(f.jsx)(N.c,{initialValues:w,onSubmit:function(e,s){x.spinnerSub.next(!0),console.log(e,s),u.signin(e).then((function(e){sessionStorage.setItem("token",e.data.result.accessToken),sessionStorage.setItem("Rtoken",e.data.result.refreshToken),sessionStorage.setItem("username",e.data.result.username),x.username.next(e.data.result.username),o("Loggedin Successfully"),x.loggerIn.next(!0),s.setSubmitting(!1),x.spinnerSub.next(!1),j.push("/")})).catch((function(e){console.log(e.response.data),console.log(e.response.status),n(e.response.data.message),x.spinnerSub.next(!1)})),s.resetForm()},validationSchema:P,validateOnMount:!0,validateOnChange:!0,enableReinitialize:!0,children:function(e){return Object(f.jsxs)("div",{children:[0!==t.length?Object(f.jsx)("div",{className:"invalid-feedback errors",style:{display:"block"},children:t}):null,0!==l.length?Object(f.jsx)("div",{className:"success",children:l}):null,Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"col-form-label",htmlFor:"email",children:"Email"}),Object(f.jsx)(N.b,{className:"form-control "+(e.errors.email&&e.touched.email?"is-invalid":""),type:"text",name:"email"}),Object(f.jsx)(N.a,{name:"email",component:y})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"col-form-label",htmlFor:"email",children:"Password"}),Object(f.jsx)(N.b,{className:"form-control "+(e.errors.password&&e.touched.password?"is-invalid":""),type:"password",name:"password"}),Object(f.jsx)(N.a,{name:"password",component:y})]}),Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsx)("button",{type:"button",className:"btn",onClick:e.submitForm,disabled:!e.isValid||e.isSubmitting,children:"Sign in"}),Object(f.jsxs)("div",{children:["No account? ",Object(f.jsxs)(S.b,{to:"/register",children:[" ",Object(f.jsx)("span",{children:"Create One"})]})]})]})]})}})})]})},C={email:"",password:"",username:""},R=k.a({email:k.b().required("Email is Required").email("Invaid Format"),password:k.b().required("Password is Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),username:k.b().required().min(5,"Must have 5 Characters")});var F=function(){var e=Object(c.useState)(""),s=Object(r.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(""),i=Object(r.a)(a,2),l=i[0],o=i[1],j=Object(p.g)();return Object(f.jsxs)("div",{className:"login-container",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("i",{className:"fa fa-user",style:{fontSize:"18px"}})," Register"]}),Object(f.jsx)("div",{className:"body",children:Object(f.jsx)(N.c,{initialValues:C,onSubmit:function(e,s){x.spinnerSub.next(!0),console.log(e,s),u.signup(e).then((function(e){e.data.result&&o("Created Successfully"),s.setSubmitting(!1),x.spinnerSub.next(!1),setTimeout((function(){j.push("/login")}),2e3)})).catch((function(e){console.log(e.response.data),console.log(e.response.status),n(e.response.data.message),x.spinnerSub.next(!1)})),s.resetForm()},validationSchema:R,validateOnMount:!0,validateOnChange:!0,enableReinitialize:!0,children:function(e){return Object(f.jsxs)("div",{children:[0!==t.length?Object(f.jsx)("div",{className:"invalid-feedback errors",style:{display:"block"},children:t}):null,0!==l.length?Object(f.jsx)("div",{className:"success",children:l}):null,Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"col-form-label",htmlFor:"username",children:"Username"}),Object(f.jsx)(N.b,{className:"form-control "+(e.errors.username&&e.touched.username?"is-invalid":""),type:"text",name:"username"}),Object(f.jsx)(N.a,{name:"username",component:y})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"col-form-label",htmlFor:"email",children:"Email"}),Object(f.jsx)(N.b,{className:"form-control "+(e.errors.email&&e.touched.email?"is-invalid":""),type:"text",name:"email"}),Object(f.jsx)(N.a,{name:"email",component:y})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"col-form-label",htmlFor:"email",children:"Password"}),Object(f.jsx)(N.b,{className:"form-control "+(e.errors.password&&e.touched.password?"is-invalid":""),type:"password",name:"password"}),Object(f.jsx)(N.a,{name:"password",component:y})]}),Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsx)("button",{type:"button",className:"btn",onClick:e.submitForm,disabled:!e.isValid||e.isSubmitting,children:"Create Account"}),Object(f.jsxs)("div",{children:["Have account? ",Object(f.jsxs)(S.b,{to:"/login",children:[" ",Object(f.jsx)("span",{children:"Login here!"})]})]})]})]})}})})]})},z=t(93),H=function(e){var s=e.component,t=e.auth,c=Object(z.a)(e,["component","auth"]);return console.log("gacurd",t),Object(f.jsx)(p.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return!0===t?Object(f.jsx)(s,Object(l.a)({},e)):Object(f.jsx)(p.a,{to:"/login"})}}))};var T=function(){var e=Object(c.useState)(!1),s=Object(r.a)(e,2),t=s[0],n=s[1];return Object(c.useEffect)((function(){var e=x.loggerIn.subscribe((function(e){n(e)}));return function(){e.unsubscribe()}}),[]),Object(f.jsxs)("div",{className:"landingPage",children:[Object(f.jsx)("h1",{children:"Welcome!!"}),Object(f.jsxs)("div",{className:"about",children:[Object(f.jsx)("h4",{children:"About:"}),Object(f.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0  This Site helps to find hackers and there detailed achievement. Hackers have been ranked according to their performance in various fields [e.g., Solution Submitted, Programming]. User can find it easy to view hackers in accending and decending order."})]}),t?null:Object(f.jsx)("h3",{children:"Click on Login to Continue!!"})]})};var L=function(e){var s=Object(c.useState)({}),t=Object(r.a)(s,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){x.spinnerSub.next(!0),u.getById(e.match.params.id).then((function(e){i(e.data.data),console.log(e.data.data),x.spinnerSub.next(!1)})).catch((function(e){console.log(e),x.spinnerSub.next(!1)}))}),[e.match.params.id]),Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsxs)("div",{className:"detail",children:[Object(f.jsx)("section",{children:Object(f.jsxs)("div",{style:{margin:"10px 60px"},className:"text-center",children:[Object(f.jsx)("span",{style:{fontSize:"80px"},children:a.overallRank}),Object(f.jsxs)("div",{style:{textAlign:"center",fontSize:"24px"},children:[Object(f.jsx)("i",{className:"fa fa-trophy"}),"\xa0 Rank"]})]})}),Object(f.jsxs)("section",{className:"nameDetail",children:[Object(f.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(f.jsx)("div",{className:"p-1 image-box",children:Object(f.jsx)("img",{src:a.imageURl,className:"image",alt:"Image of Hacker"})}),Object(f.jsxs)("div",{className:"ml-lg-5 ml-md-5 ml-sm-1",style:{marginTop:"-25px"},children:[Object(f.jsx)("div",{style:{fontSize:"60px",fontWeight:"500"},children:a.name}),Object(f.jsxs)("div",{className:"mt-3",children:[Object(f.jsx)("span",{style:{fontSize:"27px",color:"#4f4f4f"},children:"Votes"}),Object(f.jsx)("span",{className:"mt-1",style:{fontSize:"24px",float:"right",fontWeight:"600",color:"#4f4f4f"},children:a.noOfVotes})]})]})]}),Object(f.jsxs)("div",{className:"ml-lg-5 ml-md-5 ml-sm-1 text-center",children:[Object(f.jsx)("div",{style:{fontSize:"30px",fontWeight:"600",color:"#4f4f4f"},children:"Followers"}),Object(f.jsx)("div",{style:{fontSize:"24px",fontWeight:"600",color:"#4f4f4f"},children:a.followers})]}),Object(f.jsxs)("div",{className:"ml-lg-5 ml-md-5 ml-sm-1 text-center",children:[Object(f.jsx)("div",{style:{fontSize:"30px",fontWeight:"600",color:"#4f4f4f"},children:"Following"}),Object(f.jsx)("div",{style:{fontSize:"24px",fontWeight:"600",color:"#4f4f4f"},children:a.following})]})]})]}),Object(f.jsxs)("div",{className:"detail",children:[Object(f.jsx)("section",{style:{minWidth:"350px",alignItems:"start"},children:Object(f.jsxs)("div",{style:{width:"100%"},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"float-left",children:"Challenge Solved:"}),Object(f.jsx)("span",{className:"float-right",children:a.challengeSolved}),Object(f.jsx)("div",{style:{clear:"both"}})]}),Object(f.jsx)("hr",{className:"hori"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"float-left",children:"Location:"}),Object(f.jsx)("span",{className:"float-right",children:a.location}),Object(f.jsx)("div",{style:{clear:"both"}})]}),Object(f.jsx)("hr",{className:"hori"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"float-left",children:"Education:"}),Object(f.jsx)("span",{className:"float-right",children:a.education}),Object(f.jsx)("div",{style:{clear:"both"}})]}),Object(f.jsx)("hr",{className:"hori"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"float-left",children:"Device Type:"}),Object(f.jsx)("span",{className:"float-right",children:a.deviceType}),Object(f.jsx)("div",{style:{clear:"both"}})]})]})}),Object(f.jsxs)("section",{children:[Object(f.jsxs)("div",{className:"competi",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Solution Submitted"}),Object(f.jsx)("div",{className:"percent",children:a.solutionSubmitted})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"HTML"}),Object(f.jsxs)("div",{className:"percent",children:[a.competitive_Percentile&&a.competitive_Percentile.html,"\xa0%"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Data Structure"}),Object(f.jsxs)("div",{className:"percent",children:[a.competitive_Percentile&&a.competitive_Percentile.dataStructure,"\xa0%"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"C++"}),Object(f.jsxs)("div",{className:"percent",children:[a.competitive_Percentile&&a.competitive_Percentile.cpp,"\xa0%"]})]})]}),Object(f.jsxs)("div",{className:"competi",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Solution Accepted"}),Object(f.jsx)("div",{className:"percent",children:a.solutionAccepted})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Java"}),Object(f.jsxs)("div",{className:"percent",children:[a.competitive_Percentile&&a.competitive_Percentile.java,"\xa0%"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Javascript"}),Object(f.jsxs)("div",{className:"percent",children:[a.competitive_Percentile&&a.competitive_Percentile.javascript,"\xa0%"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Python"}),Object(f.jsxs)("div",{className:"percent",children:[a.competitive_Percentile&&a.competitive_Percentile.python,"\xa0%"]})]})]})]})]})]})};var _=function(){var e=Object(c.useState)(!1),s=Object(r.a)(e,2),t=s[0],a=s[1],i=Object(c.useState)(""),l=Object(r.a)(i,2),o=l[0],j=l[1],d=Object(c.useState)(null),b=Object(r.a)(d,2),m=b[0],h=b[1],O=Object(c.useState)(!0),g=Object(r.a)(O,2),N=g[0],y=g[1];return Object(c.useEffect)((function(){var e=x.spinnerSub.subscribe((function(e){a(e)})),s=x.username.subscribe((function(e){j(e)})),t=x.loggerIn.subscribe((function(e){console.log(e,"isAuth"),h(e)}));return setTimeout((function(){y(!1)}),1e3),function(){e.unsubscribe(),s.unsubscribe(),t.unsubscribe()}}),[]),N?Object(f.jsx)("div",{className:"whole",children:Object(f.jsxs)("div",{className:"lds-ellipsis",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})}):Object(f.jsxs)("div",{className:"appjs",children:[t?Object(f.jsx)("div",{className:"whole",children:Object(f.jsxs)("div",{className:"lds-ellipsis",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})}):null,Object(f.jsx)("div",{className:"navigation",children:Object(f.jsxs)("div",{className:"navbar-header",children:[Object(f.jsx)("div",{children:Object(f.jsx)(S.b,{to:"/",children:Object(f.jsx)("img",{src:"./logo.svg",alt:"Navigate to Home"})})}),Object(f.jsx)("div",{children:m?Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)(S.b,{to:"/hackerlist",children:Object(f.jsx)("div",{className:"items",children:Object(f.jsx)("span",{children:"Hacker Lists"})})}),Object(f.jsxs)("div",{className:"items",children:[Object(f.jsx)("i",{className:"fa fa-user-circle",style:{fontSize:"18px"}})," "+o]}),Object(f.jsxs)("div",{onClick:function(){u.logout(sessionStorage.getItem("Rtoken")).then((function(e){console.log(e,"success"),sessionStorage.removeItem("token"),sessionStorage.removeItem("username"),sessionStorage.removeItem("Rtoken"),x.username.next(""),x.loggerIn.next(!1)})).catch((function(e){console.log(e)}))},className:"items",children:[Object(f.jsx)("i",{className:"fa fa-power-off"})," ",Object(f.jsx)("span",{children:"Logout"})]})]}):Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)(S.b,{to:"/login",children:Object(f.jsxs)("div",{className:"items",children:[Object(f.jsx)("i",{className:"fa fa-user"}),Object(f.jsx)("span",{children:"Login"})]})}),Object(f.jsx)(S.b,{to:"/register",children:Object(f.jsxs)("div",{className:"items",children:[Object(f.jsx)("i",{className:"fa fa-user-plus"}),Object(f.jsx)("span",{children:"Register"})]})})]})})]})}),Object(f.jsx)("div",{className:"react-body",children:Object(f.jsxs)(p.d,{children:[Object(f.jsx)(p.b,{path:"/",exact:!0,component:T}),Object(f.jsx)(p.b,{path:"/login",children:Object(f.jsx)(I,{})}),Object(f.jsx)(p.b,{path:"/register",children:Object(f.jsx)(F,{})}),Object(f.jsx)(H,{path:"/hackerlist",exact:!0,auth:m,component:v}),Object(f.jsx)(H,{path:"/:id",exact:!0,auth:m,component:L})]})})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,229)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,a=s.getLCP,i=s.getTTFB;t(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(S.a,{children:Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(_,{})})}),document.getElementById("root")),A()},98:function(e,s,t){},99:function(e,s,t){}},[[226,1,2]]]);
//# sourceMappingURL=main.911c0f29.chunk.js.map