
<script>
/* 
  Per importare ed utilizzare un componente dentro un altro devo SEMPRE seguire questi 3 passi:
  1) Importazione del componente
  2) Dichiarazione del componente
  3) Utilizzo del componente
*/
// 1) Importazione del componente
import Home from './components/Home.vue';
import About from './components/About.vue';

export default {
  data() {
    return { 
      
    }
  },
  // 2) Dichiarazione del componente
  components: {
    Home,
    About
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <Home />
    
    <About />
    <main>
      
      
    </main>
  </div>
</template>

<style lang="scss">

</style>