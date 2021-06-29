<template>
  <div id="app">
    <Navbar v-if="showNavbar" />
    <Offcanvas v-if="showOffcanvas"/>
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
      if (this.$route.path == "/" || this.$route.path == "/Login" ) {
        return false;
      }else{
        return true;
      }
    },
    showOffcanvas(){
      if(this.$route.path == "/Login" || this.$route.path =="/"){
          return false;
        } 
        return true;
    }
    
    },
};
</script>

<style>
/* reduzindo o cumprimento da offcanvas */
:root {
  --offcanvas-width: 250px;
  --topNavbarHeight: 64px;
}

.sidebar-nav {
  width: var(--offcanvas-width);
}
/* Mobile */
@media (min-width: 992px) {
  #first {
    overflow: auto !important;
  }
  /* .offcanvas-backdrop::before{
    display: none;
  } */
  .sidebar-nav {
    /* desabilitando a propriedadee de opacidade dos Btn das offcanvas */
    transform: none;
    visibility: visible !important; /* manter fix/visível a offcanva */
    top: var(--topNavbarHeight);
    height: calc(
      100% - var(--topNavbarHeight)
    ); /* reduzindo altura da offcanva em relação a Navbar */
  }
}
.background_offcanvas {
  box-shadow: 1px -3px 5px 0px rgba(229, 0, 0, 0.75);
  -webkit-box-shadow: 1px -3px 5px 0px rgba(229, 0, 0, 0.75);
  -moz-box-shadow: 1px -3px 5px 0px rgba(229, 0, 0, 0.75);
}
.title {
  box-shadow: 6px -3px 5px 0px rgba(202, 216, 45, 0.75);
  -webkit-box-shadow: 6px -3px 5px 0px rgba(202, 216, 45, 0.75);
  -moz-box-shadow: 6px -3px 5px 0px rgba(202, 216, 45, 0.75);
}
main {
  margin-left: var(--offcanvas-width);
}
@media (max-width: 980px) {
  main {
    position: relative;
    margin: auto;
  }
}
</style>