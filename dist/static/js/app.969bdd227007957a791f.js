webpackJsonp([8],{"+7FO":function(t,e){},"0iSB":function(t,e,n){n("+7FO");var r=n("VU/8")(n("k2CR"),n("6lh9"),"data-v-109eb102",null);t.exports=r.exports},"1i+K":function(t,e){},"3Q4o":function(t,e,n){"use strict";function r(t){return"standard"===s?t:""+s+t.charAt(0).toUpperCase()+t.substr(1)}e.a=r;var i=document.createElement("div").style,s=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==i[t[e]])return e}()},"5IM0":function(t,e){},"6lh9":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.setProcess}},[n("div",{staticClass:"bar-inner"},[n("div",{ref:"progress",staticClass:"progress"}),t._v(" "),n("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper",on:{touchstart:function(e){e.preventDefault(),t.processTouchstart(e)},touchmove:function(e){e.preventDefault(),t.processTouchmove(e)},touchend:function(e){e.preventDefault(),t.processTouchend(e)}}},[n("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]}},"9cIF":function(t,e,n){"use strict";function r(t){var e={pcachetime:+new Date,songmid:t,g_tk:5381,loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0};return c.a.get("/api/lyric",{params:e}).then(function(t){return s.a.resolve(t.data)})}e.a=r;var i=n("//Fk"),s=n.n(i),a=n("mtWM"),c=n.n(a)},EmhP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("43Vb"),i=n.n(r);e.default={name:"Scroll",props:{click:{click:Boolean,default:!0},data:{type:Array,default:null},listenScroll:{type:Boolean,default:!1},probeType:{type:Number,default:2},pullUp:{type:Boolean,default:!1}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll()})},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(this.scroll=new i.a(this.$refs.wrapper,{click:this.click,probeType:this.probeType}),this.listenScroll&&this.scroll.on("scroll",function(e){t.$emit("scroll",e)}),this.pullUp&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}))},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;this.$nextTick(function(){t.refresh()})}}}},FPLo:function(t,e){},HzVJ:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return l}),n.d(e,"i",function(){return d});var r="SET_SINGER",i="SET_PLAYING_STATE",s="SET_FULL_SCREEN",a="SET_PLAY_LIST",c="SET_SEQUENCE_LIST",o="SET_PLAY_MODE",u="SET_CURRENT_INDEX",l="SET_DISC",d="SET_TOP_LIST"},IcnI:function(t,e,n){"use strict";var r=n("7+uW"),i=n("NYxO"),s=n("mUbh"),a=n("UjVw"),c=n("ukYY"),o=n("lwq5"),u=n("sax8");n.n(u);r.a.use(i.a);e.a=new i.a.Store({actions:s,getters:a,mutations:c.a,state:o.a,strict:!1,plugins:[]})},JkZS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"progress-circle",data:function(){return{dasharray:314}},props:{percent:{type:Number,default:0},radius:{type:Number,default:32}},watch:{},filters:{},methods:{},computed:{dashoffset:function(){return(1-this.percent)*this.dasharray}},created:function(){},mounted:function(){},destroyed:function(){}}},M93x:function(t,e,n){n("o+0/");var r=n("VU/8")(n("xJD8"),n("TDwX"),null,null);t.exports=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("j1ja"),i=(n.n(r),n("7+uW")),s=n("M93x"),a=n.n(s),c=n("YaEn"),o=n("v5o6"),u=n.n(o),l=n("cTzj"),d=n.n(l),h=n("NYxO"),f=n("IcnI"),p=n("cN2K"),m=(n.n(p),n("sVYa")),v=(n.n(m),n("M4fF"));n.n(v);i.a.use(d.a,{loading:n("WeUh")}),i.a.use(h.a),u.a.attach(document.body),i.a.config.productionTip=!1,new i.a({el:"#app",router:c.a,store:f.a,render:function(t){return t(a.a)}})},Nlou:function(t,e){},PbpO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),i=n.n(r),s=n("W/7t"),a=n("NYxO"),c=(n("9cIF"),n("zu6c")),o=n.n(c),u=n("0iSB"),l=n.n(u),d=n("lII2"),h=n.n(d),f=n("EhXH"),p=n.n(f),m=n("3Q4o"),v=n("hhm8"),y=n("xrTZ"),g=(n.n(y),n("OKJt")),_=n.n(g),L=n.i(m.a)("transform"),C=n.i(m.a)("transitionDuration");e.default={name:"player",data:function(){return{songReady:!1,currentTime:0,currentLyric:null,currentLineNum:0,currentShow:"cd",playLyric:"暂无歌词",radius:80}},created:function(){this.touch={}},computed:i()({},n.i(a.b)(["fullScreen","playList","currentSong","playing","currentIndex","mode","sequenceList"]),{bgImg:function(){if(this.currentSong)return this.currentSong.image},bgStyle:function(){return"background-image: url("+this.bgImg+")"},url:function(){return this.currentSong.url},playIcon:function(){return this.playing?"icon-pause":"icon-play"},percent:function(){if(this.currentSong)return this.currentTime/this.currentSong.duration},iconMode:function(){return this.mode===s.a.sequence?"icon-sequence":this.mode===s.a.loop?"icon-loop":"icon-random"}}),methods:i()({},n.i(a.c)({setFullScreen:"SET_FULL_SCREEN",setPlayState:"SET_PLAYING_STATE",setCurrentIndex:"SET_CURRENT_INDEX",setPlayMode:"SET_PLAY_MODE",setPlayList:"SET_PLAY_LIST"}),{changeMode:function(){var t=(this.mode+1)%3;this.setPlayMode(t);var e=null;e=t===s.a.random?n.i(v.a)(this.sequenceList):t==s.a.sequence?this.sequenceList:[this.sequenceList[this.currentIndex]],this.resetCurrentIndex(e),this.setPlayList(e)},resetCurrentIndex:function(t){var e=this,n=t.findIndex(function(t){return t.id==e.currentSong.id});this.setCurrentIndex(n)},back:function(){this.setFullScreen(!1)},open:function(){this.setFullScreen(!0)},togglePlay:function(){this.setPlayState(!this.playing);var t=getComputedStyle(this.$refs.cdWrapPlay).transform,e=getComputedStyle(this.$refs.imageWrap).transform;console.log(t,e),this.playing||(this.$refs.cdWrapPlay.style.transform="none"===t?e:e.concat(" ",t),this.$refs.imageWrap.classList.remove("play")),this.currentLyric&&this.currentLyric.togglePlay()},prev:function(){if(this.songReady){this.mode===s.a.loop&&this.loop(),1===this.playList.length&&this.loop();var t=this.playList.length;this.setPlayState(!1);var e=this.currentIndex-1;e<0&&(e=t-1),this.setCurrentIndex(e),this.setPlayState(!0),this.songReady=!1}},next:function(){if(this.songReady){this.mode===s.a.loop&&this.loop(),1===this.playList.length&&this.loop();var t=this.playList.length;this.setPlayState(!1);var e=this.currentIndex+1;e>=t&&(e=0),this.setCurrentIndex(e),this.setPlayState(!0),this.songReady=!1}},ready:function(){this.songReady=!0},error:function(){var t=this;this.songReady=!0,clearTimeout(this.timer),this.timer=setTimeout(function(){t.next()},1e3)},updatetime:function(t){this.currentTime=t.target.currentTime},formate:function(t){return t|=0,this._pad(t/60|0)+":"+this._pad(t%60)},_pad:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t.toString().length;n<e;)t="0"+t,n++;return t},enter:function(t,e){var n=this._getPosAndScale(),r=n.x,i=n.y,s=n.scale,a={0:{transform:"translate3d("+r+"px, "+i+"px, 0) scale("+s+")"},60:{transform:"translate3d(0, 0, 0) scale(1.1)"},100:{transform:"translate3d(0, 0, 0) scale(1)"}};p.a.registerAnimation({name:"move",animation:a,presets:{duration:400,easing:"linear"}}),p.a.runAnimation(this.$refs.cdWrapper,"move",e)},afterEnter:function(){p.a.unregisterAnimation("move"),this.$refs.cdWrapper.style.animation=""},leave:function(t,e){this.$refs.cdWrapper.style.transition="all 0.4s";var n=this._getPosAndScale(),r=n.x,i=n.y,s=n.scale;this.$refs.cdWrapper.style[L]="translate3d("+r+"px, "+i+"px, 0) scale("+s+")",this.$refs.cdWrapper.addEventListener("transitionend",e)},afterLeave:function(){this.$refs.cdWrapper.style[L]="",this.$refs.cdWrapper.style.transition=""},_getPosAndScale:function(){var t=.8*window.innerWidth,e=40/t;return{x:-(window.innerWidth/2-40),y:window.innerHeight-80-t/2-30,scale:e}},percentChange:function(t){this.$refs.audio.currentTime=this.currentSong.duration*t,this.currentLyric&&this.currentLyric.seek(this.currentSong.duration*t*1e3)},end:function(){this.mode===s.a.loop?this.loop():this.next()},loop:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.currentLyric&&this.currentLyric.seek(0)},getLyric:function(){var t=this;this.currentSong.getLyric().then(function(e){t.currentSong.lyric===e&&(t.currentLyric=new _.a(e,t.handleLylic),t.playing&&t.currentLyric.play())}).catch(function(){t.currentLyric=null,t.playingLyric="",t.currentLineNum=0})},handleLylic:function(t){var e=t.lineNum,n=t.txt;if(this.currentLineNum=e,e>5){var r=this.$refs.lyricLine[e-5];this.$refs.lyricList.scrollToElement(r,1e3)}else this.$refs.lyricList.scrollTo(0,0,1e3);this.playLyric=n},touchStart:function(t){this.touch.init=!0,this.touch.startX=t.touches[0].pageX,this.touch.startY=t.touches[0].pageY},touchMove:function(t){if(this.touch.init){var e=t.touches[0].pageX-this.touch.startX,n=t.touches[0].pageY-this.touch.startY;if(!(Math.abs(e)<Math.abs(n))){var r="cd"===this.currentShow?0:-window.innerWidth,i=Math.min(0,Math.max(-window.innerWidth,r+e));this.touch.percent=Math.abs(i/window.innerWidth),this.$refs.lyricList.$el.style[L]="translate3d("+i+"px, 0, 0)",this.$refs.lyricList.$el.style[C]="0ms",this.$refs.middleL.style.opacity=1-this.touch.percent,this.$refs.middleL.style[C]="0"}}},touchEnd:function(){this.touch.init=!1;var t=void 0,e=void 0;"cd"===this.currentShow?this.touch.percent>.1?(t=-window.innerWidth,this.currentShow="lyric",e=0):t=0:this.touch.percent<.9?(t=0,this.currentShow="cd",e=1):t=-window.innerWidth;this.$refs.lyricList.$el.style[L]="translate3d("+t+"px, 0, 0)",this.$refs.lyricList.$el.style[C]="300ms",this.$refs.middleL.style.opacity=e,this.$refs.middleL.style[C]="300ms"}}),watch:{currentSong:function(t,e){var n=this;t.id&&t.id!==e.id&&(this.currentLyric&&(this.currentLyric.stop(),this.currentTime=0,this.playingLyric="",this.currentLineNum=0),clearTimeout(this.timer),this.timer=setTimeout(function(){n.$refs.audio.play(),n.getLyric()},1e3))},playing:function(t){var e=this;this.$nextTick(function(){var n=e.$refs.audio;t?n.play():n.pause()}),t&&this.$refs.imageWrap.classList.add("play")}},components:{Scroll:o.a,Process:l.a,ProgressCircle:h.a}}},QUqR:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("Music")])])}]}},RGpE:function(t,e,n){n("lXp6");var r=n("VU/8")(n("zXYm"),n("llG8"),"data-v-d6fb162c",null);t.exports=r.exports},RMDe:function(t,e,n){n("FPLo");var r=n("VU/8")(n("pJoQ"),n("QUqR"),"data-v-7cbc2eae",null);t.exports=r.exports},TDwX:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-tab"),t._v(" "),n("keep-alive",[n("router-view")],1),t._v(" "),n("player")],1)},staticRenderFns:[]}},UjVw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"singer",function(){return r}),n.d(e,"playing",function(){return i}),n.d(e,"fullScreen",function(){return s}),n.d(e,"playList",function(){return a}),n.d(e,"sequenceList",function(){return c}),n.d(e,"mode",function(){return o}),n.d(e,"currentIndex",function(){return u}),n.d(e,"currentSong",function(){return l}),n.d(e,"disc",function(){return d}),n.d(e,"topList",function(){return h});var r=function(t){return t.singer},i=function(t){return t.playing},s=function(t){return t.fullScreen},a=function(t){return t.playList},c=function(t){return t.sequenceList},o=function(t){return t.mode},u=function(t){return t.currentIndex},l=function(t){return t.playList[t.currentIndex]||{}},d=function(t){return t.disc},h=function(t){return t.topList}},VuAO:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-progress-circle"},[n("svg",{attrs:{width:t.radius,height:t.radius,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"progress-background",attrs:{cx:t.radius/2,cy:t.radius/2,r:t.radius/2,fill:"transparent"}}),t._v(" "),n("circle",{staticClass:"progress-bar",attrs:{cx:t.radius/2,cy:t.radius/2,r:t.radius/2,fill:"transparent","stroke-dasharray":t.dasharray,"stroke-dashoffset":t.dashoffset}})]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},"W/7t":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={sequence:0,loop:1,random:2}},WeUh:function(t,e,n){t.exports=n.p+"static/img/default.9561f76.jpeg"},YaEn:function(t,e,n){"use strict";var r=n("7+uW"),i=n("/ocq"),s=function(t){n.e(5).then(n.bind(null,"0da8")).then(function(e){t(e)})},a=function(t){n.e(6).then(n.bind(null,"FKKE")).then(function(e){t(e)})},c=function(t){n.e(0).then(n.bind(null,"Vbaa")).then(function(e){t(e)})},o=function(t){n.e(2).then(n.bind(null,"JJZb")).then(function(e){t(e)})},u=function(t){n.e(3).then(n.bind(null,"aZYv")).then(function(e){t(e)})},l=function(t){n.e(1).then(n.bind(null,"6oh/")).then(function(e){t(e)})},d=function(t){n.e(4).then(n.bind(null,"Mfpu")).then(function(e){t(e)})};r.a.use(i.a),e.a=new i.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"recommend",component:d,children:[{path:":id",component:u}]},{path:"/singer",name:"singer",component:s,children:[{path:":id",component:o}]},{path:"/rank",name:"rank",component:a,children:[{path:":id",component:l}]},{path:"/search",name:"search",component:c,children:[{path:":id",component:o}]}]})},cN2K:function(t,e){},eZoJ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.playList.length>0,expression:"playList.length > 0"}],staticClass:"player"},[n("transition",{attrs:{name:"normal"},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[n("div",{staticClass:"background"},[n("img",{attrs:{src:t.bgImg,width:"100%",height:"100%"}})]),t._v(" "),n("div",{staticClass:"top"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("p",{staticClass:"title",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),n("p",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),n("div",{staticClass:"middle",on:{touchstart:function(e){e.preventDefault(),t.touchStart(e)},touchmove:function(e){e.preventDefault(),t.touchMove(e)},touchend:function(e){e.preventDefault(),t.touchEnd(e)}}},[n("div",{ref:"middleL",staticClass:"middle-l"},[n("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[n("div",{ref:"cdWrapPlay",staticClass:"cd"},[n("img",{ref:"imageWrap",staticClass:"image",attrs:{src:t.bgImg}})])]),t._v(" "),n("div",{staticClass:"playing-lyric-wrapper"},[n("div",{staticClass:"playing-lyric"},[n("p",[t._v(t._s(t.playLyric))])])])]),t._v(" "),n("scroll",{ref:"lyricList",staticClass:"middle-r",attrs:{data:t.currentLyric&&t.currentLyric.lines}},[n("div",{staticClass:"lyric-wrapper"},[t.currentLyric?n("div",t._l(t.currentLyric.lines,function(e,r){return n("p",{key:e.id,ref:"lyricLine",refInFor:!0,staticClass:"text",class:{current:t.currentLineNum===r}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.txt)+"\n\t\t\t\t\t\t\t")])})):n("div",[n("p",{staticClass:"text"},[t._v("暂无歌词")])])])])],1),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"dot-wrapper"},[n("span",{staticClass:"dot",class:{active:"cd"===t.currentShow}}),t._v(" "),n("span",{staticClass:"dot",class:{active:"lyric"===t.currentShow}})]),t._v(" "),n("div",{staticClass:"progress-wrapper"},[n("span",{staticClass:"time time-l"},[t._v(t._s(t.formate(t.currentTime)))]),t._v(" "),n("div",{staticClass:"progress-bar-wrapper"},[n("process",{attrs:{percent:t.percent},on:{percentChange:t.percentChange}})],1),t._v(" "),n("span",{staticClass:"time time-r"},[t._v(t._s(t.formate(t.currentSong.duration)))])]),t._v(" "),n("div",{staticClass:"operators"},[n("div",{staticClass:"icon i-left",on:{click:t.changeMode}},[n("i",{class:t.iconMode})]),t._v(" "),n("div",{staticClass:"icon i-left",on:{click:t.prev}},[n("i",{staticClass:"icon-prev"})]),t._v(" "),n("div",{staticClass:"icon i-center",on:{click:t.togglePlay}},[n("i",{class:t.playIcon})]),t._v(" "),n("div",{staticClass:"icon i-right",on:{click:t.next}},[n("i",{staticClass:"icon-next"})]),t._v(" "),n("div",{staticClass:"icon i-right"},[n("i",{staticClass:"icon icon-not-favorite"})])])])])]),t._v(" "),n("transition",{attrs:{name:"min"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:t.open}},[n("div",{staticClass:"background"}),t._v(" "),n("div",{staticClass:"icon"},[n("img",{attrs:{src:t.bgImg}})]),t._v(" "),n("div",{staticClass:"text"},[n("p",{staticClass:"name",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),n("div",{staticClass:"control"},[n("progress-circle",{attrs:{percent:t.percent,radius:t.radius}},[n("i",{ref:"playMin",staticClass:"icon-mini",class:t.playing?"icon-pause-mini":"icon-play-mini",on:{click:function(e){e.stopPropagation(),t.togglePlay(e)}}})])],1),t._v(" "),n("div",{staticClass:"control"},[n("i",{staticClass:"icon-playlist"})])])]),t._v(" "),n("audio",{ref:"audio",attrs:{src:t.url},on:{timeupdate:t.updatetime,error:t.error,canplay:t.ready,ended:t.end}})],1)},staticRenderFns:[]}},hhm8:function(t,e,n){"use strict";function r(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function i(t){for(var e=t.slice(),n=0;n<e.length;n++){var i=r(0,n),s=e[n];e[n]=e[i],e[i]=s}return e}e.a=i},k2CR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("3Q4o"),i=n.i(r.a)("transform");e.default={name:"process",props:{percent:{type:Number,default:0}},created:function(){this.touch={}},methods:{processTouchstart:function(t){this.touch.initiate=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},processTouchmove:function(t){if(this.touch.initiate){var e=t.touches[0].pageX-this.touch.startX,n=Math.min(this.$refs.progressBar.clientWidth-16,Math.max(0,this.touch.left+e));this.$refs.progress.style.width=n+"px",this.$refs.progressBtn.style[i]="translate3d("+n+"px, 0, 0)"}},processTouchend:function(t){this.touch.initiate=!1;var e=this.$refs.progressBar.clientWidth-16,n=this.$refs.progress.clientWidth/e;this.$emit("percentChange",n)},setProcess:function(t){var e=t.offsetX;this.$refs.progress.style.width=e+"px",this.$refs.progressBtn.style[i]="translate3d("+e+"px,0,0)";var n=this.$refs.progressBar.clientWidth-16,r=this.$refs.progress.clientWidth/n;this.$emit("percentChange",r)}},watch:{percent:function(t){if(t>0&&!this.touch.initiate){var e=this.$refs.progressBar.clientWidth-16,n=t*e;this.$refs.progress.style.width=n+"px",this.$refs.progressBtn.style[i]="translate3d("+n+"px, 0, 0)"}}}}},lII2:function(t,e,n){n("1i+K");var r=n("VU/8")(n("JkZS"),n("VuAO"),"data-v-7801f43a",null);t.exports=r.exports},lXp6:function(t,e){},llG8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"recommend"}}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"singer"}}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"rank"}}},[n("span",{staticClass:"tab-link"},[t._v("排行\n\t\t")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"search"}}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}},lwq5:function(t,e,n){"use strict";var r=n("W/7t"),i={singer:{},playing:!1,fullScreen:!1,playList:[],sequenceList:[],mode:r.a.sequence,currentIndex:-1,disc:{},topList:{}};e.a=i},mUbh:function(t,e,n){"use strict";function r(t,e){return t.findIndex(function(t){return t.id===e.id})}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"selectPlay",function(){return c}),n.d(e,"randomPlay",function(){return o}),n.d(e,"insertSong",function(){return u});var i=n("HzVJ"),s=n("W/7t"),a=n("hhm8"),c=function(t,e){var n=t.commit,r=(t.state,e.list),s=e.index;n(i.e,r),n(i.d,r),n(i.g,s),n(i.c,!0),n(i.b,!0)},o=function(t,e){var r=t.commit,c=e.list;r(i.f,s.a.random),r(i.e,c);var o=n.i(a.a)(c);r(i.d,o),r(i.g,0),r(i.b,!0),r(i.c,!0)},u=function(t,e){var n=t.commit,s=t.state,a=s.playList.slice(),c=s.sequenceList.slice(),o=s.currentIndex,u=a[o],l=r(a,e);o++,a.splice(o,0,e),l>-1&&(o>l?(a.splice(l,1),o--):a.splice(l+1,1));var d=r(c,u)+1,h=r(c,e);c.splice(d,0,e),h>-1&&(d>h?c.splice(h,1):c.splice(h+1,1)),n(i.d,a),n(i.e,c),n(i.g,o),n(i.c,!0),n(i.b,!0)}},"o+0/":function(t,e){},pJoQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MHeader"}},ukYY:function(t,e,n){"use strict";var r,i=n("bOdI"),s=n.n(i),a=n("HzVJ"),c=(r={},s()(r,a.a,function(t,e){t.singer=e}),s()(r,a.b,function(t,e){t.playing=e}),s()(r,a.c,function(t,e){t.fullScreen=e}),s()(r,a.d,function(t,e){t.playList=e}),s()(r,a.e,function(t,e){t.sequenceList=e}),s()(r,a.f,function(t,e){t.mode=e}),s()(r,a.g,function(t,e){t.currentIndex=e}),s()(r,a.h,function(t,e){t.disc=e}),s()(r,a.i,function(t,e){t.topList=e}),r);e.a=c},vvl1:function(t,e,n){n("Nlou");var r=n("VU/8")(n("PbpO"),n("eZoJ"),"data-v-fb5d8a3a",null);t.exports=r.exports},xJD8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("RMDe"),i=n.n(r),s=n("RGpE"),a=n.n(s),c=n("vvl1"),o=n.n(c);e.default={name:"app",components:{MHeader:i.a,MTab:a.a,Player:o.a}}},yEOE:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper",staticClass:"scroll-wrap"},[t._t("default")],2)},staticRenderFns:[]}},zXYm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MTab"}},zu6c:function(t,e,n){n("5IM0");var r=n("VU/8")(n("EmhP"),n("yEOE"),"data-v-48ab335a",null);t.exports=r.exports}},["NHnr"]);