(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4177998a"],{"7c88":function(t,e,n){var o={"./pc/Share":"93d4"};function i(t){var e=c(t);return n(e)}function c(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=c,t.exports=i,i.id="7c88"},"93d4":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"box"},[n("div",{staticClass:"tit"},[t._v("分享至")]),n("div",{staticClass:"list"},[t._m(0),n("div",{staticClass:"item qq",on:{click:t.qq}}),n("div",{staticClass:"item link copy-btn",attrs:{"data-clipboard-text":t.url},on:{click:t.clipboardSuccess}})])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item wechat"},[n("div",{staticClass:"qrcode"},[n("div",{attrs:{id:"qrcode"}})])])}],c=(n("a15b"),n("d044")),s=n.n(c),r=n("b311"),a=n.n(r),u={name:"share",data:function(){return{query:"",show_qrcode:!1,url:""}},components:{},computed:{},watch:{$route:function(){this.setUrl()}},methods:{setUrl:function(){this.url=window.location.href},qq:function(){var t={url:this.url,showcount:"1",desc:"腾讯Techo Park开发者大会",summary:"腾讯Techo开发者大会是由腾讯发起的面向全球开发者和技术爱好者的年度盛会，作为一个专注于前沿技术研讨的非商业大会",title:"腾讯Techo Park开发者大会",site:"腾讯Techo Park开发者大会",style:"203",width:98,height:22},e=[];for(var n in t)e.push(n+"="+encodeURIComponent(t[n]||""));window.open("https://connect.qq.com/widget/shareqq/index.html?"+e.join("&"),"_blank","top="+(document.documentElement.clientHeight-500)/2+",left="+(document.documentElement.clientWidth-800)/2+",width=800,height=500,menubar=no,toolbar=no,status=no,scrollbars=yes"),this.report.event("CampaignShare")},clipboardSuccess:function(){var t=this,e=new a.a(".copy-btn");e.on("success",(function(n){t.$toast.success("复制成功"),e.destroy()})),this.report.event("CampaignShare")},qrcode:function(){new s.a("qrcode",{width:300,height:300,text:this.url,colorDark:"#000",colorLight:"#fff"})}},mounted:function(){this.query=this.$route.query,this.setUrl(),this.qrcode()}},d=u,l=(n("b1f4"),n("2877")),h=Object(l["a"])(d,o,i,!1,null,"3011723e",null);e["default"]=h.exports},b1f4:function(t,e,n){"use strict";var o=n("f93d"),i=n.n(o);i.a},f93d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4177998a.5bdbd2b7.js.map