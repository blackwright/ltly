(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(42)},25:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(8),r=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(2),c=n(3),u=n(5),l=n(4),d=n(6),m=n(9),h=n.n(m),v=(n(25),function(e){var t=e.show;return a.a.createElement("div",{className:h()("loading",{show:t})},a.a.createElement("span",{className:"loading-dot"}),a.a.createElement("span",{className:"loading-dot"}),a.a.createElement("span",{className:"loading-dot"}))}),f=n(10);n(35);function w(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=t=function(t){function n(){var e,t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(a)))).state={delayedAfterReflow:!1},t}return Object(d.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.setTimeout(function(){e.setState({delayedAfterReflow:!0})},0)}},{key:"render",value:function(){var t=this.props,n=t.data,o=t.timeout,r=t.isTransitioning,s=this.state.delayedAfterReflow,c=i.smoothing?function(e,t){return e.map(function(n,i){for(var a=[],o=i-t;o<i+t;){var r=e[o]||128;a.push(r),o+=1}return function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n];return t/e.length}(a)})}(n,i.smoothing):n;return s&&a.a.createElement(e,{data:c,style:{transition:"transform ".concat(o,"ms linear")},isTransitioning:r})}}]),n}(a.a.Component),t.defaultProps={data:new Uint8Array,timeout:N,isTransitioning:!1},n}var p=n(19),y=[["#0E9AA7","#F6CD61","#FE8A71"],["#EE4540","#801336","#2D142C"],["#8FB9A8","#FDFBD4","#FCD0BA"],["#AC6D83","#685D79","#465C7A"],["#F36E38","#EF4648","#582841"],["#F1F1F1","#9BD7D1","#305D7A"],["#DEA5B6","#F3CD8C","#F2E9C2"],["#E27B47","#EFCA58","#46B29E"],["#2E7345","#2E9975","#2DB3B3"],["#52A3CC","#7EA1E5","#AAAAF2"],["#CC5285","#CC5285","#F2BCAA"],["#D8E0BB","#B6CEC7","#86A3C3"]];y.map(function(e,t){return{id:t,colorTriple:e}});function g(){return y[Math.floor(Math.random()*y.length)]}function E(){return function(e,t){for(var n=[];n.length<e;){var i=g(),a=i[Math.floor(Math.random()*i.length)];if(t&&n.includes(a))break;n.push(a)}return n}(1)[0]}n(36);var b=10,A=0,x=5,C=w(function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).ref=a.a.createRef(),n.canvas=void 0,n.ctx=void 0,n.intervalId=void 0,n.resizeTimeoutId=void 0,n.onResize=function(){window.clearTimeout(n.resizeTimeoutId);var e=n.canvas;n.resizeTimeoutId=window.setTimeout(function(){e.width=window.innerWidth,e.height=window.innerHeight},500)},n.paint=function(){var e=n.props.data,t=n.canvas,i=n.ctx,a=function(){var e=Object(p.a)(g());return Math.random()<=.5?e.reverse():e}();i.lineWidth=b,i.lineCap="round";var o=t.width/e.length;a.forEach(function(n,r){i.strokeStyle=n,i.beginPath();var s=r*A;i.moveTo(s,t.height/2),e.forEach(function(e){var n=e/255*t.height-x*a.length/2;i.lineTo(s,n+r*(x*a.length/2)),s+=o}),i.lineTo(s,t.height/2),i.stroke()})},n.fadeOut=function(){var e=n.ctx,t=n.canvas;e.fillStyle="rgba(0, 0, 0, 0.1)",e.fillRect(0,0,t.width,t.height)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),this.canvas=this.ref.current,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="#050505",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.intervalId=window.setInterval(this.fadeOut,7)}},{key:"componentDidUpdate",value:function(){this.paint()}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.intervalId),window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this.props.style;return a.a.createElement("div",{className:"visualization waveform",style:e},a.a.createElement("div",{className:"backdrop"}),a.a.createElement("canvas",{ref:this.ref}),";")}}]),t}(a.a.Component),{smoothing:100}),k=n(18),T=(n(37),w(function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={size:0},n.color=E(),n.lastColorChangeTimestamp=Date.now(),n.onResize=function(){var e=window,t=e.innerWidth,i=e.innerHeight,a=Math.max(t,i);n.setState({size:2*a})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),this.onResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){for(var e=this.props,t=e.data,n=e.isTransitioning,i=this.state.size,o={},r=0;r<13;)o[r]=0,r+=1;t.forEach(function(e){for(var t=0;t<13;){var n=256/13*(t+1);if(Math.abs(e-128)>10&&e<=n){o[t]+=1;break}t+=1}});var s=Object.values(o).reduce(function(e,t){return t>40?e+1:e},0),c=Date.now();if(!n&&s/13>.3&&c-this.lastColorChangeTimestamp>200){var u;do{u=E()}while(this.color===u);this.color=u,this.lastColorChangeTimestamp=c}var l=Object.entries(o).map(function(e,t){var n=Object(k.a)(e,2),o=n[0],r=n[1],s=(+o+1)*i/13;return a.a.createElement("div",{key:o,className:"drummer-container",style:{width:"".concat(s,"px"),height:"".concat(s,"px"),opacity:(13-t)/13*.5*.25}},a.a.createElement("div",{className:h()("beat",{hit:r>40})}))});return a.a.createElement("div",{className:"visualization drummer",style:this.props.style},l,a.a.createElement("div",{className:"overlay",style:{backgroundColor:this.color}}))}}]),t}(a.a.Component),{smoothing:200})),O=n(1),j=new O.c("#666");var D=1500,M=200,S=0,z=.05;function F(e){var t,n=Date.now(),i=0,a=!1,o={x:0,y:0},r=function(){var e=new O.l(40,100,100);e.computeVertexNormals();var t=new O.f({wireframe:!0});return new O.e(e,t)}(),s=function(e){var t=e.geometry,n=new O.l(t.parameters.radius,t.parameters.widthSegments,t.parameters.heightSegments).vertices,i=new Float32Array(3*n.length);n.forEach(function(e,t){e.toArray(i,3*t)});var a=new O.b;a.addAttribute("position",new O.a(i,3));var o=new O.i({size:.2,map:(new O.m).load("assets/images/point.png"),alphaTest:.5,color:j,transparent:!0});return new O.h(a,o)}(r),c=new O.g(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.set(0,M,0),c.lookAt(new O.n(0,0,0));var u=function(){var e=window,t=e.innerWidth,n=e.innerHeight,i=e.devicePixelRatio,a=new O.o({alpha:!0});return a.setSize(t,n),a.setPixelRatio(i),a.setClearColor(0,0),a}();e.appendChild(u.domElement);var l=new O.k;l.add(s);var d=function(){function e(){a=!0}function t(){a=!1}function n(e){var t={x:e.offsetX-o.x,y:e.offsetY-o.y};if(a){var n=(new O.j).setFromEuler(new O.d(L(.25*t.y),L(.25*t.x),0,"XYZ"));s.quaternion.multiplyQuaternions(n,s.quaternion)}o.x=e.offsetX,o.y=e.offsetY}return u.domElement.addEventListener("mousedown",e),u.domElement.addEventListener("mouseup",t),u.domElement.addEventListener("mousemove",n),function(){u.domElement.removeEventListener("mousedown",e),u.domElement.removeEventListener("mouseup",t),u.domElement.removeEventListener("mousemove",n)}}(),m=function(){function e(e){e.deltaY>0?c.position.y=Math.min(c.position.y+2,M):c.position.y=Math.max(c.position.y-2,S)}return u.domElement.addEventListener("wheel",e),function(){u.domElement.removeEventListener("wheel",e)}}();function h(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),u.render(l,c)}return window.addEventListener("resize",h),{animate:function e(){s.rotateY(-.002),Date.now()-n>D&&s.rotateX(.002),(i+=.005)>=2*Math.PI&&(i=0),c.translateY(Math.cos(i)*z),c.translateX(Math.cos(i)*z),c.translateZ(Math.cos(i)*z*5),u.render(l,c),t=window.requestAnimationFrame(e)},stop:function(){window.cancelAnimationFrame(t),window.removeEventListener("resize",h),e.removeChild(u.domElement),d(),m(),l.remove(s)},getSphereGeometry:function(){return r.geometry},getHalpernGeometry:function(){return s.geometry}}}function L(e){return e*Math.PI/180}var I=n(17),R=n.n(I),P=(n(39),.01),U=1,B=[w(function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).rendererContainer=void 0,n.currentAnimationFrameId=void 0,n.originalVertices=void 0,n.getSphereGeometry=void 0,n.getHalpernGeometry=void 0,n.onUnmount=void 0,n.rendererRef=a.a.createRef(),n.updateVertices=function(e){if(null!=n.getSphereGeometry&&null!=n.getHalpernGeometry&&null!=n.originalVertices){var t=n.getSphereGeometry(),i=Math.floor(e.length/t.parameters.widthSegments),a=(t.vertices.length-2)/(t.parameters.widthSegments-1);t.vertices.forEach(function(t,o){var r=Math.ceil(o/a),s=r*i,c=Math.min(r,a-r);t.copy(n.originalVertices[o]);var u=Math.abs(e[s]-128)/255*c*P+U;t.multiplyScalar(u)}),n.getHalpernGeometry().fromGeometry(t),t.verticesNeedUpdate=!0}},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.rendererContainer=this.rendererRef.current;var e=F(this.rendererContainer),t=e.animate,n=e.stop,i=e.getSphereGeometry,a=e.getHalpernGeometry;this.onUnmount=n,this.getSphereGeometry=i,this.getHalpernGeometry=a,this.originalVertices=R()(i().vertices),t()}},{key:"componentDidUpdate",value:function(){this.updateVertices(this.props.data)}},{key:"componentWillUnmount",value:function(){this.onUnmount&&this.onUnmount()}},{key:"render",value:function(){return a.a.createElement("div",{className:"visualization halpern",ref:this.rendererRef,style:this.props.style})}}]),t}(a.a.Component),{smoothing:50}),C,T],N=500,W=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={prevIndex:null,currentIndex:0,isTransitioning:!1},n.onKeyDown=function(e){switch(e.which){case 37:case 38:n.goToPrevVisualization();break;case 39:case 40:n.goToNextVisualization()}},n.goToPrevVisualization=function(){n.state.isTransitioning||n.setState(function(e){return{prevIndex:e.currentIndex,currentIndex:e.currentIndex-1}})},n.goToNextVisualization=function(){n.state.isTransitioning||n.setState(function(e){return{prevIndex:e.currentIndex,currentIndex:e.currentIndex+1}})},n.startTransition=function(){return n.setState({isTransitioning:!0})},n.endTransition=function(){return n.setState({isTransitioning:!1})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e,t,n=this.props.data,i=this.state,o=i.prevIndex,r=i.currentIndex,s=i.isTransitioning,c=null!=o&&o<r?"next":"prev",u=c?"visualization-".concat(c):void 0,l=(r%(e=B.length)+e)%e,d=B[l];return a.a.createElement(f.TransitionGroup,{component:null,childFactory:(t=u,function(e){return a.a.cloneElement(e,{classNames:t})})},a.a.createElement(f.CSSTransition,{key:l,timeout:N,classNames:u||"",onExit:this.startTransition,onExited:this.endTransition,mountOnEnter:!0,unmountOnExit:!0},a.a.createElement(d,{data:n,timeout:N,isTransitioning:s})))}}]),t}(a.a.Component),G=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={data:new Uint8Array(0)},n.analyser=n.props.context.createAnalyser(),n.dataArray=new Uint8Array(n.analyser.frequencyBinCount),n.currentAnimationFrameId=void 0,n.tick=function(){n.analyser.getByteTimeDomainData(n.dataArray),n.setState({data:n.dataArray}),n.currentAnimationFrameId=window.requestAnimationFrame(n.tick)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.context,n=e.source;this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=1,n.connect(this.analyser),this.analyser.connect(t.destination),this.currentAnimationFrameId=window.requestAnimationFrame(this.tick)}},{key:"componentWillUnmount",value:function(){var e=this.props.source;null!=this.currentAnimationFrameId&&window.cancelAnimationFrame(this.currentAnimationFrameId),null!=this.analyser&&this.analyser.disconnect(),e&&e.disconnect()}},{key:"render",value:function(){var e=this.state.data;return a.a.createElement(W,{data:e})}}]),t}(i.Component),H=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={wantsToPlay:!1,isPlaying:!1,context:void 0,source:void 0},n.audioRef=a.a.createRef(),n.audioEventListeners=[],n.lastMouseDownTimestamp=void 0,n.audioElement=void 0,n.initialize=function(){var e=n.audioRef.current;n.audioElement=e;var t=new(window.AudioContext||window.webkitAudioContext),i=t.createMediaElementSource(e);n.addAudioEventListeners([{event:"playing",listener:n.onPlay},{event:"pause",listener:n.onPause},{event:"error",listener:n.onError}]),n.setState({context:t,source:i})},n.onMouseDown=function(e){1===e.which&&(n.lastMouseDownTimestamp=Date.now())},n.onMouseUp=function(){n.lastMouseDownTimestamp&&Date.now()-n.lastMouseDownTimestamp<250&&n.onClick()},n.onClick=function(){null==n.audioElement&&n.initialize(),n.audioElement.paused?(n.setState({wantsToPlay:!0}),n.audioElement.play()):(n.setState({wantsToPlay:!1}),n.audioElement.pause())},n.onPlay=function(){return n.setState({isPlaying:!0})},n.onPause=function(){return n.setState({isPlaying:!1})},n.onError=console.error,n.addAudioEventListeners=function(e){var t=!0,i=!1,a=void 0;try{for(var o,r=e[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var s=o.value;n.audioEventListeners.push(s),n.audioElement.addEventListener(s.event,s.listener)}}catch(c){i=!0,a=c}finally{try{t||null==r.return||r.return()}finally{if(i)throw a}}},n.removeAudioEventListeners=function(){var e=!0,t=!1,i=void 0;try{for(var a,o=n.audioEventListeners[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var r=a.value;n.audioElement.removeEventListener(r.event,r.listener)}}catch(s){t=!0,i=s}finally{try{e||null==o.return||o.return()}finally{if(t)throw i}}n.audioEventListeners=[]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp)}},{key:"componentWillUnmount",value:function(){this.removeAudioEventListeners(),window.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp)}},{key:"render",value:function(){var e=this.state,t=e.wantsToPlay,n=e.isPlaying,i=e.context,o=e.source;return a.a.createElement(a.a.Fragment,null,a.a.createElement("audio",{ref:this.audioRef,id:"audioElement",src:"http://snds.blackwright.com",preload:"auto",crossOrigin:"anonymous"}),o&&i&&a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{context:i,source:o}),t&&a.a.createElement(v,{show:!n})),!t&&a.a.createElement("div",{id:"play"}))}}]),t}(i.Component);n(40),n(41);r.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.bf226f79.chunk.js.map