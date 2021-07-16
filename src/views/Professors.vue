<template>
  <div>
    <DBTable title="Professors" path="professors" :fields="fields" />
  </div>
</template>

<script>
// @ is an alias to /src
import DBTable from '@/components/DBTable.vue'

export default {
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
