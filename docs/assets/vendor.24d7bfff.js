function g(){}const F=t=>t;function K(t){return t()}function H(){return Object.create(null)}function w(t){t.forEach(K)}function L(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function vt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function rt(t){return Object.keys(t).length===0}function it(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Et(t,e,n){t.$$.on_destroy.push(it(e,n))}function kt(t,e,n){return t.set(n),e}const Q=typeof window!="undefined";let U=Q?()=>window.performance.now():()=>Date.now(),M=Q?t=>requestAnimationFrame(t):g;const b=new Set;function V(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&M(V)}function W(t){let e;return b.size===0&&M(V),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}function ot(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=at("style");return ct(X(t),e),e.sheet}function ct(t,e){ot(t.head||t,e)}function Ct(t,e,n){t.insertBefore(e,n||null)}function ft(t){t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function St(){return Y(" ")}function jt(){return Y("")}function qt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Rt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function lt(t){return Array.from(t.childNodes)}function zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e){t.value=e==null?"":e}function Ot(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function dt(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}const R=new Map;let z=0;function _t(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ht(t,e){const n={stylesheet:ut(e),rules:{}};return R.set(t,n),n}function Z(t,e,n,s,i,o,f,a=0){const u=16.666/s;let r=`{
`;for(let m=0;m<=1;m+=u){const C=e+(n-e)*o(m);r+=m*100+`%{${f(C,1-C)}}
`}const l=r+`100% {${f(n,1-n)}}
}`,c=`__svelte_${_t(l)}_${a}`,d=X(t),{stylesheet:_,rules:h}=R.get(d)||ht(d,t);h[c]||(h[c]=!0,_.insertRule(`@keyframes ${c} ${l}`,_.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${c} ${s}ms linear ${i}ms 1 both`,z+=1,c}function D(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),z-=i,z||mt())}function mt(){M(()=>{z||(R.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),R.clear())})}let T;function E(t){T=t}const v=[],I=[],j=[],J=[],pt=Promise.resolve();let B=!1;function gt(){B||(B=!0,pt.then(tt))}function k(t){j.push(t)}const P=new Set;let S=0;function tt(){const t=T;do{for(;S<v.length;){const e=v[S];S++,E(e),yt(e.$$)}for(E(null),v.length=0,S=0;I.length;)I.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];P.has(n)||(P.add(n),n())}j.length=0}while(v.length);for(;J.length;)J.pop()();B=!1,P.clear(),E(t)}function yt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let x;function et(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function N(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const q=new Set;let y;function Pt(){y={r:0,c:[],p:y}}function Dt(){y.r||w(y.c),y=y.p}function $t(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Bt(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),y.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const nt={duration:0};function Ft(t,e,n){let s=e(t,n),i=!1,o,f,a=0;function u(){o&&D(t,o)}function r(){const{delay:c=0,duration:d=300,easing:_=F,tick:h=g,css:p}=s||nt;p&&(o=Z(t,0,1,d,c,_,p,a++)),h(0,1);const m=U()+c,C=m+d;f&&f.abort(),i=!0,k(()=>N(t,!0,"start")),f=W(O=>{if(i){if(O>=C)return h(1,0),N(t,!0,"end"),u(),i=!1;if(O>=m){const G=_((O-m)/d);h(G,1-G)}}return i})}let l=!1;return{start(){l||(l=!0,D(t),L(s)?(s=s(),et().then(r)):r())},invalidate(){l=!1},end(){i&&(u(),i=!1)}}}function Lt(t,e,n){let s=e(t,n),i=!0,o;const f=y;f.r+=1;function a(){const{delay:u=0,duration:r=300,easing:l=F,tick:c=g,css:d}=s||nt;d&&(o=Z(t,1,0,r,u,l,d));const _=U()+u,h=_+r;k(()=>N(t,!1,"start")),W(p=>{if(i){if(p>=h)return c(0,1),N(t,!1,"end"),--f.r||w(f.c),!1;if(p>=_){const m=l((p-_)/r);c(1-m,m)}}return i})}return L(s)?et().then(()=>{s=s(),a()}):a(),{end(u){u&&s.tick&&s.tick(1,0),i&&(o&&D(t,o),i=!1)}}}function Mt(t){t&&t.c()}function bt(t,e,n,s){const{fragment:i,on_mount:o,on_destroy:f,after_update:a}=t.$$;i&&i.m(e,n),s||k(()=>{const u=o.map(K).filter(L);f?f.push(...u):w(u),t.$$.on_mount=[]}),a.forEach(k)}function wt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(v.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Tt(t,e,n,s,i,o,f,a=[-1]){const u=T;E(t);const r=t.$$={fragment:null,ctx:null,props:o,update:g,not_equal:i,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:H(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};f&&f(r.root);let l=!1;if(r.ctx=n?n(t,e.props||{},(c,d,..._)=>{const h=_.length?_[0]:d;return r.ctx&&i(r.ctx[c],r.ctx[c]=h)&&(!r.skip_bound&&r.bound[c]&&r.bound[c](h),l&&xt(t,c)),d}):[],r.update(),l=!0,w(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){const c=lt(e.target);r.fragment&&r.fragment.l(c),c.forEach(ft)}else r.fragment&&r.fragment.c();e.intro&&$t(t.$$.fragment),bt(t,e.target,e.anchor,e.customElement),tt()}E(u)}class Gt{$destroy(){wt(this,1),this.$destroy=g}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function Ht(t,e=g){let n;const s=new Set;function i(a){if(st(t,a)&&(t=a,n)){const u=!$.length;for(const r of s)r[1](),$.push(r,t);if(u){for(let r=0;r<$.length;r+=2)$[r][0]($[r+1]);$.length=0}}}function o(a){i(a(t))}function f(a,u=g){const r=[a,u];return s.add(r),s.size===1&&(n=e(i)||g),a(t),()=>{s.delete(r),s.size===0&&(n(),n=null)}}return{set:i,update:o,subscribe:f}}function It(t,{delay:e=0,duration:n=400,easing:s=F}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:o=>`opacity: ${o*i}`}}export{wt as A,zt as B,At as C,Et as D,Pt as E,kt as F,Gt as S,St as a,Rt as b,Ct as c,ot as d,at as e,Nt as f,ft as g,vt as h,Tt as i,k as j,Ft as k,qt as l,It as m,g as n,Lt as o,Ot as p,Mt as q,w as r,st as s,Y as t,jt as u,bt as v,Ht as w,Bt as x,Dt as y,$t as z};