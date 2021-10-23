<template>
<div class="w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4">
  <h1 class="text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white mb-4">Pages  | Login Page</h1>
  <code-and-preview :code="code"></code-and-preview>
</div>
</template>

<script>
export default {
  layout:'App',
  computed:{
    code(){
      return `<div class="min-h-100 w-100 bg-purple-400 flex justify-center items-center p-6">
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
      </div>`;
    }
  }
}
</script>

