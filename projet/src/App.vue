<template>
  <div id="app">
    <Navbar v-if="showNavbar" />
    <Offcanvas />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/dashboard-admin/Navbar";
import Offcanvas from "@/components/dashboard-admin/Offcanvas";
export default {
  components: {
    Navbar,
    Offcanvas,
  },
  computed: {
    showNavbar() {
      // debugger
      if (this.$route.path == "/") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
</style>