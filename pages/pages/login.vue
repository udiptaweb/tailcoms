<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white mb-4">Pages  | Login Page</h1>
  <code-and-preview>
    <template v-slot:preview>
      <div class="min-h-100 w-100 bg-purple-400 flex justify-center items-center p-6">
        <div class="p-6 md:w-1/2 w-100  bg-white rounded-2xl shadow-xl z-20">
            <div class="flex flex-col justify-center items-center w-100">
                <img src="~/assets/logo.png" class="w-36 mb-2" alt="">
                <h2 class="text-2xl font-bold text-center mb-4 cursor-pointer">Sign In</h2>
                <p class="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create
                    an account to enjoy all the services without any ads for free!</p>
            </div>
            <form method="POST" action="#">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input placeholder="Name" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input placeholder="Email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="mb-4">
                  <label class="block font-medium text-sm text-gray-700">Password</label>
                  <input placeholder="Email" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="block">
                    <label for="remember_me" class="flex items-center">
                        <input type="checkbox"  id="remember_me" name="remember" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        <span class="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div class="flex flex-col items-center justify-center gap-y-2 mt-4">
                    <button type="submit" class="py-2 w-64 text-md text-white bg-purple-500 rounded-2xl">
                      Log in
                    </button>
                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                      Forgot your password?
                    </a>
                </div>
                <p class="mt-4 text-sm text-center">New User? <span class="underline cursor-pointer"> <a href="#">Create Account</a> </span></p>
            </form>
        </div>
      </div>
    </template>
    <template v-slot:code>
      &lt;div class="min-h-100 w-100 bg-purple-400 flex justify-center items-center p-6"&gt;
        &lt;div class="p-6 md:w-1/2 w-100  bg-white rounded-2xl shadow-xl z-20"&gt;
            &lt;div class="flex flex-col justify-center items-center w-100"&gt;
                &lt;img src="~/assets/logo.png" class="w-36 mb-2" alt=""&gt;
                &lt;h2 class="text-2xl font-bold text-center mb-4 cursor-pointer"&gt;Sign In&lt;/h2&gt;
                &lt;p class="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"&gt;Create
                    an account to enjoy all the services without any ads for free!&lt;/p&gt;
            &lt;/div&gt;
            &lt;form method="POST" action="#"&gt;
                &lt;div class="mb-4"&gt;
                  &lt;label class="block text-gray-700 text-sm font-bold mb-2"&gt;Name&lt;/label&gt;
                  &lt;input placeholder="Name" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/&gt;
                &lt;/div&gt;
                &lt;div class="mb-4"&gt;
                  &lt;label class="block text-gray-700 text-sm font-bold mb-2"&gt;Email&lt;/label&gt;
                  &lt;input placeholder="Email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/&gt;
                &lt;/div&gt;

                &lt;div class="mb-4"&gt;
                  &lt;label class="block font-medium text-sm text-gray-700"&gt;Password&lt;/label&gt;
                  &lt;input placeholder="Email" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/&gt;
                &lt;/div&gt;

                &lt;div class="block"&gt;
                    &lt;label for="remember_me" class="flex items-center"&gt;
                        &lt;input type="checkbox"  id="remember_me" name="remember" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"&gt;
                        &lt;span class="ml-2 text-sm text-gray-600"&gt;Remember me&lt;/span&gt;
                    &lt;/label&gt;
                &lt;/div&gt;

                &lt;div class="flex flex-col items-center justify-center gap-y-2 mt-4"&gt;
                    &lt;button type="submit" class="py-2 w-64 text-md text-white bg-purple-500 rounded-2xl"&gt;
                      Log in
                    &lt;/button&gt;
                    &lt;a class="underline text-sm text-gray-600 hover:text-gray-900" href="#"&gt;
                      Forgot your password?
                    &lt;/a&gt;
                &lt;/div&gt;
                &lt;p class="mt-4 text-sm text-center"&gt;New User? &lt;span class="underline cursor-pointer"&gt; &lt;a href="#"&gt;Create Account&lt;/a&gt; &lt;/span&gt;&lt;/p&gt;
            &lt;/form&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    </template>
  </code-and-preview>
</div>
</template>

<script>
export default {
  layout:'App'
}
</script>

