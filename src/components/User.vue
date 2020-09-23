<template>
  <tr>
   <td>{{ user.name }}</td>
   <td>{{ user.surname }}</td> 
   <td>{{ user.phone }}</td> 
   <td>{{ user.email }}</td> 
   <td><button>Edit</button></td>
   <td><button>X</button></td>
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
</style>