<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Alerts</h1>
  <p class="text-gray-700">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
  <h2 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h2>
   <code-and-preview>
      <template v-slot:preview>
        <div class="bg-blue-50 rounded text-blue-900 px-4 py-3" role="alert">
          <div class="flex">
            <div>
              <svg class="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="text-sm text-blue-500">Lorem ipsum dolor sit amet, consectetur adip!.</p>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="bg-blue-50 rounded text-blue-900 px-4 py-3" role="alert"&gt;
          &lt;div&gt;
            &lt;div class="py-1"&gt;&lt;svg class="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"&gt;&lt;path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/&gt;&lt;/svg&gt;&lt;/div&gt;
            &lt;div&gt;
              &lt;p class="text-sm"&gt;Lorem ipsum dolor sit amet, consectetur adip!.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview>
      <template v-slot:preview>
        <div class="bg-green-50 rounded text-green-900 px-4 py-3" role="alert">
          <div class="flex">
            <div>
              <svg class="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42z" /></svg>
            </div>
            <div>
              <p class="text-sm text-green-500">Lorem ipsum dolor sit amet, consectetur adip!.</p>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="bg-green-50 rounded text-green-900 px-4 py-3" role="alert"&gt;
          &lt;div class="flex"&gt;
            &lt;div&gt;
              &lt;svg class="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"&gt;&lt;path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42z" /&gt;&lt;/svg&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;p class="text-sm text-green-500"&gt;Lorem ipsum dolor sit amet, consectetur adip!.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview>
      <template v-slot:preview>
        <div class="bg-yellow-50 rounded text-yellow-900 px-4 py-3" role="alert">
          <div class="flex">
            <div>
              <svg class="fill-current h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21z"/></svg>
            </div>
            <div>
              <p class="text-sm text-yellow-500">Lorem ipsum dolor sit amet, consectetur adip!.</p>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="bg-yellow-50 rounded text-yellow-900 px-4 py-3" role="alert"&gt;
          &lt;div class="flex"&gt;
            &lt;div&gt;
              &lt;svg class="fill-current h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"&gt;&lt;path d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21z"/&gt;&lt;/svg&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;p class="text-sm text-yellow-500"&gt;Lorem ipsum dolor sit amet, consectetur adip!.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview>
      <template v-slot:preview>
        <div class="bg-red-50 rounded text-red-900 px-4 py-3" role="alert">
          <div class="flex">
            <div>
              <svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7z" /></svg>
            </div>
            <div>
              <p class="text-sm text-red-500">Lorem ipsum dolor sit amet, consectetur adip!.</p>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="bg-red-50 rounded text-red-900 px-4 py-3" role="alert"&gt;
          &lt;div class="flex"&gt;
            &lt;div&gt;
              &lt;svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"&gt;&lt;path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7z" /&gt;&lt;/svg&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;p class="text-sm text-red-500"&gt;Lorem ipsum dolor sit amet, consectetur adip!.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview>
      <template v-slot:preview>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-4" role="alert">
          <p class="font-bold">Warning</p>
          <p>Lorem ipsum dolor sit amet, consectetur adip!.</p>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-4" role="alert"&gt;
          &lt;p class="font-bold"&gt;Warning&lt;/p&gt;
          &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adip!.&lt;/p&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview>
      <template v-slot:preview>
        <div class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4" role="alert">
          <p class="font-bold">Info</p>
          <p>Lorem ipsum dolor sit amet, consectetur adip!.</p>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4" role="alert"&gt;
          &lt;p class="font-bold"&gt;Warning&lt;/p&gt;
          &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adip!.&lt;/p&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview>
      <template v-slot:preview>
        <div class="bg-green-50 border-l-4 border-green-400 text-green-700 p-4" role="alert">
          <p class="font-bold">Success!!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adip!.</p>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="bg-green-50 border-l-4 border-green-400 text-green-700 p-4" role="alert"&gt;
          &lt;p class="font-bold"&gt;Warning&lt;/p&gt;
          &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adip!.&lt;/p&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview>
      <template v-slot:preview>
        <div class="bg-red-50 border-l-4 border-red-400 text-red-700 p-4" role="alert">
          <p class="font-bold">Danger!!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adip!.</p>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="bg-red-50 border-l-4 border-red-400 text-red-700 p-4" role="alert"&gt;
          &lt;p class="font-bold"&gt;Warning&lt;/p&gt;
          &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adip!.&lt;/p&gt;
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

