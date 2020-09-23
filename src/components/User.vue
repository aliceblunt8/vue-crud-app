<template>
  <tr>
    <td>{{ user.name }}</td>
    <td>{{ user.surname }}</td> 
    <td>{{ user.phone }}</td> 
    <td>{{ user.email }}</td> 
    <td>
      <button class="button-edit"
        @click="$router.push(`/user/${user.id}`)">Edit</button>
    </td>
    <td>
      <button
        @click="$emit('remove-user', user.id)"
        class="button-delete"
      >
        X
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
}
</script>

<style>
tr {
  background: #fff;
  color: #808080;
}

tr:nth-child(2n + 1) {
  background: #f5f5f5;
}

thead tr:first-child {
  background: #e25644;
  color: #fff;
}

td,
th {
  text-align: left;
  padding: 18px;
}

thead th:hover {
  color: #fff400;
  cursor: pointer;
}

tbody tr:hover {
  background: #f5f5f5;
  color: #585858;
  cursor: pointer;
}

.cell-input {
  border: none;
  color: #808080;
  background: transparent;
  padding: 0;
  outline: none;
  max-width: 100%;
}

.button-edit,
.button-delete {
  border: 1px solid #808080;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  color: #2c3e50;
}

.button-edit:hover{
  background-color: #fff;
}

.button-delete:hover{
  background-color: #e25644;
}
</style>