var Y=Object.defineProperty;var Z=(r,e,t)=>e in r?Y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var l=(r,e,t)=>(Z(r,typeof e!="symbol"?e+"":e,t),t);const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};J();class u extends Error{constructor(e,...t){super(e);l(this,"args");this.args=t}}const A="accepted",_="alpha",$="alpha-num",L="alpha-num-dash",M="between-length",I="between-number",R="digits",P="email",F="ends-with",O="equal-length",U="equal-number",q="greater-equal",x="integer",D="less-equal",H="max-length",B="min-length",G="num-dash",W="number",V="required",C="starts-with",N="within";function ee(r){return r==="checked"?!0:new u(A)}const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,te=/^[+-]?[0-9]+$/,ne=/^[\p{L}\p{M}]+$/u,se=/^[\p{L}\p{M}\p{N}]+$/u,oe=/^[\p{L}\p{M}\p{N}_-]+$/u,ie=/^[\p{N}_-]+$/u;function ue(r){return ne.test(r)||new u(_)}function ae(r){return se.test(r)||new u($)}function ce(r){return oe.test(r)||new u(L)}class le{constructor(){l(this,"lang")}set(e){this.lang=e}get(){return typeof this.lang=="object"?this.lang:{}}}var v=new le;const he="checkbox",fe="radio";function j(r){return r.replace(/-./g,e=>e[1].toUpperCase())}function z(r){return r instanceof HTMLInputElement?r.type===he||r.type===fe?r.checked?"checked":"":r.value:r instanceof HTMLSelectElement?Array.from(r.selectedOptions).map(e=>e.value).toString():""}function me(r,...e){return r.replace(/\$(\d)/g,(t,n)=>(e==null?void 0:e[n-1])||"")}function Q(r){const[e,t]=r.split(":");return{name:e,args:t?t.split(","):[]}}function de(r,...e){const t=v.get();let n=r;return Object.prototype.hasOwnProperty.call(t,r)&&(n=t[r]),me(n,...e)}function i(r){return{throwError(e){if(r)throw new Error(e)},warning(){},notice(){}}}function ge(r){r.on("error:field",(e,t,n)=>{n.reverse().forEach(s=>{const o=document.createElement("p");o.classList.add("validator-err"),o.innerHTML=s.message,t.parentNode&&t.parentNode.insertBefore(o,t.nextSibling)})}),r.on("validate:start",e=>{e.querySelectorAll(".validator-err").forEach(t=>{t.remove()})})}const c="argument must be provided",m="argument must be a number",d="argument must be a positive number",Ee="argument must be an integer";function pe(r,e=""){i(e==="").throwError(c);const[t,n,s]=e.split(",");i(!n||!s).throwError(c);const o=Number(n),a=Number(s);return i(Number.isNaN(o)||Number.isNaN(a)).throwError(m),i(o>a).throwError("min must be less than max"),i(o===a).throwError("min and max must not be equal"),t==="number"?Ne(r,o,a):be(r,o,a)}function Ne(r,e,t){const n=Number(r);return r!==""&&!Number.isNaN(n)&&n>=e&&n<=t?!0:new u(I,String(e),String(t))}function be(r,e,t){return i(e<0||t<0).throwError(d),r.length>=e&&r.length<=t?!0:new u(M,String(e),String(t))}function we(r,e=""){return i(e==="").throwError(c),i(b(e)!==!0||+e<1).throwError(Ee),new RegExp(`^-?[0-9]{${e}}$`).test(r)?!0:new u(R,e)}function ve(r,e=""){return i(e==="").throwError(c),r.endsWith(e)||new u(F,e)}function Te(r){return re.test(r)||new u(P)}function Se(r,e=""){i(e==="").throwError(c);const[t,n]=e.split(",");i(!n).throwError(c);const s=Number(n);return i(Number.isNaN(s)).throwError(m),t==="number"?ye(r,s):Ae(r,s)}function ye(r,e){const t=Number(r);return r!==""&&!Number.isNaN(t)&&t>=e?!0:new u(q,String(e))}function Ae(r,e){return i(e<0).throwError(d),r.length>=e?!0:new u(B,String(e))}function b(r){return te.test(r)||new u(x)}function _e(r,e=""){i(e==="").throwError(c);const[t,n]=e.split(",");i(!n).throwError(c);const s=Number(n);return i(Number.isNaN(s)).throwError(m),t==="number"?$e(r,s):Le(r,s)}function $e(r,e){const t=Number(r);return r!==""&&!Number.isNaN(t)&&t<=e?!0:new u(D,String(e))}function Le(r,e){return i(e<0).throwError(d),r.length<=e?!0:new u(H,String(e))}function Me(r){return String(Number(r))===r||new u(W)}function Ie(r){return ie.test(r)||new u(G)}function w(r){return r.trim().length>0||new u(V)}function Re(r,e=""){return w(e)===!0?w(r):!0}function Pe(r,e=""){i(e==="").throwError(c);const[t,n]=e.split(",");i(!n).throwError(c);const s=Number(n);return i(Number.isNaN(s)).throwError(m),t==="number"?Fe(r,s):Oe(r,s)}function Fe(r,e){const t=Number(r);return r!==""&&!Number.isNaN(t)&&t===e?!0:new u(U,String(e))}function Oe(r,e){return i(e<0).throwError(d),r.length===e?!0:new u(O,String(e))}function Ue(r,e=""){return i(e==="").throwError(c),r.startsWith(e)||new u(C,e)}function S(r,e){i(e==="").throwError(c);const[t,...n]=e.split(",");if(t==="array"){const s=r.split(",");for(const o of s)if(!n.includes(o))return new u(N);return!0}return n.includes(r)||new u(N)}var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",accepted:ee,alpha:ue,alphaNum:ae,alphaNumDash:ce,between:pe,digits:we,endsWith:ve,email:Te,min:Se,integer:b,int:b,max:_e,number:Me,numDash:Ie,required:w,requiredIf:Re,size:Pe,startsWith:Ue,within:S,in:S});class qe{constructor(){l(this,"lang");l(this,"errorsList");this.lang=v.get(),this.errorsList=[]}setError(e,t,n){let s=this.errorsList.find(g=>g[0].element===e);s||(s=[],this.errorsList.push(s));const a={message:de(n.message,...n.args),element:e,rule:t,cause:n.message,args:n.args};s.push(a)}get hasError(){return Object.keys(this.errorsList).length>0}get errors(){return this.errorsList}clearErrors(){this.errorsList=[]}}class xe{constructor(e={}){l(this,"events");this.events={},Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(this.events[n]=[],this.events[n].push(e[n]))})}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}off(e,t){if(typeof this.events[e]=="undefined")return;const n=this.events[e],s=n.indexOf(t);s!==-1&&n.splice(s,1)}call(e,...t){typeof this.events[e]!="undefined"&&this.events[e].forEach(s=>{s(...t)})}clear(){this.events={}}}const p={requiredIf:He,between:h,size:h,min:h,max:h,in:h};function De(r,e,t,n){var o;const s=j(r.split(":")[0]);return((o=p[s])==null?void 0:o.call(p,r,e,t,n))||r}function h(r,e){const{name:t,args:n}=Q(r),s=e.indexOf(r),o=e.slice(0,s);let a="string";return o.includes("number")||o.includes("int")||o.includes("integer")?a="number":o.includes("array")&&(a="array"),`${t}:${a},${n.join(",")}`}function He(r){const{name:e,args:t}=Q(r);if(t.length===0)return e;let n="";if(t.length>0){const s=document.getElementById(t[0]);s!==null&&(n=z(s))}return t.splice(0,1,n),`${e}:${t.join(",")}`}const Be={renderErrors:!0};class Ge{constructor(e,t={}){l(this,"validatorError");l(this,"events");l(this,"options");l(this,"form");if(e===null||!(e instanceof HTMLElement))throw new Error("Invalid form element");this.options=Object.assign(Be,t),this.validatorError=new qe,this.events=new xe(this.options.on),this.form=e,v.set(this.options.lang),this.options.renderErrors&&ge(this.events),this.events.on("validate:start",()=>this.validatorError.clearErrors()),this.events.on("validate:failed",()=>this.errorEventTrigger())}validate(){this.events.call("validate:start",this.form);let e=!0,t="success";const n=this.form.querySelectorAll("[data-rules]");return n.length>0&&(e=this.validateFields(Array.from(n)),t=e?"success":"failed"),this.events.call(`validate:${t}`,this.form),this.events.call("validate:end",this.form,e),e}on(e,t){this.events.on(e,t)}off(e,t){this.events.off(e,t)}validateFields(e){var t;for(const n of e){const s=(t=n.getAttribute("data-rules"))==null?void 0:t.split("|");if(s&&s.length>0){const o=z(n),a=this.shouldStopOnFirstFailure(s),g=this.getComputedFieldRules(s,n);for(const K of g){const[E,X=""]=K.split(":"),T=j(E);if(T in y)try{const f=y[T](o,X);if(f instanceof u&&(this.validatorError.setError(n,E,f),a))break}catch(f){return console.error(new Error(`${E}: ${f.message}`)),!1}}}}return!this.validatorError.hasError}shouldStopOnFirstFailure(e){return e.includes("bail")}getComputedFieldRules(e,t){return e.map(n=>De(n,e,t,this.form))}errorEventTrigger(){this.validatorError.errors.forEach(t=>{t.length!==0&&this.events.call("error:field",this.form,t[0].element,t)})}}const We={[A]:"Please accept this field",[_]:"Please enter only alphabetic characters",[$]:"Please enter only alpha-numeric characters",[L]:"Please enter only alpha-numeric characters, dashes, and underscores",[M]:"The value must have between $1 and $2 characters",[I]:"Please enter a number between $1 and $2",[R]:"The value must be a $1-digits number",[P]:"Please enter a valid email address",[F]:'The value must ends with "$1"',[O]:"The value must have $1 characters",[U]:"The value must be equal to $1",[q]:"Please enter a number greater than or equal to $1",[x]:"The value must be a valid integer",[D]:"Please enter a number less than or equal to $1",[H]:"Max length is $1",[B]:"Min length is $1",[G]:"Please enter numbers with dashes and underscores",[W]:"Please enter a valid number",[V]:"This field is required",[C]:'The value must start with "$1"',[N]:"The value is incorrect"},k=document.querySelector("form");k.onsubmit=r=>{r.preventDefault(),Ve.validate()};const Ve=new Ge(k,{lang:We,on:{"validate:success":()=>{alert("Success! Form validated with no errors")}}});
