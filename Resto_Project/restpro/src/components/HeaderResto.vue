<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/AllBook">All_Bookings</router-link>
    <router-link to="/CancelBook">Cancel_Bookings</router-link>
    <a v-on:click="logout" href="">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderResto",



  methods: {
    logout() {
      alert("Succesfully_Logout_From_Page");
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
  padding: 11px 19px;
  text-decoration: none;
  font-size: 22px;
  margin-right: 12px;
}

.nav a:hover {
  background-color: black;
  color: red;
}
</style>
