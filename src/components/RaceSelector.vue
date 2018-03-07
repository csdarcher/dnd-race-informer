<template>
  <div class = "race-selector">  
    <div class="Title">
        <h1>Dungeons and Dragons 5th Edition Race Informer</h1>
        <p> <router-link :to="{ name: 'RaceInformation' }">RaceInformation</router-link></p>
    </div>

   <h2> Select up to 3 races below.</h2>
    <div class="grid-container">
            <div class="grid-item">Dwarf</div>
                <div class="grid-item">Elf</div>
                <div class="grid-item">Halfling</div>
                <div class="grid-item">Human</div>
                <div class="grid-item">Dragon-Born</div>
                <div class="grid-item">Gnome</div>
                <div class="grid-item">Half-Elf</div>
                <div class="grid-item">Half-Orc</div>
                <div class="grid-item">Tiefling</div>
        </div>
  </div>      
</template>

<script>
export default {
  name: 'RaceSelector',
  /*
  data () {
    return []
  }
  */
}

// TO DO: Add error message for when user fails to choose a race or chooses more than 3 races.

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #E6E6DB;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #7A7362;
  color: white;
  padding: 15px;
  margin: 10px;
} 

.grid-item {
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.grid-item:hover{
  border-color: gold;

}

</style>
