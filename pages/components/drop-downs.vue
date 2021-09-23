<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Dropdowns</h1>
  <h2 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h2>
    <code-and-preview :title="'Dropdown Right'">
        <template v-slot:preview>
          <div class="flex justify-center">
            <div class="relative inline-block text-left">
              <div>
                <button @click="toggledropdown('1')" type="button" :class="show_id == '1' ? 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500' : ''" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Account
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <div :class="show_id == '1' ? '' : 'hidden'" class="absolute z-20 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-1">Profile</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-2">Change Password</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-3">
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:code>
          &lt;div class="relative inline-block text-left"&gt;
            &lt;div&gt;
              &lt;button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true"&gt;
                Account
                &lt;svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"&gt;
                  &lt;path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /&gt;
                &lt;/svg&gt;
              &lt;/button&gt;
            &lt;/div&gt;
            &lt;div class="absolute z-20 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"&gt;
              &lt;div class="py-1" role="none"&gt;
                &lt;a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-0"&gt;Account settings&lt;/a&gt;
                &lt;a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-1"&gt;Profile&lt;/a&gt;
                &lt;a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-2"&gt;Change Password&lt;/a&gt;
                &lt;form method="POST" action="#" role="none"&gt;
                  &lt;button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-3"&gt;
                    Sign out
                  &lt;/button&gt;
                &lt;/form&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </template>
    </code-and-preview>
    <code-and-preview :title="'Dropdown Left'">
      <template v-slot:preview >
        <div class="flex justify-center">
          <div class="relative inline-block text-left">
            <div>
              <button @click="toggledropdown('2')" type="button" :class="show_id == '2' ? 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500' : ''" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Account
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div :class="show_id == '2' ? '' : 'hidden'" class="absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-1">Profile</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-2">Change Password</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-3">
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="relative inline-block text-left"&gt;
          &lt;div&gt;
            &lt;button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true"&gt;
              Account
              &lt;svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"&gt;
                &lt;path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /&gt;
              &lt;/svg&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"&gt;
            &lt;div class="py-1" role="none"&gt;
              &lt;a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-0"&gt;Account settings&lt;/a&gt;
              &lt;a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-1"&gt;Profile&lt;/a&gt;
              &lt;a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-2"&gt;Change Password&lt;/a&gt;
              &lt;form method="POST" action="#" role="none"&gt;
                &lt;button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-3"&gt;
                  Sign out
                &lt;/button&gt;
              &lt;/form&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </template>
    </code-and-preview>
    <code-and-preview :title="'Dropdown Top'">
      <template v-slot:preview >
        <div class="flex justify-center">
          <div class="relative inline-block text-left">
            <div>
              <button @click="toggledropdown('3')" type="button" :class="show_id == '3' ? 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500' : ''" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Account
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div :class="show_id == '3' ? '' : 'hidden'" class="absolute z-20 bottom-0 mb-11 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-1">Profile</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-2">Change Password</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-3">
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="relative inline-block text-left"&gt;
          &lt;div&gt;
            &lt;button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true"&gt;
              Account
              &lt;svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"&gt;
                &lt;path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /&gt;
              &lt;/svg&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"&gt;
            &lt;div class="py-1" role="none"&gt;
              &lt;a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-0"&gt;Account settings&lt;/a&gt;
              &lt;a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-1"&gt;Profile&lt;/a&gt;
              &lt;a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-2"&gt;Change Password&lt;/a&gt;
              &lt;form method="POST" action="#" role="none"&gt;
                &lt;button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-indigo-500" role="menuitem" tabindex="-1" id="menu-item-3"&gt;
                  Sign out
                &lt;/button&gt;
              &lt;/form&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </template>
    </code-and-preview>
</div>
</template>

<script>
import CodeAndPreview from '../../components/CodeAndPreview.vue';
export default {
  components: { CodeAndPreview },
  layout:'App',
  data(){
    return{
      show_id:'',
    }
  },
  methods:{
    toggledropdown(id){
       if(this.show_id == id){
         this.show_id = null;
       }else{
         this.show_id = id;
       }
    }
  }
}
</script>

