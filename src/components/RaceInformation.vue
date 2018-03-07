<template>
  <div class = "race-information">  
    <table>
    <thead>
      <tr>
        <td></td>
        <th>{{ class1 }}</th>
        <th>{{ class2 }}</th>
        <th>{{ class3 }}</th>
      </tr>
    </thead>
      <tbody>
        <tr>
          <th>Alignment</th>
        </tr>
        <tr>
          <th>Age</th>
        </tr>
        <tr>
          <th>Size</th>
        </tr>
        <tr>
          <th>Starting Profiencies</th>
        </tr>
      </tbody>
    </table>
  </div> 
</template>

<script>
export default {
  name: 'RaceInformation',
/*  
  data () {
    return []
  },
*/   
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
</style>
