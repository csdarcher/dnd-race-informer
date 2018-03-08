<template>
  <div id="app">
    <img src="./assets/Twenty_sided_dice.png">
    <RaceSelector/>
  </div>
</template>

<script>
import RaceSelector from './components/RaceSelector'

export default {
  name: 'App',
  components: {
    RaceSelector
  }
}
</script>

<style>
#app { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

body {
  background: #E6E6DB;
}

.race-selector {
  border: 2px;
  border-color: #7A7362;
} 

</style>



