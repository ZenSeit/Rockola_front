(this.webpackJsonprockola4_front=this.webpackJsonprockola4_front||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(15),o=n.n(c),s=(n(136),n(137),n(5)),i=n(2);function l(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(s.Button,{color:"dark",onClick:function(e){localStorage.clear(),window.location.reload(!1)},children:"Cerrar Sesion"})})}var u=n(4),d=n(7),j=n.n(d),b=n(20),h=n(6);function p(e){var t=Object.values(e),n=Object.values(t[0]),r=Object(a.useState)(n[0]),c=Object(u.a)(r,2),o=c[0],l=c[1],d=Object(a.useState)(n[1]),p=Object(u.a)(d,2),m=p[0],g=p[1],O=Object(a.useState)(n[2]),v=Object(u.a)(O,2),x=v[0],f=v[1],y=Object(a.useState)(n[3]),k=Object(u.a)(y,2),w=k[0],S=k[1],A=Object(a.useState)(n[4]),C=Object(u.a)(A,2),M=C[0],N=C[1],L=Object(a.useState)(n[5]),F=Object(u.a)(L,2),T=F[0],E=F[1],z=Object(a.useState)(localStorage.nickname),I=Object(u.a)(z,2),q=I[0],B=I[1],P=Object(a.useState)(!1),_=Object(u.a)(P,2),R=_[0],J=_[1],D=function(){return J(!R)},G=Object(a.useState)([]),Z=Object(u.a)(G,2),$=Z[0],H=Z[1],V=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(n[0]),B(localStorage.nickname),a={id:o,nom:m,autor:x,gen:w,enlace:M,comentario:T,usercanr:q},console.log(a),t.preventDefault(),e.next=7,fetch("https://rockolamin.herokuapp.com/acan",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.token},body:JSON.stringify(a)}).then((function(e){200===e.status?(alert("Cancion editada con exito"),window.location.reload(!1)):alert("No se pudo editar la cancion")}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){fetch("https://rockolamin.herokuapp.com/lgen",{method:"get",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.token}}).then((function(e){return e.json()})).then((function(e){H(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(s.Button,{color:"warning",onClick:D,children:"Editar cancion"})}),Object(i.jsxs)(s.Modal,{isOpen:R,children:[Object(i.jsxs)(s.ModalHeader,{children:["Editar canci\xf3n",Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16",onClick:D,className:"cerrarbtn",children:Object(i.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})})]}),Object(i.jsx)(s.ModalBody,{children:Object(i.jsxs)(h.AvForm,{onValidSubmit:V,children:[Object(i.jsx)(h.AvField,{name:"cancion",label:"Nombre cancion",placeholder:"Escribe el nombre de la cancion",value:m,onChange:function(e){return g(e.target.value)},type:"text",required:!0,validate:{required:{value:!0,errorMessage:"Ingresa el nombre de la cancion"},minLength:{value:1,errorMessage:"El nombre de la cancion debe contener entre 1 y 30 caracteres"},maxLength:{value:30,errorMessage:"El nombre de la cancion debe contener entre 1 y 30 caracteres"}}}),Object(i.jsx)(h.AvField,{name:"autor",label:"Artista",placeholder:"Ingresa el artista",value:x,onChange:function(e){return f(e.target.value)},type:"text",validate:{required:{value:!0,errorMessage:"Artista"},pattern:{value:"^[a-zA-Z0-9_ ]*$",errorMessage:"El artista solo puede contener letras y numeros"},minLength:{value:2,errorMessage:"Tu nombre debe contener al menos 2 caracteres"},maxLength:{value:40,errorMessage:"Nombre demasiado largo"}}}),Object(i.jsxs)(h.AvField,{type:"select",name:"genero",label:"Genero de la cancion",value:w,onChange:function(e){return S(e.target.value)},required:!0,children:[Object(i.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Selecciona un genero"}),$.map((function(e){return Object(i.jsx)("option",{children:e.genmu})}))]}),Object(i.jsx)(h.AvField,{name:"enlace",label:"Enlace YT",placeholder:"Ingresa el enlace de la cancion",value:M,onChange:function(e){return N(e.target.value)},type:"text",validate:{required:{value:!0,errorMessage:"Ingresa el enlace"},pattern:{value:"(https?://)?(www\\.)?(yotu\\.be/|youtube\\.com/)?((.+/)?(watch(\\?v=|.+&v=))?(v=)?)([\\w_-]{11})(&.+)?",errorMessage:"Ingresa un enlace de youtube"}}}),Object(i.jsx)(h.AvField,{name:"comment",label:"Comentario",placeholder:"Puedes escribir algun comentario",value:T,onChange:function(e){return E(e.target.value)},type:"text"}),Object(i.jsx)(s.Button,{color:"primary",children:"Editar"})]})})]})]})}function m(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(u.a)(c,2),l=o[0],d=o[1],p=Object(a.useState)(""),m=Object(u.a)(p,2),g=m[0],O=m[1],v=Object(a.useState)(""),x=Object(u.a)(v,2),f=x[0],y=x[1],k=Object(a.useState)(""),w=Object(u.a)(k,2),S=w[0],A=w[1],C=Object(a.useState)(localStorage.nickname),M=Object(u.a)(C,2),N=M[0],L=M[1],F=Object(a.useState)(!1),T=Object(u.a)(F,2),E=T[0],z=T[1],I=function(){return z(!E)},q=Object(a.useState)([]),B=Object(u.a)(q,2),P=B[0],_=B[1],R=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(localStorage.nickname),a={nom:n,autor:l,gen:g,enlace:f,comentario:S,usercanr:N},console.log(a),t.preventDefault(),e.next=6,fetch("https://rockolamin.herokuapp.com/gcan",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.token},body:JSON.stringify(a)}).then((function(e){200===e.status?(alert("Se agreg\xf3 tu cancion"),window.location.reload(!1)):alert("La cancion no fue agregada")}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){fetch("https://rockolamin.herokuapp.com/lgen",{method:"get",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.token}}).then((function(e){return e.json()})).then((function(e){_(e)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsx)(s.Button,{color:"success",onClick:I,children:"A\xf1adir canci\xf3n"})}),Object(i.jsxs)(s.Modal,{isOpen:E,children:[Object(i.jsxs)(s.ModalHeader,{children:["A\xf1adir canci\xf3n",Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16",onClick:I,className:"cerrarbtn",children:Object(i.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})})]}),Object(i.jsx)(s.ModalBody,{children:Object(i.jsxs)(h.AvForm,{onValidSubmit:R,children:[Object(i.jsx)(h.AvField,{name:"cancion",label:"Nombre cancion",placeholder:"Escribe el nombre de la cancion",value:n,onChange:function(e){return r(e.target.value)},type:"text",required:!0,validate:{required:{value:!0,errorMessage:"Ingresa el nombre de la cancion"},minLength:{value:1,errorMessage:"El nombre de la cancion debe contener entre 1 y 30 caracteres"},maxLength:{value:30,errorMessage:"El nombre de la cancion debe contener entre 1 y 30 caracteres"}}}),Object(i.jsx)(h.AvField,{name:"autor",label:"Artista",placeholder:"Ingresa el artista",value:l,onChange:function(e){return d(e.target.value)},type:"text",validate:{required:{value:!0,errorMessage:"Artista"},pattern:{value:"^[a-zA-Z0-9_ ]*$",errorMessage:"El artista solo puede contener letras y numeros"},minLength:{value:2,errorMessage:"Tu nombre debe contener al menos 2 caracteres"},maxLength:{value:40,errorMessage:"Nombre demasiado largo"}}}),Object(i.jsxs)(h.AvField,{type:"select",name:"genero",label:"Genero de la cancion",value:g,onChange:function(e){return O(e.target.value)},required:!0,children:[Object(i.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Selecciona un genero"}),P.map((function(e){return Object(i.jsx)("option",{children:e.genmu})}))]}),Object(i.jsx)(h.AvField,{name:"enlace",label:"Enlace YT",placeholder:"Ingresa el enlace de la cancion",value:f,onChange:function(e){return y(e.target.value)},type:"text",validate:{required:{value:!0,errorMessage:"Ingresa el enlace"},pattern:{value:"(https?://)?(www\\.)?(yotu\\.be/|youtube\\.com/)?((.+/)?(watch(\\?v=|.+&v=))?(v=)?)([\\w_-]{11})(&.+)?",errorMessage:"Ingresa un enlace de youtube"}}}),Object(i.jsx)(h.AvField,{name:"comment",label:"Comentario",placeholder:"Puedes escribir algun comentario",value:S,onChange:function(e){return A(e.target.value)},type:"text"}),Object(i.jsx)(s.Button,{color:"primary",children:"A\xf1adir cancion"})]})})]})]})}function g(e){var t=Object.values(e),n=Object.values(t[0]);return Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){var e=n[0];fetch("https://rockolamin.herokuapp.com/dcan/"+e,{method:"delete",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.token}}).then((function(e){200===e.status?(alert("Cancion eliminada con exito"),window.location.reload(!1)):alert("No se pudo eliminar la cancion")}))},children:"Eliminar"})})}var O=n.p+"static/media/bannerrockola.dc816b07.png";function v(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(u.a)(c,2),s=o[0],d=o[1],j=Object(a.useState)([]),b=Object(u.a)(j,2),h=b[0],v=b[1];return Object(a.useEffect)((function(){fetch("https://rockolamin.herokuapp.com/lcan",{method:"get",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.token}}).then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),Object(a.useEffect)((function(){fetch("https://rockolamin.herokuapp.com/lgen",{method:"get",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.token}}).then((function(e){return e.json()})).then((function(e){v(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:O,className:"img-fluid",alt:"Responsive image"})}),Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-10",children:[Object(i.jsx)("h2",{className:"mb-3",id:"nuestras",children:" Nuestras canciones disponibles "}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("select",{type:"select",name:"genero",label:"Genero de la cancion",value:s,onChange:function(e){return d(e.target.value)},children:[Object(i.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Selecciona un genero"}),h.map((function(e){return Object(i.jsx)("option",{children:e.genmu})}))]}),Object(i.jsx)("button",{className:"btn btn-secondary",onClick:function(){""==!s&&fetch("https://rockolamin.herokuapp.com/lgcan/"+s,{method:"get",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.token}}).then((function(e){return e.json()})).then((function(e){r(e),0==e.length&&(alert("No contamos con canciones de este genero aun."),window.location.reload(!1))}))},children:"Filtrar"})]}),Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"tabladiv",children:Object(i.jsx)("div",{className:"tcancion",children:Object(i.jsxs)("table",{className:"table table-dark table-striped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"Nombre"}),Object(i.jsx)("th",{scope:"col",children:"Artista"}),Object(i.jsx)("th",{scope:"col",children:"Genero"}),Object(i.jsx)("th",{scope:"col",children:"Enlace"}),Object(i.jsx)("th",{scope:"col",children:"Comentario"}),Object(i.jsx)("th",{scope:"col",children:"Modificado por"}),Object(i.jsx)("th",{scope:"col",children:"Acciones"})]})}),Object(i.jsx)("tbody",{children:n.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.nom},e.id),Object(i.jsx)("td",{children:e.autor}),Object(i.jsx)("td",{children:e.gen}),Object(i.jsx)("td",{children:Object(i.jsxs)("a",{href:e.enlace,target:"_blank",children:["Escuchar ",e.nom]})}),Object(i.jsx)("td",{children:e.comentario}),Object(i.jsx)("td",{children:e.usercanr}),Object(i.jsxs)("td",{children:[Object(i.jsx)(p,{cant:e}),Object(i.jsx)(g,{cant:e})," "]})]})}))})]})})})]})})}),Object(i.jsx)("div",{className:"cerrar",children:Object(i.jsx)(l,{})})]})}function x(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(u.a)(c,2),l=o[0],d=o[1],p=Object(a.useState)(""),m=Object(u.a)(p,2),g=m[0],O=m[1],v=Object(a.useState)(""),x=Object(u.a)(v,2),f=x[0],y=x[1],k=Object(a.useState)(""),w=Object(u.a)(k,2),S=w[0],A=w[1],C=Object(a.useState)(!1),M=Object(u.a)(C,2),N=M[0],L=M[1],F=function(){return L(!N)},T=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nickname:n,nombre:l,email:g,genero:f,password:S},t.preventDefault(),e.next=4,fetch("https://rockolamin.herokuapp.com/registro",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:"rep"!==e.sent?(alert("Te has registrado correctamente"),L(!1)):alert("Elige un nickname diferente");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsx)(s.Button,{color:"success",onClick:F,children:"Registrarse"})}),Object(i.jsxs)(s.Modal,{isOpen:N,children:[Object(i.jsxs)(s.ModalHeader,{children:["Formulario de Registro La Rockola.com",Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16",onClick:F,className:"cerrarbtn",children:Object(i.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})})]}),Object(i.jsx)(s.ModalBody,{children:Object(i.jsx)("div",{children:Object(i.jsxs)(h.AvForm,{onValidSubmit:T,children:[Object(i.jsx)(h.AvField,{name:"nickname",label:"Nickname",placeholder:"Escribe tu Nickname",value:n,onChange:function(e){return r(e.target.value)},type:"text",required:!0,validate:{required:{value:!0,errorMessage:"Ingresa tu Nickname"},pattern:{value:"^[A-Za-z0-9]+$",errorMessage:"Tu nickname solo puede contener letras y numeros"},minLength:{value:2,errorMessage:"Tu nickname debe contener entre 2 y 15 caracteres"},maxLength:{value:15,errorMessage:"Tu nickname debe contener entre 2 y 15 caracteres"}}}),Object(i.jsx)(h.AvField,{name:"nombre",label:"Nombre",placeholder:"Escribe tu nombre",value:l,onChange:function(e){return d(e.target.value)},type:"text",validate:{required:{value:!0,errorMessage:"Ingresa tu nombre"},pattern:{value:"^[a-zA-Z0-9_ ]*$",errorMessage:"Tu nombre solo puede contener letras"},minLength:{value:2,errorMessage:"Tu nombre debe contener al menos 2 caracteres"},maxLength:{value:40,errorMessage:"Nombre demasiado largo"}}}),Object(i.jsx)(h.AvField,{name:"email",label:"@email",placeholder:"Escribe tu email",value:g,onChange:function(e){return O(e.target.value)},type:"email",validate:{required:{value:!0,errorMessage:"Ingresa tu email"}}}),Object(i.jsxs)(h.AvField,{type:"select",name:"genero",label:"Genero",value:f,onChange:function(e){return y(e.target.value)},required:!0,children:[Object(i.jsx)("option",{children:"Masculino"}),Object(i.jsx)("option",{children:"Femenino"}),Object(i.jsx)("option",{children:"No Binario"})]}),Object(i.jsx)(h.AvField,{name:"password",label:"Contrase\xf1a",placeholder:"Escribe una contrase\xf1a",value:S,onChange:function(e){return A(e.target.value)},type:"text",validate:{required:{value:!0,errorMessage:"Ingresa una contrase\xf1a"},pattern:{value:"^[A-Za-z0-9]+$",errorMessage:"Tu contrase\xf1a solo puede contener letras y numeros"},minLength:{value:4,errorMessage:"Tu contrase\xf1a debe contener entre 4 y 15 caracteres"},maxLength:{value:15,errorMessage:"Contrase\xf1a demasiada larga"}}}),Object(i.jsx)(s.Button,{color:"primary",children:"Registrarse"})]})})})]})]})}function f(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(u.a)(c,2),s=o[0],l=o[1],d=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nickname:n,password:s},t.preventDefault(),e.next=4,fetch("https://rockolamin.herokuapp.com/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:"mal"!==(n=e.sent)?(localStorage.token=n,localStorage.nickname=a.nickname,alert("Has ingresado correctamente"),window.location.reload(!1)):alert("Las credenciales son incorrectas. Por favor intente nuevamente.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:O,className:"img-fluid",alt:"Responsive image"})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)("div",{className:"registro",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"input-group mb-3",children:[Object(i.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"@"}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Nickname","aria-label":"Username","aria-describedby":"basic-addon1",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-group mb-3",children:[Object(i.jsx)("input",{type:"password",className:"form-control",placeholder:"Ingresa tu clave","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:s,onChange:function(e){return l(e.target.value)}}),Object(i.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:"Password"})]}),Object(i.jsx)("button",{type:"button",className:"btn btn-danger",onClick:d,children:"Ingresar"})]})})}),Object(i.jsx)("div",{className:"registro",children:Object(i.jsx)(x,{})})]})}var y=function(){return null===localStorage.key(0)?Object(i.jsx)(f,{}):Object(i.jsx)(v,{})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,316)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};n(308);o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),k()}},[[309,1,2]]]);
//# sourceMappingURL=main.93780104.chunk.js.map