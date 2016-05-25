require=function e(t,r,n){function a(i,c){if(!r[i]){if(!t[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var s=r[i]={exports:{}};t[i][0].call(s.exports,function(e){var r=t[i][1][e];return a(r?r:e)},s,s.exports,e,t,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}({1:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(){n(this,e)}return a(e,[{key:"handle",value:function(){}}]),e}();r["default"]=o},{}],2:[function(e,t,r){"use strict";t.exports={enviroment:"test"}},{}],3:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=e("./handler/IndexHandler"),c=n(i),u=e("./handler/CardHandler"),l=n(u),s={IndexHandler:c["default"],cardHandler:l["default"]},d={},f=function(){function e(){a(this,e)}return o(e,null,[{key:"create",value:function(e){return d[e]?d[e]:s[e]?(d[e]=new s[e],d[e]):null}}]),e}();r["default"]=f},{"./handler/CardHandler":4,"./handler/IndexHandler":5}],4:[function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var i=t[a](o),c=i.value}catch(u){return void r(u)}return i.done?void e(c):Promise.resolve(c).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(){return(document.width||window.innerWidth)<=767}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{!n&&c["return"]&&c["return"]()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=e("../../common/Handler"),p=a(f),v=e("common"),y=e("template"),h=n(y),m=0;$.extend($,{data:function(e,t,r){return e.data(r)}});var x=function(e){function t(){return i(this,t),c(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),d(t,[{key:"rendCard",value:function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function r(){var e,t,n,a,o,i,c,u,l,d=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e=v.HashHandler.get("i"),this.cardOptions){r.next=10;break}return r.next=4,v.Ajax.get("/res/json/cardsOptions.json");case 4:t=r.sent,n=s(t,2),a=n[0],o=n[1],a&&(alert("请检查您的网络"),o=[]),this.cardOptions=o;case 10:this.cardOptions[e]||(this.cardOptions[e]=[]),m=this.cardOptions[e].length,i="",c="",this.cardOptions[e].forEach(function(e,t){i+=t?v.Util.template(h.card,v.Util.extend({title:"",imgSrc:"",articleTitle:"",texts:[],cardBGColor:"",titleBGColor:"blue",indicateText:"简介",indicateColor:"black",readMoreColor:"black",cardBorderColor:"transparent"},e,{index:t})):v.Util.template(h.firstCard,v.Util.extend({title:"",date:"",videoSrc:"",titleBGColor:"blue",cardBGColor:"",introduction:"",indicateText:"简介",indicateColor:"black",cardBorderColor:"transparent",cardIndex:v.HashHandler.get("i"),poster:""},e,{index:t})),c+=v.Util.template(h.dot,{index:t})}),u=document.createElement("div"),l=document.createElement("div"),u.innerHTML=i,l.innerHTML=c,this.container.querySelector("#cardContainer").innerHTML='<div id="cardBox"></div>',this.container.querySelector(".nav").innerHTML="",Array.prototype.forEach.call(u.querySelectorAll(".card"),function(e){d.container.querySelector("#cardBox").appendChild(e)}),v.HashHandler.set("scrollIndex",0),this.container.querySelector(".nav").appendChild(l),Array.prototype.forEach.call(l.querySelectorAll(".dot"),function(e,t){0===t&&v.Util.addClass(e,"select")});case 25:case"end":return r.stop()}},r,this)}));return e}()},{key:"bindImg",value:function(){$("img",$(this.container)).on("click",function(){var e=$(this).attr("src"),t=document.createElement("div"),r=document.createElement("img");r.src=e;var n=void 0,a=void 0;l()?(n={width:"100%",pointerEvents:"initial"},a={top:0,bottom:0,position:"fixed",right:0,left:0,zIndex:1300,paddingTop:"40%",backgroundColor:"rgba(0, 0, 0, 1)"}):(n={height:"50%",pointerEvents:"initial"},a={top:0,bottom:0,position:"fixed",right:0,left:0,zIndex:1300,paddingTop:"20%",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 1)"});for(var o in n)r.style[o]=n[o];t.appendChild(r);for(var i in a)t.style[i]=a[i];r.onclick=function(e){return e.stopPropagation()},t.onclick=function(e){return t.parentNode.removeChild(t)},document.body.appendChild(t)})}},{key:"init",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function r(e){var t,n,a,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,this.container.querySelector("#cardContainer").style.display="block",e.next=4,this.rendCard();case 4:try{$("#cardBox").owlCarousel({afterMove:function(){var e=void 0,t=0;$("#cards .owl-page").each(function(){$(this).hasClass("active")?(e=t,$("#cards .dot").removeClass("select"),$('#cards .dot[data-index="'+e+'"]').addClass("select")):t++})}})}catch(r){console.log("carousel",r.message)}$("#cards .owl-pagination").css("display","none"),$("#cardBox .card").css("margin-top","10px"),$("#cardBox .card").css("height",.9*($(window).height()-56)+"px"),n=/(^|\s)card(\s|$)/,a=/(^|\s)up(\s|$)/,Array.prototype.forEach.call(t.container.querySelectorAll("button"),function(e){e.onclick=function(){for(var t=null;;)if(t=(t||e).parentElement,n.test(t.className)||"html"===t.nodeName.toLowerCase())break;a.test(t.className)?(v.Util.addClass(t,"down"),e.innerText="阅读全文",t.querySelector(".article").style.overflowY="hidden",o(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Util.delay(800);case 2:v.Util.removeClass(t,"down up");case 3:case"end":return e.stop()}},r,i)}))()):(v.Util.addClass(t,"up"),t.querySelector(".article").style.overflowY="auto",e.innerText="返回摘要")}}),t.setCard(),document.querySelector("nav svg").onclick=function(){o(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=1e3,$("#cardContainer").animate({opacity:0,transform:"translateX("+$(window).width()+"px)"},t/3),e.next=4,v.Util.delay(t);case 4:cardContainer.style.display="none",window.router.turnTo("index");case 6:case"end":return e.stop()}},e,this)}))()},$("#cardContainer").animate({opacity:1,transform:"translateX(0px)"},500,"ease-in"),this.bindImg();case 15:case"end":return e.stop()}},r,this)}));return e}()},{key:"setCard",value:function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v.Util.addClass(this.container.querySelector('.card[data-index="0"]'),"active card-in-mobile"),v.Util.addClass(this.container.querySelector("#cardContainer"),"active"),e.next=4,v.Util.delay(500);case 4:v.Util.removeClass(this.container.querySelectorAll(".card"),"card-in-mobile"),v.Util.removeClass(this.container.querySelector("#cardContainer"),"active");case 6:case"end":return e.stop()}},r,this)}));return e}()},{key:"pcInit",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function r(e){var t,n=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=this,t.container=document.querySelector("#"+e),r.next=4,this.rendCard();case 4:v.Util.addClass(this.container.querySelector(".card"),"active"),this.container.onmousewheel=function(){var e=o(regeneratorRuntime.mark(function t(e){var r,a,o,i,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.container.querySelector(".card.unactive")&&!n.container.querySelector(".card.unactive-2")){t.next=2;break}return t.abrupt("return");case 2:if("block"===n.container.style.display){t.next=4;break}return t.abrupt("return");case 4:if(r=parseInt(n.container.querySelector(".dot.select").data("index")),!(e.deltaY>0)){t.next=20;break}if(a=n.container.querySelector('.card[data-index="'+(r+1)+'"]')){t.next=9;break}return t.abrupt("return");case 9:return v.Util.removeClass(n.container.querySelector(".dot.select"),"select"),v.Util.addClass(n.container.querySelector('.dot[data-index="'+(r+1)+'"]'),"select"),o=n.container.querySelector('.card[data-index="'+r+'"]'),v.Util.addClass(o,"unactive"),v.Util.removeClass(o,"active active-2"),v.Util.addClass(a,"active"),t.next=17,v.Util.delay(1e3);case 17:v.Util.removeClass(o,"active unactive active-2 unactive-2"),t.next=33;break;case 20:if(!(e.deltaY<0)){t.next=33;break}if(i=n.container.querySelector('.card[data-index="'+(r-1)+'"]')){t.next=24;break}return t.abrupt("return");case 24:return v.Util.removeClass(n.container.querySelector(".dot.select"),"select"),v.Util.addClass(n.container.querySelector('.dot[data-index="'+(r-1)+'"]'),"select"),c=n.container.querySelector('.card[data-index="'+r+'"]'),v.Util.addClass(c,"unactive-2"),v.Util.removeClass(c,"active active-2"),v.Util.addClass(i,"active-2"),t.next=32,v.Util.delay(1e3);case 32:v.Util.removeClass(c,"active unactive active-2 unactive-2");case 33:case"end":return t.stop()}},t,n)}));return function(t){return e.apply(this,arguments)}}(),Array.prototype.forEach.call(this.container.querySelectorAll(".card"),function(e){e.onmousewheel=function(t){v.Util.hasClass(e,"up")&&t.stopPropagation()}}),Array.prototype.forEach.call(this.container.querySelectorAll(".dot"),function(e){e.onclick=o(regeneratorRuntime.mark(function a(){var t,r,o,i,c;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!v.Util.hasClass(e,"select")){a.next=2;break}return a.abrupt("return");case 2:if(!n.container.querySelector(".card.unactive")&&!n.container.querySelector(".card.unactive-2")){a.next=4;break}return a.abrupt("return");case 4:if(t=e.data("index"),r=n.container.querySelector('.card[data-index="'+t+'"]'),!r){a.next=28;break}if(v.Util.removeClass(n.container.querySelectorAll(".dot.select"),"select"),v.Util.addClass(e,"select"),o=n.container.querySelector(".card.active"),o||(o=n.container.querySelector(".card.active-2")),i=parseInt(o.data("index")),c=parseInt(r.data("index")),!(c>i)){a.next=22;break}return v.Util.addClass(o,"unactive"),v.Util.removeClass(o,"active active-2"),v.Util.addClass(r,"active"),a.next=19,v.Util.delay(1e3);case 19:v.Util.removeClass(o,"active unactive active-2 unactive-2"),a.next=28;break;case 22:return v.Util.addClass(o,"unactive-2"),v.Util.removeClass(o,"active active-2"),v.Util.addClass(r,"active-2"),a.next=27,v.Util.delay(1e3);case 27:v.Util.removeClass(o,"active unactive active-2 unactive-2");case 28:case"end":return a.stop()}},a,n)}));var t=document.createElement("div");t.className="tips";var r=n.container.querySelector('.card[data-index="'+e.data("index")+'"]');t.innerText=r.querySelector("h2").innerText,e.appendChild(t)}),Array.prototype.forEach.call(this.container.querySelectorAll(".btn-area button"),function(e){var t=!1;e.onclick=o(regeneratorRuntime.mark(function r(){var a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:a=e.parentElement;case 3:if(v.Util.hasClass(a,"card")){r.next=10;break}if("html"!==a.tagName.toLowerCase()){r.next=7;break}return a=null,r.abrupt("return");case 7:a=a.parentElement,r.next=3;break;case 10:if(!v.Util.hasClass(a,"up")){r.next=20;break}return v.Util.addClass(a,"down"),e.innerText="阅读全文",t=!0,r.next=16,v.Util.delay(500);case 16:t=!1,v.Util.removeClass(a,"up down"),r.next=26;break;case 20:return v.Util.addClass(a,"up"),e.innerText="返回摘要",t=!0,r.next=25,v.Util.delay(500);case 25:t=!1;case 26:case"end":return r.stop()}},r,n)}))}),document.querySelector("nav svg").onclick=o(regeneratorRuntime.mark(function a(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.container.querySelector(".card.active"),e||(e=n.container.querySelector(".card.active-2")),v.Util.addClass(e,"unactive-2"),v.Util.removeClass(e,"active active-2"),t.next=6,v.Util.delay(800);case 6:window.router.turnTo("index");case 7:case"end":return t.stop()}},a,n)})),this.bindImg();case 11:case"end":return r.stop()}},r,this)}));return e}()},{key:"handle",value:function(e){this.container=document.querySelector("#"+e),document.querySelector("#cards").style.backgroundColor=v.HashHandler.get("color"),l()?this.init(e):this.pcInit(e),$("nav svg").css("display","block")}}]),t}(p["default"]);r["default"]=x},{"../../common/Handler":1,common:void 0,template:void 0}],5:[function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var i=t[a](o),c=i.value}catch(u){return void r(u)}return i.done?void e(c):Promise.resolve(c).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(){return(document.width||window.innerWidth)<=767}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{!n&&c["return"]&&c["return"]()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=e("../../common/Handler"),p=a(f),v=e("common"),y=e("template"),h=n(y),m=!0,x=null,b=function(e){function t(){return i(this,t),c(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),d(t,[{key:"init",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function r(e){var t,n,a,i,c,u,d,f,p=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v.Ajax.get("/res/json/indexSectionOptions.json");case 2:t=r.sent,n=s(t,2),a=n[0],i=n[1],a&&(alert("请检查您的网络"),i=[]),this.container=document.querySelector("#"+e),window.innerWidth>767&&(this.container.querySelector("#container").style.height=window.innerHeight-56+"px"),c=window.onresize,window.onresize=function(){c(),l()||(p.container.querySelector("#container").style.height=window.innerHeight-56+"px")},u="",i.forEach(function(e,t){u+=v.Util.template(h.indexSection,v.Util.extend({name:"",type:"",year:"",src:"",startSrc:"",endSrc:"",href:"",backgroundColor:""},e,{index:t}))}),this.container.querySelector("#container").innerHTML=u,d=this.container.querySelectorAll("a"),f=this.container,Array.prototype.forEach.call(d,function(e){var t=e.querySelector("img");v.Util.preload(t,function(){t.src=t.data("preload")}),l()||(v.Util.preload(t,t.data("imgStart"),function(){}),v.Util.preload(t,t.data("imgEnd"),function(){}));var r=1;e.onmouseover=function(n){var a=n.target,o=n.relatedTarget;if(a==e){for(;o;)if(o=o.parentNode,o==e)return;l()||(r=1,v.Util.preload(t,t.data("imgStart"),function(){r&&t.data("imgStart")&&(t.src=t.data("imgStart"))}))}},e.onmouseout=function(n){var a=n.target,o=n.relatedTarget;if(a==e){for(;o;)if(o=o.parentNode,o==e)return;l()||(r=0,v.Util.preload(t,t.data("imgEnd"),function(){r||t.data("imgEnd")&&(t.src=t.data("imgEnd"))}))}},e.onclick=function(){var e=this;v.HashHandler.set("i",this.data("index")),v.HashHandler.set("color",e.style.backgroundColor),document.body.style.backgroundColor=e.style.backgroundColor,x=document.body.scrollTop,Array.prototype.forEach.call(f.querySelectorAll("a"),function(e){e.id=""}),o(regeneratorRuntime.mark(function t(){var r,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.id="selected",v.Util.addClass(e,"fade-out"),r=1,n="active-top",a="active-bottom",l()||(n="active-left",a="active-right"),Array.prototype.forEach.call(d,function(t){t!==e?r?v.Util.addClass(t,""+n):v.Util.addClass(t,""+a):r=0}),t.next=9,v.Util.delay(500);case 9:window.router.turnTo("cards");case 10:case"end":return t.stop()}},t,this)}))()}});case 17:case"end":return r.stop()}},r,this)}));return e}()},{key:"resume",value:function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function r(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,["left","right","top","bottom"].forEach(function(t){v.Util.addClass(e.container.querySelectorAll(".active-"+t),"active-"+t+"-resume")}),v.Util.addClass(e.container.querySelectorAll(".fade-out"),"fade-out-resume"),t.next=5,v.Util.delay(1e3);case 5:v.Util.removeClass(this.container.querySelectorAll("#container>a"),"active-left active-top active-bottom active-right fade-out active-left-resume active-top-resume active-bottom-resume active-right-resume fade-out-resume");case 6:case"end":return t.stop()}},r,this)}));return e}()},{key:"handle",value:function(e){$("#cardContainer").html(""),$("nav svg").css("display",""),m?(this.init(e),m=!1):(document.body.scrollTop=x,this.resume())}}]),t}(p["default"]);r["default"]=b},{"../../common/Handler":1,common:void 0,template:void 0}],main:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var i=t[a](o),c=i.value}catch(u){return void r(u)}return i.done?void e(c):Promise.resolve(c).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}var o=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{!n&&c["return"]&&c["return"]()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=e("common"),c=e("config"),u=(n(c),e("./modules/HandlerFactory")),l=n(u);window.router=new i.Router,router.init({route:[{_:"index",handler:l["default"].create("IndexHandler")},{_:"cards",handler:l["default"].create("cardHandler")}],defaultRoute:l["default"].create("IndexHandler"),filter:function(e){e=e||"index";var t=document.querySelector("#"+e);return Array.prototype.filter.call(document.querySelectorAll(".page"),function(e){return e!==t}).forEach(function(e){e.style.display="none"}),t.style.display="block",e}}).start(),function(){function e(){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark(function r(){var e,t,n,a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.Ajax.get("/res/json/cardsOptions.json");case 2:e=r.sent,t=o(e,2),n=t[0],a=t[1];case 6:case"end":return r.stop()}},r,this)}));return e}()()},{"./modules/HandlerFactory":3,common:void 0,config:2}]},{},["main"]);