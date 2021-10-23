<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Divider</h1>
  <h2 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h2>
    <code-and-preview :code="code1" :title="'Divider x-axis with default width'"></code-and-preview>
    <code-and-preview :code="code2" :title="'Divider x-axis with width 2'"></code-and-preview>
    <code-and-preview :code="code3" :title="'Divider y-axis with default width'"></code-and-preview>
    <code-and-preview :code="code4" :title="'Divider y-axis with width 2'"></code-and-preview>
</div>
</template>

<script>
import CodeAndPreview from '../../components/CodeAndPreview.vue';
export default {
  components: { CodeAndPreview },
  layout:'App',
  data(){
    return{

    }
  },
  computed:{
    code4(){
        return `<div class="grid grid-cols-1 bg-green-50 divide-y-2 divide-green-500">
          <div class="text-center p-2">ROW 1</div>
          <div class="text-center p-2">ROW 2</div>
          <div class="text-center p-2">ROW 3</div>
        </div>`;
    },
    code3(){
        return `<div class="grid grid-cols-1 bg-green-50 divide-y divide-green-500">
          <div class="text-center p-2">ROW 1</div>
          <div class="text-center p-2">ROW 2</div>
          <div class="text-center p-2">ROW 3</div>
        </div>`;
    },
    code2(){
      return `<div class="grid grid-cols-3 bg-green-50 p-4 divide-x-2 divide-green-500">
            <div class="text-center">COL 1</div>
            <div class="text-center">COL 2</div>
            <div class="text-center">COL 3</div>
          </div>`;
    },
    code1(){
      return `<div class="grid grid-cols-3 bg-green-50 p-4 divide-x divide-green-500">
            <div class="text-center">COL 1</div>
            <div class="text-center">COL 2</div>
            <div class="text-center">COL 3</div>
          </div>`;
    }
  }
}
</script>

