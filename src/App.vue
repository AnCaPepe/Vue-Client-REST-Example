<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/students">Students</router-link> |
      <router-link to="/professors">Professors</router-link> |
      <router-link to="/classes">Classes</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #eee;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  justify-items: center;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
button {
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  font-weight: bold;
  border-bottom: 3px solid black;
}
button:hover {
  margin-top: 2px;
  border-bottom: 1px solid black;
}
</style>
