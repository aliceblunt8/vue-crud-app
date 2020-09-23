<template>
  <div>
    <router-link to="/editing" class="button">Add user</router-link>
    <table class="table">
      <thead>
        <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
        <User
          v-for="user of users"
          :key="user.id"
          :user="user"
        />
      </tbody>
   </table>
  </div>
</template>

<script>
import User from '../components/User';

export default {
  name: 'Users',
  components: {
    User,
  },
  data() {
    return {
      users: [
        { name: 'Harry', surname: 'Potter', phone: '063988888', email: 'potter@gmail.com'},
        { name: 'Hermione', surname: 'Granger', phone: '06398855366', email: 'granger@gmail.com'},
        { name: 'Ronald', surname: 'Weasley', phone: '0639994366', email: 'weasley@gmail.com'}
      ],
    }
  },
  methods: {

  }
}
</script>

<style>
.button {
  margin: 20px auto;
  display: block;
  width: 20%;
  border: 1px solid #808080;
  border-radius: 10px;
  padding: 8px 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  color: #2c3e50;
}

.table {
  border-collapse: collapse;
  min-width: 600px;
  max-width: 1000px;
  margin-top: 30px;
}

thead tr:first-child {
  background: #53B883;
  color: #fff;
}
</style>