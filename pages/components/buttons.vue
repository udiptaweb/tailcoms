<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white mb-4">Buttons</h1>
    <code-and-preview :code="buttons1"></code-and-preview>
    <code-and-preview :code="buttons2"></code-and-preview>
    <code-and-preview :code="buttons3"></code-and-preview>
     <code-and-preview :code="buttons4"></code-and-preview>
    <code-and-preview :code="buttons5"></code-and-preview>
</div>
</template>

<script>
import CodeAndPreview from '../../components/CodeAndPreview.vue';
export default {
  components: { CodeAndPreview },
  layout:'App',
  computed:{
    buttons5(){
      return `<div class="flex flex-col  md:w-1/2 lg:w-1/2 justify-start items-center gap-y-2">
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-sm"> Submit</button>
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-sm"> Submit</button>
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-sm"> Submit</button>
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-sm"> Submit</button>
        </div>
        <div class="flex flex-col  md:w-1/2 lg:w-1/2 justify-start items-center gap-y-2 mt-12">
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-md"> Submit</button>
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-md"> Submit</button>
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-md"> Submit</button>
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-md"> Submit</button>
        </div>
        <div class="flex flex-col  md:w-1/2 lg:w-1/2 justify-start items-center gap-y-2 mt-12">
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-lg"> Submit</button>
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-lg"> Submit</button>
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-lg"> Submit</button>
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-lg"> Submit</button>
        </div>`;
    },
    buttons4(){
      return `<div class="flex flex-col md:w-1/2 lg:w-1/2 gap-y-2 justify-start items-center">
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-sm"> Submit</button>
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-sm"> Submit</button>
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-sm"> Submit</button>
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-sm"> Submit</button>
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-sm"> Submit</button>
          <button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-sm"> Submit</button>
        </div>
        <div class="flex flex-col md:w-1/2 lg:w-1/2 gap-y-2 justify-start items-center mt-12">
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-md"> Submit</button>
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-md"> Submit</button>
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-md"> Submit</button>
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-md"> Submit</button>
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-md"> Submit</button>
          <button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-md"> Submit</button>
        </div>
        <div class="flex flex-col md:w-1/2 lg:w-1/2 gap-y-2 justify-start items-center mt-12">
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-lg"> Submit</button>
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-lg"> Submit</button>
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-lg"> Submit</button>
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-lg"> Submit</button>
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-lg"> Submit</button>
          <button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-lg"> Submit</button>
        </div>`;
    },
    buttons3(){
      return `<div class="flex justify-start items-center gap-2 flex-wrap gap-x-2">
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-sm"> Submit</button>
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-sm"> Submit</button>
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-sm"> Submit</button>
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-sm"> Submit</button>
        </div>
        <div class="flex justify-start items-center gap-2 flex-wrap gap-x-2 mt-4">
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-md"> Submit</button>
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-md"> Submit</button>
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-md"> Submit</button>
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-md"> Submit</button>
        </div>
        <div class="flex justify-start items-center gap-2 flex-wrap gap-x-2 mt-4">
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-lg"> Submit</button>
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-lg"> Submit</button>
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-lg"> Submit</button>
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-lg"> Submit</button>
        </div>`;
    },
    buttons2(){
      return `<div class="flex justify-start items-center gap-2 flex-wrap">
          <button type="button" class="inline-flex items-center space-x-1 px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-sm">
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></g></svg>
          </button>
          <button type="button" class="inline-flex items-center space-x-1 px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-sm">
            <span>Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></g></svg>
          </button>
          <button type="button" class="inline-flex items-center space-x-1 px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-sm">
            <span>Delete</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.345 3.147A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 6h20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
          </button>
          <button type="button" class="inline-flex items-center space-x-1 px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-sm">
            <span>Edit</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z" fill="currentColor"/><path d="M7 14.987v1.999h1.999l5.529-5.522l-1.998-1.998zm8.47-4.465l-1.998-2L14.995 7l2 1.999z" fill="currentColor"/></svg>
          </button>
        </div>
        <div class="flex justify-start items-center gap-2 flex-wrap mt-4">
          <button type="button" class="inline-flex items-center space-x-1 px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-md">
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></g></svg>
          </button>
          <button type="button" class="inline-flex items-center space-x-1 px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-md">
            <span>Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></g></svg>
          </button>
          <button type="button" class="inline-flex items-center space-x-1 px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-md">
            <span>Delete</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.345 3.147A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 6h20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
          </button>
          <button type="button" class="inline-flex items-center space-x-1 px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-md">
            <span>Edit</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z" fill="currentColor"/><path d="M7 14.987v1.999h1.999l5.529-5.522l-1.998-1.998zm8.47-4.465l-1.998-2L14.995 7l2 1.999z" fill="currentColor"/></svg>
          </button>
        </div>
        <div class="flex justify-start items-center gap-2 flex-wrap mt-4">
          <button type="button" class="inline-flex items-center space-x-1 px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-lg">
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></g></svg>
          </button>
          <button type="button" class="inline-flex items-center space-x-1 px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-lg">
            <span>Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></g></svg>
          </button>
          <button type="button" class="inline-flex items-center space-x-1 px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-lg">
            <span>Delete</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.345 3.147A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 6h20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
          </button>
          <button type="button" class="inline-flex items-center space-x-1 px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-lg">
            <span>Edit</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z" fill="currentColor"/><path d="M7 14.987v1.999h1.999l5.529-5.522l-1.998-1.998zm8.47-4.465l-1.998-2L14.995 7l2 1.999z" fill="currentColor"/></svg>
          </button>
        </div>`;
    },
    buttons1(){
      return `<div class="flex justify-start items-center gap-2 flex-wrap">
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-sm"> Submit</button>
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-sm"> Submit</button>
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-sm"> Submit</button>
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-sm"> Submit</button>
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-sm"> Submit</button>
          <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-sm"> Submit</button>
        </div>
        <div class="flex justify-start items-center gap-2 flex-wrap mt-4">
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-md"> Submit</button>
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-md"> Submit</button>
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-md"> Submit</button>
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-md"> Submit</button>
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-md"> Submit</button>
          <button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-md"> Submit</button>
        </div>
        <div class="flex justify-start items-center gap-2 flex-wrap mt-4">
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-lg"> Submit</button>
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-lg"> Submit</button>
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-lg"> Submit</button>
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-lg"> Submit</button>
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-lg"> Submit</button>
          <button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-lg"> Submit</button>
        </div>`;
    }
  }
}
</script>

