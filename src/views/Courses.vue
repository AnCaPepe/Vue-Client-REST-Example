<template>
  <div>
    <DBTable title="Courses" path="courses" :fields="fields" />
  </div>
</template>

<script>
// @ is an alias to /src
import DBTable from '@/components/DBTable.vue'

export default {
  data() {
    return {
      fields: ['name']
    }
  },
  components: {
    DBTable
  }
}
</script>

<style></style>
