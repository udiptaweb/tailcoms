(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(t,e,o){"use strict";var r={},n=o(13),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dark:bg-gray-900"},[o("NavbarTop"),t._v(" "),o("div",{staticClass:"w-full"},[o("div",{staticClass:"min-h-screen"},[o("div",{staticClass:"flex justify-center gap-x-2"},[o("div",{staticClass:"w-1/4 shadow hidden md:block"},[o("Sidebar")],1),t._v(" "),o("div",{staticClass:"w-full md:w-3/4 flex justify-center gap-x-4"},[o("Nuxt")],1)])])]),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p-4 flex justiy-center items-center flex-col min-h-12 bg-gray-700"},[o("div",{staticClass:"ml-4 text-center text-sm text-gray-100 sm:text-right sm:ml-0"},[t._v("\n            Copyright © 2021 Tailcoms\n        ")]),t._v(" "),o("div",{staticClass:"flex justify-center gap-x-2 mt-2"})])}],!1,null,null,null);e.a=component.exports;installComponents(component,{NavbarTop:o(407).default,Sidebar:o(163).default})},162:function(t,e,o){t.exports=o.p+"img/logo.14cf41c.png"},163:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{open:!1,open_pages_tab:!1}},methods:{hideDropDown:function(){this.open=!1,this.open_pages_tab=!1},toggleComponents:function(){this.open?this.open=!1:(this.open=!0,this.open_pages_tab=!1)},togglePages:function(){this.open_pages_tab?this.open_pages_tab=!1:(this.open_pages_tab=!0,this.open=!1)}}},n=o(13),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"md:flex min-h-screen hidden md:block flex-col md:flex-row w-full"},[o("div",{staticClass:"flex flex-col w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"},[t._m(0),t._v(" "),o("nav",{staticClass:"flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto",class:{block:t.open,hidden:!t.open}},[o("NuxtLink",{attrs:{to:"/layouts"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Layouts")])]),t._v(" "),o("div",{staticClass:"relative"},[o("button",{staticClass:"flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.toggleComponents}},[o("span",[t._v("Components")]),t._v(" "),o("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",class:{"rotate-180":t.open,"rotate-0":!t.open},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-20 right-0 w-full mt-2 origin-top-right rounded-md shadow-lg"},[o("div",{staticClass:"px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"},[o("NuxtLink",{attrs:{to:"/components/alerts"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Alerts")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/avatars"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Avatars")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/buttons"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Buttons")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/breadcrumbs"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Breadcrumb")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/cards"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Cards")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/count-downs"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Count Downs")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/drop-downs"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Dropdown")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/divider"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Divider")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/form-inputs"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Form Inputs")])])],1)])]),t._v(" "),o("div",{staticClass:"relative"},[o("button",{staticClass:"flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.togglePages}},[o("span",[t._v("Pages")]),t._v(" "),o("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",class:{"rotate-180":t.open_pages_tab,"rotate-0":!t.open_pages_tab},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.open_pages_tab,expression:"open_pages_tab"}],staticClass:"absolute z-20 right-0 w-full mt-2 origin-top-right rounded-md shadow-lg"},[o("div",{staticClass:"px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"},[o("NuxtLink",{attrs:{to:"/pages/login"}},[o("span",{staticClass:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:t.hideDropDown}},[t._v("Login")])])],1)])])],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"},[o("a",{staticClass:"text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline",attrs:{href:"#"}},[t._v("TAILCOMS UI")])])}],!1,null,null,null);e.default=component.exports},164:function(t,e,o){o(165),t.exports=o(166)},407:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center"},[e("a",{staticClass:"text-2xl w-20 font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",attrs:{href:"#"}},[e("img",{attrs:{src:o(162),alt:"Tailcoms"}})])])}],n={data:function(){return{show_mobile_drop:!1}}},d=o(13),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"bg-white shadow dark:bg-gray-800  sticky top-0 z-30"},[o("div",{staticClass:"container px-6 py-3 md:py-1 mx-auto"},[o("div",{staticClass:"flex flex-col md:flex-row md:justify-between md:items-center"},[o("div",{staticClass:"flex items-center justify-between relative"},[t._m(0),t._v(" "),o("div",{staticClass:"flex md:hidden"},[o("button",{staticClass:"md:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400",attrs:{type:"button","aria-label":"toggle menu"},on:{click:function(e){t.show_mobile_drop=!t.show_mobile_drop}}},[o("svg",{staticClass:"w-6 h-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.show_mobile_drop,expression:"show_mobile_drop"}],staticClass:"lg:hidden origin-top-right z-50 absolute top-8 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"}},[o("div",{staticClass:"py-1",attrs:{role:"none"}},[o("NuxtLink",{attrs:{to:"/layouts"}},[o("span",{staticClass:"text-gray-700 block px-4 py-2 text-sm",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-0"},on:{click:function(e){t.show_mobile_drop=!1}}},[t._v("Layouts")])]),t._v(" "),o("h5",{staticClass:"px-4"},[t._v("Components")]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/alerts"}},[o("span",{staticClass:"text-gray-700 block px-4 py-2 text-sm",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-0"},on:{click:function(e){t.show_mobile_drop=!1}}},[t._v("Alerts")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/avatars"}},[o("span",{staticClass:"text-gray-700 block px-4 py-2 text-sm",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-0"},on:{click:function(e){t.show_mobile_drop=!1}}},[t._v("Avatars")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/buttons"}},[o("span",{staticClass:"text-gray-700 block px-4 py-2 text-sm",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-0"},on:{click:function(e){t.show_mobile_drop=!1}}},[t._v("Buttons")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/components/breadcrumbs"}},[o("span",{staticClass:"text-gray-700 block px-4 py-2 text-sm",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-0"},on:{click:function(e){t.show_mobile_drop=!1}}},[t._v("Breadcrumb")])]),t._v(" "),o("h5",{staticClass:"px-4"},[t._v("Pages")]),t._v(" "),o("NuxtLink",{attrs:{to:"/pages/login"}},[o("span",{staticClass:"text-gray-700 block px-4 py-2 text-sm",attrs:{href:"#",role:"menuitem",tabindex:"-1",id:"menu-item-0"},on:{click:function(e){t.show_mobile_drop=!1}}},[t._v("Login")])])],1)]),t._v(" "),o("div",{staticClass:"items-center md:flex hidden"},[o("div",{staticClass:"flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1"}),t._v(" "),o("div",{staticClass:"flex items-center py-2 -mx-1 md:mx-0"}),t._v(" "),o("div",{staticClass:"mt-3 md:hidden"},[o("div",{staticClass:"relative"},[o("span",{staticClass:"absolute inset-y-0 left-0 flex items-center pl-3"},[o("svg",{staticClass:"w-5 h-5 text-gray-400",attrs:{viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("input",{staticClass:"w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",attrs:{type:"text",placeholder:"Search"}})])])])])])])}),r,!1,null,null,null);e.default=component.exports}},[[164,17,1,18]]]);