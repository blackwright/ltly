(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(55)},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(13),r=n.n(a),s=n(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,l=n(14),u=n(12);!function(e){e.BEGIN_VISUALIZATION_TRANSITION="BEGIN_VISUALIZATION_TRANSITION",e.END_VISUALIZATION_TRANSITION="END_VISUALIZATION_TRANSITION",e.GO_TO_PREV_VISUALIZATION="GO_TO_PREV_VISUALIZATION",e.GO_TO_NEXT_VISUALIZATION="GO_TO_NEXT_VISUALIZATION"}(c||(c={}));var d={currentVisualizationIndex:0,prevVisualizationIndex:0,isTransitioning:!1};var m=Object(l.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case c.GO_TO_NEXT_VISUALIZATION:return e.isTransitioning?e:Object(u.a)({},e,{currentVisualizationIndex:e.currentVisualizationIndex+1,prevVisualizationIndex:e.currentVisualizationIndex});case c.GO_TO_PREV_VISUALIZATION:return e.isTransitioning?e:Object(u.a)({},e,{currentVisualizationIndex:e.currentVisualizationIndex-1,prevVisualizationIndex:e.currentVisualizationIndex});case c.BEGIN_VISUALIZATION_TRANSITION:return Object(u.a)({},e,{isTransitioning:!0});case c.END_VISUALIZATION_TRANSITION:return Object(u.a)({},e,{isTransitioning:!1});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=n(2),v=n(3),p=n(5),f=n(4),w=n(6),g=n(18);n(46);function y(e){var t,n;return n=t=function(t){function n(){var e,t;Object(h.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=Object(p.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(o)))).state={delayedAfterReflow:!1},t}return Object(w.a)(n,t),Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.setTimeout(function(){e.setState({delayedAfterReflow:!0})},0)}},{key:"render",value:function(){if(!this.state.delayedAfterReflow)return null;var t=this.props,n=t.data,i=t.timeout,a=t.isTransitioning,r=t.options,s=void 0===r?{}:r,c={transition:"transform ".concat(i,"ms linear")},l=s.smoothing?function(e,t){return e.map(function(n,i){for(var o=[],a=i-t;a<i+t;){var r=e[a]||128;o.push(r),a+=1}return function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n];return t/e.length}(o)})}(n,s.smoothing):n;return o.a.createElement(e,{data:l,style:c,isTransitioning:a})}}]),n}(o.a.Component),t.defaultProps={data:new Uint8Array,timeout:Y,isTransitioning:!1,options:{}},n}var E=n(27),T=[["#0E9AA7","#F6CD61","#FE8A71"],["#EE4540","#801336","#2D142C"],["#8FB9A8","#FDFBD4","#FCD0BA"],["#AC6D83","#685D79","#465C7A"],["#F36E38","#EF4648","#582841"],["#F1F1F1","#9BD7D1","#305D7A"],["#DEA5B6","#F3CD8C","#F2E9C2"],["#E27B47","#EFCA58","#46B29E"],["#2E7345","#2E9975","#2DB3B3"],["#52A3CC","#7EA1E5","#AAAAF2"],["#CC5285","#CC5285","#F2BCAA"],["#D8E0BB","#B6CEC7","#86A3C3"]];T.map(function(e,t){return{id:t,colorTriple:e}});function A(){return T[Math.floor(Math.random()*T.length)]}function O(){return function(e,t){for(var n=[];n.length<e;){var i=A(),o=i[Math.floor(Math.random()*i.length)];if(t&&n.includes(o))break;n.push(o)}return n}(1)[0]}n(47);var I=10,b=0,N=5,S=y(function(e){function t(){var e,n;Object(h.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).ref=o.a.createRef(),n.canvas=void 0,n.ctx=void 0,n.intervalId=void 0,n.resizeTimeoutId=void 0,n.onResize=function(){window.clearTimeout(n.resizeTimeoutId);var e=n.canvas;n.resizeTimeoutId=window.setTimeout(function(){e.width=window.innerWidth,e.height=window.innerHeight},500)},n.paint=function(){var e=n.props.data,t=n.canvas,i=n.ctx,o=function(){var e=Object(E.a)(A());return Math.random()<=.5?e.reverse():e}();i.lineWidth=I,i.lineCap="round";var a=t.width/e.length;o.forEach(function(n,r){i.strokeStyle=n,i.beginPath();var s=r*b;i.moveTo(s,t.height/2),e.forEach(function(e){var n=e/255*t.height-N*o.length/2;i.lineTo(s,n+r*(N*o.length/2)),s+=a}),i.lineTo(s,t.height/2),i.stroke()})},n.fadeOut=function(){var e=n.ctx,t=n.canvas;e.fillStyle="rgba(0, 0, 0, 0.1)",e.fillRect(0,0,t.width,t.height)},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),this.canvas=this.ref.current,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="#050505",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.intervalId=window.setInterval(this.fadeOut,7)}},{key:"componentDidUpdate",value:function(){this.paint()}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.intervalId),window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this.props.style;return o.a.createElement("div",{className:"visualization waveform",style:e},o.a.createElement("div",{className:"backdrop"}),o.a.createElement("canvas",{ref:this.ref}),";")}}]),t}(o.a.Component)),x=n(26),D=n(7),k=n.n(D),L=(n(48),y(function(e){function t(){var e,n;Object(h.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={size:0},n.color=O(),n.lastColorChangeTimestamp=Date.now(),n.onResize=function(){var e=window,t=e.innerWidth,i=e.innerHeight,o=Math.max(t,i);n.setState({size:2*o})},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),this.onResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){for(var e=this.props,t=e.data,n=e.isTransitioning,i=this.state.size,a={},r=0;r<13;)a[r]=0,r+=1;t.forEach(function(e){for(var t=0;t<13;){var n=256/13*(t+1);if(Math.abs(e-128)>10&&e<=n){a[t]+=1;break}t+=1}});var s=Object.values(a).reduce(function(e,t){return t>10?e+1:e},0),c=Date.now();if(!n&&s/13>.1&&c-this.lastColorChangeTimestamp>200){var l;do{l=O()}while(this.color===l);this.color=l,this.lastColorChangeTimestamp=c}var u=Object.entries(a).map(function(e,t){var n=Object(x.a)(e,2),a=n[0],r=n[1],s=(+a+1)*i/13;return o.a.createElement("div",{key:a,className:"drummer-container",style:{width:"".concat(s,"px"),height:"".concat(s,"px"),opacity:(13-t)/13*.5*.25}},o.a.createElement("div",{className:k()("beat",{hit:r>10})}))});return o.a.createElement("div",{className:"visualization drummer",style:this.props.style},u,o.a.createElement("div",{className:"overlay",style:{backgroundColor:this.color}}))}}]),t}(o.a.Component))),_=n(1),j=new _.c("#666");var z=1500,C=200,V=0,M=.05;function P(e){var t,n=Date.now(),i=0,o=!1,a={x:0,y:0},r=function(){var e=new _.l(32,128,128),t=new _.f({wireframe:!0});return new _.e(e,t)}(),s=function(e){var t=e.geometry,n=new _.l(t.parameters.radius,t.parameters.widthSegments,t.parameters.heightSegments).vertices,i=new Float32Array(3*n.length);n.forEach(function(e,t){e.toArray(i,3*t)});var o=new _.b;o.addAttribute("position",new _.a(i,3)),o.attributes.position.dynamic=!0;var a=new _.i({size:.25,map:(new _.m).load("assets/images/point.png"),alphaTest:.5,color:j,transparent:!0});return new _.h(o,a)}(r),c=new _.g(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.set(0,C,0),c.lookAt(new _.n(0,0,0));var l=function(){var e=window,t=e.innerWidth,n=e.innerHeight,i=new _.o({alpha:!0});return i.setPixelRatio(window.devicePixelRatio),i.setSize(t,n),i.setClearColor(0,0),i}();e.appendChild(l.domElement);var u=new _.k;u.add(s);var d=function(){function e(){o=!0}function t(){o=!1}function n(e){var t={x:e.offsetX-a.x,y:e.offsetY-a.y};if(o){var n=(new _.j).setFromEuler(new _.d(U(.25*t.y),U(.25*t.x),0,"XYZ"));s.quaternion.multiplyQuaternions(n,s.quaternion)}a.x=e.offsetX,a.y=e.offsetY}return l.domElement.addEventListener("mousedown",e),l.domElement.addEventListener("mouseup",t),l.domElement.addEventListener("mousemove",n),function(){l.domElement.removeEventListener("mousedown",e),l.domElement.removeEventListener("mouseup",t),l.domElement.removeEventListener("mousemove",n)}}(),m=function(){function e(e){e.deltaY>0?c.position.y=Math.min(c.position.y+2,C):c.position.y=Math.max(c.position.y-2,V)}return l.domElement.addEventListener("wheel",e),function(){l.domElement.removeEventListener("wheel",e)}}();function h(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),l.render(u,c)}return window.addEventListener("resize",h,!1),{animate:function e(){s.rotateY(-.002),Date.now()-n>z&&s.rotateX(.002),(i+=.005)>=2*Math.PI&&(i=0),c.translateY(Math.cos(i)*M),c.translateX(Math.cos(i)*M),c.translateZ(Math.cos(i)*M*5),l.render(u,c),t=window.requestAnimationFrame(e)},stop:function(){window.cancelAnimationFrame(t),window.removeEventListener("resize",h),e.removeChild(l.domElement),d(),m(),s.geometry.dispose(),s.material.dispose(),u.remove(s)},getSphereGeometry:function(){return r.geometry},getHalpernGeometry:function(){return s.geometry}}}function U(e){return e*Math.PI/180}n(49);var F=2,R=.1,B=1,G=y(function(e){function t(){var e,n;Object(h.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).rendererContainer=void 0,n.originalVertices=void 0,n.focusedDataIndex=void 0,n.sphereDataSegments=void 0,n.vertexSegmentLength=void 0,n.getHalpernGeometry=void 0,n.onUnmount=void 0,n.focusedData=[],n.rendererRef=o.a.createRef(),n.updateVertices=function(e){if(null!=n.getHalpernGeometry&&null!=n.originalVertices){n.focusedData.splice(0,F),n.focusedData=n.focusedData.concat(new Array(F).fill(e[n.focusedDataIndex]));for(var t=n.getHalpernGeometry().getAttribute("position").array,i=0;i<n.originalVertices.length;){var o=Math.ceil(Math.floor(i/3)/n.vertexSegmentLength),a=o*n.sphereDataSegments,r=Math.min(o,n.vertexSegmentLength-o),s=Math.abs(n.focusedData[a]-128)/255*r*R+B;t[i]=n.originalVertices[i]*s,t[i+1]=n.originalVertices[i+1]*s,t[i+2]=n.originalVertices[i+2]*s,i+=3}n.getHalpernGeometry().getAttribute("position").needsUpdate=!0}},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.rendererContainer=this.rendererRef.current;var e=P(this.rendererContainer),t=e.animate,n=e.stop,i=e.getSphereGeometry,o=e.getHalpernGeometry,a=this.props.data;this.onUnmount=n,this.sphereDataSegments=Math.floor(a.length/i().parameters.widthSegments),this.vertexSegmentLength=(i().vertices.length-2)/(i().parameters.widthSegments-1),this.getHalpernGeometry=o,this.originalVertices=o().attributes.position.array.slice(0),this.focusedData=new Array(a.length).fill(128),this.focusedDataIndex=Math.floor(a.length/2),t()}},{key:"componentDidUpdate",value:function(){this.updateVertices(this.props.data)}},{key:"componentWillUnmount",value:function(){this.onUnmount&&this.onUnmount()}},{key:"render",value:function(){return o.a.createElement("div",{className:"visualization halpern",ref:this.rendererRef,style:this.props.style})}}]),t}(o.a.Component)),H=(n(50),y(function(e){var t=e.style;return o.a.createElement("div",{className:"visualization mobile-disabled",style:t},o.a.createElement("div",{className:"content"},o.a.createElement("img",{id:"desktop-icon",src:"/ltly/assets/images/desktop.png"}),o.a.createElement("div",{id:"message"},"Sorry, this visualization cannot be viewed on a mobile device.")))})),W=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),Z=[{component:S},{component:L,options:{smoothing:64}},{component:G,options:{smoothing:64,mobileDisabled:!0}}],X={component:H},Y=500,q=Object(s.b)(function(e){return{currentIndex:e.currentVisualizationIndex,prevIndex:e.prevVisualizationIndex,isTransitioning:e.isTransitioning}},function(e){return{startTransition:function(){return e({type:c.BEGIN_VISUALIZATION_TRANSITION})},endTransition:function(){return e({type:c.END_VISUALIZATION_TRANSITION})}}},null,{pure:!1})(function(e){var t,n,i=e.data,a=e.startTransition,r=e.endTransition,s=e.isTransitioning,c=e.prevIndex,l=e.currentIndex,u=null!=c&&c<l?"next":"prev",d=u?"visualization-".concat(u):void 0,m=(l%(t=Z.length)+t)%t,h=Z[m],v=h.options&&h.options.mobileDisabled&&W?X:h;return o.a.createElement(g.TransitionGroup,{component:null,childFactory:(n=d,function(e){return o.a.cloneElement(e,{classNames:n})})},o.a.createElement(g.CSSTransition,{key:m,timeout:Y,classNames:d||"",onExit:a,onExited:r,mountOnEnter:!0,unmountOnExit:!0},o.a.createElement(v.component,{data:i,isTransitioning:s,timeout:Y,options:v.options})))}),K=function(e){function t(){var e,n;Object(h.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={data:new Uint8Array},n.analyser=n.props.context.createAnalyser(),n.dataArray=new Uint8Array,n.currentAnimationFrameId=void 0,n.tick=function(){n.analyser.getByteTimeDomainData(n.dataArray),n.setState({data:n.dataArray}),n.currentAnimationFrameId=window.requestAnimationFrame(n.tick)},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.context,n=e.source;this.analyser.fftSize=256,this.dataArray=new Uint8Array(256),this.analyser.smoothingTimeConstant=1,n.connect(this.analyser),this.analyser.connect(t.destination),this.currentAnimationFrameId=window.requestAnimationFrame(this.tick)}},{key:"componentWillUnmount",value:function(){var e=this.props.source;null!=this.currentAnimationFrameId&&window.cancelAnimationFrame(this.currentAnimationFrameId),null!=this.analyser&&this.analyser.disconnect(),e&&e.disconnect()}},{key:"render",value:function(){var e=this.state.data;return o.a.createElement(q,{data:e})}}]),t}(i.Component),J=(n(51),function(e){var t=e.show;return o.a.createElement("div",{className:k()("loading",{show:!1!==t})},o.a.createElement("span",{className:"loading-dot"}),o.a.createElement("span",{className:"loading-dot"}),o.a.createElement("span",{className:"loading-dot"}))}),Q=(n(52),1500),$=250,ee=function(e){function t(){var e,n;Object(h.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={showOverlay:!1,isArrowHovered:!1},n.lastTouchStartTimestamp=void 0,n.hideOverlayTimeoutId=void 0,n.onMouseDown=function(e){1===e.nativeEvent.which&&(n.lastTouchStartTimestamp=Date.now())},n.onMouseUp=function(e){1===e.nativeEvent.which&&n.lastTouchStartTimestamp&&Date.now()-n.lastTouchStartTimestamp<$&&n.props.togglePlay()},n.recordTouchTimestamp=function(e){e.preventDefault(),n.lastTouchStartTimestamp=Date.now()},n.onTouchEnd=function(e){e.preventDefault(),n.lastTouchStartTimestamp&&Date.now()-n.lastTouchStartTimestamp<$&&n.showOverlay()},n.showOverlay=function(){window.clearTimeout(n.hideOverlayTimeoutId),n.setState({showOverlay:!0},function(){n.hideOverlayTimeoutId=window.setTimeout(function(){n.state.isArrowHovered||n.setState({showOverlay:!1})},Q)})},n.onPrev=function(e){e.stopPropagation(),n.props.goToPrevVisualization(),n.showOverlay()},n.onNext=function(e){e.stopPropagation(),n.props.goToNextVisualization(),n.showOverlay()},n.doNothing=function(e){e.stopPropagation()},n.onKeyDown=function(e){switch(e.which){case 37:case 38:n.props.goToPrevVisualization();break;case 39:case 40:n.props.goToNextVisualization()}},n.onToggleArrowHover=function(e){n.setState({isArrowHovered:e})},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this,t=this.props,n=t.wantsToPlay,i=t.isPlaying,a=t.togglePlay,r=this.state.showOverlay;return o.a.createElement(o.a.Fragment,null,n&&!i&&o.a.createElement(J,null),o.a.createElement("div",{id:"overlay",onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchStart:this.recordTouchTimestamp,onTouchEnd:this.onTouchEnd,onMouseMove:this.showOverlay,className:k()({show:r})},o.a.createElement("h1",{id:"title"},"LTLY"),o.a.createElement("div",{onClick:a,onTouchStart:a,className:k()({play:!n&&!i,pause:n&&i})}),o.a.createElement("div",{className:"navigation"},o.a.createElement("div",{className:"arrow-container",onClick:this.onPrev,onTouchStart:this.onPrev,onMouseUp:this.doNothing,onMouseEnter:function(){return e.onToggleArrowHover(!0)},onMouseLeave:function(){return e.onToggleArrowHover(!1)}},o.a.createElement("svg",{className:"arrow",width:"60px",height:"80px",viewBox:"0 0 50 80"},o.a.createElement("polyline",{fill:"none",stroke:"#FFF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:"\r 45.63,75.8 0.375,38.087 45.63,0.375 "}))),o.a.createElement("div",{className:"arrow-container",onClick:this.onNext,onTouchStart:this.onNext,onMouseUp:this.doNothing,onMouseEnter:function(){return e.onToggleArrowHover(!0)},onMouseLeave:function(){return e.onToggleArrowHover(!1)}},o.a.createElement("svg",{className:"arrow",width:"60px",height:"80px",viewBox:"0 0 50 80"},o.a.createElement("polyline",{fill:"none",stroke:"#FFF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:"\r 0.375,0.375 45.63,38.087 0.375,75.8 "}))))))}}]),t}(i.Component),te=Object(s.b)(null,function(e){return{goToNextVisualization:function(){return e({type:c.GO_TO_NEXT_VISUALIZATION})},goToPrevVisualization:function(){return e({type:c.GO_TO_PREV_VISUALIZATION})}}})(ee),ne=function(e){function t(){var e,n;Object(h.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={wantsToPlay:!1,isPlaying:!1,context:void 0,source:void 0},n.audioRef=o.a.createRef(),n.audioEventListeners=[],n.audioElement=void 0,n.initialize=function(){var e=n.audioRef.current;n.audioElement=e;var t=new(window.AudioContext||window.webkitAudioContext),i=t.createMediaElementSource(e);n.addAudioEventListeners([{event:"playing",listener:n.onAudioPlay},{event:"pause",listener:n.onAudioPause},{event:"error",listener:n.onAudioError}]),n.setState({context:t,source:i})},n.togglePlay=function(){null==n.audioElement&&n.initialize(),n.audioElement.paused?(n.setState({wantsToPlay:!0}),n.audioElement.play()):(n.setState({wantsToPlay:!1}),n.audioElement.pause())},n.onAudioPlay=function(){return n.setState({isPlaying:!0})},n.onAudioPause=function(){return n.setState({isPlaying:!1})},n.onAudioError=console.error,n.addAudioEventListeners=function(e){var t=!0,i=!1,o=void 0;try{for(var a,r=e[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var s=a.value;n.audioEventListeners.push(s),n.audioElement.addEventListener(s.event,s.listener)}}catch(c){i=!0,o=c}finally{try{t||null==r.return||r.return()}finally{if(i)throw o}}},n.removeAudioEventListeners=function(){var e=!0,t=!1,i=void 0;try{for(var o,a=n.audioEventListeners[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var r=o.value;n.audioElement.removeEventListener(r.event,r.listener)}}catch(s){t=!0,i=s}finally{try{e||null==a.return||a.return()}finally{if(t)throw i}}n.audioEventListeners=[]},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentWillUnmount",value:function(){this.removeAudioEventListeners()}},{key:"render",value:function(){var e=this.state,t=e.wantsToPlay,n=e.isPlaying,i=e.context,a=e.source;return o.a.createElement(o.a.Fragment,null,o.a.createElement("audio",{ref:this.audioRef,id:"audioElement",src:"http://snds.blackwright.com",preload:"auto",crossOrigin:"anonymous"}),a&&i&&o.a.createElement(K,{context:i,source:a}),o.a.createElement(te,{wantsToPlay:t,isPlaying:n,togglePlay:this.togglePlay}))}}]),t}(i.Component);n(53),n(54);r.a.render(o.a.createElement(s.a,{store:m},o.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.95667bfb.chunk.js.map