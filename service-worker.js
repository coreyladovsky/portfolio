"use strict";var precacheConfig=[["/index.html","c5e124f5899c770a0f3c4cad5ba088e5"],["/static/css/main.afcde4f2.css","ab9a02b3d9691a84a3de994773c8f9fa"],["/static/js/main.7cefce6b.js","8d80c260fd3d87a7cfa5879728ae0689"],["/static/media/back.07fbe7bf.jpg","07fbe7bfd0feef51d65c1dbdbfed3987"],["/static/media/backg.22da8143.jpg","22da8143bbfe31277b7704ef0aa500b9"],["/static/media/carousel.0c2c239c.png","0c2c239cf645aff477e9c334fc348cbd"],["/static/media/catpic.b4f8cfb6.jpg","b4f8cfb67ea447c15832d12d5da3fb77"],["/static/media/con1.78bfc203.jpg","78bfc203ccea3208f7300b01ee29eaa0"],["/static/media/dashiki.ca0634fb.jpg","ca0634fb29c2de9644c72a40c7afcad5"],["/static/media/headshot.0adc6d97.jpg","0adc6d97982b528c423582cd39c3fd21"],["/static/media/help.6e0098ba.jpg","6e0098bab38921ba38188817ca2a58ac"],["/static/media/master_of_the_domain.c7434dbf.png","c7434dbf569bc24b84ebaf62933d81cc"],["/static/media/maze_spinner.05bfc464.png","05bfc4645c4531f5f9d4e3fb19623e79"],["/static/media/nba_stats.f59ff98b.png","f59ff98bac649bbf9741866156f00bc4"],["/static/media/noboru.f3c7b632.jpg","f3c7b632d3558f1eccad28d57394ddb0"],["/static/media/overflow.58c5eb15.png","58c5eb153c257466e3b25bb457a5ca89"],["/static/media/pic4.5965264c.jpg","5965264c919fd9545a8c3c746bbc678f"],["/static/media/pic5.31e0941f.jpg","31e0941fdb4941499c6b761bc48b82e6"],["/static/media/pic6.e8e03de5.jpg","e8e03de5d61041862da4ce5dc31aaccd"],["/static/media/pic7.e528d4e9.jpg","e528d4e91f7c344291207f46c3ad2e19"],["/static/media/pic8.94d7deff.jpg","94d7deff3085d0a4574f63208a97036f"],["/static/media/redux.59c46753.png","59c467536111a981d904a050d335c2be"],["/static/media/resume.1fa37f62.pdf","1fa37f620547c8ef86218f25b221a9d4"],["/static/media/skill-pic.a8472ef8.jpg","a8472ef894bc98989137d32cbfb049a1"],["/static/media/small_pic.2ccf8c5b.jpg","2ccf8c5be65dfe9f6a0d763f9da6aacb"],["/static/media/stock_study.0523cb76.png","0523cb7662364433bb0b8ec2fdb50e2f"],["/static/media/tictactoe.642a3bb7.png","642a3bb7f0be7be4e795ad621e6e3268"],["/static/media/tiedie.57d4cfa4.jpg","57d4cfa4465603a93d212edb3d3f957b"],["/static/media/wordladder.6b16ad9d.png","6b16ad9d380f673a58c007aefad5ff87"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});