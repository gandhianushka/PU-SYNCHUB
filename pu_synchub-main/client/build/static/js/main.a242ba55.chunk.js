(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(6),c=a.n(r),o=a(3),u=a(1);a(15);var m=function(){const[e,t]=Object(l.useState)(""),[a,r]=Object(l.useState)(""),[c,o]=Object(l.useState)(""),[m,i]=Object(l.useState)(""),[s,E]=Object(l.useState)(""),p=Object(u.o)();return n.a.createElement("div",null,n.a.createElement("h2",null,"Login"),n.a.createElement("div",null,n.a.createElement("label",null,"User Type:"),n.a.createElement("select",{value:e,onChange:e=>t(e.target.value)},n.a.createElement("option",{value:""},"Select..."),n.a.createElement("option",{value:"student"},"Student"),n.a.createElement("option",{value:"teacher"},"Teacher"))),"student"===e&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("label",null,"Email:"),n.a.createElement("input",{type:"email",value:a,onChange:e=>r(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Name:"),n.a.createElement("input",{type:"text",value:c,onChange:e=>o(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Password:"),n.a.createElement("input",{type:"password",value:m,onChange:e=>i(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Phone Number:"),n.a.createElement("input",{type:"tel",value:s,onChange:e=>E(e.target.value),required:!0}))),"teacher"===e&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("label",null,"Email:"),n.a.createElement("input",{type:"email",value:a,onChange:e=>r(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Password:"),n.a.createElement("input",{type:"password",value:m,onChange:e=>i(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Name:"),n.a.createElement("input",{type:"text",value:c,onChange:e=>o(e.target.value),required:!0}))),e&&n.a.createElement("div",null,n.a.createElement("button",{onClick:l=>{fetch("/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userType:e,email:a,name:c,password:m,phoneNumber:s})}).then(e=>{if(console.log(e),!e.ok)throw new Error("Network response was not ok");localStorage.setItem("isLoggedIn","true"),p("/",{replace:!0})}).then(e=>{console.log(e),t(""),r(""),o(""),i(""),E("")}).catch(e=>{console.error("Error:",e)})}},"Login")))};a(16);var i=function(){const[e,t]=Object(l.useState)(""),a=Object(u.o)(),[r,c]=Object(l.useState)(null);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"head"},n.a.createElement("div",{class:"left-h"},n.a.createElement("p",{class:"p1"},"LOGO"),n.a.createElement("p",{class:"p2"},"PU SYNCHUB")),n.a.createElement("div",{class:"right-h"},n.a.createElement("button",{class:"b1",onClick:()=>{a("/",{replace:!0})}},"Home"),n.a.createElement("button",{class:"b2",onClick:()=>{a("/login",{replace:!0})}},"Login"),n.a.createElement("button",{class:"b3"},"Registration"))),n.a.createElement("div",{class:"Content"},n.a.createElement("div",null,n.a.createElement("label",null,"Project Name:"),n.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)})),n.a.createElement("button",{onClick:()=>{fetch("/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectName:e})}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");const t=e.headers.get("content-type");if(t&&t.includes("application/json"))return e.json();throw new TypeError("Response is not in JSON format")}).then(e=>{console.log(e.matchingProjects),c(e.matchingProjects)}).catch(e=>{console.error("Error: ",e.message)})}},"Search"),n.a.createElement("div",null,n.a.createElement("h2",null,"Matching Responses:"),null!=r?n.a.createElement("div",null,r.map((e,t)=>n.a.createElement("div",{className:"re"},e.name,e.description))):n.a.createElement("div",null))))};var s=function(){const[e,t]=Object(l.useState)(1),[a,r]=Object(l.useState)(""),[c,o]=Object(l.useState)(""),[m,i]=Object(l.useState)(""),[s,E]=Object(l.useState)(""),[p,d]=Object(l.useState)(""),[h,v]=Object(l.useState)(""),[g,b]=Object(l.useState)(""),j=Object(u.o)();return n.a.createElement("div",null,n.a.createElement("h2",null,"Registration"),n.a.createElement("div",null,n.a.createElement("p",null,"Step ",e," of 2"),n.a.createElement("progress",{max:"2",value:e})),1===e&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Step 1: Team Information"),n.a.createElement("div",null,n.a.createElement("label",null,"Leader Email:"),n.a.createElement("input",{type:"email",value:a,onChange:e=>r(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Member 2 Email:"),n.a.createElement("input",{type:"email",value:c,onChange:e=>o(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Member 3 Email:"),n.a.createElement("input",{type:"email",value:m,onChange:e=>i(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Member 4 Email:"),n.a.createElement("input",{type:"email",value:s,onChange:e=>E(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Mentor Email:"),n.a.createElement("input",{type:"email",value:p,onChange:e=>d(e.target.value),required:!0})),n.a.createElement("button",{onClick:()=>{fetch("/register_team",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({leaderEmail:a,mem2Email:c,mem3Email:m,mem4Email:s,mentorEmail:p})}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");t(2)}).catch(e=>{console.error("Error:",e)})}},"Next")),2===e&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Step 2: Project Information"),n.a.createElement("div",null,n.a.createElement("label",null,"Project Name:"),n.a.createElement("input",{type:"text",value:h,onChange:e=>v(e.target.value),required:!0})),n.a.createElement("div",null,n.a.createElement("label",null,"Project Description:"),n.a.createElement("textarea",{value:g,onChange:e=>b(e.target.value),required:!0})),n.a.createElement("button",{onClick:()=>{fetch("/register_project",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectName:h,projectDescription:g})}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");j("/dashboard",{replace:!0})}).catch(e=>{console.error("Error:",e)})}},"Register")))};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(o.a,null,n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/login",element:n.a.createElement(m,null)}),n.a.createElement(u.a,{path:"/registration",element:n.a.createElement(s,null)}),n.a.createElement(u.a,{path:"/",element:n.a.createElement(i,null)}))))},7:function(e,t,a){e.exports=a(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.a242ba55.chunk.js.map