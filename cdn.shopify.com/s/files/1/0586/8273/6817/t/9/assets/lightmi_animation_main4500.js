(this["webpackJsonphue-interactive-visualizations"]=this["webpackJsonphue-interactive-visualizations"]||[]).push([[0],{119:function(u,f,o){u.exports={actionText:"lightmi_app_actionText",attention:"lightmi_app_attention","grow-shrink":"lightmi_app_grow-shrink"}},120:function(u,f,o){u.exports={muteButton:"lightmi_app_muteButton",muteButtonDisabled:"lightmi_app_muteButton_muteButtonDisabled"}},121:function(u,f,o){u.exports={playButton:"lightmi_app_playButton",playButtonDisabled:"lightmi_app_playButton_playButtonDisabled"}},122:function(u,f,o){u.exports={switch:"lightmi_app_switch",slider:"lightmi_app_slider"}},18:function(u,f,o){u.exports={app:"lightmi_app",background:"lightmi_app_background",foreground:"lightmi_app_foreground",foregroundInner:"lightmi_app_foregroundInner",selector:"lightmi_app_selector",layout:"lightmi_app_layout",textVisible:"lightmi_app_textVisible",textContainer:"lightmi_app_textContainer",textHidden:"lightmi_app_textHidden",controlVisible:"lightmi_app_controlVisible",interactionContainer:"lightmi_app_interactionContainer",callOutBox:"lightmi_app_callOutBox",callOut:"lightmi_app_callOut",fadeOutCallOut:"lightmi_app_fadeOutCallOut lightmi_app_callOut",callOutAbs:"lightmi_app_callOutAbs lightmi_app_callOut",fadeOutCallOutAbs:"lightmi_app_fadeOutCallOutAbs lightmi_app_callOut",isFallBack:"lightmi_app__isFallBack"}},188:function(u,f,o){u.exports={actionText:"lightmi_app_actionText_2"}},189:function(u,f,o){u.exports={backgroundImage:"lightmi_app_backgroundImage"}},190:function(u,f,o){u.exports={debugInfo:"lightmi_app_debugInfo"}},193:function(u,f,o){u.exports=o(392)},388:function(u,f,o){},389:function(u,f,o){},390:function(u,f,o){},391:function(u,f,o){"use strict";o.r(f);var m=o(4),h=o(5),w=o(16),S=o(15),P=(o(390),o(0)),r=o.n(P),I=o(188),L=o.n(I),_=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this,t)).interval=void 0,i.videoElement=null,i.canPlayThroughListener=null,i.state={preloaded:!!t.videoSrc,videoSrc:t.videoSrc},i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.removeAllEventListeners()}},{key:"update",value:function(){var t=this;this.props.videoSrc!==this.state.videoSrc&&(this.props.videoSrc?(this.setState({preloaded:!1,videoSrc:this.props.videoSrc}),this.preloadVideoSrc(this.props.videoSrc,function(i){i===t.props.videoSrc&&t.setState({preloaded:!0,videoSrc:t.props.videoSrc})})):this.setState({preloaded:!0,videoSrc:null}))}},{key:"preloadVideoSrc",value:function(t,i){var s=this,l=!1;this.removeAllEventListeners();var v=document.createElement("video");v.addEventListener(this.props.event,function(){l||(l=!0,i(t))}),this.interval=window.setInterval(function(){v.readyState>=3&&(window.clearInterval(s.interval),l||(l=!0,i(t)))},500),v.src=t,v.load()}},{key:"removeAllEventListeners",value:function(){this.videoElement&&this.canPlayThroughListener&&this.videoElement.removeEventListener(this.props.event,this.canPlayThroughListener),this.interval&&window.clearInterval(this.interval)}},{key:"render",value:function(){var t=this.state.videoSrc===this.props.videoSrc&&this.state.preloaded;return this.props.render(t)}}]),a}(r.a.Component),j=o(23),re=o(40),k=o.n(re),oe=function(e){return function(n,a,t){return r.a.createElement(r.a.Fragment,null,n.split(a).map(function(i,s){return s%2?t(i,s):i}))}(e,"**",function(n,a){return r.a.createElement("b",{key:a},n)})},se=function(e){var n=e.input;return r.a.createElement(r.a.Fragment,null,oe(n))},ce=o(192),T=function(e){return Object.entries(e).reduce(function(n,a){var t=Object(ce.a)(a,2),i=t[0];return t[1]?n.concat(i):n},[]).join(" ")},H=function(e){var n,a,t,i=e.title,s=e.longText,l=e.useIosCssAnimationFix,v=l!==void 0&&l,d=e.shortText,p=e.longTextStyle,y=e.titleStyle;return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("h2",{style:y,className:T((n={},Object(j.a)(n,k.a.title,!0),Object(j.a)(n,k.a.fixIOSIssue,v),n))},r.a.createElement(se,{input:i})),s&&r.a.createElement("p",{style:p,className:T((a={},Object(j.a)(a,k.a.text,!0),Object(j.a)(a,k.a.longText,!0),Object(j.a)(a,k.a.fixIOSIssue,v),a))},s),d&&r.a.createElement("p",{className:T((t={},Object(j.a)(t,k.a.text,!0),Object(j.a)(t,k.a.shortText,!0),Object(j.a)(t,k.a.fixIOSIssue,v),t))},d))},le=o(119),X=o.n(le),ue=function(e){var n,a=e.className,t=a===void 0?"":a,i=e.children,s=e.attractAttention,l=s!==void 0&&s;return r.a.createElement("h2",{className:T((n={},Object(j.a)(n,X.a.actionText,!0),Object(j.a)(n,t,!!t),Object(j.a)(n,X.a.attention,l),n))},i)},de=o(120),Y=o.n(de);function B(){return(B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function pe(e,n){if(e==null)return{};var a,t,i=function(l,v){if(l==null)return{};var d,p,y={},b=Object.keys(l);for(p=0;p<b.length;p++)d=b[p],v.indexOf(d)>=0||(y[d]=l[d]);return y}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var he=r.a.createElement("path",{d:"M3.66 6.79l2.383-2.11v3.779zm4.023-5.192c.37-.1.53.141.456.485L1.065 8.545c-.27-.068-.373-.209-.3-.428L2.52 6.49S.98 6.095 1.022 5.096c.043-.998 1.54-1.344 1.54-1.344v1.344h.642V3.71L6.043 1.7v1.283z"}),me=function(e){var n=e.svgRef,a=e.title,t=pe(e,["svgRef","title"]);return r.a.createElement("svg",B({viewBox:"0 0 10.583 10.583",height:40,width:40,ref:n},t),a?r.a.createElement("title",null,a):null,he)},fe=r.a.forwardRef(function(e,n){return r.a.createElement(me,B({svgRef:n},e))});o.p;function R(){return(R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function ve(e,n){if(e==null)return{};var a,t,i=function(l,v){if(l==null)return{};var d,p,y={},b=Object.keys(l);for(p=0;p<b.length;p++)d=b[p],v.indexOf(d)>=0||(y[d]=l[d]);return y}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var ge=r.a.createElement("path",{d:"M6.043 1.698L3.233 3.71v1.387h-.685V3.752s-1.484.346-1.526 1.344c.008.831.98 1.263 1.526 1.374h.685c.92.687 1.87 1.33 2.81 1.99zm2.332 1.326c-.136-.004-.24.057-.223.357 1.124 1.155.823 2.325 0 3.5.023.17-.008.366.367.359.9-1.36 1.438-2.735 0-4.196a.937.937 0 00-.144-.02zm-.882.876c-.13.01-.2.144-.18.266.398.605.322 1.187 0 1.754-.063.303.286.289.327.243.418-.695.641-1.418 0-2.226a.268.268 0 00-.147-.037z"}),ye=function(e){var n=e.svgRef,a=e.title,t=ve(e,["svgRef","title"]);return r.a.createElement("svg",R({viewBox:"0 0 10.583 10.583",height:40,width:40,ref:n},t),a?r.a.createElement("title",null,a):null,ge)},be=r.a.forwardRef(function(e,n){return r.a.createElement(ye,R({svgRef:n},e))}),Oe=(o.p,function(e){return[Y.a.muteButton,!e.enabled&&Y.a.muteButtonDisabled].filter(Boolean).join(" ")}),we=function(e){var n=e.muted,a=e.onToggle,t=e.enabled,i={muted:n,onToggle:a,enabled:t===void 0||t};return r.a.createElement("div",{className:Oe(i),onClick:function(){a()}},n?r.a.createElement(fe,null):r.a.createElement(be,null))},Se=o(121),J=o.n(Se);function V(){return(V=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function je(e,n){if(e==null)return{};var a,t,i=function(l,v){if(l==null)return{};var d,p,y={},b=Object.keys(l);for(p=0;p<b.length;p++)d=b[p],v.indexOf(d)>=0||(y[d]=l[d]);return y}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var Ee=r.a.createElement("path",{d:"M7.98 1.31c-.11.001-1.027.01-1.11.009-.224-.002-.195.255-.195.255V8.15c.002.066-.08.264.194.26.131-.002 1.112 0 1.112 0 .267.001.229-.26.229-.26V1.574s.064-.263-.23-.263zm-3.52 0c-.111.001-1.028.01-1.112.009-.224-.002-.194.255-.194.255V8.15c.002.066-.08.264.194.26.131-.002 1.112 0 1.112 0 .267.001.229-.26.229-.26V1.574s.064-.263-.23-.263z"}),_e=function(e){var n=e.svgRef,a=e.title,t=je(e,["svgRef","title"]);return r.a.createElement("svg",V({viewBox:"0 0 10.583 10.583",height:40,width:40,ref:n},t),a?r.a.createElement("title",null,a):null,Ee)},ke=r.a.forwardRef(function(e,n){return r.a.createElement(_e,V({svgRef:n},e))});o.p;function N(){return(N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function xe(e,n){if(e==null)return{};var a,t,i=function(l,v){if(l==null)return{};var d,p,y={},b=Object.keys(l);for(p=0;p<b.length;p++)d=b[p],v.indexOf(d)>=0||(y[d]=l[d]);return y}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var E,Ie=r.a.createElement("path",{d:"M3.367 1.31a.2.2 0 00-.213.2v6.71a.2.2 0 00.088.165.267.267 0 00.188.039c1.637-1.066 3.288-2.306 4.707-3.356a.2.2 0 00.002-.32c-1.521-1.175-3.187-2.337-4.666-3.4a.2.2 0 00-.106-.037z"}),Te=function(e){var n=e.svgRef,a=e.title,t=xe(e,["svgRef","title"]);return r.a.createElement("svg",N({viewBox:"0 0 10.583 10.583",height:40,width:40,ref:n},t),a?r.a.createElement("title",null,a):null,Ie)},Me=r.a.forwardRef(function(e,n){return r.a.createElement(Te,N({svgRef:n},e))}),Ce=(o.p,function(e){return[J.a.playButton,!e.enabled&&J.a.playButtonDisabled].filter(Boolean).join(" ")}),Pe=function(e){var n=e.paused,a=e.onToggle,t=e.enabled,i={paused:n,onToggle:a,enabled:t===void 0||t};return r.a.createElement("div",{className:Ce(i),onClick:function(){a()}},n?r.a.createElement(Me,null):r.a.createElement(ke,null))},M=function(){function e(n){Object(m.a)(this,e),this.sources=void 0,this.sources=n}return Object(h.a)(e,null,[{key:"fromSources",value:function(n){return new e(n)}},{key:"sourceTypeFromSrc",value:function(n){var a=n.split("."),t=a[a.length-1].toLowerCase();return"video/".concat(t)}}]),Object(h.a)(e,[{key:"sourcesForWidth",value:function(n){var a=this;return this.sortSources(this.types.map(function(t){return a.sourceForWidthAndType(n,t)}))}},{key:"firstPlayableSourceForWidth",value:function(n){var a=this.sourcesForWidth(n),t=document.createElement("video"),i=a.find(function(s){return t.canPlayType(e.sourceTypeFromSrc(s.src))});return i||null}},{key:"sortSources",value:function(n){var a=this;return n.sort(function(t,i){return a.sources.findIndex(function(s){return s===t})-a.sources.findIndex(function(s){return s===i})})}},{key:"sourceForWidthAndType",value:function(n,a){return this.sourcesForType(a).reduce(function(t,i){return n<=i.width&&i.width<t.width?i:t},this.widestSourceForType(a))}},{key:"widestSourceForType",value:function(n){var a=this.sourcesForType(n);if(a.length===0)throw new Error("No source with type ".concat(n," found"));return a.reduce(function(t,i){return i.width>t.width?i:t},a[0])}},{key:"sourcesForType",value:function(n){return this.sources.filter(function(a){return e.sourceTypeFromSrc(a.src)===n})}},{key:"types",get:function(){return this.sources.reduce(function(n,a){var t=e.sourceTypeFromSrc(a.src);return n.findIndex(function(i){return i===t})>-1?n:n.concat(t)},[])}}]),e}(),D=o(71),$=function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,null,[{key:"getURLParameterByName",value:function(n){var a=window.location.href;n=n.replace(/[[\]]/g,"\\$&");var t=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)").exec(a);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}},{key:"debug",get:function(){return e.getURLParameterByName("debug")==="true"}},{key:"simulateUnsupportedBrowser",get:function(){return e.getURLParameterByName("simulateUnsupportedBrowser")==="true"}}]),e}(),Le=[function(e){var n=e.getBrowser();return n.name==="IE"&&n.major&&parseInt(n.major)<=11},function(e){var n=e.getBrowser();return n.name==="Edge"&&n.major&&parseInt(n.major)<=18},function(e){var n=e.getOS(),a=n.version?parseInt(n.version.split(".")[0]):null;return n.name==="iOS"&&a&&a<=11},function(e){var n=e.getBrowser();return n.name==="Safari"&&n.major&&parseInt(n.major)<=11},function(e){var n=e.getBrowser();return n.name==="Opera"&&n.major&&parseInt(n.major)<=37},function(e){return e.getOS().name==="Windows Phone"},function(e){return e.getBrowser().name==="UCBrowser"}],Be=o(189),Re=o.n(Be),Ve=o(18),g=o.n(Ve);(function(e){e[e.Text=1]="Text",e[e.Control=2]="Control",e[e.Both=3]="Both"})(E||(E={}));var F,q=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return n.filter(Boolean).join(" ")},Ne=function(e){return q(g.a.layout,e===E.Both?g.a.bothElementsVisible:e&E.Text?g.a.textVisible:g.a.textHidden,e&E.Control?g.a.controlVisible:g.a.controlHidden)},G=function(e){var n=e.visibility,a=e.onClick,t=e.header,i=e.interactionControl,s=e.settings,l=e.selector,v=e.callToAction,d=e.callToReveal,p=e.background,y=e.showInteractionClassName,b=e.hideInteractionClassName,U=e.isFallback,ie=n&E.Control&&d,ft=n&E.Control;return r.a.createElement("div",{className:"".concat(g.a.app," ").concat(U?g.a.isFallBack:"")},r.a.createElement("div",{className:g.a.foreground},r.a.createElement("div",{className:g.a.foregroundInner},l&&r.a.createElement("div",{className:g.a.selector},l),s,r.a.createElement("div",{className:q(Ne(n),ie?y:b),onClick:a},r.a.createElement("div",{className:g.a.textContainer},t),r.a.createElement("div",{className:g.a.interactionContainer},r.a.createElement("div",{className:g.a.callOutBox},r.a.createElement("div",{className:ie?g.a.fadeOutCallOutAbs:g.a.callOutAbs},d),r.a.createElement("div",{className:ft?g.a.callOut:g.a.fadeOutCallOut},v)),i)))),r.a.createElement("div",{className:g.a.background},p))},De=function(e){return r.a.createElement(G,{visibility:E.Text,isFallback:!0,header:r.a.createElement(H,{title:e.title,shortText:e.shortText,longText:e.longText}),background:r.a.createElement("img",{className:Re.a.backgroundImage,src:e.image,alt:""})})},c=o(3),Fe=o(190),We=o.n(Fe),ze=function(e){var n=new D.UAParser().getOS().version;return r.a.createElement("div",{className:We.a.debugInfo},r.a.createElement("textarea",{onFocus:function(a){a.target.select()}},JSON.stringify(Object(c.a)(Object(c.a)({},new D.UAParser().getResult()),{},{osMajorVersion:n?parseInt(n.split(".")[0]):"?"}))))};(function(e){e.Playing="playing",e.Paused="paused",e.Stopped="stopped",e.Loading="loading"})(F||(F={}));var O=F,Ae=o(90),W=o.n(Ae),z=o(72),Ue=function(e){return e.sources.reduce(function(n,a){return n+"".concat(n.length>0?", ":"").concat(a.src," ").concat(a.width,"w")},"")},He=function(e){return function(n){return n?n.src:""}(function(n){return n.sources.length===0?null:n.sources.reduce(function(a,t){return t.width>a.width?t:a},n.sources[0])}(e))},Xe=function(e){return r.a.createElement("img",Object.assign({},function(n){return n.sources,Object(z.a)(n,["sources"])}(e),{alt:e.alt,srcSet:Ue(e),src:He(e)}))},Ye=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(){return Object(m.a)(this,a),n.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("video",Object.assign({},this.htmlVideoProps,{ref:this.props.videoRef}),this.sourcesForWidth(this.props.physicalPixelWidth).map(function(i){return r.a.createElement("source",Object.assign({},t.htmlSourceProps(i),{key:t.key(i),type:M.sourceTypeFromSrc(i.src)}))}))}},{key:"sourcesForWidth",value:function(t){return M.fromSources(this.props.sources).sourcesForWidth(t)}},{key:"htmlSourceProps",value:function(t){return t.width,Object(z.a)(t,["width"])}},{key:"key",value:function(t){return M.sourceTypeFromSrc(t.src)+"."+t.width}},{key:"htmlVideoProps",get:function(){var t=this.props;return t.sources,t.physicalPixelWidth,t.videoRef,Object(z.a)(t,["sources","physicalPixelWidth","videoRef"])}}]),a}(r.a.Component),Je=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this,t)).video=void 0,i.video=r.a.createRef(),i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){this.video.current&&(this.props.videoState===O.Paused?this.video.current.pause():this.props.videoState===O.Playing?this.video.current.play():this.props.videoState===O.Stopped&&(this.video.current.currentTime=0,this.video.current.pause()))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:W.a.container},t.props.mediaItem.type==="video"?r.a.createElement(Ye,{playsInline:!0,preload:t.props.preload,videoRef:t.video,autoPlay:!!t.props.autoPlay,loop:!0,muted:t.props.muted,className:W.a.mediaItem,style:t.props.style,key:t.props.mediaItem.props.src,physicalPixelWidth:t.props.width,sources:[{src:t.props.mediaItem.props.src,width:1920}]}):r.a.createElement(Xe,Object.assign({},t.props.mediaItem.props,{className:W.a.mediaItem,style:t.props.style})))}}]),a}(r.a.Component),qe=o(89),Ge=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this,t)).resizeEventListener=void 0,i.state={windowWidth:window.innerWidth,windowHeight:window.innerHeight},i.resizeEventListener=i.updateDimensions.bind(Object(qe.a)(i)),i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("resize",this.resizeEventListener),this.updateDimensions(),window.setTimeout(function(){t.updateDimensions()},500)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeEventListener)}},{key:"updateDimensions",value:function(){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})}},{key:"render",value:function(){return this.props.render(this.state.windowWidth,this.state.windowHeight)}}]),a}(r.a.Component),K=function(e){var n=e.videoState,a=e.mediaItem,t=e.muted,i=e.autoPlay,s=i===void 0||i,l=e.preload,v=l===void 0?"":l,d=e.cropX,p=d===void 0?.5:d,y=e.cropY,b=y===void 0?.5:y;return r.a.createElement(Ge,{render:function(U){return r.a.createElement(Je,{videoState:n,mediaItem:a,muted:t,autoPlay:s,preload:v,style:{objectPosition:"".concat(100*p,"% ").concat(100*b,"%")},width:U})}})},Q=function(){function e(n){Object(m.a)(this,e),this._initialState=void 0,this._newState=void 0,this._initialState=n,this._newState=n}return Object(h.a)(e,[{key:"newState",get:function(){return this._newState}}],[{key:"initialState",value:function(n){return{layers:[{props:n,id:1}]}}},{key:"propsUpdated",value:function(n,a){return new e(a).handlePropsUpdated(n)}}]),Object(h.a)(e,[{key:"handlePropsUpdated",value:function(n){return this.sourceHasChanged(n)?this.addNewLayer(n).discardOldLayers().newState:this.updateTopLayer(n).newState}},{key:"sourceHasChanged",value:function(n){return this._initialState.layers[this._initialState.layers.length-1].props.mediaItem.id!==n.mediaItem.id}},{key:"addNewLayer",value:function(n){var a=this._newState.layers[this._newState.layers.length-1];return this._newState=Object(c.a)(Object(c.a)({},this._newState),{},{layers:[Object(c.a)(Object(c.a)({},a),{},{props:Object(c.a)(Object(c.a)({},a.props),{},{muted:!0})}),{id:a.id+1,props:Object(c.a)({},n)}]}),this}},{key:"discardOldLayers",value:function(){return this._newState=Object(c.a)(Object(c.a)({},this._newState),{},{layers:this._newState.layers.slice(this._newState.layers.length-2,this._newState.layers.length+1)}),this}},{key:"updateTopLayer",value:function(n){var a=this._newState.layers[this._newState.layers.length-1];return this._newState=Object(c.a)(Object(c.a)({},this._newState),{},{layers:this._newState.layers.map(function(t){return t.id===a.id?Object(c.a)(Object(c.a)({},t),{},{props:Object(c.a)({},n)}):t})}),this}}]),e}(),Ke=o(73),C=o.n(Ke),Qe=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this,t)).state=Q.initialState(t),i}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,this.state.layers.map(function(i){return r.a.createElement("div",{className:t.getClasses(i),key:i.id},r.a.createElement(K,Object.assign({},i.props,{cropX:t.props.cropX,cropY:t.props.cropY})))}),r.a.createElement("div",{className:this.lightMiMaskClasses},r.a.createElement(K,{mediaItem:{id:this.props.frames.sources[0].src,type:"image",props:Object(c.a)({},this.props.frames)},cropX:this.props.cropX,cropY:this.props.cropY})))}},{key:"getClasses",value:function(t){var i=this.state.layers[0].id!==t.id,s=this.state.layers.length>1&&i;return[C.a.container,s&&C.a.fadeIn].filter(Boolean).join(" ")}},{key:"lightMiMaskClasses",get:function(){return[C.a.lightMiLayer,this.props.lightMiEnabled&&C.a.lightMiLayerEnabled].filter(Boolean).join(" ")}}],[{key:"getDerivedStateFromProps",value:function(t,i){return Q.propsUpdated(t,i)}}]),a}(r.a.Component),Ze=o(52),x=o.n(Ze),et=o(122),Z=o.n(et),tt=function(e){return r.a.createElement("div",{className:Z.a.switch},r.a.createElement("input",{type:"checkbox",checked:!!e.enabled,readOnly:!0,onChange:function(){e.onToggle&&e.onToggle()}}),r.a.createElement("span",{className:Z.a.slider}))},nt=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this,t)).currentTimeout=void 0,i.state={actualValue:t.value,debouncedValue:t.value},i}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){var t=this;clearTimeout(this.currentTimeout),this.state.actualValue!==this.props.value&&this.setState({actualValue:this.props.value}),this.state.debouncedValue!==this.props.value&&(this.shouldDebounce(this.props.value)?this.currentTimeout=window.setTimeout(function(){t.setState({debouncedValue:t.props.value})},this.debounceTime):this.setState({debouncedValue:this.props.value}))}},{key:"shouldDebounce",value:function(t){return this.props.shouldDebounce===void 0||this.props.shouldDebounce(t,this.state.debouncedValue)}},{key:"render",value:function(){return this.props.render(this.state.debouncedValue)}},{key:"debounceTime",get:function(){return this.props.debounceTimeMs===void 0?500:this.props.debounceTimeMs}}]),a}(r.a.Component),at=function(e){return r.a.createElement(nt,{value:e.videoState,debounceTimeMs:500,shouldDebounce:function(n){return n===O.Loading},render:function(n){return e.render(n)}})},it=function(e){return[x.a.subtitle,(!e.lightMiEnabled||e.videoState!==O.Playing)&&x.a.subtitleDisabled].filter(Boolean).join(" ")},rt=function(e){return r.a.createElement("div",{className:x.a.lightmiControl,onClick:function(){e.onToggleLightMi()}},r.a.createElement("div",{className:x.a.label},r.a.createElement("div",{className:x.a.title},"Sync"),r.a.createElement(at,{videoState:e.videoState,render:function(n){return r.a.createElement("div",{className:it(Object(c.a)(Object(c.a)({},e),{},{videoState:n}))},function(a){switch(a.videoState){case O.Loading:return"Loading";case O.Paused:case O.Stopped:return a.lightMiEnabled?"Ready to sync":"Off";case O.Playing:return a.lightMiEnabled?"Syncing":"Off"}}(Object(c.a)(Object(c.a)({},e),{},{videoState:n})))}})),r.a.createElement("div",{className:x.a.toggleContainer},r.a.createElement(tt,{enabled:e.lightMiEnabled})))},ot=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this,t)).interval=void 0,i.state={iframeReady:i.calculateIframeReady()},i.interval=window.setInterval(function(){i.state.iframeReady?window.clearInterval(i.interval):i.updateIframeReady()},500),i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateIframeReady.bind(this)),this.updateIframeReady()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateIframeReady.bind(this)),window.clearInterval(this.interval)}},{key:"updateIframeReady",value:function(){this.setState({iframeReady:this.calculateIframeReady()})}},{key:"calculateIframeReady",value:function(){return window.innerWidth>0&&window.innerHeight>0}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.iframeReady&&this.props.children)}}]),a}(r.a.Component),st=function(){function e(n){Object(m.a)(this,e),this.messageEventIO=void 0,this.messageEventIO=n}return Object(h.a)(e,[{key:"tag",value:function(n){this.messageEventIO.sendMessageToParent({type:"hie_interaction",name:window.name,event:Object(c.a)({type:n.type},n.props)})}}]),e}(),ee=function(){function e(n){var a=this;Object(m.a)(this,e),this._receivedMessageEvents=void 0,this.callbacks=void 0,this.window=void 0,this.window=n;var t=n;this._receivedMessageEvents=t.receivedMessageEvents?t.receivedMessageEvents:[],this.callbacks=[],n.addEventListener("message",function(i){a._receivedMessageEvents.push(i),a.callbacks.forEach(function(s){s(i)})})}return Object(h.a)(e,[{key:"receivedMessageEvents",value:function(){return this._receivedMessageEvents}},{key:"sendMessageToParent",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"*";a!=="file://"&&this.window.parent.postMessage(n,a)}},{key:"onReceiveMessageEvent",value:function(n){this.callbacks.push(n)}}]),e}(),A=function e(){Object(m.a)(this,e)},te=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this))._props=void 0,i._props=Object(c.a)(Object(c.a)({},t),{},{name:i.cleanName(t.name)}),i}return Object(h.a)(a,[{key:"cleanName",value:function(t){return t.toLowerCase().replace(/ /g,"_")}},{key:"type",get:function(){return"video_switch"}},{key:"props",get:function(){return Object(c.a)(Object(c.a)({},this._props),{},{eventString:"".concat(this._props.name,":").concat(this._props.mode,":button")})}}]),a}(A),ct=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this))._props=void 0,i._props=t,i}return Object(h.a)(a,[{key:"type",get:function(){return"toggle_sync"}},{key:"props",get:function(){return Object(c.a)(Object(c.a)({},this._props),{},{eventString:"".concat(this._props.mode,":toggle")})}}]),a}(A),lt=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this))._props=void 0,i._props=t,i}return Object(h.a)(a,[{key:"type",get:function(){return"toggle_volume"}},{key:"props",get:function(){return Object(c.a)(Object(c.a)({},this._props),{},{eventString:"".concat(this._props.mode,":toggle")})}}]),a}(A),ut=o(191),dt=o.n(ut),pt=function(){function e(n){Object(m.a)(this,e),this.messageEventIO=void 0,this.messageEventIO=n}return Object(h.a)(e,[{key:"onReceiveContentSet",value:function(n,a){this.onReceivedLocalizationData(function(t){a(dt()(Object(c.a)({},n),Object(c.a)(Object(c.a)({},n),e.flattenTranslations(t))))})}},{key:"onReceivedLocalizationData",value:function(n){var a=this.messageEventIO.receivedMessageEvents().reduce(function(t,i){return e.messageEventIsLocalizationData(i)&&(!t||t.timeStamp<=i.timeStamp)?i:t},null);a&&n(a.data.event),this.messageEventIO.onReceiveMessageEvent(function(t){e.messageEventIsLocalizationData(t)&&n(t.data.event)})}}],[{key:"flattenTranslations",value:function(n){return n.translations&&Array.isArray(n.translations)?Object(c.a)(Object(c.a)({},n),{},{translations:n.translations.reduce(function(a,t){return a[t.id]=t.name,a},{})}):Object(c.a)({},n)}},{key:"messageEventIsLocalizationData",value:function(n){return n.data&&n.data.type==="localization-data"}}]),e}(),ne=function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,null,[{key:"appIsEmbeddedInIframe",value:function(){return window.location!==window.parent.location}}]),e}(),ht=function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,null,[{key:"load",value:function(n,a){ne.appIsEmbeddedInIframe()||a(n);var t=new ee(window);t.sendMessageToParent({type:"DebugMessage",name:"DataStructure",data:n},document.location.origin);var i=new pt(t),s=!1;i.onReceiveContentSet(n,function(l){s=!0,a(l)}),ne.appIsEmbeddedInIframe()&&window.setTimeout(function(){s||(console.error("Could not detect localization-data after ".concat(5e3," ms - using fallback data.")),a(n))},5e3)}}]),e}(),ae=function(){function e(n){Object(m.a)(this,e),this._input=void 0,this._input=n}return Object(h.a)(e,[{key:"input",get:function(){return this._input}},{key:"title",get:function(){return this._input.translations.title}},{key:"shortText",get:function(){return this._input.translations["short-text"]}},{key:"longText",get:function(){return this._input.translations["long-text"]}},{key:"ctaText",get:function(){return this._input.translations["call-to-action"]}},{key:"cropX",get:function(){return this._input.translations["crop-focus-x"]}},{key:"cropY",get:function(){return this._input.translations["crop-focus-y"]}},{key:"scenes",get:function(){return[{videoSources:[{src:this._input.translations["room1-scene1-video-780"],width:780},{src:this._input.translations["room1-scene1-video-1020"],width:1020}]}]}},{key:"room",get:function(){return{startImage:this._input.translations["room1-start-image-1920"],frames:{sources:[{src:this._input.translations["room1-frame-780"],width:780},{src:this._input.translations["room1-frame-1020"],width:1020}]},scenes:this.scenes}}}]),e}(),mt=function(e){Object(w.a)(a,e);var n=Object(S.a)(a);function a(t){var i;return Object(m.a)(this,a),(i=n.call(this,t)).analytics=void 0,i.onTogglePaused=function(){i.analytics.tag(new te({mode:i.state.paused?"play":"pause",name:i.state.selectedSceneIndex===null?"NoVideoActive":"Video".concat(i.state.selectedSceneIndex+1)})),i.setState(function(s){return{paused:!s.paused}})},i.onToggleLightMi=function(){i.analytics.tag(new ct({mode:i.state.lightMiEnabled?"off":"on"})),i.setState(function(s){return s.untouched&&!s.lightMiEnabled&&i.onStart(0),{untouched:!1,lightMiEnabled:!s.lightMiEnabled}})},i.onToggleMuted=function(){i.analytics.tag(new lt({mode:i.state.muted?"on":"off"})),i.setState(function(s){return{muted:!s.muted}})},i.analytics=new st(new ee(window)),i.state={untouched:!0,prevSelectedSceneIndex:null,selectedSceneIndex:null,paused:!1,lightMiEnabled:!1,muted:!0,input:t.input?t.input:null},i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;ht.load($e,function(i){t.setState({input:i})})}},{key:"onStart",value:function(t){if(t<0||t>=this.contentSet.scenes.length)throw new Error("Scene with index ".concat(t," does not exist"));this.analytics.tag(new te({mode:"play",name:"Video".concat(t+1)})),this.setState(function(i){return{untouched:!1,prevSelectedSceneIndex:i.selectedSceneIndex,selectedSceneIndex:t,paused:!1,lightMiEnabled:!0}})}},{key:"videoSrcToLoad",value:function(t){var i=M.fromSources(t).firstPlayableSourceForWidth(window.innerWidth);return i?i.src:null}},{key:"getVideoState",value:function(t){return this.selectedScene?t?this.state.paused?O.Paused:O.Playing:O.Loading:O.Stopped}},{key:"getVideoSrcToShow",value:function(t){return t?this.selectedScene?this.videoSrcToLoad(this.selectedScene.videoSources):null:this.prevSelectedScene?this.videoSrcToLoad(this.prevSelectedScene.videoSources):null}},{key:"getMediaItemToShow",value:function(t){var i=this.getVideoSrcToShow(t);return i?{id:i,type:"video",props:{src:i}}:{id:this.contentSet.room.startImage,type:"image",props:{sources:[{src:this.contentSet.room.startImage,width:1920}]}}}},{key:"videoStateForSceneIndex",value:function(t,i){return this.state.selectedSceneIndex===i?this.getVideoState(t):O.Stopped}},{key:"enableMuteButton",value:function(t){return!this.isIOS||this.getHtmlVideoElementIsLoaded(t)}},{key:"getHtmlVideoElementIsLoaded",value:function(t){return this.getMediaItemToShow(t).type==="video"}},{key:"render",value:function(){var t=this;if(this.state.input===null)return null;var i=new ae(this.state.input);return r.a.createElement(ot,null,$.debug&&r.a.createElement(ze,null),this.useFallbackApplication?r.a.createElement(De,{title:i.title,shortText:i.shortText,longText:i.longText,image:this.state.input.translations["fallback-image"]!==""?this.state.input.translations["fallback-image"]:this.state.input.translations["room1-start-image-1920"]}):r.a.createElement(_,{videoSrc:this.currentSceneVideoSrc,event:"canplaythrough",render:function(s){return r.a.createElement(G,{visibility:E.Both,settings:r.a.createElement("div",null,r.a.createElement(Pe,{paused:t.state.paused,onToggle:t.onTogglePaused,enabled:t.enableMuteButton(s)&&t.state.selectedSceneIndex!==null}),r.a.createElement(we,{muted:t.state.muted,onToggle:t.onToggleMuted,enabled:t.enableMuteButton(s)})),header:r.a.createElement(H,{title:t.contentSet.title,shortText:t.contentSet.shortText,longText:t.contentSet.longText}),callToAction:r.a.createElement(ue,{className:L.a.actionText,attractAttention:t.state.untouched},t.contentSet.ctaText),interactionControl:r.a.createElement(rt,{selectedSceneIndex:t.state.selectedSceneIndex,lightMiEnabled:t.state.lightMiEnabled,onToggleLightMi:t.onToggleLightMi,videoState:t.getVideoState(s)}),background:r.a.createElement(Qe,{videoState:t.getVideoState(s),lightMiEnabled:t.state.lightMiEnabled||t.state.untouched,frames:t.contentSet.room.frames,mediaItem:t.getMediaItemToShow(s),muted:t.state.muted,cropX:t.contentSet.cropX,cropY:t.contentSet.cropY})})}}))}},{key:"contentSet",get:function(){if(this.state.input)return new ae(this.state.input);throw new Error("Input not loaded")}},{key:"selectedScene",get:function(){return this.state.selectedSceneIndex===null?null:this.contentSet.scenes[this.state.selectedSceneIndex]}},{key:"prevSelectedScene",get:function(){return this.state.prevSelectedSceneIndex===null?null:this.contentSet.scenes[this.state.prevSelectedSceneIndex]}},{key:"currentSceneVideoSrc",get:function(){return this.selectedScene?this.videoSrcToLoad(this.selectedScene.videoSources):null}},{key:"isIOS",get:function(){return!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)}},{key:"useFallbackApplication",get:function(){var t=!!Le.find(function(i){return i(new D.UAParser)});return $.simulateUnsupportedBrowser||t}}]),a}(r.a.Component);f.default=mt},392:function(u,f,o){"use strict";o.r(f),o(194),o(203);var m=o(0),h=o.n(m),w=o(186),S=o.n(w),P=(o(388),o(389),o(187));o.n(P).a.polyfill();var r=window,I=document.documentElement;r.__interactiveVisualizationDebug={getDimensions:function(){var _=document.getElementById("interactive-visualization-instance");console.log("window.innerWidth: ".concat(window.innerWidth,`
`)+"window.innerHeight: ".concat(window.innerHeight,`
`)+"window.documentElement.clientWidth: ".concat(I.clientWidth,`
`)+"window.documentElement.clientHeight: ".concat(I.clientHeight,`
`)+"iframe offsetWidth: ".concat(_?_.offsetWidth:"null",`
`)+"iframe offsetHeight: ".concat(_?_.offsetHeight:"null"))}};var L=o(391).default;Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),S.a.render(h.a.createElement(L,null),document.getElementById("lightmi")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})},40:function(u,f,o){u.exports={fixIOSIssue:"textlayer_fixIOSIssue","fix-ios-issue":"textlayer_fix-ios-issue",title:"textlayer_title",text:"textlayer_text",shortText:"textlayer_shortText",longText:"textlayer_longText"}},52:function(u,f,o){u.exports={lightmiControl:"lightmi_Control",label:"lightmi_Control_label",title:"lightmi_Control_title",subtitle:"lightmi_Control_subtitle",subtitleDisabled:"lightmi_Control_subtitleDisabled",toggleContainer:"lightmi_Control_toggleContainer"}},73:function(u,f,o){u.exports={container:"lightmi_Video_container",fadeIn:"lightmi_Video_fadeIn","fade-in":"lightmi_Video_fade-in",lightMiLayer:"lightmi_Video_layer",lightMiLayerEnabled:"lightmi_Video_layerEnabled"}},90:function(u,f,o){u.exports={container:"medialayer_container",mediaItem:"medialayer_mediaItem"}}},[[193,1,2]]]);
//# sourceMappingURL=/s/files/1/0586/8273/6817/t/9/assets/lightmi_animation_main.js.map?v=8093162773028930735
