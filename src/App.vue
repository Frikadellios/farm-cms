<script setup lang="ts">
  import Hero from '@/components/Hero.vue'
  import Features from '@/components/Features.vue'
  import HowItsWorks from '@/components/HowItsWorks.vue'
  import Benefists from '@/components/Benefists.vue'
  import Services from '@/components/Services.vue'
  import Sponsors from '@/components/Sponsors.vue'
  import Navbar from '@/components/Navbar.vue'
  import Testimonials from '@/components/Testimonials.vue'
  import Footer from '@/components/Footer.vue'
  import Pricing from '@/components/Pricing.vue'
</script>

<template>
  <div class="page">
    <Navbar />
    <Hero />
    <Sponsors />
    <Features />
    <Benefists />
    <HowItsWorks />
    <Services />
    <Pricing />
    <Testimonials />
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #9F1A8Faa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
