<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Breadcrumb</h1>
  <p class="text-gray-700">Indicate the current page’s location within a navigational hierarchy</p>
  <h2 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h2>
   <code-and-preview :code="breadcrumb1"></code-and-preview>
   <code-and-preview :code="breadcrumb2"></code-and-preview>
   <code-and-preview :code="breadcrumb3"></code-and-preview>
</div>
</template>

<script>
import CodeAndPreview from '../../components/CodeAndPreview.vue';
export default {
  components: { CodeAndPreview },
  layout:'App',
  computed:{
    breadcrumb3(){
      return `<ul class="flex py-1 text-gray-500 text-sm lg:text-base">
          <li>
            <a
              href="/"
              class="p-2 rounded bg-white hover:bg-indigo-400 hover:text-white transition ease-out duration-200"
            >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="p-2 rounded bg-white hover:bg-indigo-400 hover:text-white transition ease-out duration-200"
            >Components</a
            >
          </li>
          <li>
            <a
              href="#"
              class="p-2 rounded bg-indigo-400 text-white shadow-xs"
            >Breadcrumb</a
            >
          </li>
        </ul>`;
    },
    breadcrumb2(){
      return `<ul class="flex text-gray-500 text-sm lg:text-base overflow-auto">
          <li class="inline-flex items-center">
            <svg class="flex-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.1em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 12H4V8h16m-7 9v-3h2v3h2v-4h2l-5-4l-5 4h2v4z" fill="currentColor"/></svg>
            <a href="/">Home</a>
            <svg
              class="h-5 w-auto text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li class="inline-flex items-center">
            <svg class="flex-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.1em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M3 5v14h19V5H3m2 2h15v4H5V7m0 10v-4h4v4H5m6 0v-4h9v4h-9z" fill="currentColor"/></svg>
            <a href="#">Components</a>
            <svg
              class="h-5 w-auto text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li class="inline-flex items-center text-indigo-500">
            <svg class="flex-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.1em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M3 5v14h19V5H3m2 2h15v4H5V7m0 10v-4h4v4H5m6 0v-4h9v4h-9z" fill="currentColor"/></svg>
            <a href="#">Breadcrumbs</a>
          </li>
        </ul>`;
    },
    breadcrumb1(){
      return `<ul class="flex text-gray-500 text-sm lg:text-base overflow-auto">
          <li class="inline-flex items-center">
            <a href="/">Home</a>
            <svg
              class="h-5 w-auto text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li class="inline-flex items-center">
            <a href="#">Components</a>
            <svg
              class="h-5 w-auto text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li class="inline-flex items-center">
            <a href="#" class="text-indigo-400">Breadcrumb</a>
          </li>
        </ul>`;
    }
  }
}
</script>

