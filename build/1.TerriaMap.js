((self||window).webpackJsonp=(self||window).webpackJsonp||[]).push([[1],{1096:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,l){0;o=a(1103).default,n.default.render(r.default.createElement(o,{terria:e,allBaseMaps:t,viewState:l}),document.getElementById("ui"));var o};var n=l(a(102)),r=(l(a(1097)),l(a(11)));function l(e){return e&&e.__esModule?e:{default:e}}},1103:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=v;var n=a(696),r=f(a(1104)),l=f(a(1108)),o=f(a(13)),i=f(a(11)),u=f(a(1112)),d=f(a(699)),s=f(a(1120)),c=f(a(1482));function f(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e){a.e(4).then(function(){var t=a(760);e(t)}.bind(null,a)).catch(a.oe)}function v(e){return i.default.createElement(s.default,m({},e,{version:c.default}),i.default.createElement(n.Menu,null,i.default.createElement(u.default,{viewState:e.viewState}),i.default.createElement(l.default,{caption:"About",href:"about.html",key:"about-link"})),i.default.createElement(n.Nav,null,i.default.createElement(r.default,{terria:e.viewState.terria,key:"measure-tool"})),i.default.createElement(n.ExperimentalMenu,null,/Android|iPhone|iPad/i.test(navigator.userAgent)?i.default.createElement(d.default,{loadComponent:p,viewState:e.viewState,terria:e.viewState.terria,experimentalWarning:!0}):null))}a(1483),v.propTypes={terria:o.default.object,viewState:o.default.object}},1112:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(11)),r=d(a(13)),l=d(a(280)),o=d(a(173)),i=d(a(1115)),u=d(a(34));function d(e){return e&&e.__esModule?e:{default:e}}function s(e){var t={inner:i.default.dropdownInner,icon:"gallery"};return n.default.createElement(l.default,{theme:t,btnText:"Related Maps",smallScreen:e.smallScreen,viewState:e.viewState,btnTitle:"See related maps"},n.default.createElement("div",{className:(0,u.default)(o.default.header)},n.default.createElement("label",{className:o.default.heading},"Related Maps")),n.default.createElement("p",null,"Clicking on a map below will open it in a separate window or tab."),n.default.createElement("div",{className:(0,u.default)(o.default.section,i.default.section)},n.default.createElement("a",{target:"_blank",href:"http://nationalmap.gov.au/renewables/"},n.default.createElement("img",{className:i.default.image,src:a(1116),alt:"AREMI"})),n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://nationalmap.gov.au/renewables/"},"AREMI"),n.default.createElement("p",null,"AREMI provides access to Australian spatial data relevant to the Renewable Energy industry, sourced from Government, Industry and Research.")),n.default.createElement("div",{className:(0,u.default)(o.default.section,i.default.section)},n.default.createElement("a",{target:"_blank",href:"http://nationalmap.gov.au/northernaustralia/"},n.default.createElement("img",{className:i.default.image,src:a(1117),alt:"Northern Australia"})),n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://nationalmap.gov.au/northernaustralia/"},"Northern Australia"),n.default.createElement("p",null,"The Northern Australia NationalMap forms part of the Government's commitment to developing northern Australia by providing easy access to authoritative and other spatial data on northern Australia to governments, business and the public. More information on the Government's White Paper on Developing Northern Australia is available here:"," ",n.default.createElement("a",{target:"_blank",className:i.default.link,href:"https://northernaustralia.dpmc.gov.au"},"https://northernaustralia.dpmc.gov.au"),".")),n.default.createElement("div",{className:(0,u.default)(o.default.section,i.default.section)},n.default.createElement("a",{target:"_blank",href:"http://neiiviewer.nicta.com.au"},n.default.createElement("img",{className:i.default.image,src:a(1118),alt:"NEII Viewer"})),n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://www.neii.gov.au/viewer/"},"NEII Viewer"),n.default.createElement("p",null,"The National Environmental Information Infrastructure (NEII) is an information platform designed to improve discovery, access and re-use of nationally significant environmental data. More information on the NEII is available here:"," ",n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://neii.gov.au/data-viewer"},"neii.gov.au/data-viewer"),".")),n.default.createElement("div",{className:(0,u.default)(o.default.section,i.default.section)},n.default.createElement("a",{target:"_blank",href:"http://map.aurin.org.au"},n.default.createElement("img",{className:i.default.image,src:a(1119),alt:"AURIN Map"})),n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://map.aurin.org.au"},"AURIN Map"),n.default.createElement("p",null,"AURIN Map provides access to datasets on urban infrastructure for urban researchers, policy and decision makers.")))}s.propTypes={viewState:r.default.object.isRequired,smallScreen:r.default.bool};var c=s;t.default=c},1115:function(e,t,a){e.exports={"dropdown-inner":"tm-related-maps__dropdown-inner",dropdownInner:"tm-related-maps__dropdown-inner",section:"tm-related-maps__section tm-_base__clearfix",image:"tm-related-maps__image",link:"tm-related-maps__link tm-_base__link"}},1116:function(e,t,a){e.exports=a.p+"8edfbe49f85e6994ebb732a110a3c502.jpg"},1117:function(e,t,a){e.exports=a.p+"f5ad078d6d4ff7fc08ef6a3105dc2ef9.jpg"},1118:function(e,t,a){e.exports=a.p+"8fc6de49c8bef0a89f25ca9ba37deb81.jpg"},1119:function(e,t,a){e.exports=a.p+"4bc9b143747260dad71fd9951b364e3a.jpg"},1482:function(e,t){e.exports=""},1483:function(e,t,a){e.exports={rcSliderTooltipZoomDownIn:"tm-global__rcSliderTooltipZoomDownIn",rcSliderTooltipZoomDownOut:"tm-global__rcSliderTooltipZoomDownOut"}},1496:function(e,t){e.exports='<div style="border:1px solid red; background:hsla(0,50%,50%,0.2); padding: 0.5em;">\n<h1>Development site</h1>\n\n<p>You are viewing a site other than the official production site. It may not operate as you expect.</p>\n</div>'},1497:function(e,t){e.exports="<div>\n<p>This is the global disclaimer shown to all users of this site. It should be replaced with something specific, by modifying <samp>lib/Views/GlobalDisclaimer.html</samp>.\n</div>"},2:function(e,t,a){"use strict";var n=g(a(526)),r=g(a(785)),l=g(a(123)),o=g(a(827)),i=g(a(900)),u=g(a(944)),d=g(a(462)),s=g(a(1065)),c=g(a(1066)),f=g(a(688)),m=g(a(1091)),p=g(a(1093)),v=g(a(1094)),h=g(a(8)),w=g(a(1096));function g(e){return e&&e.__esModule?e:{default:e}}var b={baseUrl:"build/TerriaJS"};(0,i.default)(),(0,o.default)(),b.analytics=new n.default;var _=new d.default(b);(0,u.default)(_);var E=new f.default({terria:_});e.exports=_.start({applicationUrl:window.location,configUrl:"config.json",shareDataService:new r.default({terria:_})}).otherwise((function(e){(0,l.default)(_,e)})).always((function(){try{E.searchState.locationSearchProviders=[new m.default({terria:_,key:_.configParameters.bingMapsKey}),new p.default({terria:_}),new v.default({terria:_})],(0,s.default)(_,window),(0,c.default)(_,window);var e=a(1484),t=a(1486),n=a(1495),r=e(_),l=t(_,_.configParameters.bingMapsKey),o=r.concat(l);if(n(_,o,"Bing Maps Aerial with Labels",!0),(0,h.default)(_.configParameters.globalDisclaimer)){var i=_.configParameters.globalDisclaimer,u=window.location.hostname;if(i.enableOnLocalhost||-1===u.indexOf("localhost")){var d="";((0,h.default)(i.devHostRegex)&&u.match(i.devHostRegex)||(0,h.default)(i.prodHostRegex)&&!u.match(i.prodHostRegex))&&(d+=a(1496)),d+=a(1497);var f={title:void 0!==i.title?i.title:"Warning",confirmText:i.buttonTitle||"Ok",width:600,height:550,message:d,horizontalPadding:100};E.notifications.push(f)}}(0,h.default)(E.afterTerriaStarted)&&E.afterTerriaStarted(),(0,w.default)(_,o,E)}catch(e){console.error(e),console.error(e.stack)}}))},610:function(e,t,a){var n={"./deflate":611,"./deflate.js":611,"./draco_decoder":612,"./draco_decoder.js":612,"./draco_wasm_wrapper":613,"./draco_wasm_wrapper.js":613,"./inflate":614,"./inflate.js":614};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=610},799:function(e,t){},801:function(e,t){},836:function(e,t,a){var n={"./draco_wasm_wrapper.js":837};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=836},840:function(e,t,a){var n={"./draco_decoder.wasm":841};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=840},927:function(e,t){}}]);
//# sourceMappingURL=1.TerriaMap.js.map