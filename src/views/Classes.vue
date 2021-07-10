<template>
  <div>
    <DBTable title="Classes" path="classes" v-bind:layout="fields" />
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
