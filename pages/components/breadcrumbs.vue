<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Breadcrumb</h1>
  <p class="text-gray-700">Indicate the current page’s location within a navigational hierarchy</p>
  <h1 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h1>
   <code-and-preview>
      <template v-slot:preview>
        <ol class="list-reset flex d-flex text-gray-500 gap-x-2" >
          <li><a href="#">Home /</a> </li>
          <li><a href="#">Components /</a> </li>
          <li class="text-blue-500">Breadcrumbs</li>
        </ol>
      </template>
      <template v-slot:code>
        &lt;ol class="list-reset flex d-flex text-gray-500 gap-x-2"&gt;
            &lt;li&gt;&lt;a href="#"&gt;Home /&lt;/a&gt; &lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;Components /&lt;/a&gt; &lt;/li&gt;
            &lt;li class="text-blue-500"&gt;Breadcrumbs&lt;/li&gt;
        &lt;/ol&gt;
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

