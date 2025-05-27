<script setup>
import Navbar from './components/navbarComponents.vue'
import Foter from './components/FooterComponents.vue'
</script>

<template>
  <div class="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
    <Navbar />
    
    <RouterView />
    
    <Foter />
  </div>
</template>