<template>
  <div class="w-full px-2 py-16 sm:px-0 flex flex-col space-y-5">
        <div class="flex space-x-4 items-center">
            <NuxtLink to="/posts/recent">Recent</NuxtLink>
            <NuxtLink to="/posts/popular">Popular</NuxtLink>
            <NuxtLink to="/posts/trending">Trending</NuxtLink>
        </div>
        <slot />
  </div>
</template>

<script setup>

</script>
