<template>
  <div>
    <router-link to="/user" class="button">Add users</router-link>
    <table v-if="users.length > 0" class="table">
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
          @remove-user="removeUser"
        />
      </tbody>
   </table>
   <p v-else>No users</p>
  </div>
</template>

<script>
import User from '../components/User';

export default {
  name: 'Users',
  components: {
    User,
  },
  mounted() {
    if (!localStorage.users) {
      localStorage.setItem('users', JSON.stringify(this.users));
    } else {
      this.users = JSON.parse(localStorage.getItem('users'));
    }
  },
  data() {
    return {
      users: [
        { id: 1, name: 'Harry', surname: 'Potter', phone: '063988888', email: 'potter@gmail.com'},
        { id: 2, name: 'Hermione', surname: 'Granger', phone: '06398855366', email: 'granger@gmail.com'},
        { id: 3, name: 'Ronald', surname: 'Weasley', phone: '0639994366', email: 'weasley@gmail.com'}
      ],
    }
  },
  methods: {
    removeUser(id){
      this.users = this.users.filter(person => person.id !== id);
      localStorage.setItem('users', JSON.stringify(this.users));
    },
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
  margin: 30px auto;
  border-collapse: collapse;
  min-width: 600px;
  max-width: 1000px;
}

thead tr:first-child {
  background: #53B883;
  color: #fff;
}
</style>