"use strict";(self.webpackChunkinmobiliaria_frontend_react=self.webpackChunkinmobiliaria_frontend_react||[]).push([[460],{460:(s,e,a)=>{a.r(e),a.d(e,{default:()=>c});var l=a(791),t=a(689),i=a(892),r=a(446),d=a(184);const c=s=>{let{inmuebles:e}=s;const{inmuebleId:a}=(0,t.UO)(),c=(0,l.useMemo)((()=>(0,i.Q)(a,e)),[a,e]),n=(0,t.s0)();if(!c)return(0,d.jsx)(t.Fg,{to:"/"});const{id:m,detalle:o}=c;return(0,d.jsxs)("div",{className:"row d-block d-sm-flex mt-3 mt-sm-5 px-4",children:[(0,d.jsxs)("div",{id:"slider",className:"carousel slide w-50 w-sm-100","data-bs-ride":"carousel",children:["        ",(0,d.jsxs)("div",{className:"carousel-inner shadow-sm",children:["                                          ",(0,d.jsx)("div",{className:"carousel-item active",children:(0,d.jsx)("img",{src:o.imagen.data,alt:"Foto",className:"img-inmueble d-block img-thumbnail animate__animated animate__fadeIn w-100"})}),o.images.map((s=>(0,d.jsx)("div",{className:"carousel-item",children:(0,d.jsx)("img",{src:s.data,id:s.name,alt:s.name,className:"img-inmueble d-block img-thumbnail animate__animated animate__fadeIn w-100"},s.name)},s.name)))]}),(0,d.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#slider","data-bs-slide":"prev",children:["      ",(0,d.jsx)("span",{className:"carousel-control-prev-icon py-5 shadow-sm"})]}),(0,d.jsx)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#slider","data-bs-slide":"next",children:(0,d.jsx)("span",{className:"carousel-control-next-icon py-5 shadow-sm"})}),(0,d.jsxs)("div",{className:"carousel-indicators",children:["       ",(0,d.jsx)("button",{type:"button","data-bs-target":"#slider","data-bs-slide-to":0,className:"active shadow-sm"},0),o.images.map(((s,e)=>(0,d.jsx)("button",{type:"button","data-bs-target":"#slider","data-bs-slide-to":e+1,className:"shadow-sm"},e+1)))]})]}),(0,d.jsxs)("div",{className:"w-50 w-sm-100",children:[(0,d.jsx)("h1",{className:"mt-2 mt-sm-0",children:o.nombre}),(0,d.jsx)("hr",{}),(0,d.jsxs)("ul",{className:"list-group",children:[(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["C\xf3digo Inmueble: ",(0,d.jsx)("span",{className:"text-muted",children:m})]}),(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Categor\xeda: ",(0,d.jsx)("span",{className:"text-muted",children:o.categoria})]}),(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Tipo: ",(0,d.jsx)("span",{className:"text-muted",children:o.tipo})]}),(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Estado: ",(0,d.jsx)("span",{className:"text-muted",children:o.estado})]})]}),(0,d.jsx)("h5",{className:"mt-3",children:"Valor"}),(0,d.jsx)("ul",{className:"list-group list-group-flush",children:(0,d.jsxs)("li",{className:"list-group-item fw-bolder",children:[(0,d.jsx)("span",{className:"text-dark fs-4",children:r.o.format(o.valor)})," ",(0,d.jsx)("span",{className:"text-muted",children:"Arriendo"===o.tipo?"mensual":""})]})})]}),(0,d.jsx)("p",{}),(0,d.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[(0,d.jsx)("hr",{}),(0,d.jsx)("h5",{className:"mt-3",children:"Descripci\xf3n"}),(0,d.jsx)("ul",{className:"list-group list-group-horizontal-sm list-group-flush",children:(0,d.jsx)("li",{className:"list-group-item fw-bolder text-justify",children:(0,d.jsx)("span",{className:"text-muted",children:o.descripcion})})}),(0,d.jsx)("h5",{className:"mt-3",children:"Caracter\xedsticas"}),(0,d.jsxs)("ul",{className:"list-group list-group-horizontal-sm",children:[(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Habitaciones: ",(0,d.jsx)("span",{className:"text-muted",children:o.habitaciones})]}),(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Ba\xf1os: ",(0,d.jsx)("span",{className:"text-muted",children:o.ba\u00f1os})]}),(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Parqueaderos: ",(0,d.jsx)("span",{className:"text-muted",children:o.parqueaderos})]})]}),(0,d.jsx)("h5",{className:"mt-3",children:"Localizaci\xf3n"}),(0,d.jsxs)("ul",{className:"list-group list-group-horizontal-sm",children:[(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Zona/Barrio: ",(0,d.jsx)("span",{className:"text-muted",children:o.sector})]}),(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Estrato: ",(0,d.jsx)("span",{className:"text-muted",children:o.estrato})]}),(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Ciudad: ",(0,d.jsx)("span",{className:"text-muted",children:o.ciudad})]}),(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Departamento: ",(0,d.jsx)("span",{className:"text-muted",children:o.departamento})]}),(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Pa\xeds: ",(0,d.jsx)("span",{className:"text-muted",children:o.pais})]})]}),(0,d.jsx)("ul",{className:"list-group list-group-horizontal-sm",children:(0,d.jsxs)("li",{className:"list-group-item fw-bolder border-white",children:["Ubicaci\xf3n: ",o.ubicacion]})}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"d-grid gap-2 col mx-md-0",children:(0,d.jsx)("button",{className:"btn-inmueble btn btn-md btn-primary w-100 fw-bolder",onClick:()=>{n(-1)},children:"Regresar"})}),(0,d.jsx)("br",{})]})]})}},446:(s,e,a)=>{a.d(e,{o:()=>l});const l=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0})},892:(s,e,a)=>{a.d(e,{Q:()=>l});const l=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(arguments.length>1?arguments[1]:void 0).find((e=>e.id===parseInt(s)))}}}]);
//# sourceMappingURL=460.3045b33a.chunk.js.map