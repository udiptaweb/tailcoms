<template>
<nav class="bg-white shadow dark:bg-gray-800  sticky top-0 z-30">
  <div class="container px-6 py-3 md:py-1 mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div class="flex items-center justify-between relative">
              <div class="flex items-center">
                  <a class="text-2xl w-20 font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">
                      <img src="~/assets/logo.png" alt="Tailcoms">
                  </a>
              </div>
              <!-- Mobile menu button -->
              <div class="flex md:hidden">
                  <button @click="show_mobile_drop = !show_mobile_drop" type="button" class="md:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                      <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                          <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                      </svg>
                  </button>
              </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div v-show="show_mobile_drop" class="lg:hidden origin-top-right z-50 absolute top-8 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                  <NuxtLink to="/layouts">
                  <span @click="show_mobile_drop = false;" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Layouts</span>
                  </NuxtLink>
                  <h5 class="px-4">Components</h5>
                  <NuxtLink to="/components/alerts">
                  <span @click="show_mobile_drop = false;" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Alerts</span>
                  </NuxtLink>
                  <NuxtLink to="/components/avatars">
                  <span @click="show_mobile_drop = false;" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Avatars</span>
                  </NuxtLink>
                  <NuxtLink to="/components/breadcrumbs">
                  <span @click="show_mobile_drop = false;" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Breadcrumb</span>
                  </NuxtLink>
                  <h5 class="px-4">Pages</h5>
                  <NuxtLink to="/pages/login">
                  <span @click="show_mobile_drop = false;" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Login</span>
                  </NuxtLink>
              </div>
          </div>
          <div class="items-center md:flex hidden">
              <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                  <!-- <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="">Components</a>
                  <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="">Pages</a> -->
              </div>
              <div class="flex items-center py-2 -mx-1 md:mx-0">

              </div>
              <div class="mt-3 md:hidden">
                  <div class="relative">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                      </span>

                      <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                  </div>
              </div>
          </div>
      </div>
  </div>
</nav>
</template>
<script>
export default {
  data(){
    return{
      show_mobile_drop:false,
    }
  }
}
</script>
