<template>
  <div>
    <!-- start_main_calaboradores -->
    <main class="mt-5 pt-5 phone">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-lg-9 text-muted fw-bold fs-5">
            <b-icon icon="person-fill" class="m-1" scale="1"></b-icon>
            Cadastrar colaboradores
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
                <div>
                  <button
                    class="btn btn-success"
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Cadastrar
                    <b-icon icon="caret-right-fill" scale="1"></b-icon>
                  </button>
                </div>
                <hr />

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
                        <th scope="col">salário(Kz)</th>
                        <th scope="col">opções</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="colaborador in colaboradores"
                        :key="colaborador.id"
                      >
                        <td scope="row">{{ colaborador.nome }}</td>
                        <td>{{ colaborador.numeroTelefone }}</td>
                        <td>{{ colaborador.email }}</td>
                        <td>{{ colaborador.provincia }}</td>
                        <td>{{ colaborador.municipio }}</td>
                        <td>{{ colaborador.bairro }}</td>
                        <td>{{ colaborador.numeroCasa }}</td>
                        <td>{{ colaborador.salario }}</td>

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

    <!-- Start_modal -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Cadastrar colaborador
            </h5>
            <button
            @click="limparInputCol()"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form
              action=""
              class="row g-3 was-validated needs-validation"
              novalidate
            >
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-6 mt-2">
                    <input
                      v-model="colaborador.nome"
                      type="text"
                      class="form-control py-1"
                      aria-label="file example"
                      required
                    />
                    <div class="invalid-feedback">
                      Por favor insira o seu nome
                    </div>
                  </div>
                  <div class="col-lg-6 mt-2">
                    <input
                      v-model="colaborador.numeroTelefone"
                      type="number"
                         oninput="validity.valid||(value='');"
                      class="form-control py-1"
                      aria-label="file example"
                      required
                    />
                    <div class="invalid-feedback">Seu contacto</div>
                  </div>
                  <div class="col-lg-6 mt-2">
                    <input
                      v-model="colaborador.email"
                      type="email"
                      class="form-control py-1"
                      aria-label="file example"
                      required
                    />
                    <div class="invalid-feedback">
                      Por favor insira o seu email
                    </div>
                  </div>
                  <div class="col-lg-6 mt-2">
                    <input
                      v-model="colaborador.provincia"
                      type="text"
                      class="form-control py-1"
                      aria-label="file example"
                      required
                    />
                    <div class="invalid-feedback">Província</div>
                  </div>

                  <div class="col-lg-6 mt-2">
                    <input
                      v-model="colaborador.municipio"
                      type="text"
                      class="form-control py-1"
                      aria-label="file example"
                      required
                    />
                    <div class="invalid-feedback">Município</div>
                  </div>
                  <div class="col-lg-6 mt-2">
                    <input
                      v-model="colaborador.bairro"
                      type="text"
                      class="form-control py-1"
                      aria-label="file example"
                      required
                    />
                    <div class="invalid-feedback">Bairro</div>
                  </div>
                  <div class="col-lg-6 mt-2">
                    <input
                      v-model="colaborador.numeroCasa"
                      type="text"
                      class="form-control py-1"
                      aria-label="file example"
                      required
                    />
                    <div class="invalid-feedback">Número da casa</div>
                  </div>
                  <div class="col-lg-6 mt-2">
                    <input
                      v-model="colaborador.salario"
                      type="number"
                      min="0" oninput="validity.valid||(value='');"
                      class="form-control py-1"
                      aria-label="file example"
                      required
                    />
                    <div class="invalid-feedback">Salário</div>
                  </div>
                  <div class="col-lg-6 mt-2">
                    <input
                      v-model="colaborador.senha"
                      type="current-password"
                      class="form-control  py-1"
                      aria-label="file example"
                      required
                    />
                    <div class="invalid-feedback">Criar senha</div>
                  </div>
                  <div class="col-lg-6 mt-2">
                    <!-- <div class="mb-2">
                      <input
                        type="password"
                        class="form-control py-1"
                        aria-label="file example"
                        required
                      />
                      <div class="invalid-feedback">Confirme a sua senha</div>
                    </div> -->
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              @click="limparInputCol()"
              class="btn btn-danger btn-sm"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              @click="cadastrarColaborador()"
              type="button"
              class="btn btn-success py-1 mb-2 btn-sm"
            >
              <b-icon icon="hand-thumbs-up" scale="1"></b-icon> Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End_modal -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      colaborador: {
        nome: '',
        numeroTelefone: '',
        email: '',
        senha: '',
        provincia: '',
        municipio: '',
        bairro: '',
        numeroCasa: '',
        salario: '',
      },
      colaboradores: [],
    };
  },
  methods: {
    listarColaboradores() {
      this.axios("http://localhost:3000/colaboradores").then((response) => {
        this.colaboradores = response.data.data;
      });
    },
    
    cadastrarColaborador() {
      let newColaboradores = {
        nome: this.colaborador.nome,
        numeroTelefone: this.colaborador.numeroTelefone,
        email: this.colaborador.email,
        provincia: this.colaborador.provincia,
        municipio: this.colaborador.municipio,
        bairro: this.colaborador.bairro,
        numeroCasa: this.colaborador.numeroCasa,
        salario: this.colaborador.salario,
        senha: this.colaborador.senha,
      };
      this.axios.post("http://localhost:3000/colaboradores", newColaboradores).then((response) => {
      //  console.log(response);
       if (response.status === 200) {
         this.$swal("Up´s!", "Erro a cadastrar", "success");
          this.listarColaboradores()
            this.limparInputCol()
          } else {
           this.$swal("Up´s!", "Erro a cadastrar", "error");
          }
        });
    },
    limparInputCol() {
      this.colaborador = {
        nome: '',
        numeroTelefone: '',
        email: '',
        provincia: '',
        municipio: '',
        bairro: '',
        numeroCasa: '',
        salario: '',
        senha: '',
      };
    },
  },
  created() {
    this.listarColaboradores();
  },
};
</script>
<style>
</style>