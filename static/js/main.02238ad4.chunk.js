(this.webpackJsonpemployeetracker=this.webpackJsonpemployeetracker||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=a(16),s=a(2),m=a(13),u=a(14),i=a(18),h=a(17);var p=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"search"},"Search:"),l.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for an Employee",id:"search"}),l.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search Here")))};var f=function(e){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},l.a.createElement("img",{alt:e.firstName,src:e.picture})),l.a.createElement("td",null,e.firstName),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone))},E=a(15),d=a.n(E),g=function(){return d.a.get("https://randomuser.me/api/?results=200&nat=us")},v=(a(41),function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={result:[],filter:"",filterBy:"lastName",currentSort:"default",sortField:""},e.filterEmployees=function(t){console.log("***in Filter*******"),console.log(t),console.log(e.state.result);var a=e.state.result.filter((function(e){return e.firstName===t}));e.setState({result:a})},e.handleFormSubmit=function(t){t.preventDefault();var a=t.target.value,n=t.target.name;console.log("**********"),console.log(a),console.log(n),e.filterEmployees(a),e.setState(Object(s.a)({},n,a)),e.filterEmployees(a),e.filterEmployees(e.state.search)},e.handleInputChange=function(t){t.preventDefault(),console.log(t);var a=t.target.value,n=t.target.name;console.log("**********"),console.log(a),console.log(n),e.setState(Object(s.a)({},n,a))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){console.log(t),e.setState({result:t.data.results.map((function(e,t){return{firstName:e.name.first,lastName:e.name.last,picture:e.picture.large,email:e.email,phone:e.phone,dob:e.age,key:t}}))})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",null,"Employee Directory"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(p,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}))),l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"table"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Photo"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",{scope:"col"},"Last Name "),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Phone")),Object(o.a)(this.state.result).map((function(e){return l.a.createElement(f,{picture:e.picture,firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,key:e.key})})))))}}]),a}(n.Component));var N=function(){return l.a.createElement(v,null)};c.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.02238ad4.chunk.js.map