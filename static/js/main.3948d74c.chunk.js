(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,n,t){},26:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var o=t(9),a=t.n(o),c=t(15),i=t.n(c),r=(t(21),t(16)),s=t(10),l=(t(25),t(26),t(7));var d=function(){var e=Object(o.useState)({}),n=Object(r.a)(e,2),t=n[0],a=n[1];return s.a.apps.length||s.a.initializeApp({apiKey:"AIzaSyDwOpDbk5LhGk55y99YJYa9sZPta219Mso",authDomain:"react-messenger-273f0.firebaseapp.com",projectId:"react-messenger-273f0",storageBucket:"react-messenger-273f0.appspot.com",messagingSenderId:"157440190043",appId:"1:157440190043:web:aa6d87cb52aa72c55c417e"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"counter",children:[Object(l.jsxs)("span",{children:[" ",t.country," "]}),Object(l.jsxs)("span",{children:[" ",t.state," "]}),Object(l.jsxs)("span",{children:[" ",t.name," "]}),Object(l.jsxs)("span",{children:[" ",t.description," "]}),Object(l.jsx)("button",{className:"btn__up",onClick:function(){s.a.firestore().collection("users").doc("Nastya").get().then((function(e){e.exists?(console.log("Document data:",e.data()),a(e.data())):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))},children:"+"})]})})},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),a(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/weather-app","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):h(n,e)}))}}(),p()}},[[28,1,2]]]);
//# sourceMappingURL=main.3948d74c.chunk.js.map