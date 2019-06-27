(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb67a224"],{"58b2":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-select",{attrs:{filterable:"",placeholder:"请选择Cluster进行查询"},on:{change:t.handleFilter},model:{value:t.listQuery.clusterId,callback:function(e){t.$set(t.listQuery,"clusterId",t._n(e))},expression:"listQuery.clusterId"}},t._l(t.clustersList,function(t,e){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),t.listQuery.clusterId?[i("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"地址",clearable:""},model:{value:t.listQuery.addr,callback:function(e){t.$set(t.listQuery,"addr",e)},expression:"listQuery.addr"}}),t._v(" "),i("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"maxQPS",clearable:""},model:{value:t.listQuery.maxQPS,callback:function(e){t.$set(t.listQuery,"maxQPS",e)},expression:"listQuery.maxQPS"}}),t._v(" "),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:t.listLoading,type:"primary"},on:{click:t.handleFilter}},[t._v("刷新\n            ")])]:t._e(),t._v(" "),0===t.clustersList.length?i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先添加Cluster",placement:"top-start"}},[i("div",{staticStyle:{float:"right"}},[i("el-button",{staticClass:"filter-item",attrs:{disabled:!0,type:"danger",icon:"el-icon-edit"}},[t._v("添加\n                ")])],1)]):i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"danger",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加\n        ")])],2),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.filterData,"element-loading-text":"加载中...",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.addr))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"接口协议"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("protocolFilter")(e.row.protocol)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"支持的最大QPS"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.maxQPS))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return t.handleShow(e.row)}}},[t._v("查看")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"",layout:"total",total:t.pageInfo.totalSize}})],1)],1)},r=[],a=(i("5df3"),i("ac6a"),i("7f7f"),i("aa22")),s=i("7ea2"),l=i("fdfe"),o=i("6724"),u=i("ed08"),c="routingIndex",d={name:c,directives:{waves:o["a"]},data:function(){return{listQuery:{clusterId:void 0,addr:void 0,maxQPS:void 0},listLoading:!0,dataList:[],clustersList:[],bindIdList:[],pageInfo:{totalSize:void 0}}},created:function(){this.init()},watch:{$route:function(t,e){t.name!=c&&this.$destroy()}},computed:{filterData:function(){var t=this;return this.dataList.filter(function(e){var i=!0;return t.listQuery.addr&&(i=Object(u["i"])(e.addr,t.listQuery.addr)),i&&t.listQuery.maxQPS&&(i=Object(u["i"])(e.maxQPS,t.listQuery.maxQPS)),i})}},methods:{init:function(){var t=this;this.listQuery.clusterId=this.$route.query.id||"",s["b"]().then(function(e){t.clustersList=e||[],t.listLoading=!1}).catch(function(){t.listLoading=!1}),this.listQuery.clusterId&&this.handleFilter()},getList:function(){var t=this;if(this.bindIdList&&this.bindIdList.length>0){var e=[];this.bindIdList.forEach(function(t){e.push(a["b"](t))}),Promise.all(e).then(function(e){t.dataList=e,t.listLoading=!1,t.pageInfo.totalSize=t.dataList.length})}else this.dataList=[],this.pageInfo.totalSize=this.dataList.length,this.listLoading=!1},handleFilter:function(){var t=this,e=this.listQuery.clusterId;this.listLoading=!0,s["c"](e).then(function(e){t.bindIdList=e||[],t.getList()})},handleDelete:function(t){var e=this,i=t.id;this.$confirm("是否删除该server？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e._doDeleteItem(i)})},_doDeleteItem:function(t){var e=this;if(t&&this.listQuery.clusterId){var i={clusterID:this.listQuery.clusterId,serverID:t};l["a"](i).then(function(){a["a"](t).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.handleFilter()})})}},handleCreate:function(){this.$router.push({path:"/server/new",query:{clusterId:this.listQuery.clusterId}})},handleShow:function(t){this.$router.push({path:"/server/show",query:{id:t.id,clusterId:this.listQuery.clusterId}})},handleUpdate:function(t){this.$router.push({path:"/server/edit",query:{id:t.id,clusterId:this.listQuery.clusterId}})}}},f=d,h=i("2877"),p=Object(h["a"])(f,n,r,!1,null,"5f1e594a",null);e["default"]=p.exports},"5df3":function(t,e,i){"use strict";var n=i("02f4")(!0);i("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=n(e,i),this._i+=t.length,{value:t,done:!1})})},6724:function(t,e,i){"use strict";i("8d41");var n={bind:function(t,e){t.addEventListener("click",function(i){var n=Object.assign({},e.value),r=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),a=r.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var s=a.getBoundingClientRect(),l=a.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",a.appendChild(l)),r.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=i.pageY-s.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=i.pageX-s.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=r.color,l.className="waves-ripple z-active",!1}},!1)}},r=function(t){t.directive("waves",n)};window.Vue&&(window.waves=n,Vue.use(r)),n.install=r;e["a"]=n},"7ea2":function(t,e,i){"use strict";i.d(e,"b",function(){return l}),i.d(e,"d",function(){return o}),i.d(e,"e",function(){return u}),i.d(e,"a",function(){return c}),i.d(e,"c",function(){return d});var n=i("b775"),r=i("2435"),a="/clusters";function s(t){return Object(n["a"])({url:a,method:"GET",params:t})}function l(){return new Promise(function(t,e){var i=[],n="",a=r["c"];function l(r){s(r).then(function(e){e=e||[];var r=e.length;if(r>0){if(i=i.concat(e),n=e[r-1]||{},n.id){var s={after:n.id,limit:a};l(s)}}else t(i)}).catch(function(){e()})}var o={after:"",limit:a};l(o)})}function o(t){return Object(n["a"])({url:a+"/"+t,method:"GET"})}function u(t){return Object(n["a"])({url:a,method:"PUT",data:t})}function c(t){return Object(n["a"])({url:a+"/"+t,method:"DELETE"})}function d(t){return Object(n["a"])({url:a+"/"+t+"/binds",method:"GET"})}},"8d41":function(t,e,i){},aa22:function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return l});var n=i("b775"),r=(i("2435"),"/servers");function a(t){return Object(n["a"])({url:r+"/"+t,method:"GET"})}function s(t){return Object(n["a"])({url:r,method:"PUT",data:t})}function l(t){return Object(n["a"])({url:r+"/"+t,method:"DELETE"})}},b775:function(t,e,i){"use strict";var n=i("bc3a"),r=i.n(n),a=i("5c96"),s="",l="",o=l+"/v1",u=r.a.create({baseURL:s+o,timeout:6e4});u.interceptors.request.use(function(t){return t},function(t){console.error(t),Promise.reject(t)}),u.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(a["Message"])({message:e.data,type:"error",duration:5e3}),Promise.reject("error"))},function(t){return Object(a["Message"])({message:t.data||"网络异常",type:"error",duration:5e3}),Promise.reject(t)}),e["a"]=u},fdfe:function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"a",function(){return s});var n=i("b775"),r="/binds";function a(t){return Object(n["a"])({url:r,method:"PUT",data:t})}function s(t){return Object(n["a"])({url:r,method:"DELETE",data:t})}}}]);