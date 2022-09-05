<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/AllBook">All Bookings</router-link>
    <router-link to="/CancelBook">Cancel Bookings</router-link>
    <a v-on:click="logout" href="">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderResto",

  methods: {
    logout() {
      alert("Succesfully Logout From Page");
      localStorage.clear();
      this.$router.push({ name: "LoginResto" });
    },
  },
};
</script>

<style>
.nav {
  background-color: aquamarine;
  overflow: hidden;
}

.nav a {
  float: left;
  padding: 10px 18px;
  text-decoration: none;
  font-size: 20px;
  margin-right: 10px;
}

.nav a:hover {
  background-color: black;
  color: red;
}
</style>
