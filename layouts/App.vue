<template>
  <div class="bg-gray-100 dark:bg-gray-900">
      <NavbarTop />
      <div class="w-full">
          <div class="min-h-screen">
            <div class="flex justify-center">
              <div class="w-1/4 flex flex-col justify-start h-screen hidden md:block">
                <Sidebar />
              </div>
              <div class="w-full md:w-3/4 flex justify-center gap-x-4">
                <Nuxt />
              </div>
            </div>
          </div>
      </div>
      <div class="p-4 flex justiy-center items-center flex-col min-h-12 bg-gray-700">
          <div class="ml-4 text-center text-sm text-gray-100 sm:text-right sm:ml-0">
              Copyright &copy; 2021 Tailcoms
          </div>
          <div class="flex justify-center gap-x-2 mt-2">
              <!-- <div class="h-12">
                  <img class="h-12" src="" width="100%" alt="">
              </div>
              <div class="h-12">
                  <img class="h-12" src="" width="100%" alt="">
              </div>
              <div class="h-12">
                  <img class="h-12" src="" width="100%" alt="">
              </div> -->
          </div>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
