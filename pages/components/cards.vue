<template>
  <div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
    <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">
      Cards
    </h1>
    <code-and-preview>
      <template v-slot:preview>
        <div class="flex justify-center gap-x-2">
          <figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-green-500">
            <figcaption class="px-2 py-2">
              <h1 class="font-semibold text-2xl text-gray-800 mb-2">Lorem ipsum dolor sit</h1>
              <h1 class="font-semibold text-md text-gray-700 mb-2">Lorem ipsum dolor sit amet</h1>
              <p class="leading-tight text-sm sm:text-base text-gray-500 text-justify">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>
            </figcaption>
          </figure>
          <figure class=" bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-red-500">
            <figcaption class="px-2 py-2">
              <h1 class="font-semibold text-2xl text-gray-800 mb-2">Lorem ipsum dolor sit</h1>
              <h1 class="font-semibold text-md text-gray-700 mb-2">Lorem ipsum dolor sit amet</h1>
              <p class="leading-tight text-sm sm:text-base text-gray-500 text-justify">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>
            </figcaption>
          </figure>
          <figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-blue-500">
            <figcaption class="px-2 py-2">
              <h1 class="font-semibold text-2xl text-gray-800 mb-2">Lorem ipsum dolor sit</h1>
              <h1 class="font-semibold text-md text-gray-700 mb-2">Lorem ipsum dolor sit amet</h1>
              <p class="leading-tight text-sm sm:text-base text-gray-500 text-justify">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>
            </figcaption>
          </figure>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex justify-center gap-x-2"&gt;
          &lt;figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-green-500"&gt;
            &lt;figcaption class="px-2 py-2"&gt;
              &lt;h1 class="font-semibold text-2xl text-gray-800 mb-2"&gt;Lorem ipsum dolor sit&lt;/h1&gt;
              &lt;h1 class="font-semibold text-md text-gray-700 mb-2"&gt;Lorem ipsum dolor sit amet&lt;/h1&gt;
              &lt;p class="leading-tight text-sm sm:text-base text-gray-500 text-justify"&gt;
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              &lt;/p&gt;
            &lt;/figcaption&gt;
          &lt;/figure&gt;
          &lt;figure class=" bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-red-500"&gt;
            &lt;figcaption class="px-2 py-2"&gt;
              &lt;h1 class="font-semibold text-2xl text-gray-800 mb-2"&gt;Lorem ipsum dolor sit&lt;/h1&gt;
              &lt;h1 class="font-semibold text-md text-gray-700 mb-2"&gt;Lorem ipsum dolor sit amet&lt;/h1&gt;
              &lt;p class="leading-tight text-sm sm:text-base text-gray-500 text-justify"&gt;
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              &lt;/p&gt;
            &lt;/figcaption&gt;
          &lt;/figure&gt;
          &lt;figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-blue-500"&gt;
            &lt;figcaption class="px-2 py-2"&gt;
              &lt;h1 class="font-semibold text-2xl text-gray-800 mb-2"&gt;Lorem ipsum dolor sit&lt;/h1&gt;
              &lt;h1 class="font-semibold text-md text-gray-700 mb-2"&gt;Lorem ipsum dolor sit amet&lt;/h1&gt;
              &lt;p class="leading-tight text-sm sm:text-base text-gray-500 text-justify"&gt;
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              &lt;/p&gt;
            &lt;/figcaption&gt;
          &lt;/figure&gt;
        &lt;/div&gt;
      </template>
    </code-and-preview>
    <code-and-preview>
      <template v-slot:preview>
        <div class="flex justify-center gap-x-2">
          <figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-green-500">
           <img class="h-48 w-full object-cover rounded-top" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt=""/>
            <figcaption class="px-2 py-2">
              <h1 class="font-semibold text-2xl text-gray-800 mb-2">Lorem ipsum dolor sit</h1>
              <h1 class="font-semibold text-md text-gray-700 mb-2">Lorem ipsum dolor sit amet</h1>
              <p class="leading-tight text-sm sm:text-base text-gray-500 text-justify">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>
            </figcaption>
          </figure>
          <figure class=" bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-red-500">
            <img class="h-48 w-full object-cover rounded-top" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt=""/>
            <figcaption class="px-2 py-2">
              <h1 class="font-semibold text-2xl text-gray-800 mb-2">Lorem ipsum dolor sit</h1>
              <h1 class="font-semibold text-md text-gray-700 mb-2">Lorem ipsum dolor sit amet</h1>
              <p class="leading-tight text-sm sm:text-base text-gray-500 text-justify">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>
            </figcaption>
          </figure>
          <figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-blue-500">
            <img class="h-48 w-full object-cover rounded-top" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt=""/>
            <figcaption class="px-2 py-2">
              <h1 class="font-semibold text-2xl text-gray-800 mb-2">Lorem ipsum dolor sit</h1>
              <h1 class="font-semibold text-md text-gray-700 mb-2">Lorem ipsum dolor sit amet</h1>
              <p class="leading-tight text-sm sm:text-base text-gray-500 text-justify">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>
            </figcaption>
          </figure>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex justify-center gap-x-2"&gt;
          &lt;figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-green-500"&gt;
            &lt;figcaption class="px-2 py-2"&gt;
              &lt;h1 class="font-semibold text-2xl text-gray-800 mb-2"&gt;Lorem ipsum dolor sit&lt;/h1&gt;
              &lt;h1 class="font-semibold text-md text-gray-700 mb-2"&gt;Lorem ipsum dolor sit amet&lt;/h1&gt;
              &lt;p class="leading-tight text-sm sm:text-base text-gray-500 text-justify"&gt;
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              &lt;/p&gt;
            &lt;/figcaption&gt;
          &lt;/figure&gt;
          &lt;figure class=" bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-red-500"&gt;
            &lt;figcaption class="px-2 py-2"&gt;
              &lt;h1 class="font-semibold text-2xl text-gray-800 mb-2"&gt;Lorem ipsum dolor sit&lt;/h1&gt;
              &lt;h1 class="font-semibold text-md text-gray-700 mb-2"&gt;Lorem ipsum dolor sit amet&lt;/h1&gt;
              &lt;p class="leading-tight text-sm sm:text-base text-gray-500 text-justify"&gt;
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              &lt;/p&gt;
            &lt;/figcaption&gt;
          &lt;/figure&gt;
          &lt;figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-blue-500"&gt;
            &lt;figcaption class="px-2 py-2"&gt;
              &lt;h1 class="font-semibold text-2xl text-gray-800 mb-2"&gt;Lorem ipsum dolor sit&lt;/h1&gt;
              &lt;h1 class="font-semibold text-md text-gray-700 mb-2"&gt;Lorem ipsum dolor sit amet&lt;/h1&gt;
              &lt;p class="leading-tight text-sm sm:text-base text-gray-500 text-justify"&gt;
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              &lt;/p&gt;
            &lt;/figcaption&gt;
          &lt;/figure&gt;
        &lt;/div&gt;
      </template>
    </code-and-preview>
    <code-and-preview>
      <template v-slot:preview>
        <div class="flex justify-center gap-x-2">
          <figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-indigo-500">
           <img class="h-48 w-full object-cover rounded-top" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt=""/>
            <figcaption class="transform -translate-y-8 p-3">
              <div class="bg-white px-3 py-2 rounded shadow space-y-1">
                <h1 class="font-medium tracking-tight capitalize border-b border-gray-200 border-opacity-75">
                  simply dummy text
                </h1>
                <div>
                  <p class="flex items-center text-xs lg:text-sm tracking-tight">
                    <svg class="h-4 w-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="mx-1">India</span>
                  </p>
                  <p class="flex items-center text-xs lg:text-sm tracking-tight">
                    <svg class="h-4 w-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span class="mx-1">+918-21-456-78</span>
                  </p>
                </div>
              </div>
            </figcaption>
            <div class="-mt-8 p-3 flex justify-center">
              <button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-indigo-500 bg-indigo-400 text-white text-sm"> Book Now</button>
            </div>
          </figure>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="flex justify-center gap-x-2"&gt;
          &lt;figure class="bg-white rounded overflow-hidden shadow w-1/3 border-b-2 border-indigo-500"&gt;
           &lt;img class="h-48 w-full object-cover rounded-top" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt=""/&gt;
            &lt;figcaption class="transform -translate-y-8 p-3"&gt;
              &lt;div class="bg-white px-3 py-2 rounded shadow space-y-1"&gt;
                &lt;h1 class="font-medium tracking-tight capitalize border-b border-gray-200 border-opacity-75"&gt;
                  simply dummy text
                &lt;/h1&gt;
                &lt;div&gt;
                  &lt;p class="flex items-center text-xs lg:text-sm tracking-tight"&gt;
                    &lt;svg class="h-4 w-auto" fill="currentColor" viewBox="0 0 20 20"&gt;
                      &lt;path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"&gt;&lt;/path&gt;
                    &lt;/svg&gt;
                    &lt;span class="mx-1"&gt;India&lt;/span&gt;
                  &lt;/p&gt;
                  &lt;p class="flex items-center text-xs lg:text-sm tracking-tight"&gt;
                    &lt;svg class="h-4 w-auto" fill="currentColor" viewBox="0 0 20 20"&gt;
                      &lt;path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"&gt;&lt;/path&gt;
                    &lt;/svg&gt;
                    &lt;span class="mx-1"&gt;+918-21-456-78&lt;/span&gt;
                  &lt;/p&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/figcaption&gt;
            &lt;div class="-mt-8 p-3 flex justify-center"&gt;
              &lt;button type="button" class="px-3 py-1 rounded overflow-hidden focus:outline-none focus:shadow-outline hover:bg-indigo-500 bg-indigo-400 text-white text-sm"&gt; Book Now&lt;/button&gt;
            &lt;/div&gt;
          &lt;/figure&gt;
        &lt;/div&gt;
      </template>
    </code-and-preview>

  </div>
</template>

<script>
import CodeAndPreview from "../../components/CodeAndPreview.vue";
export default {
  components: { CodeAndPreview },
  layout: "App",
};
</script>
