<template>
  <div>
    <!-- end_main_produtos -->
    <main class="mt-5 pt-5 phone">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-lg-9 text-muted fw-bold fs-5">
            <b-icon icon="person-fill" class="m-1" scale="1"></b-icon>
            Registo de Produtos
          </div>
          <div class="col-md-4 col-lg-3 mb-2 fs-5">
            <input
              type="search"
              class="form-control pesquisar py-1"
              aria-label="file example"
              placeholder="pesquisar produto..."
            />
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="container">
                <button
                  type="button"
                  class="btn btn-success py-1 p-2 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <b-icon icon="cart-check-fill" scale="1"></b-icon> Registar
                </button>
              </div>

              <!-- ==================================================================================================================== -->
              <!-- Button trigger modal -->

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
                        Cadastrar Produto
                      </h5>
                      <button
                      @click="limparInputs()"
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
                        <div class="row mt-3">
                          <div class="col-lg-6">
                            <div class="mb-2">
                              <input
                                v-model="produto.nome"
                                type="text"
                                class="form-control py-1"
                                aria-label="file example"
                                required
                              />
                              <div class="invalid-feedback">Descrição</div>
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="mb-2">
                              <input
                                v-model="produto.precoUnitario"
                                type="number"
                                class="form-control py-1"
                                aria-label="file example"
                                required
                              />
                              <div class="invalid-feedback">Preço unitário</div>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="mb-2">
                              <input
                                v-model="produto.quantidade"
                                type="text"
                                class="form-control py-1"
                                aria-label="file example"
                                value=""
                                required
                              />
                              <div class="invalid-feedback">quantidade</div>
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <!-- <div class="mb-2">
                              <input
                                v-model="produto.tamanho"
                                type="text"
                                class="form-control py-1"
                                aria-label="file example"
                                value=""
                                required
                              />
                              <div class="invalid-feedback">Tamanho</div>
                            </div> -->
                            <div class="mb-2">
                              <select
                                class="form-select p  y-1"
                                aria-label="select example"
                                v-model="tamanho.tamanhos_id"
                              >
                                <option
                                v-for="tam in tamanhos" 
                                :key="tam.id"
                                :value="tam.id"
                                selected
                                > 
                                {{tam.tamanho}} 
                                </option>
                              </select>
                              <div class="invalid-feedback">Tipo</div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                      @click="limparInputs()"
                        type="button"
                        class="btn btn-danger btn-sm"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        v-if="!produto.id"
                        @click="cadastrarProd()"
                        type="button"
                        class="btn btn-success py-1 mb-2 btn-sm"
                      >
                        <b-icon icon="hand-thumbs-up" scale="1"></b-icon> Salvar
                      </button>
                      <!-- editProduto => guarda as alerações da edição -->
                      <button
                        v-else
                        @click="editProduto(produto)" 
                        type="button"
                        class="btn btn-success py-1 mb-2 btn-sm"
                      >
                        <b-icon icon="hand-thumbs-up" scale="1"></b-icon> Editar
                        produto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ==================================================================================================================== -->
              <div class="container mt-3">
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
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço Unit</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Tamanho</th>
                        <th scope="col">Data registro</th>
                        <th scope="col">opções</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr v-for="produto in produtos" :key="produto.id">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.precoUnitario }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.tamanho }}</td>
                        <td>{{ formantarData(produto.dataRegistro) }}</td>
                        <td>
                          <div
                            class="btn-group btn-group-sm"
                            role="group"
                            aria-label="Basic mixed styles example"
                          >
                            <button
                            @click="openEditarModalProd(produto)"
                              type="button"
                              class="btn text-white bg-info"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <b-icon icon="pencil-fill" scale="1"></b-icon>
                            </button>
                            <button
                              @click="eliminarProduto(produto.id)"
                              type="button"
                              class="btn btn-danger"
                            >
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
    <!-- end_main_produtos -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      modalIsOpen: false,
      produto: {
        id: '',
        nome: '',
        precoUnitario: '',
        quantidade: '',
        tamanho: '',
      },
      produtos: [],
      tamanho:{
        tamanhos_id: null,
      },
      tamanhos:[]
    };
  },
  methods: {
    listarTamanhos(){
      this.axios.get("http://localhost:3000/produtos/selectBoxTamanhos").then((response)=>{
        this.tamanhos = response.data.data
      })
    },
    formantarData(data){
      let separarData = data.split('.')[0]
     return  moment(separarData, 'YYYY-MM-DDTHH:mm:ss').format('DD-MM-YYYY')

    },
    // atualizarProduto() {
    //   this.axios.put("http://localhost:3000/produtos").then((response) => {
    //     console.log(response);
    //   });
    // },
    eliminarProduto(id) {
      this.axios
        .delete(`http://localhost:3000/produtos/` + id)
        .then((response) => {
          if (response.status === 200 ) {
            this.$swal("Up´s!", "Produto eliminado com sucesso", "error");
            this.listarProdutos()
          }else{
            this.$swal("Erro!", "Produto não eliminado", "error");
          }
        });
    },
    cadastrarProd() {
      let newProduto = {
        nome: this.produto.nome,
        precoUnitario: this.produto.precoUnitario,
        quantidade: this.produto.quantidade,
        tamanho: this.produto.tamanho
      };

      this.axios
        .post("http://localhost:3000/produtos", newProduto)
        .then((response) => {
          if (response.status === 200) {
            this.listarProdutos();
            this.limparInputs();
          } else {
            this.$swal("Good job!", "Erro ao cadastrar", "error");
          }
        });
    },
    editProduto() {
      let newProduto = {
        nome: this.produto.nome,
        precoUnitario: this.produto.precoUnitario,
        quantidade: this.produto.quantidade,
        tamanho: this.produto.tamanho,
      };

      this.axios
        .put("http://localhost:3000/produtos/" + this.produto.id, newProduto)
        .then((response) => {
          if (response.data !== "success") {
            this.listarProdutos();
            this.limparInputs();
            this.$swal("success!", "Produto modificado com Sucesso", "success");
          } else {
            this.$swal("Erro!", "Erro ao editar", "error");
          }
        });
    },

    listarProdutos() {
      this.axios.get("http://localhost:3000/produtos").then((response) => {
        this.produtos = response.data.data;
      });
    },
    
    limparInputs() {
      this.produto = {
        nome: "",
        precoUnitario: "",
        quantidade: "",
        tamanho: "",
      };
    },
    openEditarModalProd(produto){
      this.produto = {
        id: produto.id,
        nome: produto.nome,
        precoUnitario: produto.precoUnitario,
        quantidade: produto.quantidade,
        tamanho: produto.tamanho
      }
    }
  },
  created() {
    this.listarProdutos();
    this.listarTamanhos();
  },
  fecharModal() {
    this.modalIsOpen = false;
  },
};
</script>

<style>
</style>