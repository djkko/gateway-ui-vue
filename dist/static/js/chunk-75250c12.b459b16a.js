(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75250c12"],{"593b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dataForm",attrs:{rules:t.rules,model:t.tempItem,"label-width":"150px"}},[n("el-form-item",{attrs:{label:"Cluster名称",prop:"name"}},[n("el-input",{staticStyle:{width:"200px"},model:{value:t.tempItem.name,callback:function(e){t.$set(t.tempItem,"name",e)},expression:"tempItem.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"负载均衡算法"}},[n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"负载均衡算法"},model:{value:t.tempItem.loadBalance,callback:function(e){t.$set(t.tempItem,"loadBalance",e)},expression:"tempItem.loadBalance"}},t._l(t.loadBalanceConstant,function(t){return n("el-option",{key:t.value,attrs:{value:t.value,label:t.title}})}),1)],1),t._v(" "),n("div",{staticStyle:{"margin-left":"70px"}},[n("el-button",{on:{click:t.goList}},[t._v("返回")]),t._v(" "),t.isCreate?n("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:function(e){return t.createItem("dataForm")}}},[t._v("提交\n            ")]):t.isUpdate?n("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:function(e){return t.updateItem("dataForm")}}},[t._v("提交\n            ")]):t._e()],1)],1)],1)},r=[],a=(n("a481"),n("2435")),s=n("7ea2"),o=n("ed08");function u(){return{id:void 0,name:void 0,loadBalance:a["j"].roundRobin}}var c={name:"clusterForm",props:{showType:{type:String,default:a["d"].create},editItem:{type:Object}},data:function(){return{loading:!0,submitting:!1,loadBalanceConstant:a["i"],rules:{name:{required:!0,message:"请填写集群名称",trigger:"change"}},tempItem:u()}},watch:{editItem:function(t,e){this.tempItem=Object(o["d"])(this.tempItem,Object(o["a"])(t)),this.loading=!1,this.submitting=!1}},computed:{isShow:function(){return this._isShow()},isCreate:function(){return this._isCreate()},isUpdate:function(){return this._isUpdate()}},created:function(){this.init()},methods:{init:function(){this._isShow()?this.rules={}:this._isCreate()&&(this.loading=!1)},goList:function(){this.$router.replace({path:"/cluster"}),this.$destroy()},createItem:function(t){var e=this;this.submitting||this.$refs[t].validate(function(t){if(!t)return!1;e._doCreateItem()})},_doCreateItem:function(){var t=this,e=Object(o["a"])(this.tempItem);this.submitting=!0,s["e"](e).then(function(){t.$message({type:"success",message:"创建成功!"}),setTimeout(function(){t.goList()},2e3)}).catch(function(){t.submitting=!1})},updateItem:function(t){var e=this;this.submitting||this.$refs[t].validate(function(t){if(!t)return!1;e._doUpdateItem()})},_doUpdateItem:function(){var t=this,e=Object(o["a"])(this.tempItem);this.submitting=!0,s["e"](e).then(function(){t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.goList()},2e3)}).catch(function(){t.submitting=!1})},_isUpdate:function(){return this.showType===a["d"].update},_isShow:function(){return this.showType===a["d"].show},_isCreate:function(){return this.showType===a["d"].create}}},l=c,m=n("2877"),d=Object(m["a"])(l,i,r,!1,null,"eee54722",null);e["a"]=d.exports},"7ea2":function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return c}),n.d(e,"a",function(){return l}),n.d(e,"c",function(){return m});var i=n("b775"),r=n("2435"),a="/clusters";function s(t){return Object(i["a"])({url:a,method:"GET",params:t})}function o(){return new Promise(function(t,e){var n=[],i="",a=r["c"];function o(r){s(r).then(function(e){e=e||[];var r=e.length;if(r>0){if(n=n.concat(e),i=e[r-1]||{},i.id){var s={after:i.id,limit:a};o(s)}}else t(n)}).catch(function(){e()})}var u={after:"",limit:a};o(u)})}function u(t){return Object(i["a"])({url:a+"/"+t,method:"GET"})}function c(t){return Object(i["a"])({url:a,method:"PUT",data:t})}function l(t){return Object(i["a"])({url:a+"/"+t,method:"DELETE"})}function m(t){return Object(i["a"])({url:a+"/"+t+"/binds",method:"GET"})}},"9b21":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("cluster-form",{attrs:{"show-type":"create"}})],1)},r=[],a=(n("7f7f"),n("593b")),s="clusterNew",o={name:s,watch:{$route:function(t,e){t.name!=s&&this.$destroy()}},components:{ClusterForm:a["a"]}},u=o,c=n("2877"),l=Object(c["a"])(u,i,r,!1,null,"f71ede04",null);e["default"]=l.exports},b775:function(t,e,n){"use strict";var i=n("bc3a"),r=n.n(i),a=n("5c96"),s="",o="",u=o+"/v1",c=r.a.create({baseURL:s+u,timeout:6e4});c.interceptors.request.use(function(t){return t},function(t){console.error(t),Promise.reject(t)}),c.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(a["Message"])({message:e.data,type:"error",duration:5e3}),Promise.reject("error"))},function(t){return Object(a["Message"])({message:t.data||"网络异常",type:"error",duration:5e3}),Promise.reject(t)}),e["a"]=c}}]);