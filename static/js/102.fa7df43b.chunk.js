"use strict";(self.webpackChunkinmobiliaria_frontend_react=self.webpackChunkinmobiliaria_frontend_react||[]).push([[102],{702:(e,t,a)=>{a.d(t,{L:()=>r});var s=a(791),o=a(184);const r=e=>{let{placeholder:t,query:a,parameters:r,setQuery:l,defaultSelect:n="",className:d}=e;return(0,s.useEffect)((()=>{0!==n.length&&0===a.length&&l(n)})),(0,o.jsxs)("div",{className:"dropdown form-floating w-100 min-width-10 py-sm-0",children:[(0,o.jsx)("button",{className:d+(0===a.length?" dropdown-toggle text-start pt-2 ps-2 ps-sm-3 pe-5 w-100":" dropdown-toggle text-center pt-4 ps-2 ps-sm-3 pe-5 w-100"),type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false",children:0===a.length?t:a}),(0,o.jsx)("label",{htmlFor:"dropdownMenuButton",className:"form-label text-muted text-nowrap text-truncate",children:0===a.length?"":t}),(0,o.jsx)("ul",{className:"dropdown-menu text-center shadow-sm w-100 overflow-auto "+(0===a.length?" visible":" hidden"),style:0===r.length?{maxHeight:"0rem"}:{maxHeight:"12rem"},"aria-labelledby":"dropdownMenuButton",children:r.map((e=>(0,o.jsx)("li",{children:(0,o.jsx)("button",{className:"dropdown-item",value:e.parameter,onClick:e=>l(e.target.value),children:e.parameter})},JSON.stringify(e))))})]})}},506:(e,t,a)=>{a.d(t,{R:()=>r});var s=a(948),o=a(184);const r=e=>{let{prefix:t="",id:a,value:r,name:l,onInputChange:n,placeholder:d,className:c,disabled:i=!1}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"form-floating text-center text-nowrap text-truncate shadow-sm","data-mdb-input-init":!0,children:[(0,o.jsx)(s.h3,{value:r,name:l,placeholder:d,type:"search",onValueChange:e=>n(e),id:a,prefix:t,thousandSeparator:!0,autoComplete:"off",className:c+" text-nowrap text-truncate pt-4",disabled:i,allowNegative:!1}),(0,o.jsxs)("label",{htmlFor:a,className:"form-label text-muted text-nowrap text-truncate",children:[d," "]})]})})}},911:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(184);const o=e=>{let{className:t="",color:a="currentColor",strokeWidth:o="2",width:r="1",height:l="1"}=e;return(0,s.jsx)("span",{children:(0,s.jsxs)("svg",{className:t,stroke:a,fill:"none",strokeWidth:o,viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:l+"em",width:r+"em",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,s.jsx)("path",{d:"M15 8h.01"}),(0,s.jsx)("path",{d:"M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"}),(0,s.jsx)("path",{d:"M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}),(0,s.jsx)("path",{d:"M20.2 20.2l1.8 1.8"}),(0,s.jsx)("path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2"})]})})}},102:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var s=a(791),o=a(184);const r=e=>{let{placeholder:t,query:a,setQuery:r,parameters:l,defaultSelect:n="",className:d}=e;return(0,s.useEffect)((()=>{0!==n.length&&0===a.length&&r(n)})),(0,o.jsxs)("div",{className:"dropdown form-floating w-100 min-width-10",children:[(0,o.jsx)("button",{className:d+(0===a.length?" dropdown-toggle text-start text-nowrap text-truncate pt-2 ps-2 ps-sm-3 pe-5 w-100":" dropdown-toggle text-center text-nowrap text-truncate pt-4 ps-2 ps-sm-3 pe-5 w-100"),type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false",children:0===a.length?t:a}),(0,o.jsx)("label",{htmlFor:"dropdownMenuButton",className:"form-label text-muted",children:0===a.length?"":t}),(0,o.jsx)("ul",{className:"dropdown-menu text-center shadow-sm w-100 overflow-auto "+(0===a.length?"visible":" hidden"),style:0===l.length?{maxHeight:"0rem"}:{maxHeight:"12rem"},"aria-labelledby":"dropdownMenuButton",children:l.map((e=>(0,o.jsx)("li",{children:(0,o.jsx)("button",{className:"dropdown-item",value:e.name,onClick:e=>r(e.target.value),children:e.name})},JSON.stringify(e))))})]})},l=e=>{let{countries:t,country:a,setCountry:l,state:n,setState:d,city:c,setCity:i}=e;const[m,u]=(0,s.useState)([]),[p,h]=(0,s.useState)([]);return(0,s.useEffect)((()=>{d(""),i(""),u(0!==t.length?t.filter((e=>e.name.includes(a)))[0].states:[])}),[a,t,m,d,i]),(0,s.useEffect)((()=>{i(""),h(0!==m.length?m.filter((e=>e.name.includes(n)))[0].cities:[])}),[n,m,i]),(0,o.jsxs)("div",{className:"row d-sm-flex",children:[(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(r,{placeholder:"Pa\xeds",defaultSelect:"Colombia",parameters:t,query:a,setQuery:l,className:"input form-control rounded border-muted border-1 text-muted shadow-sm"})}),(0,o.jsx)("div",{className:"col mt-2 mt-md-0 mt-sm-0 mb-1",children:(0,o.jsx)(r,{placeholder:"Departamento",parameters:m,query:n,setQuery:d,className:"input form-control rounded border-muted border-1 text-muted shadow-sm"})}),(0,o.jsx)("div",{className:"col mt-1 mt-md-0 mt-sm-2",children:(0,o.jsx)(r,{placeholder:"Ciudad",parameters:p,query:c,setQuery:i,className:"input form-control rounded border-muted border-1 text-muted shadow-sm"})})]})},n=e=>{let{icon:t="",title:a="Button",type:s,onClick:r,style:l,className:n}=e;return(0,o.jsx)("button",{className:1===s&&"form-control btn btn-primary shadow-sm ".concat(n)||2===s&&"btn btn-outline-secondary shadow-sm ".concat(n)||3===s&&"btn ".concat(n)||4===s&&"".concat(n),style:l,onClick:r,children:t&&a?(0,o.jsxs)(o.Fragment,{children:[t," ",a]}):t||a})};var d=a(832),c=a(830),i=a.n(c),m=a(782);const u=e=>{let{color:t,icon:a,title:s,urlApi:r,contenidoApi:l,setResponseStatus:c,createFlag:u,className:p}=e;return(0,o.jsx)(n,{icon:a,title:s,type:1,className:p+" py-4 w-100",onClick:()=>{u?(0,d.o)(r,l,c,u):i().fire({title:"A\xfan no",text:"Debes completar primero todos los campos",icon:"warning",confirmButtonColor:m.L})}})};var p=a(702),h=a(911);const x=e=>{let{id:t,placeholder:a,acceptFiles:r="*",file:l,setFile:n,iconSize:d=1,iconStrokeWidth:c=1,multiple:i=!1,className:m}=e;const u=d,[p,x]=(0,s.useState)({data:""}),[g,w]=(0,s.useState)([]);if(l.size>0){const e=new FileReader;e.readAsDataURL(l),e.onload=()=>{x({data:e.result})},e.onerror=e=>{console.log("Error input file img -> img base 64: ",e)}}return(0,s.useEffect)((()=>{if(l.length>0){const e=[{data:""}];for(let t=0;t<l.length;t++){const a=new FileReader;a.readAsDataURL(l[t]),a.onload=()=>{e[t]={data:a.result},w(e)},a.onerror=e=>{console.log("Error input file img -> img base 64: ",e)}}}}),[l,l.length]),(0,o.jsxs)("div",{className:"form-floating text-center text-nowrap text-truncate shadow-sm","data-mdb-input-init":!0,children:[(0,o.jsxs)("div",{id:"inputFile",className:m+" image-upload img-thumbnail py-1 py-md-1 py-sm-5 h-100",children:[(0,o.jsx)("label",{htmlFor:t,style:{cursor:"pointer"},children:l.size>0?(0,o.jsx)("img",{src:p.data,id:"image-"+t,className:"img-thumbnail shadow-sm",style:{height:u+"rem",width:u+"rem"},alt:"image-"+t}):l.length>0?g.map((e=>(0,o.jsx)("img",{src:e.data,className:"img-thumbnail shadow-sm",style:{height:u+"rem",width:u+"rem"},alt:e.name},e.name))):(0,o.jsx)(h.Z,{color:"#aaaaaa",strokeWidth:c,height:u,width:u,className:"mt-1 mt-md-1 mt-sm-5 mb-md-0 mb-sm-2"})}),(0,o.jsx)("input",{type:"file",id:t,accept:r,onChange:()=>n(i?document.getElementById(t).files:document.getElementById(t).files[0]),multiple:i})]}),(0,o.jsx)("label",{htmlFor:"inputFile",className:"form-label text-muted text-nowrap text-truncate",children:a})]})};var g=a(506),w=a(954);const b=e=>{let{id:t,placeholder:a,inputText:s,onInputChange:r,rows:l=1,className:n}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"form-floating text-center text-nowrap text-truncate shadow-sm","data-mdb-input-init":!0,children:[(0,o.jsx)("textarea",{value:s,onChange:e=>r(e),type:"search",placeholder:a,id:t,className:n,autoComplete:"off",rows:l}),(0,o.jsx)("label",{htmlFor:t,className:"form-label text-muted text-nowrap text-truncate",children:a})]})})},f=e=>{let{color:t="currentColor",strokeWidth:a="0",width:s="1",height:r="1"}=e;return(0,o.jsx)("span",{children:(0,o.jsxs)("svg",{stroke:t,fill:t,strokeWidth:a,viewBox:"0 0 256 256",height:r+"em",width:s+"em",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M216,115.54V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z",opacity:"0.2"}),(0,o.jsx)("path",{d:"M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"})]})})};var j=a(446);const N=e=>{let{urlApiInmuebles:t,categorias:a,tipos:r,estados:n,caracteristicas:d,paises:c}=e,h=!1;const[N,y]=(0,s.useState)(0),[v,S]=(0,s.useState)(""),[C,L]=(0,s.useState)(""),[k,F]=(0,s.useState)(""),[R,_]=(0,s.useState)(""),[I,E]=(0,s.useState)(""),[q,A]=(0,s.useState)(""),[B,M]=(0,s.useState)(""),[O,D]=(0,s.useState)(""),[T,H]=(0,s.useState)(""),[Q,z]=(0,s.useState)(""),[W,P]=(0,s.useState)(""),[V,J]=(0,s.useState)(""),[Z,U]=(0,s.useState)(""),[$,G]=(0,s.useState)(""),[K,X]=(0,s.useState)(""),[Y,ee]=(0,s.useState)(""),[te,ae]=(0,s.useState)(""),[se,oe]=(0,s.useState)(""),[re,le]=(0,s.useState)([]);let ne=m.q+("arriendo"===k.toLocaleLowerCase()?" arrienda ":"venta"===k.toLocaleLowerCase()?" vende ":"")+se.toLocaleLowerCase()+("apartamento"===R.toLocaleLowerCase()?" apartamento en ":"casa"===R.toLocaleLowerCase()?" casa en ":"")+q+(K?", sector "+K:"")+(V||Z||$?(V?", en la ciudad de "+V+", "+Z+", "+$:Z?", en el departamento de "+Z+", "+$:", en el pa\xeds "+$)+". ":"")+(Q?"Tiene un \xe1rea de "+Q+" m2":"")+(B||O||T?" y consta de "+(B?"0"===B?"":"1"===B?B+" habitaci\xf3n, ":B+" habitaciones, ":"")+(O?"0"===O?"":"1"===O?O+" ba\xf1o, ":O+" ba\xf1os, ":"")+(T?"0"===T?"":"1"===T?T+" parqueadero ":T+" parqueaderos ":""):"")+(Y?"y su estrato es "+Y+". ":"")+(W?"Su valor es "+j.o.format(W)+("arriendo"===k.toLocaleLowerCase()?" mensual. ":". "):"");(0,s.useEffect)((()=>{-1!==I.lastIndexOf("@")?"apartamento"===R.toLocaleLowerCase()?oe(I.replace(/.$/,"o")):"casa"===R.toLocaleLowerCase()&&oe(I.replace(/.$/,"a")):-1===I.lastIndexOf("@")&&oe(I),ae(ne)}),[I,ne,R]);const[de,ce]=(0,s.useState)({name:"",data:""}),ie=new FileReader;v&&ie.readAsDataURL(v),ie.onload=()=>{ce({name:R.toLocaleLowerCase()+"-"+q.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").split(" ").join("-")+"-0."+v.name.split(".")[1],data:ie.result})},ie.onerror=e=>{console.log("Error img -> img base 64: ",e)};const[me,ue]=(0,s.useState)([{name:"",data:""}]);(0,s.useEffect)((()=>{if(re){const e=[{name:"",data:""}];for(let t=0;t<re.length;t++){const a=new FileReader;a.readAsDataURL(re[t]),a.onload=()=>{e[t]={name:R.toLocaleLowerCase()+"-"+q.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").split(" ").join("-")+"-"+t+"."+re[t].name.split(".")[1],data:a.result},ue(e)},a.onerror=e=>{console.log("Error img -> img base 64: ",e)}}}}),[re,R,q]);const pe='{\n    "detalle": {\n      "nombre": "'.concat(q,'",\n      "imagen": ').concat(JSON.stringify(de),',\n      "categoria": "').concat(R,'",\n      "tipo": "').concat(k,'",\n      "habitaciones": "').concat(B,'",\n      "ba\xf1os": "').concat(O,'",\n      "parqueaderos": "').concat(T,'",\n      "area": "').concat(Q,'",\n      "valor": "').concat(W,'",\n      "descripcion": "').concat(te,'",\n      "ciudad": "').concat(V,'",\n      "departamento": "').concat(Z,'",\n      "pais": "').concat($,'",\n      "sector": "').concat(K,'",\n      "estrato": "').concat(Y,'",\n      "estado": "').concat(C,'",\n      "images": ').concat(JSON.stringify(me),"\n    }\n  }");return""!==q&&""!==v&&""!==R&&""!==k&&""!==B&&""!==O&&""!==T&&""!==Q&&""!==W&&""!==te&&""!==V&&""!==K&&""!==Y&&""!==C&&(h=!0),200<=N&&N<=299?(y(0),i().fire({title:"Nuevo Inmueble",text:"Inmueble creado con \xe9xito",icon:"success",confirmButtonColor:m.L}),S(""),A(""),_(""),F(""),oe(""),M(""),D(""),H(""),z(""),P(""),ae(""),J(""),U(""),G(""),X(""),ee(""),L(""),le("")):(400<=N&&N<=499||500<=N&&N<=599)&&(y(0),i().fire({title:"Lo sentimos",text:"El inmueble no pudo ser creado",icon:"error",confirmButtonColor:m.L})),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h5",{className:"my-3 my-lg-4 my-md-4 my-sm-5",children:(0,o.jsx)("center",{children:"Subir Inmueble"})}),(0,o.jsx)("center",{children:(0,o.jsx)(f,{color:"#aaaaaa",height:2,width:2})}),(0,o.jsxs)("div",{className:"container border mt-3 mb-2 pt-1 shadow-sm",children:[(0,o.jsxs)("div",{className:"row d-block d-sm-flex",children:[(0,o.jsx)("div",{className:"col col-sm-4 my-2",children:(0,o.jsx)(x,{id:"image-primary",placeholder:"Imagen",iconSize:7.5,iconStrokeWidth:.5,multiple:!1,acceptFiles:"image/*",file:v,setFile:S,className:"input form-control border-muted text-muted shadow-sm"})}),(0,o.jsxs)("div",{className:"col",children:[(0,o.jsxs)("div",{className:"row d-block d-sm-flex",children:[(0,o.jsx)("div",{className:"col my-2 my-md-2 my-sm-1",children:(0,o.jsx)(p.L,{placeholder:"Estado",query:C,defaultSelect:"Disponible",parameters:n,setQuery:L,className:"input form-control rounded border-muted border-1 text-muted shadow-sm"})}),(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(p.L,{placeholder:"Tipo negocio",query:k,parameters:r.slice(1,r.length),setQuery:F,className:"input form-control rounded border-muted border-1 text-muted shadow-sm"})})]}),(0,o.jsxs)("div",{className:"row d-block d-sm-flex",children:[(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(p.L,{placeholder:"Categor\xeda",query:R,parameters:a.slice(1,a.length),setQuery:_,className:"input form-control rounded border-muted border-1 text-muted shadow-sm"})}),(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(p.L,{placeholder:"Caracter\xedsticas",query:se,parameters:d,setQuery:E,className:"input form-control rounded border-muted border-1 text-muted shadow-sm"})})]})]})]}),(0,o.jsxs)("div",{className:"row d-block d-sm-flex",children:[(0,o.jsx)("div",{className:"col my-2 my-md-2 my-sm-1",children:(0,o.jsx)(w.o,{id:"nombre",placeholder:"Nombre",inputText:q,onInputChange:e=>A(e.target.value),className:"input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100"})}),(0,o.jsx)("div",{className:"col col-sm-4 my-2 my-md-2 my-sm-1",children:(0,o.jsx)(w.o,{id:"sector",placeholder:"Sector",inputText:K,onInputChange:e=>X(e.target.value),className:"input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100"})})]}),(0,o.jsx)("div",{className:"row d-block d-sm-flex",children:(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(l,{countries:c,country:$,setCountry:G,state:Z,setState:U,city:V,setCity:J})})}),(0,o.jsxs)("div",{className:"row d-block d-sm-flex",children:[(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(g.R,{placeholder:"\xc1rea",id:"area",value:Q,onInputChange:e=>z(e.value),className:"input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100"})}),(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(g.R,{placeholder:"Habitaciones",id:"habitaciones",value:B,onInputChange:e=>M(e.value),className:"input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100"})}),(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(g.R,{placeholder:"Ba\xf1os",id:"ba\xf1os",value:O,onInputChange:e=>D(e.value),className:"input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100"})}),(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(g.R,{placeholder:"Parqueaderos",id:"parqueaderos",value:T,onInputChange:e=>H(e.value),className:"input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100"})}),(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(g.R,{placeholder:"Estrato",id:"estrato",value:Y,onInputChange:e=>ee(e.value),className:"input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100"})}),(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(g.R,{prefix:"$ ",placeholder:"Valor",id:"valor",value:W,onInputChange:e=>P(e.value),className:"input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100"})})]}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col my-0 my-sm-2",children:(0,o.jsx)(b,{id:"descripcion",placeholder:"Descripci\xf3n",inputText:te,onInputChange:e=>ae(e.target.value),rows:3,className:"input form-control rounded border-muted border-1 align-bottom text-muted text-justify px-3 pt-5 pb-4 h-auto shadow-sm w-100"})})}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(x,{id:"images-secondary",placeholder:"Im\xe1genes",iconSize:3.5,iconStrokeWidth:1,multiple:!0,acceptFiles:"image/*",file:re,setFile:le,className:"input form-control border-muted text-muted pt-4 pb-3 shadow-sm"})})}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col my-2",children:(0,o.jsx)(u,{icon:(0,o.jsx)(f,{color:"#ffffff",height:1.5,width:1.5}),title:"Crear",urlApi:t,contenidoApi:JSON.stringify(pe),setResponseStatus:y,createFlag:h,className:"bg-main-color"})})})]})]})}},832:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>fetchCreate});const fetchCreate=(urlApi,contenidoApi,setResponseStatus,createFlag)=>{!0===createFlag&&fetch(urlApi,{method:"POST",body:eval(contenidoApi),headers:{"Content-type":"application/json"}}).then((e=>{e.json(),200<=e.status&&e.status<=299?(console.log("POST "+e.status+" Registro exitoso"),setResponseStatus(e.status)):400<=e.status&&e.status<=499?(console.log("POST "+e.status+" Registro fallido: Error en el env\xedo de datos"),setResponseStatus(e.status)):500<=e.status&&e.status<=599&&(console.log("POST "+e.status+" Registro fallido: Error en el servidor remoto"),setResponseStatus(e.status))})).catch((e=>{const t=e.toString().split(":")[1].trim();"Failed to fetch"===t?(console.log(e.status+" Registro fallido"),setResponseStatus("Registro fallido: No hay conexi\xf3n con la base de datos")):setResponseStatus("Registro fallido: "+t)}))}},446:(e,t,a)=>{a.d(t,{o:()=>s});const s=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0})}}]);
//# sourceMappingURL=102.fa7df43b.chunk.js.map