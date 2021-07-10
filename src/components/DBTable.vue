<template>
  <div class="table-db">
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <th>Teste</th>
        <th v-for="column in layout" v-bind:key="column">{{ column }}</th>
      </thead>
      <tbody>
        <tr v-for="row in entries" v-bind:key="row">
          <td>Teste</td>
          <td v-for="item in row" v-bind:key="item">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DBTable',
  props: {
    title: String,
    layout: Array,
    path: String
  },
  data() {
    return {
      entries: Array
    }
  },
  created() {
    // Fetch database
    // this.$http.get( "http://localhost:5000/students" )
    // .then( data => data.json() )
    // .then( results => {} )

    // } )
    this.entries = [
      { name: 'John', age: 25 },
      { name: 'Peter', age: 23 }
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
table {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  width: 100%;
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
</style>
