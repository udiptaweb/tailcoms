<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Form Inputs</h1>
  <h2 class="text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white">Examples</h2>
   <code-and-preview :title="'Basic Form Input elements'">
      <template v-slot:preview>
        <div class="mb-4">
          <label class="block text-gray-700 text-md font-semibold mb-2" for="username">
            Username
          </label>
          <input type="text" id="username" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Username"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-md font-semibold mb-2" for="email">
            Email
          </label>
          <input type="email" id="email" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Email"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-md font-semibold mb-2" for="password">
            Password
          </label>
          <input type="password" id="password" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Password"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-md font-semibold mb-2" for="select">
            Select
          </label>
          <select  id="select" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2">
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-md font-semibold mb-2" for="file">
            File
          </label>
          <input type="file" id="file" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-md font-semibold mb-2" for="about">
            About
          </label>
          <textarea rows="5" id="about" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Type here .."></textarea>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-md font-semibold mb-2" for="username"&gt;
            Username
          &lt;/label&gt;
          &lt;input type="text" id="username" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Username"/&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-md font-semibold mb-2" for="email"&gt;
            Email
          &lt;/label&gt;
          &lt;input type="email" id="email" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Email"/&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-md font-semibold mb-2" for="password"&gt;
            Password
          &lt;/label&gt;
          &lt;input type="password" id="password" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Password"/&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-md font-semibold mb-2" for="select"&gt;
            Select
          &lt;/label&gt;
          &lt;select  id="select" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2"&gt;
            &lt;option value=""&gt;option 1&lt;/option&gt;
            &lt;option value=""&gt;option 2&lt;/option&gt;
            &lt;option value=""&gt;option 3&lt;/option&gt;
          &lt;/select&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-md font-semibold mb-2" for="file"&gt;
            File
          &lt;/label&gt;
          &lt;input type="file" id="file" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2"/&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-md font-semibold mb-2" for="about"&gt;
            About
          &lt;/label&gt;
          &lt;textarea rows="5" id="about" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Type here .."&gt;&lt;/textarea&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview :title="'Small inputs'">
      <template v-slot:preview>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-semibold mb-2" for="username-sm">
            Username
          </label>
          <input type="text" id="username-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Username"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-semibold mb-2" for="email-sm">
            Email
          </label>
          <input type="email" id="email-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Email"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-semibold mb-2" for="password-sm">
            Password
          </label>
          <input type="password" id="password-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Password"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-semibold mb-2" for="select-sm">
            Select
          </label>
          <select  id="select-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-semibold mb-2" for="file-sm">
            File
          </label>
          <input type="file" id="file-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-semibold mb-2" for="about">
            About
          </label>
          <textarea rows="5" id="about" class="text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Type here .."></textarea>
        </div>
      </template>
      <template v-slot:code>
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-sm font-semibold mb-2" for="username-sm"&gt;
            Username
          &lt;/label&gt;
          &lt;input type="text" id="username-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Username"/&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-sm font-semibold mb-2" for="email-sm"&gt;
            Email
          &lt;/label&gt;
          &lt;input type="email" id="email-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Email"/&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-sm font-semibold mb-2" for="password-sm"&gt;
            Password
          &lt;/label&gt;
          &lt;input type="password" id="password-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Password"/&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-sm font-semibold mb-2" for="select-sm"&gt;
            Select
          &lt;/label&gt;
          &lt;select  id="select-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"&gt;
            &lt;option value=""&gt;option 1&lt;/option&gt;
            &lt;option value=""&gt;option 2&lt;/option&gt;
            &lt;option value=""&gt;option 3&lt;/option&gt;
          &lt;/select&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-sm font-semibold mb-2" for="file-sm"&gt;
            File
          &lt;/label&gt;
          &lt;input type="file" id="file-sm" class="px-2 py-1 text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"/&gt;
        &lt;/div&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="block text-gray-700 text-sm font-semibold mb-2" for="about"&gt;
            About
          &lt;/label&gt;
          &lt;textarea rows="5" id="about" class="text-sm w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-2" placeholder="Type here .."&gt;&lt;/textarea&gt;
        &lt;/div&gt;
      </template>
   </code-and-preview>
   <code-and-preview :title="'Checkbox and Radio button'">
      <template v-slot:preview>
        <p class="mb-4 text-gray-500">
          Install plugin @tailwindcss/forms <br>
          module.exports = {
              plugins: [require('@tailwindcss/forms'),]
          };
        </p>
        <div class="mb-4">
          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-orange-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-yellow-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-green-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-teal-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-red-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-orange-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-yellow-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-green-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-teal-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-purple-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-4 w-4 text-pink-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-gray-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-red-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-orange-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-yellow-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-green-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-teal-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-blue-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-indigo-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-purple-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-pink-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-red-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-orange-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-yellow-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-green-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-teal-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-blue-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-indigo-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-purple-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-5 w-5 text-pink-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-gray-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-red-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-orange-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-yellow-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-green-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-teal-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-blue-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-indigo-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-purple-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-4 w-4 text-pink-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-gray-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-red-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-orange-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-yellow-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-green-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-teal-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-blue-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-indigo-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-purple-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center mt-3">
              <input type="radio" class="form-radio h-3 w-3 text-pink-600" checked><span class="ml-2 text-gray-700">label</span>
          </label>
        </div>
      </template>
      <template v-slot:code>
        &lt;!-- large checkbox --&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-orange-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-yellow-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-green-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-teal-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;!-- small checkbox--&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-red-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-orange-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-yellow-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-green-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-teal-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-purple-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-4 w-4 text-pink-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;!-- extra small checkbox --&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-gray-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-red-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-orange-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-yellow-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-green-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-teal-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-blue-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-indigo-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-purple-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="checkbox" class="form-checkbox h-3 w-3 text-pink-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;!-- large radio --&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-gray-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-red-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-orange-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-yellow-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-green-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-teal-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-blue-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-indigo-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-purple-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-5 w-5 text-pink-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;!-- small radio--&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-gray-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-red-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-orange-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-yellow-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-green-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-teal-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-blue-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-indigo-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-purple-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-4 w-4 text-pink-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;!-- extra small radio --&gt;
        &lt;div class="mb-4"&gt;
          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-gray-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-red-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-orange-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-yellow-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-green-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-teal-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-blue-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-indigo-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-purple-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;

          &lt;label class="inline-flex items-center mt-3"&gt;
              &lt;input type="radio" class="form-radio h-3 w-3 text-pink-600" checked&gt;&lt;span class="ml-2 text-gray-700"&gt;label&lt;/span&gt;
          &lt;/label&gt;
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

