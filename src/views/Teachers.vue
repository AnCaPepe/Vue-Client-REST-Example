<template>
  <div>
    <Header text="Professores" is-logged-in />
    <table>
      <thead>
        <th>Código</th>
        <th>Nome</th>
        <th>No Alunos</th>
      </thead>
      <tbody v-if="teachers.length">
        <tr v-for="(teacher, index) in teachers" :key="index">
          <td>{{ teacher.id }}</td>
          <router-link
            :to="`/students/${teacher.id}`"
            tag="td"
            style="cursor: pointer"
            >{{ teacher.name }}</router-link
          >
          <td>{{ teacher.studentsNumber }}</td>
        </tr>
      </tbody>
      <tfoot v-else>
        Sem professores registrados
      </tfoot>
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
      teachers: [],
      students: [],
    }
  },
  created() {
    this.$http
      .get('http://localhost:3000/students')
      .then(res => res.json())
      .then(students => {
        this.students = students
        this.$http
          .get('http://localhost:3000/teachers')
          .then(res => res.json())
          .then(teachers => {
            this.teachers = teachers
            this.getNumberOfStudents()
          })
      })
  },
  props: {},
  methods: {
    add() {
      let newTeacher = { name: this.name }

      this.$http
        .post('http://localhost:3000/teachers', newTeacher)
        .then(res => res.json())
        .then(teacher => {
          this.teachers.push(teacher)
          this.name = ''
          this.getNumberOfStudents()
        })
    },
    remove(teacher) {
      this.$http
        .delete(`http://localhost:3000/teachers/${teacher.id}`)
        .then(() => {
          let index = this.teachers.indexOf(teacher)
          this.teachers.splice(index, 1)
        })
    },
    getNumberOfStudents() {
      this.teachers.forEach((teacher, index) => {
        teacher = {
          id: teacher.id,
          name: teacher.name,
          studentsNumber: this.students.filter(
            student => student.teacher.id == teacher.id
          ).length,
        }
        this.teachers[index] = teacher
      })
    },
  },
}
</script>

<style scoped></style>
