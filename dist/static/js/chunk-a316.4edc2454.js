(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a316"],{"1zBe":function(t,n,i){"use strict";var e=i("84d3");i.n(e).a},"84d3":function(t,n,i){},trwT:function(t,n,i){"use strict";i.r(n);var e=i("BGl4"),o=i("lEg2"),u={name:"pluginShow",data:function(){return{item:{}}},watch:{$route:function(t,n){"pluginShow"!=t.name&&this.$destroy()}},components:{PluginForm:e.a},created:function(){this.init()},methods:{init:function(){var t=this;this.id=this.$route.query.id;var n=this.id;n&&o.d(n).then(function(n){n=n||{},t.item=n})}}},s=(i("1zBe"),i("KHd+")),a=Object(s.a)(u,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"app-container"},[i("plugin-form",{attrs:{"show-type":"show",editItem:t.item},on:{"update:editItem":function(n){t.item=n}}})],1)},[],!1,null,"4830980d",null);a.options.__file="show.vue";n.default=a.exports}}]);