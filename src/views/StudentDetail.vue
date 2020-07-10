<template>
  <div>
    <Header :text="`Aluno ${student.name}`" is-logged-in />
    <button class="btn btn-input" v-show="!this.isEditing" style="background-color: yellow" @click="startEditing()">Editar</button>
    <button class="btn btn-input" v-show="this.isEditing" style="background-color: green" @click="saveEditiing()">Salvar</button>
    <button class="btn btn-input" v-show="this.isEditing" style="background-color: red" @click="cancelEditing()">Cancelar</button>
    <table>
      <tbody>
        <tr>
          <td class="col-small">Matrícula</td>
          <td>
            <label>{{ student.id }}</label>
          </td>
          <td v-if="this.isEditing"></td>
        </tr>
        <tr>
          <td class="col-small">Nome</td>
          <td>
            <label>{{ student.name }}</label>
          </td>
          <td v-if="this.isEditing">
            <input type="text" v-model="studentEdit.name" />
          </td>
        </tr>
        <tr>
          <td class="col-small">Nascimento</td>
          <td>
            <label>{{ student.dateBirth }}</label>
          </td>
          <td v-if="this.isEditing">
            <input type="text" v-model="studentEdit.dateBirth" />
          </td>
        </tr>
        <tr>
          <td class="col-small">Professor</td>
          <td>
            <label>{{ student.teacher.name }}</label>
          </td>
          <td v-if="this.isEditing">
            <select v-model="studentEdit.teacher"
              ><option
                v-for="(teacher, index) in teachers"
                :key="index"
                :value="teacher"
                >{{ teacher.name }}</option
              >
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header,
  },
  data() {
    return {
      studentId: this.$route.params.student_id,
      student: { name: '' },
      studentEdit: {},
      teachers: [],
      isEditing: false,
    }
  },
  created() {
    if (this.studentId) {
      this.$http
        .get('http://localhost:3000/students/' + this.studentId)
        .then(res => res.json())
        .then(student => (this.student = student))
    }
    this.$http
      .get('http://localhost:3000/teachers')
      .then(res => res.json())
      .then(teachers => (this.teachers = teachers))
  },
  methods: {
    startEditing() {
      this.studentEdit = { ...this.student }
      this.isEditing = true
    },
    saveEditiing() {
      this.$http
        .put(
          'http://localhost:3000/students/' + this.studentId,
          this.studentEdit
        )
        .then(res => res.json())
        .then(student => (this.student = student))
      this.isEditing = false
    },
    cancelEditing() {
      this.isEditing = false
    },
  },
}
</script>

<style scoped></style>
