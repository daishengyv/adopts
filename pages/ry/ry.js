(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ry/ry"],{"0dc5":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return o}));var o={TabBar:function(){return e.e("components/TabBar/TabBar").then(e.bind(null,"1cfd"))}},a=function(){var n=this.$createElement,t=(this._self._c,this.products.length);this.$mp.data=Object.assign({},{$root:{g0:t}})},c=[]},"1a45":function(n,t,e){"use strict";e.r(t);var o=e("0dc5"),a=e("3583");for(var c in a)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(c);e("c572");var r=e("828b"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"482382c1",null,!1,o["a"],void 0);t["default"]=u.exports},3583:function(n,t,e){"use strict";e.r(t);var o=e("f225"),a=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=a.a},c572:function(n,t,e){"use strict";var o=e("e4e8"),a=e.n(o);a.a},d3ce:function(n,t,e){"use strict";(function(n,t){var o=e("47a9");e("56e3");o(e("3240"));var a=o(e("1a45"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("3223")["default"],e("df3c")["createPage"])},e4e8:function(n,t,e){},f225:function(n,t,e){"use strict";(function(n){var o=e("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(e("540f")),c=o(e("755f")),r=(o(e("64f1")),{mixins:[a.default],components:{TabBar:function(){e.e("components/TabBar/TabBar").then(function(){return resolve(e("1cfd"))}.bind(null,e)).catch(e.oe)},ClassifyData:function(){e.e("components/ClassifyData/ClassifyData").then(function(){return resolve(e("eb6b"))}.bind(null,e)).catch(e.oe)}},computed:{products:function(){return c.default.getters.getproducts}},data:function(){return{mescroll:null,downOption:{},upOption:{use:!1},classifyShow:0,pageHeight:500}},onReady:function(){n.hideTabBar(),n.setNavigationBarTitle({title:"认养"}),n.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#00AF57"})},onLoad:function(){},onPageScroll:function(n){var t=n.scrollTop;this.pageHeight=t>0?210:500},onReachBottom:function(){console.log(12333)},methods:{onSkip:function(t){console.log("click",t),n.navigateTo({url:"/pages/ryxq/index?show=2&productId=".concat(t)})}}});t.default=r}).call(this,e("df3c")["default"])}},[["d3ce","common/runtime","common/vendor"]]]);