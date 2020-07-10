<template>
  <div id="app">
    <!--Nav></Nav-->
    <div class="margin-main">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
// import Nav from '@/components/Nav'

export default {
  name: 'App',
  //   components: {
  //     Nav,
  //   },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100');

body {
  background-color: #eee;
  display: grid;
  justify-items: center;
}
body,
html {
  margin: 0px;
  height: 100%;
}
#app {
  width: 100%;
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.margin-main {
  width: 50%;
  margin: auto;
}
table {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  width: 100%;
  font-weight: bold;
}
table tr td {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  margin-bottom: 2px;
  color: #3e5252;
}
table thead th {
  background-color: rgb(184, 208, 216) !important;
  font-size: 1.2em;
  padding: 10px 0px;
  text-align: center !important;
}
.col-small {
  width: 20%;
  text-align: right;
  background-color: rgb(125, 217, 245);
  font-weight: bold;
}
input, select {
  margin: 0px;
  padding: 5px 10px;
  font-size: 0.9em;
  border: 1px solid silver;
  border-radius: 5px;
  font-family: 'Montserrat', sans-seriff;
  background-color: rgb(245, 245, 245);
  width: 95%;
}
select {
  height: 38px;
  width: 100%;
}
.btn {
  background-color: rgb(200, 200, 200);
  border: 1px solid #000;
  padding: 10px 20px;
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  border-bottom: 3px solid black;
}
.btn:hover {
  text-shadow: 1px 1px 1px black;
  margin-top: 2px;
  border-bottom: 1px solid black;
}
</style>
