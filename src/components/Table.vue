<template>
  <table>
    <thead>
      <!-- <th>Teste</th> -->
      <th v-for="column in fields" :key="column">{{ column }}</th>
    </thead>
    <tbody>
      <tr v-for="(row, index) in entries" :key="index" @click="detail(row.id)">
        <!-- <td>Teste</td> -->
        <td v-for="column in fields" :key="column">{{ row[column] }}</td>
        <!-- <td v-show="typeof deleteEntry === 'function'"> -->
          <button class="btn-del" @click.stop="deleteEntry(row.id)">X</button>
        <!-- </td> -->
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    title: String,
    fields: Array,
    entries: Array,
    path: String
  },
  created() {
    console.log(this.headers)
    console.log(this.entries)
  },
  methods: {
    detail(id) {
      if (this.path) {
        this.$router.push({ path: `/${this.path}/${id}` })
      }
    },
    deleteEntry(index) {
      console.log(index)
    }
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
  text-transform: capitalize;
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
.btn-del {
  float: right;
  padding: 10px 0px;
  width: 35px;
  margin-top: 10px;
  margin-left: -10px;
  background-color: red;
}
</style>
