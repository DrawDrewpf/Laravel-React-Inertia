import{r as s,U as m,b as Ze,j as h,W as Je}from"./app-DVTt4AEe.js";import{T as Qe,I as et}from"./TextInput-B4wcrLll.js";import{I as tt}from"./InputLabel-CXhYqreY.js";import{s as oe,W as x,H as $,o as y,y as L,n as C,a as K,b as _,u as Y,t as le,T as nt,l as ae,p as rt,f as xe,M as pe,c as $e,i as V,d as ot,X as Te,L as G}from"./transition-CaB3euXO.js";function z(e){return oe.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let lt=s.createContext(void 0);function at(){return s.useContext(lt)}let it="span";var X=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(X||{});function ut(e,t){var n;let{features:r=1,...o}=e,l={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return $({ourProps:l,theirProps:o,slot:{},defaultTag:it,name:"Hidden"})}let ee=x(ut),ie=s.createContext(null);ie.displayName="DescriptionContext";function Fe(){let e=s.useContext(ie);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Fe),t}return e}function st(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=y(l=>(t(i=>[...i,l]),()=>t(i=>{let u=i.slice(),a=u.indexOf(l);return a!==-1&&u.splice(a,1),u}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return m.createElement(ie.Provider,{value:o},n.children)},[t])]}let ct="p";function dt(e,t){let n=s.useId(),r=at(),{id:o=`headlessui-description-${n}`,...l}=e,i=Fe(),u=L(t);C(()=>i.register(o),[o,i.register]);let a=r||!1,d=s.useMemo(()=>({...i.slot,disabled:a}),[i.slot,a]),c={ref:u,...i.props,id:o};return $({ourProps:c,theirProps:l,slot:d,defaultTag:ct,name:i.name||"Description"})}let ft=x(dt),mt=Object.assign(ft,{});var Pe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Pe||{});let pt=s.createContext(()=>{});function ht({value:e,children:t}){return m.createElement(pt.Provider,{value:e},t)}let vt=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Le(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let i=t[o].call(n,...l);i&&(n=i,r.forEach(u=>u()))}}}function Se(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let gt=new vt(()=>Le(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function A(e,t){let n=gt.get(t),r=s.useId(),o=Se(n);if(C(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let l=o.indexOf(r),i=o.length;return l===-1&&(l=i,i+=1),l===i-1}let te=new Map,U=new Map;function he(e){var t;let n=(t=U.get(e))!=null?t:0;return U.set(e,n+1),n!==0?()=>ve(e):(te.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>ve(e))}function ve(e){var t;let n=(t=U.get(e))!=null?t:1;if(n===1?U.delete(e):U.set(e,n-1),n!==1)return;let r=te.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,te.delete(e))}function wt(e,{allowed:t,disallowed:n}={}){let r=A(e,"inert-others");C(()=>{var o,l;if(!r)return;let i=K();for(let a of(o=n==null?void 0:n())!=null?o:[])a&&i.add(he(a));let u=(l=t==null?void 0:t())!=null?l:[];for(let a of u){if(!a)continue;let d=z(a);if(!d)continue;let c=a.parentElement;for(;c&&c!==d.body;){for(let v of c.children)u.some(p=>v.contains(p))||i.add(he(v));c=c.parentElement}}return i.dispose},[r,t,n])}function Et(e,t,n){let r=_(o=>{let l=o.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&n()});s.useEffect(()=>{if(!e)return;let o=t===null?null:t instanceof HTMLElement?t:t.current;if(!o)return;let l=K();if(typeof ResizeObserver<"u"){let i=new ResizeObserver(()=>r.current(o));i.observe(o),l.add(()=>i.disconnect())}if(typeof IntersectionObserver<"u"){let i=new IntersectionObserver(()=>r.current(o));i.observe(o),l.add(()=>i.disconnect())}return()=>l.dispose()},[t,r,e])}let q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),yt=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(T||{}),ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ne||{}),bt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(bt||{});function xt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(q)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function $t(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(yt)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var De=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(De||{});function Tt(e,t=0){var n;return e===((n=z(e))==null?void 0:n.body)?!1:Y(t,{0(){return e.matches(q)},1(){let r=e;for(;r!==null;){if(r.matches(q))return!0;r=r.parentElement}return!1}})}var Ft=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ft||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function F(e){e==null||e.focus({preventScroll:!0})}let Pt=["textarea","input"].join(",");function Lt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Pt))!=null?n:!1}function St(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let i=o.compareDocumentPosition(l);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?St(e):e:t&64?$t(e):xt(e);o.length>0&&i.length>1&&(i=i.filter(f=>!o.some(g=>g!=null&&"current"in g?(g==null?void 0:g.current)===f:g===f))),r=r??l.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,v=i.length,p;do{if(c>=v||c+v<=0)return 0;let f=a+c;if(t&16)f=(f+v)%v;else{if(f<0)return 3;if(f>=v)return 1}p=i[f],p==null||p.focus(d),c+=u}while(p!==l.activeElement);return t&6&&Lt(p)&&p.select(),2}function Me(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Dt(){return/Android/gi.test(window.navigator.userAgent)}function Mt(){return Me()||Dt()}function j(e,t,n,r){let o=_(n);s.useEffect(()=>{if(!e)return;function l(i){o.current(i)}return document.addEventListener(t,l,r),()=>document.removeEventListener(t,l,r)},[e,t,r])}function Ce(e,t,n,r){let o=_(n);s.useEffect(()=>{if(!e)return;function l(i){o.current(i)}return window.addEventListener(t,l,r),()=>window.removeEventListener(t,l,r)},[e,t,r])}const ge=30;function Ct(e,t,n){let r=A(e,"outside-click"),o=_(n),l=s.useCallback(function(a,d){if(a.defaultPrevented)return;let c=d(a);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let v=function p(f){return typeof f=="function"?p(f()):Array.isArray(f)||f instanceof Set?f:[f]}(t);for(let p of v)if(p!==null&&(p.contains(c)||a.composed&&a.composedPath().includes(p)))return;return!Tt(c,De.Loose)&&c.tabIndex!==-1&&a.preventDefault(),o.current(a,c)},[o,t]),i=s.useRef(null);j(r,"pointerdown",a=>{var d,c;i.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),j(r,"mousedown",a=>{var d,c;i.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),j(r,"click",a=>{Mt()||i.current&&(l(a,()=>i.current),i.current=null)},!0);let u=s.useRef({x:0,y:0});j(r,"touchstart",a=>{u.current.x=a.touches[0].clientX,u.current.y=a.touches[0].clientY},!0),j(r,"touchend",a=>{let d={x:a.changedTouches[0].clientX,y:a.changedTouches[0].clientY};if(!(Math.abs(d.x-u.current.x)>=ge||Math.abs(d.y-u.current.y)>=ge))return l(a,()=>a.target instanceof HTMLElement?a.target:null)},!0),Ce(r,"blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function B(...e){return s.useMemo(()=>z(...e),[...e])}function Ne(e,t,n,r){let o=_(n);s.useEffect(()=>{e=e??window;function l(i){o.current(i)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function Nt(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),l=Math.max(0,e-o);n.style(r,"paddingRight",`${l}px`)}}}function kt(){return Me()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(l=>l()).some(l=>l.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let u=K();u.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>u.dispose()))}let l=(o=window.scrollY)!=null?o:window.pageYOffset,i=null;t.addEventListener(e,"click",u=>{if(u.target instanceof HTMLElement)try{let a=u.target.closest("a");if(!a)return;let{hash:d}=new URL(a.href),c=e.querySelector(d);c&&!r(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",u=>{if(u.target instanceof HTMLElement)if(r(u.target)){let a=u.target;for(;a.parentElement&&r(a.parentElement);)a=a.parentElement;t.style(a,"overscrollBehavior","contain")}else t.style(u.target,"touchAction","none")}),t.addEventListener(e,"touchmove",u=>{if(u.target instanceof HTMLElement){if(u.target.tagName==="INPUT")return;if(r(u.target)){let a=u.target;for(;a.parentElement&&a.dataset.headlessuiPortal!==""&&!(a.scrollHeight>a.clientHeight||a.scrollWidth>a.clientWidth);)a=a.parentElement;a.dataset.headlessuiPortal===""&&u.preventDefault()}else u.preventDefault()}},{passive:!1}),t.add(()=>{var u;let a=(u=window.scrollY)!=null?u:window.pageYOffset;l!==a&&window.scrollTo(0,l),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function At(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ot(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let M=Le(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:K(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Ot(n)},o=[kt(),Nt(),At()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});M.subscribe(()=>{let e=M.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&M.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&M.dispatch("TEARDOWN",n)}});function Rt(e,t,n=()=>({containers:[]})){let r=Se(M),o=t?r.get(t):void 0,l=o?o.count>0:!1;return C(()=>{if(!(!t||!e))return M.dispatch("PUSH",t,n),()=>M.dispatch("POP",t,n)},[e,t]),l}function It(e,t,n=()=>[document.body]){let r=A(e,"scroll-lock");Rt(r,t,o=>{var l;return{containers:[...(l=o.containers)!=null?l:[],n]}})}function ue(e,t){let n=s.useRef([]),r=y(e);s.useEffect(()=>{let o=[...n.current];for(let[l,i]of t.entries())if(n.current[l]!==i){let u=r(t,o);return n.current=t,u}},[r,...t])}function jt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let P=[];jt(()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||P[0]===t.target)return;let n=t.target;n=n.closest(q),P.unshift(n??t.target),P=P.filter(r=>r!=null&&r.isConnected),P.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ke(e){let t=y(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,le(()=>{n.current&&t()})}),[t])}let Ae=s.createContext(!1);function Ht(){return s.useContext(Ae)}function we(e){return m.createElement(Ae.Provider,{value:e.force},e.children)}function Ut(e){let t=Ht(),n=s.useContext(Re),r=B(e),[o,l]=s.useState(()=>{var i;if(!t&&n!==null)return(i=n.current)!=null?i:null;if(oe.isServer)return null;let u=r==null?void 0:r.getElementById("headlessui-portal-root");if(u)return u;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let Oe=s.Fragment,Wt=x(function(e,t){let n=e,r=s.useRef(null),o=L(nt(c=>{r.current=c}),t),l=B(r),i=Ut(r),[u]=s.useState(()=>{var c;return oe.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),a=s.useContext(re),d=ae();return C(()=>{!i||!u||i.contains(u)||(u.setAttribute("data-headlessui-portal",""),i.appendChild(u))},[i,u]),C(()=>{if(u&&a)return a.register(u)},[a,u]),ke(()=>{var c;!i||!u||(u instanceof Node&&i.contains(u)&&i.removeChild(u),i.childNodes.length<=0&&((c=i.parentElement)==null||c.removeChild(i)))}),d?!i||!u?null:Ze.createPortal($({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:Oe,name:"Portal"}),u):null});function _t(e,t){let n=L(t),{enabled:r=!0,...o}=e;return r?m.createElement(Wt,{...o,ref:n}):$({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:Oe,name:"Portal"})}let Bt=s.Fragment,Re=s.createContext(null);function Vt(e,t){let{target:n,...r}=e,o={ref:L(t)};return m.createElement(Re.Provider,{value:n},$({ourProps:o,theirProps:r,defaultTag:Bt,name:"Popover.Group"}))}let re=s.createContext(null);function Yt(){let e=s.useContext(re),t=s.useRef([]),n=y(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=y(l=>{let i=t.current.indexOf(l);i!==-1&&t.current.splice(i,1),e&&e.unregister(l)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:l}){return m.createElement(re.Provider,{value:o},l)},[o])]}let Gt=x(_t),Ie=x(Vt),Xt=Object.assign(Gt,{Group:Ie});function qt(e,t=typeof document<"u"?document.defaultView:null,n){let r=A(e,"escape");Ne(t,"keydown",o=>{r&&(o.defaultPrevented||o.key===Pe.Escape&&n(o))})}function Kt(){var e;let[t]=s.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=s.useState((e=t==null?void 0:t.matches)!=null?e:!1);return C(()=>{if(!t)return;function o(l){r(l.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function zt({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=B(n),o=y(()=>{var l,i;let u=[];for(let a of e)a!==null&&(a instanceof HTMLElement?u.push(a):"current"in a&&a.current instanceof HTMLElement&&u.push(a.current));if(t!=null&&t.current)for(let a of t.current)u.push(a);for(let a of(l=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?l:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(n&&(a.contains(n)||a.contains((i=n==null?void 0:n.getRootNode())==null?void 0:i.host))||u.some(d=>a.contains(d))||u.push(a));return u});return{resolveContainers:o,contains:y(l=>o().some(i=>i.contains(l)))}}let je=s.createContext(null);function Ee({children:e,node:t}){let[n,r]=s.useState(null),o=He(t??n);return m.createElement(je.Provider,{value:o},e,o===null&&m.createElement(ee,{features:X.Hidden,ref:l=>{var i,u;if(l){for(let a of(u=(i=z(l))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?u:[])if(a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a!=null&&a.contains(l)){r(a);break}}}}))}function He(e=null){var t;return(t=s.useContext(je))!=null?t:e}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Zt(){let e=s.useRef(0);return Ce(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ue(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Jt="div";var D=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(D||{});function Qt(e,t){let n=s.useRef(null),r=L(n,t),{initialFocus:o,initialFocusFallback:l,containers:i,features:u=15,...a}=e;ae()||(u=0);let d=B(n);rn(u,{ownerDocument:d});let c=on(u,{ownerDocument:d,container:n,initialFocus:o,initialFocusFallback:l});ln(u,{ownerDocument:d,container:n,containers:i,previousActiveElement:c});let v=Zt(),p=y(w=>{let b=n.current;b&&(S=>S())(()=>{Y(v.current,{[H.Forwards]:()=>{W(b,T.First,{skipElements:[w.relatedTarget,l]})},[H.Backwards]:()=>{W(b,T.Last,{skipElements:[w.relatedTarget,l]})}})})}),f=A(!!(u&2),"focus-trap#tab-lock"),g=rt(),O=s.useRef(!1),R={ref:r,onKeyDown(w){w.key=="Tab"&&(O.current=!0,g.requestAnimationFrame(()=>{O.current=!1}))},onBlur(w){if(!(u&4))return;let b=Ue(i);n.current instanceof HTMLElement&&b.add(n.current);let S=w.relatedTarget;S instanceof HTMLElement&&S.dataset.headlessuiFocusGuard!=="true"&&(We(b,S)||(O.current?W(n.current,Y(v.current,{[H.Forwards]:()=>T.Next,[H.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:w.target}):w.target instanceof HTMLElement&&F(w.target)))}};return m.createElement(m.Fragment,null,f&&m.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:X.Focusable}),$({ourProps:R,theirProps:a,defaultTag:Jt,name:"FocusTrap"}),f&&m.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:X.Focusable}))}let en=x(Qt),tn=Object.assign(en,{features:D});function nn(e=!0){let t=s.useRef(P.slice());return ue(([n],[r])=>{r===!0&&n===!1&&le(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=P.slice())},[e,P,t]),y(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function rn(e,{ownerDocument:t}){let n=!!(e&8),r=nn(n);ue(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&F(r())},[n]),ke(()=>{n&&F(r())})}function on(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:o}){let l=s.useRef(null),i=A(!!(e&1),"focus-trap#initial-focus"),u=xe();return ue(()=>{if(e===0)return;if(!i){o!=null&&o.current&&F(o.current);return}let a=n.current;a&&le(()=>{if(!u.current)return;let d=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===d){l.current=d;return}}else if(a.contains(d)){l.current=d;return}if(r!=null&&r.current)F(r.current);else{if(e&16){if(W(a,T.First|T.AutoFocus)!==ne.Error)return}else if(W(a,T.First)!==ne.Error)return;if(o!=null&&o.current&&(F(o.current),(t==null?void 0:t.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}l.current=t==null?void 0:t.activeElement})},[o,i,e]),l}function ln(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:o}){let l=xe(),i=!!(e&4);Ne(t==null?void 0:t.defaultView,"focus",u=>{if(!i||!l.current)return;let a=Ue(r);n.current instanceof HTMLElement&&a.add(n.current);let d=o.current;if(!d)return;let c=u.target;c&&c instanceof HTMLElement?We(a,c)?(o.current=c,F(c)):(u.preventDefault(),u.stopPropagation(),F(d)):F(o.current)},!0)}function We(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var an=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(an||{}),un=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(un||{});let sn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},se=s.createContext(null);se.displayName="DialogContext";function Z(e){let t=s.useContext(se);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Z),n}return t}function cn(e,t){return Y(t.type,sn,e,t)}let ye=x(function(e,t){let n=s.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:i,role:u="dialog",autoFocus:a=!0,__demoMode:d=!1,unmount:c=!1,...v}=e,p=s.useRef(!1);u=function(){return u==="dialog"||u==="alertdialog"?u:(p.current||(p.current=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let f=$e();o===void 0&&f!==null&&(o=(f&V.Open)===V.Open);let g=s.useRef(null),O=L(g,t),R=B(g),w=o?0:1,[b,S]=s.useReducer(cn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),N=y(()=>l(!1)),ce=y(E=>S({type:0,id:E})),k=ae()?w===0:!1,[Be,Ve]=Yt(),Ye={get current(){var E;return(E=b.panelRef.current)!=null?E:g.current}},J=He(),{resolveContainers:Q}=zt({mainTreeNode:J,portals:Be,defaultContainers:[Ye]}),de=f!==null?(f&V.Closing)===V.Closing:!1;wt(d||de?!1:k,{allowed:y(()=>{var E,me;return[(me=(E=g.current)==null?void 0:E.closest("[data-headlessui-portal]"))!=null?me:null]}),disallowed:y(()=>{var E;return[(E=J==null?void 0:J.closest("body > *:not(#headlessui-portal-root)"))!=null?E:null]})}),Ct(k,Q,E=>{E.preventDefault(),N()}),qt(k,R==null?void 0:R.defaultView,E=>{E.preventDefault(),E.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),N()}),It(d||de?!1:k,R,Q),Et(k,g,N);let[Ge,Xe]=st(),qe=s.useMemo(()=>[{dialogState:w,close:N,setTitleId:ce,unmount:c},b],[w,b,N,ce,c]),fe=s.useMemo(()=>({open:w===0}),[w]),Ke={ref:O,id:r,role:u,tabIndex:-1,"aria-modal":d?void 0:w===0?!0:void 0,"aria-labelledby":b.titleId,"aria-describedby":Ge,unmount:c},ze=!Kt(),I=D.None;return k&&!d&&(I|=D.RestoreFocus,I|=D.TabLock,a&&(I|=D.AutoFocus),ze&&(I|=D.InitialFocus)),m.createElement(ot,null,m.createElement(we,{force:!0},m.createElement(Xt,null,m.createElement(se.Provider,{value:qe},m.createElement(Ie,{target:g},m.createElement(we,{force:!1},m.createElement(Xe,{slot:fe},m.createElement(Ve,null,m.createElement(tn,{initialFocus:i,initialFocusFallback:g,containers:Q,features:I},m.createElement(ht,{value:N},$({ourProps:Ke,theirProps:v,slot:fe,defaultTag:dn,features:fn,visible:w===0,name:"Dialog"})))))))))))}),dn="div",fn=pe.RenderStrategy|pe.Static;function mn(e,t){let{transition:n=!1,open:r,...o}=e,l=$e(),i=e.hasOwnProperty("open")||l!==null,u=e.hasOwnProperty("onClose");if(!i&&!u)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!u)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!l&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!o.static?m.createElement(Ee,null,m.createElement(Te,{show:r,transition:n,unmount:o.unmount},m.createElement(ye,{ref:t,...o}))):m.createElement(Ee,null,m.createElement(ye,{ref:t,open:r,...o}))}let pn="div";function hn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...l}=e,[{dialogState:i,unmount:u},a]=Z("Dialog.Panel"),d=L(t,a.panelRef),c=s.useMemo(()=>({open:i===0}),[i]),v=y(f=>{f.stopPropagation()}),p={ref:d,id:r,onClick:v};return m.createElement(o?G:s.Fragment,{...o?{unmount:u}:{}},$({ourProps:p,theirProps:l,slot:c,defaultTag:pn,name:"Dialog.Panel"}))}let vn="div";function gn(e,t){let{transition:n=!1,...r}=e,[{dialogState:o,unmount:l}]=Z("Dialog.Backdrop"),i=s.useMemo(()=>({open:o===0}),[o]),u={ref:t,"aria-hidden":!0};return m.createElement(n?G:s.Fragment,{...n?{unmount:l}:{}},$({ourProps:u,theirProps:r,slot:i,defaultTag:vn,name:"Dialog.Backdrop"}))}let wn="h2";function En(e,t){let n=s.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:i}]=Z("Dialog.Title"),u=L(t);s.useEffect(()=>(i(r),()=>i(null)),[r,i]);let a=s.useMemo(()=>({open:l===0}),[l]);return $({ourProps:{ref:u,id:r},theirProps:o,slot:a,defaultTag:wn,name:"Dialog.Title"})}let yn=x(mn),_e=x(hn);x(gn);let bn=x(En),xn=Object.assign(yn,{Panel:_e,Title:bn,Description:mt});function be({className:e="",disabled:t,children:n,...r}){return h.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function $n({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},i={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return h.jsx(Te,{show:t,leave:"duration-200",children:h.jsxs(xn,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[h.jsx(G,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:h.jsx("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),h.jsx(G,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:h.jsx(_e,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${i}`,children:e})})]})})}function Tn({type:e="button",className:t="",disabled:n,children:r,...o}){return h.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Mn({className:e=""}){const[t,n]=s.useState(!1),r=s.useRef(),{data:o,setData:l,delete:i,processing:u,reset:a,errors:d,clearErrors:c}=Je({password:""}),v=()=>{n(!0)},p=g=>{g.preventDefault(),i(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>f(),onError:()=>r.current.focus(),onFinish:()=>a()})},f=()=>{n(!1),c(),a()};return h.jsxs("section",{className:`space-y-6 ${e}`,children:[h.jsxs("header",{children:[h.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),h.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),h.jsx(be,{onClick:v,children:"Delete Account"}),h.jsx($n,{show:t,onClose:f,children:h.jsxs("form",{onSubmit:p,className:"p-6",children:[h.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),h.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),h.jsxs("div",{className:"mt-6",children:[h.jsx(tt,{htmlFor:"password",value:"Password",className:"sr-only"}),h.jsx(Qe,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:g=>l("password",g.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),h.jsx(et,{message:d.password,className:"mt-2"})]}),h.jsxs("div",{className:"mt-6 flex justify-end",children:[h.jsx(Tn,{onClick:f,children:"Cancel"}),h.jsx(be,{className:"ms-3",disabled:u,children:"Delete Account"})]})]})})]})}export{Mn as default};
