<template>
  <div class="table-db">
    <h1>{{ title }}</h1>
    <h2 v-for="(value, key) in headers" v-bind:key="key">
      {{ key }}: {{ value }}
    </h2>
    <Table :title="title" :headers="headers" :fields="[this.fields.detail]" :entries="entries" />
  </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
  name: 'DBTableDetail',
  props: {
    title: String,
    fields: Object,
    path: String
  },
  components: {
    Table
  },
  data() {
    return {
      id: this.$route.params.id,
      headers: {},
      entries: []
    }
  },
  methods: {
    getDetails() {
      this.entries = []
      // Fetch database
      this.$http
        .get(`http://localhost:5000/${this.path}/${this.id}`)
        .then((data) => data.json())
        .then((result) => {
          console.log(result)
          this.headers = {}
          for (let field of this.fields.headers)
            this.headers[field] = result[field]
          console.log(result[this.fields.detail].$values)
          for (let row of result[this.fields.detail].$values) {
            console.log(row)
            var detail = { id: row.id }
            detail[this.fields.detail] = row.name
            this.entries.push(detail)
          }
        })
      console.log(this.entries)
    }
  },
  created() {
    this.getDetails()
  }
}
</script>

<style scoped>
h2 {
  text-transform: capitalize;
}
</style>