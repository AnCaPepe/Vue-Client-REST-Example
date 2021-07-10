<template>
  <div>
    <DBTable title="Professors" path="professors" v-bind:layout="fields" />
  </div>
</template>

<script>
// @ is an alias to /src
import DBTable from '@/components/DBTable.vue'

export default {
  name: 'Professors',
  data() {
    return {
      fields: ['name', 'age']
    }
  },
  components: {
    DBTable
  }
}
</script>

<style></style>
