<template>
  <header class="h-16 bg-blue-500 w-full">
    <div class="container mx-auto h-full flex items-center">
      <div class="flex-1">
        <NuxtLink to="/">
          <h1 class="text-2xl text-white font-bold">My App</h1>
        </NuxtLink>
      </div>
      <div class="flex-1 text-right">
        <NuxtLink to="/posts/popular" class="text-white">Posts</NuxtLink>
      </div>
    </div>
  </header>
</template>
