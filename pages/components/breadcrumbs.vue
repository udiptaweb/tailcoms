<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Breadcrumb</h1>
  <p class="text-gray-700">Indicate the current page’s location within a navigational hierarchy</p>
  <h1 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h1>
  <div class="border-t py-4">
    <div class="flex justify-end gap-x-1">
        <!-- <button @click="showCode('breadcrumb1')" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 text-xs border border-gray-400 rounded shadow">
          <span class="flex justify-center items-center gap-x-1">
          Copy
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path d="M29.5 7h-19A1.5 1.5 0 0 0 9 8.5v24a1.5 1.5 0 0 0 1.5 1.5h19a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 29.5 7zM29 32H11V9h18z" class="clr-i-outline clr-i-outline-path-1" fill="currentColor"/><path d="M26 3.5A1.5 1.5 0 0 0 24.5 2h-19A1.5 1.5 0 0 0 4 3.5v24A1.5 1.5 0 0 0 5.5 29H6V4h20z" class="clr-i-outline clr-i-outline-path-2" fill="currentColor"/></svg>
          </span>
        </button> -->
        <button @click="showCode('breadcrumb1')" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 text-xs border border-gray-400 rounded shadow">
          <span class="flex justify-center items-center gap-x-1" v-if="show_code == ''">
            Show Code
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 9l-7 8l7 8M22 9l7 8l-7 8M18 7l-4 20"/></g></svg>
          </span>
          <span class="flex justify-center items-center gap-x-1" v-else>
            Preview
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M472 16H40a24.028 24.028 0 0 0-24 24v336a24.028 24.028 0 0 0 24 24h200v64h-80v32h192v-32h-80v-64h200a24.028 24.028 0 0 0 24-24V40a24.028 24.028 0 0 0-24-24zm-8 352H48v-96h416zm0-128H48V48h416z"/><path fill="currentColor" d="M400 304h32v32h-32z"/></svg>
          </span>
        </button>
    </div>
    <ol class="list-reset flex d-flex text-gray-500 gap-x-2" v-if="show_code != 'breadcrumb1'">
      <li><a href="#">Home /</a> </li>
      <li><a href="#">Components /</a> </li>
      <li class="text-blue-500">Breadcrumbs</li>
    </ol>

    <pre v-if="show_code == 'breadcrumb1'">
      <code v-highlight class="html">
        &lt;ol class="list-reset flex d-flex text-gray-500 gap-x-2"&gt;
              &lt;li&gt;&lt;a href="#"&gt;Home /&lt;/a&gt; &lt;/li&gt;
              &lt;li&gt;&lt;a href="#"&gt;Components /&lt;/a&gt; &lt;/li&gt;
              &lt;li class="text-blue-500"&gt;Breadcrumbs&lt;/li&gt;
        &lt;/ol>
      </code>
    </pre>
  </div>
</div>
</template>

<script>
export default {
  layout:'App',
  data(){
    return{
      show_code:''
    }
  },
  methods:{
    showCode(id){
      if(this.show_code == id){
        this.show_code = '';
      }else{
        this.show_code = id;
      }
    }
  }
}
</script>
<style>
.code {
  background-color:#EEEEEE;
  font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New;
}
</style>
