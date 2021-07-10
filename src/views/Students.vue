<template>
  <div>
    <DBTable title="Students" path="students" v-bind:layout="fields" />
  </div>
</template>

<script>
// @ is an alias to /src
import DBTable from '@/components/DBTable.vue'

export default {
  name: 'Students',
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
