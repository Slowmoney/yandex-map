(function(e){function t(t){for(var r,s,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var i=o[s];0!==n[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},n={app:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ba308":"ad3f8fa7","chunk-2d0cca13":"f9d419e4","chunk-2d2244f5":"c931714d","chunk-2d22e134":"37bb993c","chunk-2d237c74":"74133a07"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(u);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,o[1](l)}n[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var f=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("v-toolbar-title",[e._v(" Открыть форму "),o("v-btn",{attrs:{icon:""},on:{click:e.openForm}},[o("v-icon",[e._v("mdi-form-select")])],1)],1),o("v-spacer")],1),o("Form",{ref:"form"}),o("v-main",[o("Map")],1)],1)},a=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[o("v-card",{attrs:{tile:""}},[o("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:e.hide}},[o("v-icon",[e._v("mdi-close")])],1),o("v-toolbar-title",[e._v("Добавление геозон")])],1),o("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{type:"text",label:"Название",rules:e.nameRules,required:""},model:{value:e.$store.state.form.name,callback:function(t){e.$set(e.$store.state.form,"name",t)},expression:"$store.state.form.name"}})],1),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-select",{attrs:{"item-text":"name","item-value":"name",items:e.markerTypes,required:""},model:{value:e.$store.state.form.type,callback:function(t){e.$set(e.$store.state.form,"type",t)},expression:"$store.state.form.type"}})],1),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{type:"text",label:"Подсказка",required:""},model:{value:e.$store.state.form.hint,callback:function(t){e.$set(e.$store.state.form,"hint",t)},expression:"$store.state.form.hint"}})],1),o("v-col",{staticStyle:{"max-height":"400px","overflow-y":"auto"},attrs:{cols:"12"}},[o(e.getMarkerComponent(e.$store.state.form.type),{tag:"component",model:{value:e.$store.state.form.coords,callback:function(t){e.$set(e.$store.state.form,"coords",t)},expression:"$store.state.form.coords"}})],1),o("v-col",{directives:[{name:"show",rawName:"v-show",value:["Polygon","Rectangle","Circle","Polyline"].includes(e.$store.state.form.type),expression:"['Polygon', 'Rectangle', 'Circle', 'Polyline'].includes($store.state.form.type)"}],attrs:{cols:"12",md:"8"}},[o("v-row",[o("v-col",{directives:[{name:"show",rawName:"v-show",value:"Polyline"!==e.$store.state.form.type,expression:"$store.state.form.type !== 'Polyline'"}]},[o("v-checkbox",{model:{value:e.$store.state.form.fill.enable,callback:function(t){e.$set(e.$store.state.form.fill,"enable",t)},expression:"$store.state.form.fill.enable"}},[e._v("Заливка")]),o("v-color-picker",{staticClass:"ma-2",attrs:{"hide-canvas":""},model:{value:e.$store.state.form.fill.color,callback:function(t){e.$set(e.$store.state.form.fill,"color",t)},expression:"$store.state.form.fill.color"}})],1),o("v-col",[o("v-checkbox",{model:{value:e.$store.state.form.stroke.enable,callback:function(t){e.$set(e.$store.state.form.stroke,"enable",t)},expression:"$store.state.form.stroke.enable"}},[e._v("Обводка")]),o("v-color-picker",{staticClass:"ma-2",attrs:{"hide-canvas":""},model:{value:e.$store.state.form.stroke.color,callback:function(t){e.$set(e.$store.state.form.stroke,"color",t)},expression:"$store.state.form.stroke.color"}})],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-btn",{attrs:{disabled:!e.valid},on:{click:e.add}},[e._v(e._s(~e.indexByName?"Сохранить":"Добавить"))])],1)],1)],1)],1),o("v-card-text",[o("v-list",{attrs:{"three-line":"",subheader:""}},[o("v-subheader",[e._v("Список геозон")]),o("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[o("v-simple-checkbox",{attrs:{indeterminate:e.selectAllIndeterminate,value:e.selectAllState},on:{click:e.selectAll}})],1),o("th",{staticClass:"text-left"},[e._v(" Цвет ")]),o("th",{staticClass:"text-left"},[e._v(" Название ")]),o("th",{staticClass:"text-left"},[e._v(" Подсказка ")]),o("th",{staticClass:"text-left"},[e._v(" Фигура ")]),o("th",{staticClass:"text-left"},[e._v(" Скрыть на карте ")])])]),o("tbody",e._l(e.$store.state.points,(function(t,r){return o("tr",{key:r},[o("td",[o("v-simple-checkbox",{model:{value:t.select,callback:function(o){e.$set(t,"select",o)},expression:"item.select"}})],1),o("td",[o("div",{staticClass:"d-flex"},[t.fill&&t.fill.enable?o("div",{directives:[{name:"show",rawName:"v-show",value:["Polygon","Rectangle","Circle"].includes(t.type),expression:"['Polygon', 'Rectangle', 'Circle'].includes(item.type)"}],staticClass:"v-color-picker__dot",style:{background:t.fill.color}}):e._e(),t.stroke&&t.stroke.enable?o("div",{directives:[{name:"show",rawName:"v-show",value:["Polygon","Rectangle","Circle","Polyline"].includes(t.type),expression:"['Polygon', 'Rectangle', 'Circle', 'Polyline'].includes(item.type)"}],staticClass:"v-color-picker__dot",style:{background:t.stroke.color}}):e._e()])]),o("td",[e._v(e._s(t.name))]),o("td",[o("v-textarea",{attrs:{readonly:"",flat:"",dense:"","hide-details":"",placeholder:"Подсказка",value:t.hint}})],1),o("td",[o("v-select",{attrs:{readonly:"","item-text":"name","item-value":"name",items:e.markerTypes},model:{value:t.type,callback:function(o){e.$set(t,"type",o)},expression:"item.type"}})],1),o("td",{staticClass:"text-center"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.hide=!t.hide}}},[o("v-icon",[e._v(e._s(t.hide?"mdi-eye-off":"mdi-eye"))])],1)],1)])})),0)]},proxy:!0}])})],1)],1),o("v-card-actions",[o("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.countSelected>0,expression:"countSelected>0"}],attrs:{text:"",color:"red accent-4"},on:{click:e.deleteSelected}},[e._v(" Удалить "+e._s(e.selectAllState?"все":e.countSelected))])],1)],1)],1)},c=[],i=o("5530"),l=(o("d3b7"),o("3ca3"),o("ddb0"),o("159b"),o("b0c0"),o("a630"),o("cb29"),o("c740"),o("a434"),o("2f62")),u={name:"Form",data:function(){return{nameRules:[function(e){return!!e||"Необходимо значение"}],coordRules:[function(e){return""!==e||"Необходимо значение"}],form:!0,markerTypes:[{name:"Polygon",component:function(){return o.e("chunk-2d0cca13").then(o.bind(null,"4f6a"))}},{name:"Rectangle",component:function(){return o.e("chunk-2d237c74").then(o.bind(null,"fd22"))}},{name:"Circle",component:function(){return o.e("chunk-2d0ba308").then(o.bind(null,"35c3"))}},{name:"Polyline",component:function(){return o.e("chunk-2d2244f5").then(o.bind(null,"e01e"))}},{name:"Placemark",component:function(){return o.e("chunk-2d22e134").then(o.bind(null,"f9e0"))}}],valid:!1}},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["clearForm"])),{},{show:function(){this.form=!0},hide:function(){this.form=!1},selectAll:function(){var e=!this.$store.state.points.every((function(e){return e.select}))&&!this.selectAllIndeterminate;this.$store.state.points.forEach((function(t){return t.select=e}))},add:function(){var e={name:this.$store.state.form.name,type:this.$store.state.form.type,hint:this.$store.state.form.hint,coords:Array.from(this.$store.state.form.coords),fill:Object.assign({},this.$store.state.form.fill),stroke:Object.assign({},this.$store.state.form.stroke),color:"",select:!1,hide:!1};~this.indexByName?this.$set(this.$store.state.points,this.indexByName,e):this.$store.state.points.push(e),this.clearForm(),this.$refs.form.resetValidation()},validate:function(){this.$refs.form.validate()},getMarkerComponent:function(e){var t=this.markerTypes.findIndex((function(t){return t.name==e}));return~t?this.markerTypes[t].component:function(){}},deleteSelected:function(){for(var e=0;e<=this.countSelected+2;e++){var t=this.$store.state.points.findIndex((function(e){return e.select}));~t&&this.$store.state.points.splice(t,1)}}}),computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["coords"])),{},{selectAllState:function(){return this.$store.state.points.length>0&&this.$store.state.points.every((function(e){return e.select}))},selectAllIndeterminate:function(){return this.$store.state.points.some((function(e){return e.select}))&&!this.selectAllState},countSelected:function(){return this.$store.state.points.reduce((function(e,t){return t.select&&e++,e}),0)},indexByName:function(){var e=this;return this.$store.state.points.findIndex((function(t){return t.name==e.$store.state.form.name}))}}),mounted:function(){this.$on("open",this.show)}},f=u,d=o("2877"),m=o("6544"),p=o.n(m),v=o("8336"),h=o("b0af"),b=o("99d9"),y=o("ac7c"),k=o("62ad"),$=o("03a4"),x=o("a523"),g=o("169a"),_=o("4bd4"),w=o("132d"),C=o("8860"),P=o("0fd9"),V=o("b974"),j=o("9e88"),O=o("1f4f"),S=o("e0c7"),T=o("8654"),R=o("a844"),A=o("71d9"),F=o("2a7f"),M=Object(d["a"])(f,s,c,!1,null,"40f25126",null),N=M.exports;p()(M,{VBtn:v["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["b"],VCheckbox:y["a"],VCol:k["a"],VColorPicker:$["a"],VContainer:x["a"],VDialog:g["a"],VForm:_["a"],VIcon:w["a"],VList:C["a"],VRow:P["a"],VSelect:V["a"],VSimpleCheckbox:j["a"],VSimpleTable:O["a"],VSubheader:S["a"],VTextField:T["a"],VTextarea:R["a"],VToolbar:A["a"],VToolbarTitle:F["a"]});var I=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("yandex-map",{ref:"map",attrs:{coords:e.coords},on:{"map-was-initialized":function(t){e.map=t},click:e.addPoint}},[e._l(e.points,(function(t,r){return[t.hide?e._e():o("ymap-marker",{key:r,attrs:{"marker-fill":t.fill,"marker-stroke":t.stroke,coords:t.coords,"circle-radius":e.circleRadius(t.type,t.coords),"marker-type":t.type,"marker-id":r,"hint-content":t.hint},on:{click:function(o){return e.edit(t)}}})]})),o("ymap-marker",{ref:"marker",attrs:{coords:e.form.coords,"circle-radius":e.circleRadius(e.form.type,e.form.coords),"marker-fill":e.form.fill,"marker-stroke":e.form.stroke,"marker-type":e.form.type,"marker-id":-1,"hint-content":e.form.hint}})],2)},B=[],E={name:"Map",data:function(){return{map:null,marker:!1}},methods:Object(i["a"])({addPoint:function(e){this.setCoords(e.get("coords"))},circleRadius:function(e,t){if(t&&t.length>2&&"Circle"==e)return t[2]},edit:function(e){e.hide=!0,this.$store.state.form.type=e.type,this.$store.state.form.name=e.name,this.$store.state.form.hint=e.hint,this.$store.state.form.coords=e.coords}},Object(l["b"])(["setCoords"])),computed:Object(i["a"])({},Object(l["c"])(["coords","points","form"]))},q=E,L=(o("72bf"),Object(d["a"])(q,I,B,!1,null,"2bf66b2d",null)),J=L.exports,z={name:"App",components:{Map:J,Form:N},data:function(){return{}},methods:{openForm:function(){this.$refs.form.$emit("open")}}},D=z,K=o("7496"),U=o("40dc"),G=o("f6c4"),H=o("2fa4"),Q=Object(d["a"])(D,n,a,!1,null,null,null),W=Q.exports;p()(Q,{VApp:K["a"],VAppBar:U["a"],VBtn:v["a"],VIcon:w["a"],VMain:G["a"],VSpacer:H["a"],VToolbarTitle:F["a"]}),r["a"].use(l["a"]);var X=new l["a"].Store({state:{coords:[55.69051894039127,37.654947679083044],points:[],form:{name:"",type:"Placemark",hint:"",coords:[55.69051894039127,37.654947679083044],fill:{enable:!0,color:"#F000000F"},stroke:{enable:!0,color:"#F000000F"}}},mutations:{setCoords:function(e,t){e.coords=t},clearForm:function(e){e.form.type="Placemark",e.form.name="",e.form.hint="",e.form.coords=e.coords}},actions:{},modules:{}}),Y=o("f309"),Z=o("5607");r["a"].use(Y["a"],{directives:{Ripple:Z["a"]}});var ee=new Y["a"]({}),te=o("f5ce");r["a"].config.productionTip=!1;var oe={apiKey:"",lang:"ru_RU",coordorder:"latlong",version:"2.1"};r["a"].use(te["a"],oe),new r["a"]({store:X,vuetify:ee,render:function(e){return e(W)}}).$mount("#app")},"72bf":function(e,t,o){"use strict";o("8583")},8583:function(e,t,o){}});
//# sourceMappingURL=app.5701a656.js.map