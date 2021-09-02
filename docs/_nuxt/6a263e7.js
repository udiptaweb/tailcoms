(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{408:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{show_code:!1}},methods:{showCode:function(){this.show_code=!this.show_code}}},r=o(13),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"border p-4"},[o("div",{staticClass:"flex justify-end gap-x-1 mb-2"},[o("button",{staticClass:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 text-xs border border-gray-400 rounded shadow",on:{click:t.showCode}},[o("span",{directives:[{name:"show",rawName:"v-show",value:!t.show_code,expression:"!show_code"}],staticClass:"flex justify-center items-center gap-x-1"},[t._v("\n          Show Code\n          "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"}},[o("g",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[o("path",{attrs:{d:"M10 9l-7 8l7 8M22 9l7 8l-7 8M18 7l-4 20"}})])])]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.show_code,expression:"show_code"}],staticClass:"flex justify-center items-center gap-x-1"},[t._v("\n          Preview\n          "),o("svg",{staticStyle:{"vertical-align":"-0.125em"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M472 16H40a24.028 24.028 0 0 0-24 24v336a24.028 24.028 0 0 0 24 24h200v64h-80v32h192v-32h-80v-64h200a24.028 24.028 0 0 0 24-24V40a24.028 24.028 0 0 0-24-24zm-8 352H48v-96h416zm0-128H48V48h416z"}}),o("path",{attrs:{fill:"currentColor",d:"M400 304h32v32h-32z"}})])])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.show_code,expression:"!show_code"}],staticClass:"preview"},[t._t("preview")],2),t._v(" "),o("pre",{directives:[{name:"show",rawName:"v-show",value:t.show_code,expression:"show_code"}]},[t._v("    "),o("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"html"},[t._v("\n      "),t._t("code"),t._v("\n    ")],2),t._v("\n  ")])])}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,o){"use strict";o.r(e);var n={components:{CodeAndPreview:o(408).default},layout:"App"},r=o(13),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4"},[o("h1",{staticClass:"text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white mb-4"},[t._v("Buttons")]),t._v(" "),o("code-and-preview",{scopedSlots:t._u([{key:"preview",fn:function(){return[o("div",{staticClass:"flex justify-start items-center gap-x-2"},[o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-sm",attrs:{type:"button"}},[t._v(" Submit")])]),t._v(" "),o("div",{staticClass:"flex justify-start items-center gap-x-2 mt-4"},[o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-md",attrs:{type:"button"}},[t._v(" Submit")])]),t._v(" "),o("div",{staticClass:"flex justify-start items-center gap-x-2 mt-4"},[o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-lg",attrs:{type:"button"}},[t._v(" Submit")])])]},proxy:!0},{key:"code",fn:function(){return[t._v('\n        <div class="flex justify-start items-center gap-x-2">\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-sm"> Submit</button>\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-sm"> Submit</button>\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-sm"> Submit</button>\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-sm"> Submit</button>\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-sm"> Submit</button>\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-sm"> Submit</button>\n        </div>\n        <div class="flex justify-start items-center gap-x-2 mt-4">\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-md"> Submit</button>\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-md"> Submit</button>\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-md"> Submit</button>\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-md"> Submit</button>\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-md"> Submit</button>\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-md"> Submit</button>\n        </div>\n        <div class="flex justify-start items-center gap-x-2 mt-4">\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-lg"> Submit</button>\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-lg"> Submit</button>\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-lg"> Submit</button>\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-lg"> Submit</button>\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-lg"> Submit</button>\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-lg"> Submit</button>\n        </div>\n      ')]},proxy:!0}])}),t._v(" "),o("code-and-preview",{scopedSlots:t._u([{key:"preview",fn:function(){return[o("div",{staticClass:"flex justify-start items-center gap-x-2"},[o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")])]),t._v(" "),o("div",{staticClass:"flex justify-start items-center gap-x-2 mt-4"},[o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-md",attrs:{type:"button"}},[t._v(" Submit")])]),t._v(" "),o("div",{staticClass:"flex justify-start items-center gap-x-2 mt-4"},[o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")])])]},proxy:!0},{key:"code",fn:function(){return[t._v('\n        <div class="flex justify-start items-center gap-x-2">\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-sm"> Submit</button>\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-sm"> Submit</button>\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-sm"> Submit</button>\n          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-sm"> Submit</button>\n        </div>\n        <div class="flex justify-start items-center gap-x-2 mt-4">\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-md"> Submit</button>\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-md"> Submit</button>\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-md"> Submit</button>\n          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-md"> Submit</button>\n        </div>\n        <div class="flex justify-start items-center gap-x-2 mt-4">\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-lg"> Submit</button>\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-lg"> Submit</button>\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-lg"> Submit</button>\n          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-lg"> Submit</button>\n        </div>\n      ')]},proxy:!0}])}),t._v(" "),o("code-and-preview",{scopedSlots:t._u([{key:"preview",fn:function(){return[o("div",{staticClass:"flex flex-col w-1/2 gap-y-2 justify-start items-center"},[o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-sm",attrs:{type:"button"}},[t._v(" Submit")])]),t._v(" "),o("div",{staticClass:"flex flex-col w-1/2 gap-y-2 justify-start items-center mt-12"},[o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-md",attrs:{type:"button"}},[t._v(" Submit")])]),t._v(" "),o("div",{staticClass:"flex flex-col w-1/2 gap-y-2 justify-start items-center mt-12"},[o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-lg",attrs:{type:"button"}},[t._v(" Submit")])])]},proxy:!0},{key:"code",fn:function(){return[t._v('\n        <div class="flex flex-col w-1/2 gap-y-2 justify-start items-center">\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-sm"> Submit</button>\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-sm"> Submit</button>\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-sm"> Submit</button>\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-sm"> Submit</button>\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-sm"> Submit</button>\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-sm"> Submit</button>\n        </div>\n        <div class="flex flex-col w-1/2 gap-y-2 justify-start items-center mt-12">\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-md"> Submit</button>\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-md"> Submit</button>\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-md"> Submit</button>\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-md"> Submit</button>\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-md"> Submit</button>\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-md"> Submit</button>\n        </div>\n        <div class="flex flex-col w-1/2 gap-y-2 justify-start items-center mt-12">\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-lg"> Submit</button>\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-lg"> Submit</button>\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-lg"> Submit</button>\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-lg"> Submit</button>\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-lg"> Submit</button>\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-lg"> Submit</button>\n        </div>\n      ')]},proxy:!0}])}),t._v(" "),o("code-and-preview",{scopedSlots:t._u([{key:"preview",fn:function(){return[o("div",{staticClass:"flex flex-col  w-1/2 justify-start items-center gap-y-2"},[o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-sm",attrs:{type:"button"}},[t._v(" Submit")])]),t._v(" "),o("div",{staticClass:"flex flex-col  w-1/2 justify-start items-center gap-y-2 mt-12"},[o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-md",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-md",attrs:{type:"button"}},[t._v(" Submit")])]),t._v(" "),o("div",{staticClass:"flex flex-col  w-1/2 justify-start items-center gap-y-2 mt-12"},[o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")]),t._v(" "),o("button",{staticClass:"w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-lg",attrs:{type:"button"}},[t._v(" Submit")])])]},proxy:!0},{key:"code",fn:function(){return[t._v('\n        <div class="flex flex-col justify-start items-center gap-y-2">\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-sm"> Submit</button>\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-sm"> Submit</button>\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-sm"> Submit</button>\n          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-sm"> Submit</button>\n        </div>\n        <div class="flex flex-col justify-start items-center gap-y-2 mt-12">\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-md"> Submit</button>\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-md"> Submit</button>\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-md"> Submit</button>\n          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-md"> Submit</button>\n        </div>\n        <div class="flex flex-col justify-start items-center gap-y-2 mt-12">\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-lg"> Submit</button>\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-lg"> Submit</button>\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-lg"> Submit</button>\n          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-lg"> Submit</button>\n        </div>\n      ')]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CodeAndPreview:o(408).default})}}]);