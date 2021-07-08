<template>
  <div>
    <!-- start_main_calaboradores -->
    <main class="mt-5 pt-5 phone">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-lg-9 text-muted fw-bold fs-5">
            <b-icon icon="person-fill" class="m-1" scale="1"></b-icon>
            Lista de Clientes
          </div>
          <div class="col-md-4 col-lg-3 mb-2 fs-5">
            <input
              type="search"
              class="form-control pesquisar py-1"
              aria-label="file example"
              placeholder="pesquisar ..."
            />
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="container">
                <!-- Button trigger modal -->
                <div
                  class="
                    table-responsive table-responsive-xl
                    col-md-12 col-lg-12
                    mt-0
                    pt-0
                  "
                >
                  <table class="table table-sm table caption-top table-hover">
                    <thead class="table-light text-center text-capitalize">
                      <tr>
                        <th scope="col">nome</th>
                        <th scope="col">contacto</th>
                        <th scope="col">email</th>
                        <th scope="col">província</th>
                        <th scope="col">município</th>
                        <th scope="col">bairro</th>
                        <th scope="col">Casa</th>
                        <th scope="col">opções</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="usuario in usuarios" :key="usuario.id">
                        <td scope="row">{{ usuario.nome }}</td>
                        <td>{{ usuario.numeroTelefone }}</td>
                        <td>{{ usuario.email }}</td>
                        <td>{{ usuario.provincia }}</td>
                        <td>{{ usuario.municipio }}</td>
                        <td>{{ usuario.bairro }}</td>
                        <td>{{ usuario.numeroCasa }}</td>
                        <td>
                          <div
                            class="btn-group btn-group-sm"
                            role="group"
                            aria-label="Basic mixed styles example"
                          >
                            <button
                              type="button"
                              class="btn text-white bg-info"
                            >
                              <b-icon
                                icon="person-lines-fill"
                                scale="1"
                              ></b-icon>
                            </button>
                            <button type="button" class="btn btn-danger">
                              <b-icon icon="trash" scale="1"></b-icon>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- and_main_calaboradores -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // obs: usuario === cliente
      usuario: {
        id: null,
        nome: '',
        numeroTelefone: '',
        email:'',
        senha: '',
        provincia: '',
        municipio: '',
        bairro: '',
        numeroCasa: '',
      },
      usuarios: [],
    };
  },
  methods: {
    // listar clientes
    listarUsuarios() {
      this.axios.get('http://localhost:3000/clientes').then((response) => {
      this.usuarios = response.data.data
      });
    }
  },
  created() {
    this.listarUsuarios()
  },
};
</script>

<style>
</style>