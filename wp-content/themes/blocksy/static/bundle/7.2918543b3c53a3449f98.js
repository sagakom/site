(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{13:function(e,t,n){"use strict";n.r(t),n.d(t,"handleSingleSubmenu",function(){return a}),n.d(t,"handleFirstLevelForMenu",function(){return c}),n.d(t,"handleUpdate",function(){return u});var r=n(12);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=function(e){var t=function(e,t){for(var n=[];e.parentNode;)e.parentNode&&e.parentNode.matches&&e.parentNode.matches(t)&&n.push(e.parentNode),e=e.parentNode;return n[n.length-1]}(e,"li.menu-item");return t&&t.getBoundingClientRect().left>innerWidth/2?"left":"right"},a=function(e){i(e.querySelectorAll("[data-submenu]")).map(function(e){e.removeAttribute("data-submenu")}),setTimeout(function(){return e._popper=new r.a(e.parentNode,e,{modifiers:{applyStyle:{enabled:!1},preventOverflow:{enabled:!1},hide:{enabled:!1},flip:{behavior:["right","left"],flipVariationsByContent:!0},setCustomStyle:{enabled:!0,order:1e8,fn:function(e){e.flipped,e.instance;var t=e.instance.reference,n=(e.popper,e.popper.left,e.placement);e.styles;return t.dataset.submenu="left"===n?"left":"right"}}},placement:o(e)})})},c=function(e){e.hasFirstLevelPoppers||(e.hasFirstLevelPoppers=!0,i(e.children).filter(function(e){return e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children")}).map(function(e){return e.querySelector(".sub-menu")}).map(function(e){return a(e)}))},u=function(e){e.hasPoppers||(e.hasPoppers=!0,e.parentNode.addEventListener("mouseenter",function(){e._timeout_id&&clearTimeout(e._timeout_id),i(e.children).filter(function(e){return e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children")}).map(function(e){return e.querySelector(".sub-menu")}).map(function(e){i(e.querySelectorAll("[data-submenu]")).map(function(e){e.removeAttribute("data-submenu")}),setTimeout(function(){return e._popper=new r.a(e.parentNode,e,{modifiers:{applyStyle:{enabled:!1},preventOverflow:{enabled:!0},hide:{enabled:!1},flip:{behavior:["right","left"],flipVariations:!0,flipVariationsByContent:!0},setCustomStyle:{enabled:!0,order:1e8,fn:function(e){e.flipped,e.instance;var t=e.instance,n=t.reference,r=t.popper,i=e.placement,o=(e.styles,r.getBoundingClientRect()),a=(o.left,o.width),c=(o.right,i);"left"===i&&n.getBoundingClientRect().left-a<0&&(c="right"),"right"===i&&n.getBoundingClientRect().right-a<0&&(c="left"),n.dataset.submenu=c}}},placement:o(e)})})}),e.parentNode.addEventListener("mouseleave",function(){i(e.children).filter(function(e){return e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children")}).map(function(e){return e.querySelector(".sub-menu")}).map(function(e){e._popper&&(e._popper.destroy(),e._popper=null)}),e._timeout_id=setTimeout(function(){e._timeout_id=null,i(e.children).filter(function(e){return e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children")}).map(function(e){return e.removeAttribute("data-submenu")})},200)},{once:!0})}))}},48:function(e,t,n){"use strict";n.r(t),n.d(t,"mount",function(){return s});var r=n(13);function i(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c={};ctEvents.on("ct:header:update",function(){return c={}});var u=function(e){var t=e.getBoundingClientRect().width,n=e.parentNode.getBoundingClientRect().width;Math.abs(n-t)>5&&(n-=Array.from(e.parentNode.children).filter(function(t){return t.dataset.id!==e.dataset.id}).reduce(function(e,t){return e+t.getBoundingClientRect().width},0)),Math.abs(e.parentNode.getBoundingClientRect().width-e.parentNode.parentNode.getBoundingClientRect().width)>5&&(n+=a(e.parentNode.parentNode.children).filter(function(t){return t.dataset.items!==e.parentNode.dataset.items}).reduce(function(e,t){return e+(t.getBoundingClientRect().width-a(t.children).reduce(function(e,t){return e+t.getBoundingClientRect().width},0))},0)),e.closest('[class*="ct-container"]')&&1===e.closest('[class*="ct-container"]').querySelectorAll('[data-id*="menu"]').length&&e.closest('[data-column="middle"]')&&(n=a(e.closest('[class*="ct-container"]').children).reduce(function(e,t){return e+t.getBoundingClientRect().width},0)-2*Math.max(a(e.closest('[class*="ct-container"]').querySelectorAll('[data-column="start"] [data-id]')).reduce(function(e,t){var n=window.getComputedStyle(t);return e+t.getBoundingClientRect().width+parseInt(n.getPropertyValue("margin-left"))+parseInt(n.getPropertyValue("margin-right"))},0),a(e.closest('[class*="ct-container"]').querySelectorAll('[data-column="end"] [data-id]')).reduce(function(e,t){var n=window.getComputedStyle(t);return e+t.getBoundingClientRect().width+parseInt(n.getPropertyValue("margin-left"))+parseInt(n.getPropertyValue("margin-right"))},0)));var r=c[e.dataset.id].children.reduce(function(t,r,u){var l=t.fit,s=t.notFit;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},c[e.dataset.id].itemsWidth.slice(0,u+1).reduce(function(e,t){return e+t},0)<n?{fit:[].concat(a(l),[r]),notFit:s}:{notFit:[].concat(a(s),[r]),fit:l})},{fit:[],notFit:[]});if(Math.abs(n-c[e.dataset.id].children.reduce(function(t,n,i){return r.fit.indexOf(n)>-1?t+c[e.dataset.id].itemsWidth[i]:t},0))<70){var u=r.fit.pop();r.notFit=[u].concat(a(r.notFit))}return r},l=function(e){return Array.from(e.firstElementChild.children).filter(function(e){return!e.classList.contains(".more-items-container")}).map(function(e){var t=e.firstElementChild;t.innerHTML="<span>".concat(t.innerHTML,"</span>");var n=window.getComputedStyle(t,null),r=t.firstElementChild.getBoundingClientRect().width+parseInt(n.getPropertyValue("padding-left"),10)+parseInt(n.getPropertyValue("padding-right"),10);return t.innerHTML=t.firstElementChild.innerHTML,r})},s=function(e){if(c[e.dataset.id]||(c[e.dataset.id]={el:e,previousRenderedWidth:null,children:[].concat(a(Array.from(e.firstElementChild.children).filter(function(e){return!e.classList.contains("more-items-container")})),a(e.firstElementChild.querySelector(".more-items-container")?a(e.firstElementChild.querySelector(".more-items-container .sub-menu").children):[])),itemsWidth:l(e)},e.removeAttribute("data-responsive")),!c[e.dataset.id].previousRenderedWidth||c[e.dataset.id].previousRenderedWidth!==window.innerWidth){c[e.dataset.id].previousRenderedWidth=window.innerWidth;var t=u(e),n=t.fit,i=t.notFit;0!==i.length?document.querySelector('header[data-device="desktop"]')&&(!function(e){if(!e.querySelector(".more-items-container")){var t=document.createElement("li");t.classList.add("menu-item-has-children"),t.classList.add("more-items-container"),t.insertAdjacentHTML("afterbegin",'<a href="#">\n      '.concat(ct_localizations.more_text,'\n      <span class="child-indicator">\n        <svg width="8" height="8" viewBox="0 0 15 15">\n            <path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path>\n        </svg>\n      </span>\n    </a>\n    <ul class="sub-menu"></ul>')),e.firstElementChild.appendChild(t),Object(r.handleSingleSubmenu)(e.querySelector(".more-items-container > .sub-menu"))}}(e),i.map(function(t){return e.querySelector(".more-items-container .sub-menu").appendChild(t)}),n.map(function(t){return e.firstElementChild.insertBefore(t,e.querySelector(".more-items-container"))})):e.querySelector(".more-items-container")&&(n.map(function(t){e.firstElementChild.insertBefore(t,e.querySelector(".more-items-container"))}),e.querySelector(".more-items-container").remove())}}}}]);