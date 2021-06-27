<template>
  <div>
    <!-- inicio sidebar     -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div class="container-fluid">
        <!-- offcanvas -->
        <button
          class="navbar-toggler me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          style="font-size: 2.6rem"
        >
          <b-icon
            icon="list"
            class="rounded-circle bg-danger p-2"
            variant="light"
          ></b-icon>
        </button>
        <!-- offcanvas -->

        <div class="text-muted small fw-bold me-auto" style="font-size: 2rem">
          <b-icon
            icon="egg-fill"
            class="rounded-circle bg-white p-2"
            variant="warning"
          ></b-icon>

          <a class="navbar-brand me-auto ms-2 px-2 title" href="#">EggSeller</a>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style="font-size: 2.5rem"
        >
          <b-icon
            icon="person-circle"
            class="rounded-circle bg-danger p-2"
            variant="light"
          ></b-icon>
        </button>
        <div class="collapse navbar-collapse me-auto" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 d-flex ms-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                variant="outline-primary"
              >
                <b-icon icon="person-fill" scale="1.34"></b-icon>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    <b-icon icon="gear" scale="1"></b-icon> Definições da
                    conta</a
                  >
                </li>
                <li><a class="dropdown-item" href="#">Atualizar dados</a></li>
                <li><hr class="dropdown-divider" /></li>
                <!-- gear -->
                <li>
                  <a class="dropdown-item" href="#"
                    ><b-icon icon="power" scale="1"></b-icon> Sair</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- end sidebar -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>