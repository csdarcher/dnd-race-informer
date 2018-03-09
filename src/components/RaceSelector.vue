<template>
  <div class = "race-selector">  
    <div class="Title">
        <h1>Dungeons and Dragons 5th Edition Race Informer</h1>
    </div>
      <div class="form-container"> 
        <h2> Select 2 races below to compare.</h2>
              <form v-on:submit.prevent="compareRaces">
                <div v-if="true">
                  <div id='checkboxes'>
                      <input type="checkbox" id="dwarf" value="races" v-model="checkedRaces">
                      <label for="dwarf">Dwarf</label>
                      <input type="checkbox" id="elf" value="races" v-model="checkedRaces">
                      <label for="elf">Elf</label>
                      <input type="checkbox" id="halfling" value="races" v-model="checkedRaces">
                      <label for="halfling">Halfing</label>
                      <input type="checkbox" id="human" value="races" v-model="checkedRaces">
                      <label for="human">Human</label>
                      <input type="checkbox" id="dragon-born" value="races" v-model="checkedRaces">
                      <label for="dragon-born">Dragon-Born</label>
                      <input type="checkbox" id="gnome" value="races" v-model="checkedRaces">
                      <label for="gnome">Gnome</label>
                      <input type="checkbox" id="half-elf" value="races" v-model="checkedRaces">
                      <label for="half-elf">Half-Elf</label>
                      <input type="checkbox" id="half-orc" value="races" v-model="checkedRaces">
                      <label for="half-orc">Half-Orc</label>
                      <input type="checkbox" id="tiefling" value="races" v-model="checkedRaces">
                      <label for="tiefling">Tiefling</label> 
                      <br>
                  </div> 
                <!-- <div class="grid-container"> 
                  <div class="grid-item" :key="index" v-for="(item,index) in races">
                    {{ item.name }} --> 
              <button type="submit">Compare</button> 
          </div>  
            <load-spinner v-if="showLoading"></load-spinner>
        </form>  
        <ul class="races" v-if="results && results.length > 0 ">
            <li v-for="item in results" class="item">
              <p><strong>{{ races.name }}</strong></p>
              <p>{{ races.alignment }}</p>
            </li>
       </ul>
     </div>
  </div>      
</template>

<script>
import { API } from "@/components/api"
// import axios from 'axios'
import DoubleBounce from "@/components/DoubleBounce"

export default {
  name: "RaceSelector",
  components: {
    'load-spinner': DoubleBounce
  },

  data() {
    return {
      results: null,
      showLoading: false, 
      checkedRaces: [], 
      races: [],
      errors: []
    };
  },

  methods: {
    compareRaces: function() {
       API.get('find', {
          params: {
              races: this.name,
              alignment: this.alignment,
              
          }
        })

        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          this.errors.push(error.message);
        });
    }
  }
};
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
  border: 2px;
  border-color: #7a7362;
}

button {
  background: #df0404;
  margin: 10px;
  padding: 0.5rem;
  color: #fff;
  border: none;
  font-size: 15px;
}

</style>
