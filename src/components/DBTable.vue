<template>
  <div class="table-db">
    <h1>{{ title }}</h1>
    <span v-for="field in fields" :key="field">
      {{ field }}: <input type="text" :name="field" v-model="inputs[field]" />
    </span>
    <button id="btn-add" @click="addEntry()">Add</button>
    <br />
    <Table :title="title" :fields="fields" :entries="entries" :path="path" />
  </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
  name: 'DBTable',
  props: {
    title: String,
    fields: Array,
    path: String
  },
  components: {
    Table
  },
  data() {
    return {
      entries: [],
      inputs: {}
    }
  },
  methods: {
    getEntries() {
      this.entries = []
      // Fetch database
      this.$http
        .get(`http://localhost:5000/${this.path}`)
        .then((data) => data.json())
        .then((results) => {
          for (let row of results) {
            console.log(row)
            var entry = { id: row.id }
            for (let field of this.fields) entry[field] = row[field]
            this.entries.push(entry)
          }
        })
      console.log(this.entries)
    },
    addEntry() {
      for (let field of this.fields) console.log(this.inputs[field])
      console.log('Added!')
    },
    deleteEntry(index) {
      console.log(index)
    }
  },
  created() {
    this.getEntries()
    for (let field of this.fields) this.inputs[field] = ''
  }
}
</script>

<style scoped>
span {
  margin: 10px;
  text-transform: capitalize;
}
#btn-add {
  margin-left: 20px;
  margin-bottom: 10px;
}
</style>