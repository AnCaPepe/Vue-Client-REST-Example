<template>
  <div>
    <Header :text="'Alunos ' + teacher.name" is-logged-in />
    <div v-if="this.teacherId">
      <input
        type="text"
        placeholder="Nome do Aluno"
        v-model="name"
        @keyup.enter="add()"
      />
      <button class="btn btn-input" @click="add()">Adicionar</button>
    </div>

    <table>
      <thead>
        <th>Matrícula</th>
        <th>Nome</th>
        <th>Opcões</th>
      </thead>
      <tbody v-if="students.length">
        <tr v-for="(student, index) in students" :key="index">
          <!--td>{{ index + 1 }}</td-->
          <td>{{ student.id }}</td>
          <router-link
            :to="`/student_detail/${student.id}`"
            tag="td"
            style="cursor: pointer"
            >{{ student.name }}</router-link
          >
          <td><button class="btn" style="background-color: red" @click="remove(student)">Remover</button></td>
        </tr>
      </tbody>
      <tfoot v-else>
        Sem alunos registrados
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
      name: '',
      students: [],
      teacherId: this.$route.params.teacher_id,
      teacher: { name: '' },
    }
  },
  created() {
    if (this.teacherId) {
      this.$http
        .get('http://localhost:3000/teachers/' + this.teacherId)
        .then(res => res.json())
        .then(teacher => {
          this.teacher = teacher
        })
      this.$http
        .get('http://localhost:3000/students?teacher.id=' + this.teacherId)
        .then(res => res.json())
        .then(students => {
          this.students = students
        })
    } else {
      this.$http
        .get('http://localhost:3000/students')
        .then(res => res.json())
        .then(students => {
          this.students = students
        })
    }
  },
  props: {},
  methods: {
    add() {
      let newStudent = { name: this.name, teacher: this.teacher }

      this.$http
        .post('http://localhost:3000/students', newStudent)
        .then(res => res.json())
        .then(student => {
          this.students.push(student)
          this.name = ''
        })
    },
    remove(student) {
      this.$http
        .delete(`http://localhost:3000/students/${student.id}`)
        .then(() => {
          let index = this.students.indexOf(student)
          this.students.splice(index, 1)
        })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: calc(100% - 195px);
  border: 0px;
  padding: 20px;
  font-size: 1.3em;
  color: #687f7f;
  display: inline;
}
.btn-input {
  background-color: rgb(116, 115, 115);
  width: 150px;
  border: 0px;
  padding: 20px;
  font-size: 1.3em;
}
.btn-input:hover {
  margin: 0px;
  border: 0px;
}
</style>
