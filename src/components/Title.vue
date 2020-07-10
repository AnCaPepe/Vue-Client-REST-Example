<template>
  <div style="display: flex; width=50%">
    <h1>{{ text }}</h1>
    <div v-if="isLoggedIn" class="back">
      <button class="btn btn-back" @click="goBack()">Voltar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    isLoggedIn: Boolean,
  },
  methods: {
    goBack() {
      this.$router.back()
    },
  },
}
</script>

<style scoped>
.back {
  width: 50%;
  position: absolute;
  margin-top: 15px;
}
.btn-back {
  float: right;
}
</style>
