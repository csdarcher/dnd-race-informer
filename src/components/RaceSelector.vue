<template>
  <div>  
    <div class="Title">
        <h1>Dungeons and Dragons 5th Edition Race Informer</h1>
    </div>

    <div class="grid">
        <p> Select up to 3 races below.</p>
            <ul>
                <li>Dwarf</li>
                <li>Elf</li>
                <li>Hafling</li>
                <li>Human</li>
                <li>Dragon-Born</li>
                <li>Gnome</li>
                <li>Half-Elf</li>
                <li>Half-Orc</li>
                <li>Tiefling</li>
            </ul>
        </div>
  </div>      
</template>

<script>
export default {
  name: 'RaceSelector',
  data () {
    return {
      msg: 'Test Message'
    }
  }
}
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

</style>
