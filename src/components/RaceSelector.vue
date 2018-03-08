<template>
  <div class = "race-selector">  
    <div class="Title">
        <h1>Dungeons and Dragons 5th Edition Race Informer</h1>
    </div>

   <h2> Select 2 races below to compare.</h2>
    <!-- <div class="grid-container">
            <div class="grid-item">Dwarf</div>
                <div class="grid-item">Elf</div>
                <div class="grid-item">Halfling</div>
                <div class="grid-item">Human</div>
                <div class="grid-item">Dragon-Born</div>
                <div class="grid-item">Gnome</div>
                <div class="grid-item">Half-Elf</div>
                <div class="grid-item">Half-Orc</div>
                <div class="grid-item">Tiefling</div>
        </div> -->
      <div class="form-container">  
        <form v-on:submit.prevent="compareRaces">
          <div v-if="true">
            <div id='checkboxes'>
                <input type="checkbox" id="dwarf" value="races" v-model="checkedNames">
                <label for="dwarf">Dwarf</label>
                <input type="checkbox" id="elf" value="races" v-model="checkedNames">
                <label for="elf">Elf</label>
                <input type="checkbox" id="halfling" value="races" v-model="checkedNames">
                <label for="halfling">Halfing</label>
                <input type="checkbox" id="human" value="races" v-model="checkedNames">
                <label for="human">Human</label>
                <input type="checkbox" id="dragon-born" value="races" v-model="checkedNames">
                <label for="dragon-born">Dragon-Born</label>
                <input type="checkbox" id="gnome" value="races" v-model="checkedNames">
                <label for="gnome">Gnome</label>
                <input type="checkbox" id="half-elf" value="races" v-model="checkedNames">
                <label for="half-elf">Half-Elf</label>
                <input type="checkbox" id="half-orc" value="races" v-model="checkedNames">
                <label for="half-orc">Half-Orc</label>
                <input type="checkbox" id="tiefling" value="races" v-model="checkedNames">
                <label for="tiefling">Tiefling</label>
                <br>
            </div>
                <!-- <div class="grid-container"> 
                  <div class="grid-item" :key="index" v-for="(item,index) in races">
                    {{ item.name }} --> 
              <button type="submit">Submit</button> 
          </div>  
        </form>  
        <ul v-if="results && results.length > 0 " class="results">
            <li v-for="item in results" class="item">
              <p><strong>{{ item.name }}</strong></p>
              <p>{{ item.alignment}}</p>
            </li>
       </ul>
     </div>
  </div>      
</template>

<script>
import { API } from "@/components/api";

export default {
  name: "RaceSelector",
  data() {
    return {
      races: [],
      errors: []
    }
  },

  methods: {
    compareRaces: function () {
      axios.get('http://dnd5eapi.co/api/races', {
      })

  .then(response => {
        this.results = response.data
      })
      .catch(error => {
        this.errors.push(error.message)
      });
    }
  },
}
// TO DO: Add error message for when user fails to choose a race or chooses more than 2 races.
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #e6e6db;
}

h1,
h2 {
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

.form-container {
  padding: 15px;
  margin: 10px;
  /* font-size: 20px; */
}

/*.grid-item {
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.grid-item:hover {
  border-color: gold;
} */
</style>
