!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")(),s=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(h,t),d?j(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=p();if(S(e))return T(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?m(n,u-(e-c)):n}(e))}function T(e){return f=void 0,b&&r?j(e):(r=i=void 0,a)}function w(){var e=p(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(h,t),j(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=g(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),O=document.querySelector('input[name="email"]'),S=document.querySelector('textarea[name="message"]'),h="feedback-form-state";function T(){var e={email:O.value,message:S.value};localStorage.setItem(h,JSON.stringify(e))}j.addEventListener("input",T),document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem(h);if(e){var t=JSON.parse(e);O.value=t.email||"",S.value=t.message||""}})),O.addEventListener("input",T),S.addEventListener("input",T),j.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.value||""===S.value){return void alert("Please fill all fields!")}var t={email:O.value,message:S.value};console.log(t),localStorage.removeItem(h),O.value="",S.value=""}))}();
//# sourceMappingURL=03-feedback.2e36617c.js.map
