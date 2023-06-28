(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[36],{1616:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var r,a,i=t(2007),o=t.n(i),c=t(168),s=t(5706),u=s.Z.div(r||(r=(0,c.Z)(["\n  padding: 40px;\n"]))),p=s.Z.p(a||(a=(0,c.Z)(["\n  text-align: center;\n  color: #a4161a;\n  font-size: 30px;\n  font-weight: 500;\n"]))),l=t(184);function f(n){var e=n.message;return(0,l.jsx)(u,{children:(0,l.jsx)(p,{children:e})})}Error.propTypes={message:o().string.isRequired}},1104:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var r,a,i,o,c=t(168),s=t(5706),u=s.Z.ul(r||(r=(0,c.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  grid-gap: 16px;\n  margin: 20px auto;\n  padding: 0;\n  list-style: none;\n"]))),p=t(7689),l=t(1087),f=s.Z.li(a||(a=(0,c.Z)(["\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),d=s.Z.img(i||(i=(0,c.Z)(["\n  display: block;\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n"]))),g=s.Z.h2(o||(o=(0,c.Z)(["\n  padding: 5px 10px;\n  font-size: 21px;\n  color: #42362b;\n"]))),x=t(184);function h(n){var e=n.id,t=n.title,r=n.poster,a=(0,p.TH)();return(0,x.jsx)(f,{children:(0,x.jsxs)(l.rU,{to:"/movies/".concat(e),state:{from:a},children:[(0,x.jsx)("div",{children:(0,x.jsx)(d,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:"{title}"})}),(0,x.jsx)(g,{children:t||"No tittle"})]})})}function m(n){var e=n.movies;return(0,x.jsx)(u,{children:e.map((function(n){var e=n.id,t=n.original_title,r=n.poster_path;return(0,x.jsx)(h,{id:e,title:t,poster:r},e)}))})}},6316:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var r,a,i,o,c=t(5861),s=t(9439),u=t(4687),p=t.n(u),l=t(2791),f=t(1087),d=t(1104),g=t(1616),x=t(168),h=t(5706),m=h.Z.div(r||(r=(0,x.Z)(["\n  width: 320px;\n  margin: 30px auto;\n"]))),v=h.Z.form(a||(a=(0,x.Z)(["\n  position: relative;\n"]))),b=h.Z.input(i||(i=(0,x.Z)(["\n  width: 100%;\n  padding: 4px 2px;\n  border: 0;\n  border-bottom: 1px solid #5db09d;\n  background-color: transparent;\n  color: #42362b;\n  font-size: 14px;\n\n  transition: border 250ms linear;\n\n  &:focus {\n    outline: none;\n    border-color: #42362b;\n  }\n\n  &::placeholder {\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 1.17;\n    color: #42362b;\n  }\n"]))),y=h.Z.button(o||(o=(0,x.Z)(["\n  position: absolute;\n  right: -2px;\n  bottom: 4px;\n  padding: 2px;\n  width: 16px;\n  height: 16px;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n\n  background-image: url(https://cdn-icons-png.flaticon.com/512/151/151773.png);\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"]))),w=t(184);function Z(n){var e=n.formSubmit,t=n.errorMessage,r=(0,l.useState)(""),a=(0,s.Z)(r,2),i=a[0],o=a[1];return(0,w.jsx)(m,{children:(0,w.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==i?(e(i),o("")):t()},children:[(0,w.jsx)(b,{type:"text",name:"query",autoFocus:!0,value:i,onChange:function(n){o(n.target.value.toLowerCase().trim())},autoComplete:"off",placeholder:"find a movie"}),(0,w.jsx)(y,{type:"submit"})]})})}var k=t(7275),_=t(1095),j="idle",S="pending",T="rejected",C="resolved";function O(){var n=(0,l.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,f.lr)(),i=(0,s.Z)(a,2),o=i[0],u=i[1],x=(0,l.useState)(null),h=(0,s.Z)(x,2),m=h[0],v=h[1],b=(0,l.useState)(j),y=(0,s.Z)(b,2),O=y[0],P=y[1];(0,l.useEffect)((function(){var n=o.get("query"),e=function(){var e=(0,c.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return P(S),e.prev=3,e.next=6,(0,_.aP)(n);case 6:if(t=e.sent,r(t),P(C),v(""),0!==t.length){e.next=15;break}return r([]),v("Content missing, try another query."),P(T),e.abrupt("return");case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),P(T),v(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]);return(0,w.jsxs)("div",{children:[(0,w.jsx)(Z,{formSubmit:function(n){u({query:n})},errorMessage:function(){r([]),P(T),v("You entered an empty row!")}}),O===T&&(0,w.jsx)(g.Z,{message:m}),O===C&&(0,w.jsx)(d.Z,{movies:t}),O===S&&(0,w.jsx)(k.Z,{})]})}},1095:function(n,e,t){"use strict";t.d(e,{DG:function(){return l},Hx:function(){return d},Kd:function(){return f},aP:function(){return p},wr:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),o=t(4569),c=t.n(o),s="cca79e12b25cdd9f67fc795a1689f5d9";c().defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/movie/day?api_key=".concat(s,"&language=uk&page=1"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var a,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("search/movie?api_key=".concat(s,"&language=en-US&include_adult=false"),{params:{query:e,page:t,limit:r}});case 2:return a=n.sent,o=a.data,n.abrupt("return",o.results);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,a={originalTitle:r.original_title,title:r.title,genres:r.genres,overview:r.overview,poster:r.poster_path,releaseDate:r.release_date.slice(0,4),voteAverage:r.vote_average},n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,a=r.cast.map((function(n){return{id:n.id,name:n.name,profilePath:n.profile_path}})),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,a=r.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=36.7281d8b5.chunk.js.map