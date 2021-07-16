<template>
  <div>
    <DBTableDetail title="Course Details" path="courses" :fields="fields" />
  </div>
</template>

<script>
// @ is an alias to /src
import DBTableDetail from '@/components/DBTableDetail.vue'

export default {
  data() {
    return {
      fields: {
        headers: ['name', 'professor'],
        detail: 'students',
        entries: ['name']
      }
    }
  },
  components: {
    DBTableDetail
  }
}
</script>