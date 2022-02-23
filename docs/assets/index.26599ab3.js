import{S as P,i as j,s as F,e as m,a as b,t as M,b as a,c as z,d as c,f as O,l as q,n as N,g as A,r as T,h as H,j as G,k as X,m as B,o as I,p as U,q as C,u as D,v as Y,w as V}from"./vendor.6b757219.js";const Z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}};Z();function x(o){let e,s,i,t,l,n,h,r,v,w,y,p,E,k,S;return{c(){e=m("div"),s=m("input"),i=b(),t=m("button"),t.textContent="Search",l=b(),n=m("div"),h=m("label"),r=m("input"),v=M(`
            Google`),w=b(),y=m("label"),p=m("input"),E=M(`
            DuckDuckGo`),a(s,"id","searchInput"),a(s,"type","text"),a(s,"class","svelte-1ufw2po"),a(t,"class","svelte-1ufw2po"),a(r,"type","radio"),a(r,"name","sEngine"),r.__value=1,r.value=r.__value,a(r,"class","svelte-1ufw2po"),o[6][0].push(r),a(h,"class","svelte-1ufw2po"),a(p,"type","radio"),a(p,"name","sEngine"),p.__value=2,p.value=p.__value,a(p,"class","svelte-1ufw2po"),o[6][0].push(p),a(y,"class","svelte-1ufw2po"),a(n,"id","radio-div"),a(n,"class","svelte-1ufw2po")},m(g,$){z(g,e,$),c(e,s),O(s,o[0]),c(e,i),c(e,t),c(e,l),c(e,n),c(n,h),c(h,r),r.checked=r.__value===o[1],c(h,v),c(n,w),c(n,y),c(y,p),p.checked=p.__value===o[1],c(y,E),k||(S=[q(s,"input",o[4]),q(s,"click",o[3]),q(t,"click",o[2]),q(r,"change",o[5]),q(p,"change",o[7])],k=!0)},p(g,[$]){$&1&&s.value!==g[0]&&O(s,g[0]),$&2&&(r.checked=r.__value===g[1]),$&2&&(p.checked=p.__value===g[1])},i:N,o:N,d(g){g&&A(e),o[6][0].splice(o[6][0].indexOf(r),1),o[6][0].splice(o[6][0].indexOf(p),1),k=!1,T(S)}}}function ee(o,e,s){let i="search me",t=1;function l(){t===1?window.open(`https://www.google.com/search?q=${i}&btnG=Search`,"_self"):window.open(`https://duckduckgo.com/?q=${i}&t=h_&ia=web`,"_self")}function n(){s(0,i="")}const h=[[]];function r(){i=this.value,s(0,i)}function v(){t=this.__value,s(1,t)}function w(){t=this.__value,s(1,t)}return[i,t,l,n,r,v,h,w]}class te extends P{constructor(e){super();j(this,e,ee,x,F,{})}}function ne(o){let e,s,i,t;return{c(){e=m("div"),s=m("a"),i=m("img"),a(i,"class","icon svelte-1w85u9f"),H(i.src,t=o[1])||a(i,"src",t),a(i,"alt",""),a(s,"href",o[0]),a(e,"class","icon-div svelte-1w85u9f")},m(l,n){z(l,e,n),c(e,s),c(s,i)},p(l,[n]){n&2&&!H(i.src,t=l[1])&&a(i,"src",t),n&1&&a(s,"href",l[0])},i:N,o:N,d(l){l&&A(e)}}}function se(o,e,s){let{web_link:i}=e,{icon_src:t}=e;return o.$$set=l=>{"web_link"in l&&s(0,i=l.web_link),"icon_src"in l&&s(1,t=l.icon_src)},[i,t]}class J extends P{constructor(e){super();j(this,e,se,ne,F,{web_link:0,icon_src:1})}}function Q(o,e,s){const i=o.slice();return i[6]=e[s],i}function R(o){let e,s,i;var t=J;function l(n){return{props:{web_link:n[6].link,icon_src:n[6].src}}}return t&&(e=new t(l(o))),{c(){e&&G(e.$$.fragment),s=X()},m(n,h){e&&B(e,n,h),z(n,s,h),i=!0},p(n,h){const r={};if(h&1&&(r.web_link=n[6].link),h&1&&(r.icon_src=n[6].src),t!==(t=J)){if(e){V();const v=e;I(v.$$.fragment,1,0,()=>{D(v,1)}),U()}t?(e=new t(l(n)),G(e.$$.fragment),C(e.$$.fragment,1),B(e,s.parentNode,s)):e=null}else t&&e.$set(r)},i(n){i||(e&&C(e.$$.fragment,n),i=!0)},o(n){e&&I(e.$$.fragment,n),i=!1},d(n){n&&A(s),e&&D(e,n)}}}function le(o){let e,s,i,t,l,n,h,r,v,w,y,p,E,k,S,g,$;t=new te({});let L=o[0],f=[];for(let u=0;u<L.length;u+=1)f[u]=R(Q(o,L,u));const W=u=>I(f[u],1,1,()=>{f[u]=null});return{c(){e=m("main"),s=m("span"),s.textContent="new tab",i=b(),G(t.$$.fragment),l=b(),n=m("input"),h=b(),r=m("input"),v=b(),w=m("button"),w.textContent="add link",y=b(),p=m("button"),p.textContent="rm link",E=b(),k=m("div");for(let u=0;u<f.length;u+=1)f[u].c();a(s,"class","svelte-fqzqt8"),a(n,"type","text"),a(n,"placeholder","paste link"),a(r,"type","text"),a(r,"placeholder","paste icon link"),a(k,"class","svelte-fqzqt8"),a(e,"class","svelte-fqzqt8")},m(u,d){z(u,e,d),c(e,s),c(e,i),B(t,e,null),c(e,l),c(e,n),O(n,o[1]),c(e,h),c(e,r),O(r,o[2]),c(e,v),c(e,w),c(e,y),c(e,p),c(e,E),c(e,k);for(let _=0;_<f.length;_+=1)f[_].m(k,null);S=!0,g||($=[q(n,"input",o[4]),q(r,"input",o[5]),q(w,"click",o[3])],g=!0)},p(u,[d]){if(d&2&&n.value!==u[1]&&O(n,u[1]),d&4&&r.value!==u[2]&&O(r,u[2]),d&1){L=u[0];let _;for(_=0;_<L.length;_+=1){const K=Q(u,L,_);f[_]?(f[_].p(K,d),C(f[_],1)):(f[_]=R(K),f[_].c(),C(f[_],1),f[_].m(k,null))}for(V(),_=L.length;_<f.length;_+=1)W(_);U()}},i(u){if(!S){C(t.$$.fragment,u);for(let d=0;d<L.length;d+=1)C(f[d]);S=!0}},o(u){I(t.$$.fragment,u),f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)I(f[d]);S=!1},d(u){u&&A(e),D(t),Y(f,u),g=!1,T($)}}}function ie(o,e,s){let i=[{link:"https://www.youtube.com/",src:"./src/assets/images/youtube.png"},{link:"https://github.com/tasmankingsley",src:"./src/assets/images/github.png"},{link:"https://www.netflix.com/browse",src:"./src/assets/images/netflix.png"},{link:"https://tasmankingsley.github.io/",src:"./src/assets/images/profile.png"}],t="",l="";function n(){s(0,i=[...i,{link:t,src:l}]),s(1,t=""),s(2,l="")}function h(){t=this.value,s(1,t)}function r(){l=this.value,s(2,l)}return[i,t,l,n,h,r]}class oe extends P{constructor(e){super();j(this,e,ie,le,F,{})}}new oe({target:document.getElementById("app")});