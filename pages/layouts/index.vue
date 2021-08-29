<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Layouts</h1>
  <p class="text-gray-700">Layout provides the basic structure of the page</p>
  <h1 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h1>
  <code-and-preview>
    <template v-slot:preview>
      <div class="dark:bg-gray-900">
          <NavbarTop />
          <div class="w-full">
              <div class="min-h-screen">
                <div class="flex justify-center">
                  <div class="w-1/4 shadow hidden md:block">
                    <Sidebar />
                  </div>
                  <div class="w-full min-h-screen md:w-3/4 flex justify-center gap-x-4">
                    <Nuxt />
                  </div>
                </div>
              </div>
          </div>
          <div class="p-4 flex justiy-center items-center flex-col min-h-12 bg-gray-700">
              <div class="ml-4 text-center text-sm text-gray-100 sm:text-right sm:ml-0">
                  Copyright &copy; 2021 Tailcoms
              </div>
          </div>
      </div>
    </template>
    <template v-slot:code>
      &lt;div class="dark:bg-gray-900"&gt;
          &lt;nav class="bg-white shadow dark:bg-gray-800  sticky top-0 z-30"&gt;
            &lt;div class="container px-6 py-3 md:py-1 mx-auto"&gt;
                &lt;div class="flex flex-col md:flex-row md:justify-between md:items-center"&gt;
                    &lt;div class="flex items-center justify-between relative"&gt;
                        &lt;div class="flex items-center"&gt;
                            &lt;a class="text-2xl w-20 font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#"&gt;
                                &lt;img src="/logo.png" alt="Tailcoms"&gt;
                            &lt;/a&gt;
                        &lt;/div&gt;
                        &lt;!-- Mobile menu button --&gt;
                        &lt;div class="flex md:hidden"&gt;
                            &lt;button type="button" class="md:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu"&gt;
                                &lt;svg viewBox="0 0 24 24" class="w-6 h-6 fill-current"&gt;
                                    &lt;path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"&gt;&lt;/path&gt;
                                &lt;/svg&gt;
                            &lt;/button&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;

                    &lt;!-- Mobile Menu open: "block", Menu closed: "hidden" --&gt;
                    &lt;div  class="lg:hidden origin-top-right z-50 absolute top-8 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"&gt;
                        &lt;div class="py-1" role="none"&gt;
                          &lt;a href="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"&gt;Components&lt;/a&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class="items-center md:flex hidden"&gt;
                        &lt;div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1"&gt;
                            &lt;a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href=""&gt;Components&lt;/a&gt;
                            &lt;a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href=""&gt;Pages&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="flex items-center py-2 -mx-1 md:mx-0"&gt;

                        &lt;/div&gt;
                        &lt;div class="mt-3 md:hidden"&gt;
                            &lt;div class="relative"&gt;
                                &lt;span class="absolute inset-y-0 left-0 flex items-center pl-3"&gt;
                                    &lt;svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none"&gt;
                                        &lt;path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"&gt;&lt;/path&gt;
                                    &lt;/svg&gt;
                                &lt;/span&gt;

                                &lt;input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search"&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
          &lt;/nav&gt;
          &lt;div class="w-full"&gt;
              &lt;div class="min-h-screen"&gt;
                &lt;div class="flex justify-center"&gt;
                  &lt;div class="w-1/4 shadow hidden md:block"&gt;
                    &lt;div class="md:flex min-h-screen hidden md:block flex-col md:flex-row w-full"&gt;
                      &lt;div class="flex flex-col w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0" &gt;
                        &lt;div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"&gt;
                          &lt;a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"&gt;TAILCOMS UI&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto"&gt;
                          &lt;a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"&gt;Layouts&lt;/a&gt;
                          &lt;a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"&gt;Pages&lt;/a&gt;
                          &lt;div class="relative"&gt;
                            &lt;button class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"&gt;
                              &lt;span&gt;Components&lt;/span&gt;
                              &lt;svg fill="currentColor" viewBox="0 0 20 20" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"&gt;&lt;path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"&gt;&lt;/path&gt;&lt;/svg&gt;
                            &lt;/button&gt;
                            &lt;div class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg"&gt;
                              &lt;div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"&gt;
                                &lt;li class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"&gt;Alert&lt;/li&gt;
                                &lt;li class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"&gt;Button&lt;/li&gt;
                                &lt;li class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"&gt;Button-Group&lt;/li&gt;
                                &lt;li class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"&gt;Breadcrumb&lt;/li&gt;
                                &lt;li class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"&gt;Card&lt;/li&gt;
                              &lt;/div&gt;
                            &lt;/div&gt;
                          &lt;/div&gt;
                        &lt;/nav&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class="w-full min-h-screen md:w-3/4 flex justify-center gap-x-4"&gt;

                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="p-4 flex justiy-center items-center flex-col min-h-12 bg-gray-700"&gt;
              &lt;div class="ml-4 text-center text-sm text-gray-100 sm:text-right sm:ml-0"&gt;
                  Copyright &copy; 2021 Tailcoms
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/div&gt;
    </template>
  </code-and-preview>
</div>
</template>

<script>
export default {
  layout:'App'
}
</script>

