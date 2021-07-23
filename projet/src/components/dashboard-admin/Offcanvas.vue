<template>
  <div>
    <!-- start offcanvas -->
    <div
      class="offcanvas offcanvas-start sidebar-nav background_offcanvas px-2"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <b-icon
          icon="egg-fill"
          class="rounded-circle bg-info p-2"
          variant="light"
        ></b-icon>
        <h6 class="offcanvas-title p-2" id="offcanvasExampleLabel">
          <span
          v-for="usuario in usuarios" :key="usuario.id">
          {{usuario.nome}}
          </span>
        </h6>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body p-0">
        <nav class="navbar-dark">
          <ul class="navbar-nav">
            <li>
              <div
                class="text-muted small fw-bold text-uppercase me-auto"
              ></div>
            </li>
            <li>
              <a href="#" class="nav-link px-3 active"> </a>
            </li>
            <li class="">
              <div class="text-muted small fw-bold text-uppercase me-auto" px-3>
                Administrador
              </div>
              <hr class="dropdow-divider" />
            </li>
            <div class="list-group px-2">
              <span class="text-muted p-2">Menu</span>
              <router-link class="v-link" to="/encomendas">
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-0 active"
                  aria-current="true"
                  id="l1"
                  @click="mudarCor('l1')"
                >
                  <b-icon
                    icon="cart-check-fill"
                    class="rounded p-0"
                    variant="danger"
                  ></b-icon>
                  Encomendas
                </a>
              </router-link>

              <router-link class="v-link" to="/produtos">
                <a
                  class="list-group-item list-group-item-action"
                  id="l2"
                  @click="mudarCor('l2')"
                >
                  <b-icon
                    icon="archive"
                    class="rounded p-0"
                    variant="danger"
                  ></b-icon>
                  Produtos
                </a>
              </router-link>

              <router-link tag="li" to="/despesas">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  id="l3"
                  @click="mudarCor('l3')"
                >
                  <b-icon
                    icon="trash"
                    class="rounded p-0"
                    variant="danger"
                  ></b-icon>
                  Despesas
                </a>
              </router-link>

              <router-link tag="li" to="/colaboradores">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  id="l4"
                  @click="mudarCor('l4')"
                >
                  <b-icon
                    icon="person"
                    class="rounded p-0"
                    variant="danger"
                  ></b-icon>
                  Colaboradores
                </a>
              </router-link>
              <router-link tag="li" to="/clientes">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  id="l5"
                  @click="mudarCor('l5')"
                >
                  <b-icon
                    icon="person"
                    class="rounded p-0"
                    variant="danger"
                  ></b-icon>
                  Clientes
                </a>
              </router-link>
            </div>
          </ul>
        </nav>
      </div>
    </div>
    <!-- and offcanvas -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "OffCanvas",
      usuarios:[]
    };
  },
  methods: {
    listarUsuaCol(){
      this.axios.get("http://localhost:3000/usuarios").then((response)=>{
        this.usuarios = response.data.data
      })
    },
    mudarCor(id) {
      // classList: Permite a manipulação do atributo de conteúdo da classe do elemento como um conjunto de tokens separados por espaço em branco por meio de um objeto DOMTokenList.
      document.getElementsByClassName("active")[0].classList.remove("active");
      document.getElementById(id).classList.add("active");
    },
  },
};
</script>

<style>
a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: aqua;
  color: rgb(183, 0, 255);
}
a:active {
  text-decoration: none;
}
</style>