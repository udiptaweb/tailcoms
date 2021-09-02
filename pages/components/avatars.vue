<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Avatars</h1>
  <h2 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h2>
   <code-and-preview>
      <template v-slot:preview>
        <div class="flex gap-x-2">
          <div class="w-20 h-20 rounded overflow-hidden shadow-inner text-center cursor-pointe">
            <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" />
          </div>
          <div class="w-16 h-16 rounded overflow-hidden shadow-inner text-center cursor-pointe">
            <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" />
          </div>
          <div class="w-14 h-14 rounded overflow-hidden shadow-inner text-center cursor-pointe">
            <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" />
          </div>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex gap-x-2"&gt;
          &lt;div class="w-20 h-20 rounded overflow-hidden shadow-inner text-center cursor-pointe"&gt;
            &lt;img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" /&gt;
          &lt;/div&gt;
          &lt;div class="w-16 h-16 rounded overflow-hidden shadow-inner text-center cursor-pointe"&gt;
            &lt;img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" /&gt;
          &lt;/div&gt;
          &lt;div class="w-14 h-14 rounded overflow-hidden shadow-inner text-center cursor-pointe"&gt;
            &lt;img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview>
      <template v-slot:preview>
        <div class="flex gap-x-2">
          <div class="w-20 h-20 rounded-full overflow-hidden shadow-inner text-center cursor-pointe">
            <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" />
          </div>
          <div class="w-16 h-16 rounded-full overflow-hidden shadow-inner text-center cursor-pointe">
            <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" />
          </div>
          <div class="w-14 h-14 rounded-full overflow-hidden shadow-inner text-center cursor-pointe">
            <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" />
          </div>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex gap-x-2"&gt;
          &lt;div class="w-20 h-20 rounded-full overflow-hidden shadow-inner text-center cursor-pointe"&gt;
            &lt;img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" /&gt;
          &lt;/div&gt;
          &lt;div class="w-16 h-16 rounded-full overflow-hidden shadow-inner text-center cursor-pointe"&gt;
            &lt;img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" /&gt;
          &lt;/div&gt;
          &lt;div class="w-14 h-14 rounded-full overflow-hidden shadow-inner text-center cursor-pointe"&gt;
            &lt;img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar1" class="object-cover object-center w-full h-full visible" /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview>
      <template v-slot:preview>
        <div class="flex gap-x-2">
          <div class="w-20 h-20 rounded-full flex justify-center items-center font-bold bg-blue-100 text-blue-500 overflow-hidden shadow-inner text-center cursor-pointer">
            DG
          </div>
          <div class="w-16 h-16 rounded-full flex justify-center items-center font-bold bg-blue-100 text-blue-500 overflow-hidden shadow-inner text-center cursor-pointer">
            DG
          </div>
          <div class="w-14 h-14 rounded-full flex justify-center items-center font-bold bg-blue-100 text-blue-500 overflow-hidden shadow-inner text-center cursor-pointer">
            DG
          </div>
          <div class="w-12 h-12 rounded-full flex justify-center items-center font-bold bg-blue-100 text-blue-500 overflow-hidden shadow-inner text-center cursor-pointer">
            DG
          </div>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex gap-x-2"&gt;
          &lt;div class="w-20 h-20 bg-red-200 rounded-full overflow-hidden shadow-inner text-center cursor-pointer"&gt;
            DG
          &lt;/div&gt;
          &lt;div class="w-16 h-16 bg-red-200 rounded-full overflow-hidden shadow-inner text-center cursor-pointer"&gt;
            DG
          &lt;/div&gt;
          &lt;div class="w-14 h-14 bg-red-200 rounded-full overflow-hidden shadow-inner text-center cursor-pointer"&gt;
            DG
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
  layout:'App'
}
</script>

