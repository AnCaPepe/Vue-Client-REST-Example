<template>
  <div>
    <Nav :is-logged-in="isLoggedIn" />
    <br>
    <Title :is-logged-in="isLoggedIn" :text="text" />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Title from '@/components/Title'

export default {
  components: {
    Nav,
    Title,
  },
  props: {
    text: String,
    isLoggedIn: Boolean,
  }
}
</script>
