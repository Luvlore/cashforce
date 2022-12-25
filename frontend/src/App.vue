<template>
  <MenuHeader />
  <ContentSection />
</template>

<script>
  import ContentSection from './components/ContentSection.vue';
import MenuHeader from './components/MenuHeader.vue';

  export default {
    name: 'App',
    components: {
      MenuHeader,
      ContentSection,
    }
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans';
  }

  #app {
    display: flex;
  }
</style>