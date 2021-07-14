<template>
  <div>
    <!-- start_main_encomendas -->
    <main class="mt-5 pt-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-lg-9 text-muted fw-bold fs-5">
            <b-icon icon="list" class="m-1" scale="1"></b-icon>
            Lista de encomendas
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
              <div class="container mt-3">
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
                        <th scope="col">Cliente</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">P. Unit</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Tamanho</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Contacto</th>
                        <th scope="col">Data Encomenda</th>
                        <th scope="col">opções</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <div
                        v-if="!temEncomendas"
                        class="alert alert-danger p-0 m-auto"
                        role="alert"
                      >
                        Sua lista de encomendas encontra-se vazia.
                      </div>
                      <tr
                        v-for="encomenda in listaEncomendas"
                        :key="encomenda.id"
                      >
                        <td scope="row">{{ encomenda.nome }}</td>
                        <td>{{ encomenda.descricao }}</td>
                        <td>{{ encomenda.precoUnitario }}</td>
                        <td>{{ encomenda.quantidade }}</td>
                        <td>{{ encomenda.tamanhos_id }}</td>
                        <td>{{ encomenda.estado }}</td>
                        <td>{{ encomenda.numeroTelefone }}</td>
                        <td>{{ formantarData(encomenda.dataEncomenda) }}</td>
                        <td>
                          <div
                            class="btn-group btn-group-sm"
                            role="group"
                            aria-label="Basic mixed styles example"
                          >
                            <button
                              type="button"
                              class="btn text-white bg-info"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
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
                <!-- start_modal_info_cliente -->
                <!-- Button trigger modal -->
                <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Launch static backdrop modal
                      </button> -->
                <!-- Modal -->
                <div
                  class="modal fade modal-dialog-scrollable"
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
                          Informações do cliente
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <ul class="list-group">
                          <li class="list-group-item">
                            <span class="fw-bold">Nome: </span> Vanilson
                            Domingos
                          </li>
                          <li class="list-group-item">
                            <span class="fw-bold">Província: </span> Luanda
                          </li>
                          <li class="list-group-item">
                            <span class="fw-bold">Município: </span> Sambizanga
                          </li>
                          <li class="list-group-item">
                            <span class="fw-bold">Bairro: </span> 12 de julho
                          </li>
                          <li class="list-group-item">
                            <span class="fw-bold">Nº da casa: </span>22
                          </li>
                          <li class="list-group-item">
                            <span class="fw-bold">Telefone: </span> 942999333
                          </li>
                          <li class="list-group-item">
                            <span class="fw-bold">E-mail:</span>
                            vanilson@gmail.com
                          </li>
                          <li class="list-group-item">
                            <div class="row">
                              <div class="col-3">
                                <span class="fw-bold">Pagamento:</span>
                              </div>

                              <div class="col-9">
                                <div class="row">
                                  <div class="col-lg-6">
                                    <select
                                      class="form-select py-1"
                                      aria-label="Default select example"
                                    >
                                      <option selected value="1">
                                        Pendente
                                      </option>
                                      <option value="2">Pago</option>
                                    </select>
                                  </div>
                                  <div class="col-lg-6">
                                    <select
                                      class="form-select py-1"
                                      aria-label="Default select example"
                                    >
                                      <option selected value="1">
                                        Pendente
                                      </option>
                                      <option value="2">Banco</option>
                                      <option value="3">Caixa</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div class="row">
                              <div class="col-6">
                                <span class="fw-bold"
                                  >Estado da encomenda:</span
                                >
                              </div>

                              <div class="col-6">
                                <select
                                  class="form-select py-1"
                                  aria-label="Default select example"
                                >
                                  <option selected value="1">Pendente</option>
                                  <option value="2">Entregue</option>
                                </select>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-info"
                          data-bs-dismiss="modal"
                        >
                          Fatura
                        </button>
                        <button type="button" class="btn btn-success">
                          Salvar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end_modal_info_cliente -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- end_main_encomendas -->
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      encomenda: {
        nome: "",
        descricao: "",
        precoUnitario: "",
        numeroTelefone: "",
        estado: "",
        quantidade: "",
        tamanhos_id: "",
        dataEncomenda: "",
      },
      listaEncomendas: [],
    };
  },
  methods: {
    formantarData(data) {
      let separarData = data.split(".")[0];
      return moment(separarData, "YYYY-MM-DDTHH:mm:ss").format("DD-MM-YYYY");
    },
    listarEncomendas() {
      this.axios.get("http://localhost:3000/encomendas").then((response) => {
        this.listaEncomendas = response.data.data;
      });
    },
  },
  created() {
    this.listarEncomendas();
  },
  computed: {
    temEncomendas() {
      return this.listaEncomendas.length > 0;
    },
  },
};
</script>

<style>
</style>