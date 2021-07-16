<template>
  <div>
    <DBTableDetail title="Professor Details" path="professors" :fields="fields" />
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