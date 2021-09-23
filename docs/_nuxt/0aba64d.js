(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2],{408:function(t,e,n){"use strict";n.r(e);var o={props:["title"],data:function(){return{show_code:!1}},methods:{showCode:function(){this.show_code=!this.show_code},fallbackCopyTextToClipboard:function(text){var t=document.createElement("textarea");t.value=text,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var e=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+e)}catch(t){console.error("Fallback: Oops, unable to copy",t)}document.body.removeChild(t)}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border p-4"},[t.title?n("h2",{staticClass:"text-md font-semibold text-gray-500"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"flex justify-end gap-x-1 mb-2"},[n("button",{staticClass:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 text-xs border border-gray-400 rounded shadow",on:{click:t.showCode}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.show_code,expression:"!show_code"}],staticClass:"flex justify-center items-center gap-x-1"},[t._v("\n          Show Code\n          "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"}},[n("g",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M10 9l-7 8l7 8M22 9l7 8l-7 8M18 7l-4 20"}})])])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.show_code,expression:"show_code"}],staticClass:"flex justify-center items-center gap-x-1"},[t._v("\n          Preview\n          "),n("svg",{staticStyle:{"vertical-align":"-0.125em"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M472 16H40a24.028 24.028 0 0 0-24 24v336a24.028 24.028 0 0 0 24 24h200v64h-80v32h192v-32h-80v-64h200a24.028 24.028 0 0 0 24-24V40a24.028 24.028 0 0 0-24-24zm-8 352H48v-96h416zm0-128H48V48h416z"}}),n("path",{attrs:{fill:"currentColor",d:"M400 304h32v32h-32z"}})])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.show_code,expression:"!show_code"}],staticClass:"preview"},[t._t("preview")],2),t._v(" "),n("pre",{directives:[{name:"show",rawName:"v-show",value:t.show_code,expression:"show_code"}]},[t._v("    "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"html"},[t._v("\n      "),t._t("code"),t._v("\n    ")],2),t._v("\n  ")])])}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n.r(e);var o={components:{CodeAndPreview:n(408).default},layout:"App",data:function(){return{show_id:""}},methods:{toggledropdown:function(t){this.show_id==t?this.show_id=null:this.show_id=t}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4"},[n("h1",{staticClass:"text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white"},[t._v("Dropdowns")]),t._v(" "),n("h2",{staticClass:"text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white"},[t._v("Examples")]),t._v(" "),n("code-and-preview",{attrs:{title:"Dropdown Right"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"relative inline-block text-left"},[n("div",[n("button",{staticClass:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50",class:"1"==t.show_id?"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500":"",attrs:{type:"button",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},on:{click:function(e){return t.toggledropdown("1")}}},[t._v("\n                  Account\n                  "),n("svg",{staticClass:"-mr-1 ml-2 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),n("div",{staticClass:"absolute z-20 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",class:"1"==t.show_id?"":"hidden",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"}},[n("div",{staticClass:"py-1",attrs:{role:"none"}},[n("a",{staticClass:"text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-0"}},[t._v("Account settings")]),t._v(" "),n("a",{staticClass:"text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-1"}},[t._v("Profile")]),t._v(" "),n("a",{staticClass:"text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-2"}},[t._v("Change Password")]),t._v(" "),n("form",{attrs:{method:"POST",action:"#",role:"none"}},[n("button",{staticClass:"text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500",attrs:{type:"submit",role:"menuitem",tabindex:"-1",id:"menu-item-3"}},[t._v("\n                      Sign out\n                    ")])])])])])])]},proxy:!0},{key:"code",fn:function(){return[t._v('\n          <div class="relative inline-block text-left">\n            <div>\n              <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">\n                Account\n                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\n                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />\n                </svg>\n              </button>\n            </div>\n            <div class="absolute z-20 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">\n              <div class="py-1" role="none">\n                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>\n                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-1">Profile</a>\n                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-2">Change Password</a>\n                <form method="POST" action="#" role="none">\n                  <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-3">\n                    Sign out\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n        ')]},proxy:!0}])}),t._v(" "),n("code-and-preview",{attrs:{title:"Dropdown Left"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"relative inline-block text-left"},[n("div",[n("button",{staticClass:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50",class:"2"==t.show_id?"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500":"",attrs:{type:"button",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},on:{click:function(e){return t.toggledropdown("2")}}},[t._v("\n                Account\n                "),n("svg",{staticClass:"-mr-1 ml-2 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),n("div",{staticClass:"absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",class:"2"==t.show_id?"":"hidden",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"}},[n("div",{staticClass:"py-1",attrs:{role:"none"}},[n("a",{staticClass:"text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-0"}},[t._v("Account settings")]),t._v(" "),n("a",{staticClass:"text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-1"}},[t._v("Profile")]),t._v(" "),n("a",{staticClass:"text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-2"}},[t._v("Change Password")]),t._v(" "),n("form",{attrs:{method:"POST",action:"#",role:"none"}},[n("button",{staticClass:"text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500",attrs:{type:"submit",role:"menuitem",tabindex:"-1",id:"menu-item-3"}},[t._v("\n                    Sign out\n                  ")])])])])])])]},proxy:!0},{key:"code",fn:function(){return[t._v('\n        <div class="relative inline-block text-left">\n          <div>\n            <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">\n              Account\n              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\n                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />\n              </svg>\n            </button>\n          </div>\n          <div class="absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">\n            <div class="py-1" role="none">\n              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>\n              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-1">Profile</a>\n              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-2">Change Password</a>\n              <form method="POST" action="#" role="none">\n                <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-3">\n                  Sign out\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      ')]},proxy:!0}])}),t._v(" "),n("code-and-preview",{attrs:{title:"Dropdown Top"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"relative inline-block text-left"},[n("div",[n("button",{staticClass:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50",class:"3"==t.show_id?"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500":"",attrs:{type:"button",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},on:{click:function(e){return t.toggledropdown("3")}}},[t._v("\n                Account\n                "),n("svg",{staticClass:"-mr-1 ml-2 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),n("div",{staticClass:"absolute z-20 bottom-0 mb-11 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",class:"3"==t.show_id?"":"hidden",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"}},[n("div",{staticClass:"py-1",attrs:{role:"none"}},[n("a",{staticClass:"text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-0"}},[t._v("Account settings")]),t._v(" "),n("a",{staticClass:"text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-1"}},[t._v("Profile")]),t._v(" "),n("a",{staticClass:"text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-2"}},[t._v("Change Password")]),t._v(" "),n("form",{attrs:{method:"POST",action:"#",role:"none"}},[n("button",{staticClass:"text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500",attrs:{type:"submit",role:"menuitem",tabindex:"-1",id:"menu-item-3"}},[t._v("\n                    Sign out\n                  ")])])])])])])]},proxy:!0},{key:"code",fn:function(){return[t._v('\n        <div class="relative inline-block text-left">\n          <div>\n            <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">\n              Account\n              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\n                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />\n              </svg>\n            </button>\n          </div>\n          <div class="absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">\n            <div class="py-1" role="none">\n              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>\n              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-1">Profile</a>\n              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-2">Change Password</a>\n              <form method="POST" action="#" role="none">\n                <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-3">\n                  Sign out\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      ')]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CodeAndPreview:n(408).default})}}]);