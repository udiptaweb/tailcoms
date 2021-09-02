<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white mb-4">Buttons</h1>
    <code-and-preview>
      <template v-slot:preview>
        <div class="flex justify-start items-center gap-2 flex-wrap">
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
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex justify-start items-center gap-x-2"&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-sm"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="flex justify-start items-center gap-x-2 mt-4"&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-md"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="flex justify-start items-center gap-x-2 mt-4"&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-lg"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
      </template>
    </code-and-preview>
    <code-and-preview>
      <template v-slot:preview>
        <div class="flex justify-start items-center gap-2 flex-wrap gap-x-2">
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
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex justify-start items-center gap-x-2"&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-sm"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="flex justify-start items-center gap-x-2 mt-4"&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-md"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="flex justify-start items-center gap-x-2 mt-4"&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-lg"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
      </template>
    </code-and-preview>
     <code-and-preview>
      <template v-slot:preview>
        <div class="flex flex-col md:w-1/2 lg:w-1/2 gap-y-2 justify-start items-center">
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
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex flex-col w-1/2 gap-y-2 justify-start items-center"&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-sm"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="flex flex-col w-1/2 gap-y-2 justify-start items-center mt-12"&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-md"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="flex flex-col w-1/2 gap-y-2 justify-start items-center mt-12"&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-green-500 bg-green-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-yellow-500 bg-yellow-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-red-500 bg-red-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-500 bg-gray-400 text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-gray-100 bg-white text-lg"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
      </template>
    </code-and-preview>
    <code-and-preview>
      <template v-slot:preview>
        <div class="flex flex-col  md:w-1/2 lg:w-1/2 justify-start items-center gap-y-2">
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
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex flex-col justify-start items-center gap-y-2"&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-sm"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-sm"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="flex flex-col justify-start items-center gap-y-2 mt-12"&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-md"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-4 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-md"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="flex flex-col justify-start items-center gap-y-2 mt-12"&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-green-500 hover:border-transparent hover:bg-green-500 text-green-500 hover:text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-blue-500 hover:border-transparent hover:bg-blue-500 text-blue-500 hover:text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-yellow-500 hover:border-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white text-lg"&gt; Submit&lt;/button&gt;
          &lt;button type="button" class="w-full px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-transparent border border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-white text-lg"&gt; Submit&lt;/button&gt;
        &lt;/div&gt;
      </template>
    </code-and-preview>
</div>
</template>

<script>
import CodeAndPreview from '../../components/CodeAndPreview.vue';
export default {
  components: { CodeAndPreview },
  layout:'App'
}
</script>

