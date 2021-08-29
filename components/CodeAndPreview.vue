<template>
  <div class="border p-4">
    <div class="flex justify-end gap-x-1 mb-2">
        <button @click="showCode" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 text-xs border border-gray-400 rounded shadow">
          <span class="flex justify-center items-center gap-x-1" v-show="!show_code">
            Show Code
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 9l-7 8l7 8M22 9l7 8l-7 8M18 7l-4 20"/></g></svg>
          </span>
          <span class="flex justify-center items-center gap-x-1" v-show="show_code">
            Preview
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M472 16H40a24.028 24.028 0 0 0-24 24v336a24.028 24.028 0 0 0 24 24h200v64h-80v32h192v-32h-80v-64h200a24.028 24.028 0 0 0 24-24V40a24.028 24.028 0 0 0-24-24zm-8 352H48v-96h416zm0-128H48V48h416z"/><path fill="currentColor" d="M400 304h32v32h-32z"/></svg>
          </span>
        </button>
    </div>
    <div class="preview" v-show="!show_code">
        <slot name="preview"></slot>
    </div>

    <pre v-show="show_code">
      <code v-highlight class="html">
        <slot name="code"></slot>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show_code:false
    }
  },
  methods:{
    showCode(){
      this.show_code = !this.show_code;
    }
  }
}
</script>
