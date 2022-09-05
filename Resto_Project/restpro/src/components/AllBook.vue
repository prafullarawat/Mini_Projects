<template>
  <HeaderResto />
  <h3>Welcome To All Bookings</h3>
</template>
<script>
import HeaderResto from "./HeaderResto.vue";

export default {
  name: "AllBook",

  components: {
    HeaderResto,
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
