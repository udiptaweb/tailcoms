<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Count Downs</h1>
  <h2 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h2>
    <code-and-preview>
        <template v-slot:preview>
          <div v-html="code1"></div>
        </template>
        <template v-slot:code>
          {{code1}}
        </template>
    </code-and-preview>
    <code-and-preview :title="'Digital Clock Count down'">
        <template v-slot:preview>
          <div v-html="code2"></div>
        </template>
        <template v-slot:code>
          {{code2}}
        </template>
    </code-and-preview>
    <code-and-preview :title="'Divider y-axis with default width'">
      <template v-slot:preview >
        <div v-html="code3"></div>
      </template>
      <template v-slot:code>
        {{code3}}
      </template>
    </code-and-preview>
    <code-and-preview :title="'Divider y-axis with width 2'">
      <template v-slot:preview >
        <div v-html="code4"></div>
      </template>
      <template v-slot:code>
        {{code4}}
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
      return `<div class="flex items-center bg-gray-900 justify-center px-5 py-5" >
    <div class="text-indigo-100">
        <div class="text-2xl text-center flex w-full items-center justify-center">
            <div class="w-14 text-white rounded-lg">
                <div class="font-mono leading-none" >20</div>
            </div>
            <span> : </span>
            <div class="w-14 text-white rounded-lg">
                <div class="font-mono leading-none">10</div>
            </div>
            <span> : </span>
            <div class="w-14 text-white rounded-lg">
                <div class="font-mono leading-none">20</div>
            </div>
        </div>
    </div>
</div>`;
    },
    code1(){
      return `<div class="flex items-center justify-center px-5 py-5" >
    <div class="text-indigo-100">
        <div class="text-2xl text-center flex w-full items-center justify-center">
            <div class="w-16 mx-1 p-2 bg-indigo-50 text-indigo-500 rounded-lg">
                <div class="font-sans leading-none">00</div>
                <div class="font-sans text-sm leading-none">Days</div>
            </div>
            <div class="w-16 mx-1 p-2 bg-indigo-50 text-indigo-500 rounded-lg">
                <div class="font-sans leading-none" >20</div>
                <div class="font-sans text-sm leading-none">Hours</div>
            </div>
            <div class="w-16 mx-1 p-2 bg-indigo-50 text-indigo-500 rounded-lg">
                <div class="font-sans leading-none">10</div>
                <div class="font-sans text-sm leading-none">Minutes</div>
            </div>
            <div class="w-16 mx-1 p-2 bg-indigo-50 text-indigo-500 rounded-lg">
                <div class="font-sans leading-none">20</div>
                <div class="font-sans text-sm text-sm leading-none">Seconds</div>
            </div>
        </div>
    </div>
</div>`;
    }
  }
}
</script>

