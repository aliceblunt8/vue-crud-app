<template>
  <form @submit.prevent="save">
    <p class="title">{{ userId === undefined ? 'New user' : `User ${userId}` }}</p>
    <label>Name:
      <input
        name="name"
        type="text"
        minlength="2"
        autocomplete="off"
        v-model="user[0].name"
      >
    </label>
    <label>Surname:
      <input
        name="surname"
        type="text"
        minlength="2"
        autocomplete="off"
        v-model="user[0].surname"
      >
    </label>
    <label>Phone:
      <input
        name="phone"
        type="text"
        autocomplete="off"
        v-model="user[0].phone"
      >
    </label>
    <label>Email:
      <input
        name="email"
        type="email"
        autocomplete="off"
        v-model="user[0].email"
      >
    </label>
    <p v-if="isNewUser">OR</p>
    <label v-if="isNewUser">Import data from JSON:
      <input
        name="json"
        type="text"
        autocomplete="off"
        v-model="json"
      >
    </label>
    <button
      type="submit"
    >
      Save to table
    </button>
  </form>
</template>

<script>
export default {
  data: () => ({
    userId: '',
    users: {
      type: Object,
      default: () => {},
    },
    user: [{
      id: Date.now(),
      name: '',
      surname: '',
      phone: '',
      email: '',
    }],
    isNewUser: true,
    json: '',
  }),
  created() {
    this.userId = this.$route.params.id;
  },
  mounted() {
    this.users  = JSON.parse(localStorage.getItem('users'));

    if (this.userId) {
      this.user = this.users.filter(user => user.id === Number(this.userId));
      this.isNewUser = false;
    }
  },
  methods: {
    save() {
      const currentUser = this.user[0];

      if (currentUser.id !== Number(this.userId) && !this.json) {
        this.users.push(currentUser);
      } else if (!this.json) {
        this.users.map(user => {
          if (user.id === this.userId) {
            return currentUser;
          }

          return user;
        })
      }

      if (this.json) {
        const newUsers = JSON.parse(this.json).map(person => ({
            ...person,
           id: Date.now()
          }));
        this.users = this.users.concat(newUsers);
      }

      localStorage.setItem('users', JSON.stringify(this.users));
      this.$router.push('/');
    },
  }
}
</script>

<style scoped>
form {
  margin-top: 30px;
  background: #f5f5f5;
  align-self: flex-start;
  color: #808080;
  border-top: #53B883 solid 54px;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 300px;
  position: relative;
  margin-left: 24px;
}

.title {
  position: absolute;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  top: -50px;
}

label {
  display: flex;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  margin-bottom: 8px;
}

input {
  width: 150px;
  box-sizing: border-box;
  border: 1px solid #808080;
  border-radius: 4px;
  color: #808080;
  padding: 4px;
  outline-color: #808080;
}

button {
  margin-top: 16px;
  border: 2px solid transparent;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 8px 0;
  background: #53B883;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
}
</style>

