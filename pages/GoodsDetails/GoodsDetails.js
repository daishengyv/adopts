(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/GoodsDetails/GoodsDetails"],{"1a59":function(o,e,t){"use strict";(function(o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{GoodsServe:function(){t.e("components/GoodsServe/GoodsServe").then(function(){return resolve(t("2ef0"))}.bind(null,t)).catch(t.oe)},GoodsCoupon:function(){t.e("components/GoodsCoupon/GoodsCoupon").then(function(){return resolve(t("d5fc"))}.bind(null,t)).catch(t.oe)},GoodsAttr:function(){t.e("components/GoodsAttr/GoodsAttr").then(function(){return resolve(t("b122"))}.bind(null,t)).catch(t.oe)}},data:function(){return{TabShow:0,isMore:!1,AttentionShow:0,swiperList:[{id:0,type:"image",url:"/static/img/goods_banner_01.webp"},{id:1,type:"image",url:"/static/img/goods_banner_02.webp"},{id:2,type:"image",url:"/static/img/goods_banner_03.webp"},{id:3,type:"image",url:"/static/img/goods_banner_04.webp"},{id:4,type:"image",url:"/static/img/goods_banner_05.webp"}],web_content:'<div class="m-img"><img src="https://zhedplus.oss-cn-hangzhou.aliyuncs.com/content_img/20191118/1fb5ff162f25fd4c7383bd998ff2fde9.jpg"><div class="tools" hidden><i class="fa fa-arrow-up move-up"></i><i class="fa fa-arrow-down move-down"></i><em class="move-remove" hidden ><i class="fa fa-times" aria-hidden="true"></i> 移除</em><div class="cover"></div></div></div>',PageScrollTop:0,type:0}},onLoad:function(o){this.type=o.type||0},onPageScroll:function(o){this.PageScrollTop=o.scrollTop},methods:{onBack:function(){o.navigateBack()},onTab:function(e){var t=this;switch(this.TabShow=e,e){case 0:o.pageScrollTo({scrollTop:0,duration:300});break;case 1:o.createSelectorQuery().select(".evaluate-data").boundingClientRect((function(e){o.pageScrollTo({scrollTop:t.PageScrollTop+e.top-50,duration:300})})).exec();break;case 2:o.createSelectorQuery().select(".products-introduction").boundingClientRect((function(e){o.pageScrollTo({scrollTop:t.PageScrollTop+e.top-50,duration:300})})).exec();break}},onToCart:function(){o.switchTab({url:"/pages/cart/cart"})},onDepreciate:function(){o.showToast({title:"降价通知提醒成功",icon:"success"})},onAttention:function(){0===this.AttentionShow?(this.AttentionShow=1,o.showToast({title:"关注成功",icon:"none"})):(this.AttentionShow=0,o.showToast({title:"取消成功",icon:"none"}))},onEvaluate:function(){o.navigateTo({url:"/pages/GoodsEvaluateList/GoodsEvaluateList"})}}};e.default=n}).call(this,t("df3c")["default"])},"2a51":function(o,e,t){"use strict";t.r(e);var n=t("1a59"),i=t.n(n);for(var c in n)["default"].indexOf(c)<0&&function(o){t.d(e,o,(function(){return n[o]}))}(c);e["default"]=i.a},"4e87":function(o,e,t){},9042:function(o,e,t){"use strict";var n=t("4e87"),i=t.n(n);i.a},c8cb:function(o,e,t){"use strict";(function(o,e){var n=t("47a9");t("56e3");n(t("3240"));var i=n(t("d6ac"));o.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},d6ac:function(o,e,t){"use strict";t.r(e);var n=t("d8b8"),i=t("2a51");for(var c in i)["default"].indexOf(c)<0&&function(o){t.d(e,o,(function(){return i[o]}))}(c);t("9042");var a=t("828b"),r=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"3d37b403",null,!1,n["a"],void 0);e["default"]=r.exports},d8b8:function(o,e,t){"use strict";t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){}));var n=function(){var o=this,e=o.$createElement;o._self._c;o._isMounted||(o.e0=function(e){o.isMore=!1},o.e1=function(e){e.stopPropagation(),o.isMore=!o.isMore},o.e2=function(e){return o.$refs["GoodsServe"].show()},o.e3=function(e){return o.$refs["GoodsCoupon"].show()},o.e4=function(e){return o.$refs["GoodsAttr"].show(1)},o.e5=function(e){return o.$refs["GoodsAttr"].show(2)},o.e6=function(e){return o.$refs["GoodsAttr"].show(3)})},i=[]}},[["c8cb","common/runtime","common/vendor"]]]);