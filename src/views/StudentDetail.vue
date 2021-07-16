<template>
  <div>
    <DBTableDetail title="Student Details" path="students" :fields="fields" />
  </div>
</template>

<script>
// @ is an alias to /src
import DBTableDetail from '@/components/DBTableDetail.vue'

export default {
  data() {
    return {
      fields: {
        headers: ['name', 'age'],
        detail: 'courses',
        entries: ['name']
      }
    }
  },
  components: {
    DBTableDetail
  }
}
</script>