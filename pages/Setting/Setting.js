(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Setting/Setting"],{"0d76":function(e,n,t){"use strict";var a=t("9ca1"),o=t.n(a);o.a},"0ede":function(e,n,t){"use strict";t.r(n);var a=t("7294"),o=t("c84e");for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("0d76");var r=t("828b"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"d07273ea",null,!1,a["a"],void 0);n["default"]=c.exports},7294:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var a={DialogBox:function(){return t.e("components/DialogBox/DialogBox").then(t.bind(null,"ce77"))}},o=function(){var e=this.$createElement;this._self._c},i=[]},"8fb2":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{}},methods:{onUserInfo:function(){e.navigateTo({url:"/pages/Information/Information"})},onAddress:function(){e.navigateTo({url:"/pages/AddressList/AddressList"})},onSetting:function(n){switch(n){case"account":e.navigateTo({url:"/pages/AccountSecurity/AccountSecurity"});break;case"pay":e.navigateTo({url:"/pages/PaymentPassword/PaymentPassword"});break;case"invoice":e.navigateTo({url:"/pages/InvoiceList/InvoiceList"});break;case"vip":e.navigateTo({url:"/pages/MyMemberInterest/MyMemberInterest"});break;case"common":e.navigateTo({url:"/pages/SettingCommon/SettingCommon"});break;case"about":e.navigateTo({url:"/pages/AboutUs/AboutUs"});break}},onQuitLogin:function(){this.$refs["DialogBox"].confirm({title:"提示",content:"是否要退出登录?",DialogType:"inquiry",animation:0}).then((function(){e.navigateBack()}))}}};n.default=t}).call(this,t("df3c")["default"])},"9ca1":function(e,n,t){},b5e8:function(e,n,t){"use strict";(function(e,n){var a=t("47a9");t("56e3");a(t("3240"));var o=a(t("0ede"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},c84e:function(e,n,t){"use strict";t.r(n);var a=t("8fb2"),o=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=o.a}},[["b5e8","common/runtime","common/vendor"]]]);