(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e){e.exports=[{id:1,title:"Climate Change",keyword:"climate-change"},{id:2,title:"Housing",keyword:"homeless"},{id:3,title:"Womens Rights",keyword:"womens-rights"},{id:4,title:"Veterans",keyword:"military-veterans"}]},179:function(e){e.exports=[{id:1,title:"Climate Change",keywords:""},{id:2,title:"Women's Rights",keywords:""},{id:3,title:"Education",keywords:""},{id:4,title:"Veterans",keywords:""},{id:5,title:"Animal Welfare",keywords:""},{id:6,title:"Disaster Relief",keywords:""},{id:7,title:"Housing",keywords:""},{id:8,title:"LGBT",keywords:""},{id:9,title:"Immigration",keywords:""},{id:10,title:"Famine",keywords:""},{id:11,title:"Drought",keywords:""},{id:12,title:"Mental Health",keywords:""},{id:13,title:"Disabilities",keywords:""},{id:14,title:"Development",keywords:""},{id:15,title:"Health",keywords:""},{id:16,title:"Youth",keywords:""}]},184:function(e,t,a){e.exports=a(507)},290:function(e,t,a){},295:function(e,t,a){},297:function(e,t,a){},299:function(e,t,a){},301:function(e,t,a){},303:function(e,t,a){},305:function(e,t,a){},307:function(e,t,a){},309:function(e,t,a){},357:function(e,t,a){},497:function(e,t,a){},499:function(e,t,a){},501:function(e,t,a){},503:function(e,t,a){},505:function(e,t,a){},507:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),o=a(35),i=a.n(o),l=a(17),c=a(18),r=a(20),u=a(19),m=a(21),d=a(508),h=a(510),p=a(10),f=a.n(p),g=a(293),E=(a(290),function(e){return s.a.createElement("div",{className:"menu-area"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(g.a,{to:"/passions",style:{background:function(e){if("/passions"===e)return"#f05faa"}(window.location.pathname)}}," Passions")),s.a.createElement("li",null,s.a.createElement(g.a,{id:"logo",to:"/home"},"ACTIV8")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},e.email," |",s.a.createElement("i",{className:"fas fa-angle-double-down"})),s.a.createElement("ul",{className:"dropdown"},s.a.createElement("li",null,s.a.createElement(g.a,{style:{background:function(e){if("/profile"===e)return"#f05faa"}(window.location.pathname)},to:"/profile"},"Profile")),s.a.createElement("li",null,s.a.createElement(g.a,{onClick:e.logout,to:"/signin"},"Log Out"))))))});a(295);var v=function(e){return s.a.createElement("header",{className:"header"},s.a.createElement("h1",null,e.header))};a(297);var b=function(e){return s.a.createElement("main",{className:"container"},e.children)};a(299);var y=function(e){return s.a.createElement("p",{title:e.title,id:"".concat(e.id),"aria-label":"click item",onClick:function(t){return e.handleClick(e.id,t)},className:"".concat(e.handleActivePassions," test click-item").concat(e.shake?" shake":""," inactive")},e.title)},k=(a(301),function(e){var t=e.handleClose,a=e.show,n=e.children,o=a?"modal display-block":"modal display-none";return s.a.createElement("div",{className:o},s.a.createElement("section",{className:"modal-main"},n,s.a.createElement("button",{className:"btn btn-warning",onClick:t},"Close")))}),w=(a(303),function(e){var t=e.current;return s.a.createElement("div",{className:"modal display-block"},s.a.createElement("section",{className:"modal-main"},s.a.createElement("h2",null,"Commit to this?"),s.a.createElement("button",{className:"b",onClick:function(){return function(e){e={action:e},f.a.put("/auth/updateCommit",e).then(function(){}).catch(function(e){return console.log(e)})}(t)}},"Yes"),s.a.createElement("button",{className:"b ",onClick:e.checkCommit},"No")))});a(305);function C(e){return s.a.createElement("div",{className:e.hide?"":"displayNone"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{onClick:e.checkCommit,className:"card-body"},s.a.createElement("p",{id:"".concat(e.id),"aria-label":"click item",href:e.url,className:" box"},"".concat(e.title," \n ").concat(e.summary)))),e.commitStatus?s.a.createElement(w,{checkCommit:e.checkCommit,current:e.action,visible:!0,username:e.username}):"")}var N=document.createElement("div");document.body.appendChild(N),i.a.render(s.a.createElement(C,null),N);var S=C,O=a(178),A=(a(307),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={user:"",userpassions:O,selected:"",keyword:"",action:"",actionObj:[],show:!1,results:[],showCommit:!1},a.checkCommit=function(){a.state.showCommit?a.setState({showCommit:!1}):a.setState({showCommit:!0})},a.handleClick=function(e,t){console.log(a.state.userpassions),console.log("id test",e);var n=a.state.userpassions[e].title,s=a.state.userpassions[e].keyword;console.log(n),console.log("This is the keyword: ".concat(s)),console.log("The state was ".concat(a.state.selected)),a.setState({selected:n}),a.setState({keyword:s}),console.log("The state has been changed to ".concat(a.state.selected)),a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.event=function(){console.log("keyword test",a.state.keyword),a.setState({action:"event"});var e=a.state.keyword,t=[];f.a.get("/api/event/".concat(e)).then(function(e){for(var n=0;n<e.data.length;n++)t.push(e.data[n]);console.log("/////////////AXIOS////////////////CALL/////////////////AXIOS///////////////////CALL//////////////////////"),console.log(t),a.setState({actionObj:t})}),console.log(a.state)},a.petition=function(){console.log("I'm going to petition for ".concat(a.state.selected)),a.setState({action:"petition"});var e=a.state.keyword,t=[];console.log("search test",e),f.a.get("/api/petition/".concat(e)).then(function(e){console.log("the petition object is:"),console.log(e.data),console.log("the petition LENGTH is:"),console.log(e.data.length),console.log("one petition in the array is:"),console.log(e.data[1]);for(var n=0;n<e.data.length;n++)t.push(e.data[n]);console.log("/////////////AXIOS////////////////CALL/////////////////AXIOS///////////////////CALL//////////////////////"),console.log("GIT OUTTA ME SWAAAAAAAAAAMMMP!!!!"),console.log(t),a.setState({actionObj:t}),console.log("This is the AXIOS result in the state actionObj:"),console.log(a.state.actionObj)})},a.donate=function(){console.log("I'm going to donate to ".concat(a.state.selected)),a.setState({action:"donate"});var e=a.state.keyword,t=[];f.a.get("/api/charity/".concat(e)).then(function(e){for(var n=0;n<e.data.length;n++)t.push(e.data[n]);console.log("/////////////AXIOS////////////////CALL/////////////////AXIOS///////////////////CALL//////////////////////"),a.setState({actionObj:t})}),console.log(a.state)},a.contact=function(){console.log("I'm going to contact by representative about ".concat(a.state.selected)),a.setState({action:"contact"});var e=a.state.keyword;console.log("The keyword of this action is ".concat(e)),console.log("'state.action' has been set to ".concat(a.state.action)),console.log(a.state)},a.displayStuff=function(){return a.state.actionObj.map(function(e){return s.a.createElement(S,{hide:a.state.selected,commitStatus:a.state.showCommit,checkCommit:a.checkCommit,id:e._id,title:e.title?e.title:e.name,url:e.url,summary:e.summary?e.summary:"this is a charity",action:a.state.action,username:a.state.user})})},a.displayClickItem=function(){return a.state.userpassions.map(function(e){return s.a.createElement(y,{key:e.id,id:e.id-1,handleClick:a.handleClick,title:e.title,keywords:e.keywords})})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("this is the Home component as JSON:"),console.log(this),console.log("these are the user's selected passions:"),console.log(this.state.userpassions),console.log(this.state.userpassions[0])}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(v,{header:"What to act on?"}),s.a.createElement("div",{id:"headerAct"},s.a.createElement(b,{className:!0},this.state.action?this.displayStuff():this.displayClickItem())),s.a.createElement(k,{show:this.state.show,handleClose:this.hideModal},s.a.createElement("h2",null,this.state.selected),s.a.createElement("button",{onClick:this.event,className:"event b ".concat(this.state.selected),href:"/event/"+this.state.keyword},"event"),s.a.createElement("button",{onClick:this.petition,className:"petition b ".concat(this.state.selected),href:"/petition/"+this.state.keyword},"petition"),s.a.createElement("button",{onClick:this.donate,className:"donate b ".concat(this.state.selected),href:"/charity/"+this.state.keyword},"donate"),s.a.createElement("button",{onClick:this.contact,className:"contact b ".concat(this.state.selected)},"contact")))}}]),t}(n.Component)),j=document.createElement("div");document.body.appendChild(j);var x=A;a(309);function I(){return s.a.createElement("div",{className:"about-header"},s.a.createElement("div",{className:"about"},s.a.createElement("p",null,"Be honorable. Be compassionate. Make a difference to show that you have lived and lived well. The best way to not feel hopeless is to get up and do something.",s.a.createElement(g.a,{id:"join-link",to:"/signup"}," ",s.a.createElement("button",{id:"join"}," Join")," "),"  to ACTIV8 your life.")))}function L(){return s.a.createElement("div",null,s.a.createElement("div",{className:"jumbotron center"},s.a.createElement("h2",null,"ACTIV8")),s.a.createElement(I,null))}var D=a(78),P={container:{margin:"20px",boxShadow:"0 0 30px -5px hsla(0,0%,61%,.45)"}},T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),f.a.post("/auth/login",a.state).then(function(e){null!==e.data&&(e.data.user.newUser?a.props.history.push("/passions"):a.props.history.push("/home"))}).catch(function(e){console.log(e+"\nERROR, INCORRECT USERNAME OR PASSWORD")})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"centerForm"},s.a.createElement("div",{style:P.container},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},s.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement("input",{type:"text",id:"username",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),s.a.createElement("span",null," Don't have an account? ",s.a.createElement(g.a,{to:"/signup"},"Sign Up"))))))}}]),t}(n.Component),U={container:{margin:"20px",boxShadow:"0 0 30px -5px hsla(0,0%,61%,.45)"}},M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={email:"",password:"",firstName:"",lastName:"",userName:""},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log("test"),f.a.post("/auth/signup",a.state).then(function(e){e.data.error?console.log(e.data.error):a.props.history.push("/signin")}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:U.container},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},s.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"userName"},"Username"),s.a.createElement("input",{type:"text",id:"userName",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"firstName"},"FirstName"),s.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"lastName"},"LastName"),s.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),s.a.createElement("span",null," Have an account? ",s.a.createElement(g.a,{to:"/signin"},"Sign In")))))}}]),t}(n.Component),F=a(179),R=a(111),W=(a(357),{button:{padding:"20px",width:"100%",background:"#ffc123"}}),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={data:F,userpassions:[],selected:"",showAlert:!1},a.handleItemClick=function(e,t){console.log(t.target.title);for(var n=!1,s=0;s<a.state.userpassions.length;s++)t.target.title===a.state.userpassions[s]&&(n=!0);if(n){var o=a.state.userpassions.filter(function(e){return e!=t.target.title});a.setState({userpassions:o}),console.log("filter test",o)}else{var i=a.state.userpassions;i.push(t.target.title),a.setState({userpassions:i})}},a.handleSubmitButton=function(){a.setState({showAlert:!0}),console.log("submitted user passions"),console.log(a.state.userpassions),f.a.get("auth/user").then(function(e){e.data.user.newUser?f.a.post("/auth/update-newUser").then(function(e){console.log("updated new user to old user"),a.handleNewPassions()}):a.handleNewPassions()})},a.handleNewPassions=function(){f.a.post("/auth/set-passions",a.state.userpassions).then(function(e){console.log("updated users passions")})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log(this);var t=this.state.selected,a=this.state.userpassions;console.log("testing ".concat(t," against the array: ").concat(a)),f.a.get("/auth/user").then(function(t){e.setState({userpassions:t.data.user.passions}),console.log("user passions1",e.state.userpassions)})}},{key:"handleActivePassions",value:function(e){for(var t=!1,a=0;a<this.state.userpassions.length;a++)e===this.state.userpassions[a]&&(t=!0);return t?"activate":""}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{style:{background:"transparent",color:"black",fontFamily:" 'Anton', sans-serif"},className:"jumbotron text-center"},s.a.createElement("h2",{className:"passion-message"},"SET YOUR PASSIONS")),s.a.createElement(b,null,this.state.data.map(function(t){return s.a.createElement(y,{handleActivePassions:e.state.userpassions?e.handleActivePassions(t.title):"",key:t.id,id:t.id-1,handleClick:e.handleItemClick,title:t.title,keywords:t.keywords})}),s.a.createElement("div",{className:"".concat(this.state.showAlert?"show":"hide")},s.a.createElement(R.b,null,s.a.createElement(R.a,{color:"primary"},s.a.createElement("h6",{style:{width:"860px",textAlign:"center"}},"Passions Saved")))),s.a.createElement("button",{onClick:this.handleSubmitButton,className:"click-item",style:W.button},"Save Changes")))}}]),t}(n.Component),X=a(110),B={chart:{width:"700px",height:"700px"}};function V(e){return s.a.createElement("div",{className:"chart",style:B.chart},s.a.createElement(X.a,{data:e.chartData,options:{segmentShowStroke:!1,title:{display:e.displayTitle,text:"Largest Cities In "+e.location,fontSize:25},legend:{display:e.displayLegend,position:e.legendPosition},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{arc:{borderColor:"black"}}}}))}a(497),a(499),a(501);function z(e){var t=e.initals;return s.a.createElement("div",null,t?s.a.createElement("div",{className:"profile-card"},s.a.createElement("p",{id:"initials"},t)):s.a.createElement("div",{className:"profile-card",style:{backgroundColor:"#fff",backgroundPosition:"center",backgroundImageSize:"cover",backgroundImage:'url("https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif")'}},s.a.createElement("p",{id:"initials"})))}function J(e){var t=e.initals;return s.a.createElement("div",{className:"profile-header"},s.a.createElement(z,{initals:t}))}a(503);function G(e){var t=e.firstName,a=e.lastName,n=e.email;return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("p",null,s.a.createElement("span",null,"First Name:")," ",t),s.a.createElement("p",null,s.a.createElement("span",null,"Last Name:")," ",a),s.a.createElement("p",null,s.a.createElement("span",null,"Email:")," ",n)))}var Y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={chartData:{},initials:"",firstName:"",lastName:"",email:"",numOfPetitions:0,numOfEvents:0,numOfCharity:0,numOfContact:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("/auth/user").then(function(t){e.getChartData(t);var a;console.log(t.data.user.firstName),a=t.data.user.firstName[0]+t.data.user.lastName[0],e.setState({initials:a,firstName:t.data.user.firstName,lastName:t.data.user.lastName,email:t.data.user.email})})}},{key:"getChartData",value:function(e){this.setState({chartData:{labels:["Petition","Event","Charity","Contact"],datasets:[{label:"Population",data:[e.data.user.numOfPetitions,e.data.user.numOfEvents,e.data.user.numOfCharity,e.data.user.numOfContacts],backgroundColor:["rgba(239,220,127,1)","rgba(255, 99, 132, 0.6)","rgba(244, 186, 84, 1)","rgba(181,223,237,1)"]}]}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(J,{initals:this.state.initials}),s.a.createElement("div",{className:"flex-box-profile"},s.a.createElement(G,{firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email}),s.a.createElement(V,{chartData:this.state.chartData})))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={email:""},a.test=function(){console.log("a works")},a.logout=function(e){e.preventDefault(),f.a.post("/auth/logout").then(function(e){window.location.replace("/")})},a.LoginContainer=function(){return s.a.createElement("div",null,s.a.createElement(d.a,{exact:!0,path:"/",component:T}),s.a.createElement(d.a,{exact:!0,path:"/signin",component:T}))},a.SignUpContainer=function(){return s.a.createElement("div",null,s.a.createElement(d.a,{path:"/signup",component:M}))},a.DefaultContainer=function(){return s.a.createElement("div",null,s.a.createElement(E,{logout:a.logout,email:a.state.email}),s.a.createElement(d.a,{exact:!0,path:"/passions",component:H}),s.a.createElement(d.a,{exact:!0,path:"/home",component:x}),s.a.createElement(d.a,{exact:!0,path:"/about",component:L}),s.a.createElement(d.a,{exact:!0,path:"/profile",component:Y}))},a.AboutContainer=function(){return s.a.createElement("div",null,s.a.createElement(d.a,{exact:!0,path:"/",component:L}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),f.a.get("/auth/user").then(function(t){null!==t.data.user&&e.setState({email:t.data.user.email})})}},{key:"componentDidUpdate",value:function(){var e=this;""===this.state.email&&(console.log(this.props),f.a.get("/auth/user").then(function(t){null!==t.data.user&&e.setState({email:t.data.user.email})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"App"},s.a.createElement(h.a,null,s.a.createElement(d.a,{exact:!0,path:"(/)",component:this.AboutContainer}),s.a.createElement(d.a,{exact:!0,path:"(/signin)",component:this.LoginContainer}),s.a.createElement(d.a,{exact:!0,path:"(/signup)",component:this.SignUpContainer}),s.a.createElement(d.a,{component:this.DefaultContainer}))))}}]),t}(n.Component),q=(a(505),a(509));i.a.render(s.a.createElement(q.a,null,s.a.createElement(_,null)),document.getElementById("root"))}},[[184,2,1]]]);
//# sourceMappingURL=main.9b8a03af.chunk.js.map