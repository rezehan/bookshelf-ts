<template>
  <div>
    <h1>Data dari Backend</h1>

    <button @click="loadUsers">Ambil Users</button>

    <ul>
      <li v-for="u in users" :key="u.id">
        {{ u.name }}
      </li>
    </ul>

    <hr />

    <h2>Login (POST)</h2>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="login">Login</button>

    <p>{{ response }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const users = ref<{ id: number; name: string }[]>([]);
    const email = ref("");
    const password = ref("");
    const response = ref("");

    const loadUsers = async () => {
      const res = await axios.get("http://localhost:3000/api/users");
      users.value = res.data;
    };

    const login = async () => {
      const res = await axios.post("http://localhost:3000/api/login", {
        email: email.value,
        password: password.value,
      });

      response.value = res.data.message + " (email: " + res.data.email + ")";
    };

    return {
      users,
      email,
      password,
      response,
      loadUsers,
      login,
    };
  },
});
</script>
