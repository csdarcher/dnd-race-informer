<template>
    <dl>
        <dt v-if="weatherData.temp != weatherData.temp_min">Current Temp</dt>
        <dd v-if="weatherData.temp != weatherData.temp_min">{{ weatherData.temp }}&deg;F</dd>
        <dt>Humidity</dt>
        <dd>{{ weatherData.humidity }}%</dd>
        <dt>High</dt>
        <dd>{{ weatherData.temp_max }}&deg;F</dd>
        <dt>Low</dt>
        <dd>{{ weatherData.temp_min }}&deg;F</dd>
    </dl>
</template>

<script>
export default {
  name: 'WeatherData',
  data () {
    return {
    }
  },
  props: {
    weatherData: Object
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
</style>
