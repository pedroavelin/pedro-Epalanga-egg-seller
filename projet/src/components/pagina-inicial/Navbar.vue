<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div class="container-fluid">
        <div class="text-muted small fw-bold me-auto" style="font-size: 2rem">
          <b-icon
            icon="egg-fill"
            class="rounded-circle bg-white p-2"
            variant="warning"
          ></b-icon>

          <a class="navbar-brand me-auto ms-2 px-2 title text-white" href="#"
            >EggSeller</a
          >
        </div>
        <!-- 
      <a class="navbar-brand" href="#">EggSeller</a>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"
            ><i class="fas fa-hamburger"></i
          ></span>
        </button> -->

        <div
          class="collapse navbar-collapse me-auto"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <b-icon icon="house-door-fill" class="" scale="1.2"></b-icon>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#preco"> Produtos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#sobre"> Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#contactos"> Contactos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#"> Minha conta </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
li a {
  font-family: "Courier New", Courier, monospace;
}
li a:hover {
  background-color: darkgreen;
}
.active {
  background-color: darkgreen;
}
</style>