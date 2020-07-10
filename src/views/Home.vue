<template>
  <div>
    <Header text="Project School 2020" />
    <h2>Please log in</h2>
    <table>
      <tbody>
        <tr>
          <td>User Name</td>
          <td><input type="text" v-model="userName" /></td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input type="text" v-model="password" /></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-input" @click="logIn()">Log in</button>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    logIn() {
      this.$router.push( { path: 'teachers' } )
    },
  },
}
</script>
