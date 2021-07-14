<template>
  <div>
    <!-- end_main_despesas -->
    <main class="mt-5 pt-5 phone">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-lg-9 text-muted fw-bold fs-5">
            <b-icon icon="person-fill" class="m-1" scale="1"></b-icon>
            Registo de despesas
          </div>
          <div class="col-md-4 col-lg-3 mb-2 fs-5">
            <input
              type="search"
              class="form-control pesquisar py-1"
              aria-label="file example"
              placeholder="pesquisar despesa..."
            />
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="container">
                <!-- <button type="button" class="btn btn-success py-1 mb-2">
                  <b-icon icon="trash" scale="1"></b-icon> Criar despesa
                </button> -->
              </div>
              <div class="container mt-3">
                <form
                  class="row g-3 was-validated needs-validation"
                  novalidate
                >
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="mb-2">
                        <input
                        v-model="despesa.descricaoDespesa"
                          type="text"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Descreva a despesa</div>
                      </div>
                      <div class="mb-2">
                        <input
                        v-model="despesa.precoUnitario"
                          type="number"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">
                          Informe o preço unitário(Kz)
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-2">
                        <input
                        v-model="despesa.quantidade"
                          type="number"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Informe a quantidade</div>
                      </div>
                      <div class="mb-2">
                        <input
                        v-model="despesa.totalPago"
                          type="text"
                          class="form-control py-1"
                          aria-label="file example"
                          value=""
                          required
                        />
                        <div class="invalid-feedback">Total pago</div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                       <div class="mb-2">
                        <input
                        v-model="despesa.modPagamento"
                          type="text"
                          class="form-control py-1"
                          minlength="5"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Tipo de pagamento</div>
                      </div>
                      <div class="mb-2">
                        <textarea
                        v-model="despesa.descricao"
                          class="form-control is-invalid"
                          id="validationTextarea"
                          placeholder=""
                          required
                        ></textarea>
                      </div>
                      <!-- <div class="container"> -->
                      <button
                      @click="registarDespesa()"
                       type="button" class="btn btn-success py-1 mb-2">
                        <b-icon icon="hand-thumbs-up" scale="1"></b-icon> Salvar
                      </button>
                      <!-- </div> -->
                    </div>
                  </div>
                </form>
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
                        <th scope="col">P. Unit</th>
                        <th scope="col">Qnt.</th>
                        <th scope="col">Observação</th>
                        <th scope="col">Mod. Pag</th>
                        <th scope="col">Endereço do banco</th>
                        <th scope="col">total pago</th>
                        <th scope="col">opções</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <div
                        v-if="!temDespesas"
                        class="alert alert-danger p-0 m-auto"
                        role="alert"
                      >
                        Lista de despesas vazia.
                      </div>
                      <tr v-for="despesa in listaDespesas" :key="despesa.id">
                        <td>{{ despesa.descricaoDespesa }}</td>
                        <td>{{ despesa.valorUnit }}</td>
                        <td>{{ despesa.quantidade }}</td>
                        <td>{{ despesa.observacao }}</td>
                        <td>{{ despesa.modPagamento }}</td>
                        <td>{{ despesa.enderecoBancario }}</td>
                        <td>{{ despesa.totalPago }}</td>
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
                              <b-icon icon="pencil-fill" scale="1"></b-icon>
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
    <!-- end_main_despesas -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      despesa: {
        id: null,
        descricaoDespesa: '',
        valorUnit: '',
        quantidade: '',
        observacao: '',
        modPagamento:'',
        enderecoBancario: '',
        totalPago: '',
      },
      listaDespesas: [],
    };
  },
  methods: {
    registarDespesa(){
      this.newDespesa = {
        descricaoDespesa: this.despesa.descricaoDespesa,
        valorUnit: this.despesa.valorUnit,
        quantidade: this.despesa.quantidade,
        observacao: this.despesa.observacao,
        modPagamento: this.despesa.modPagamento,
        enderecoBancario: this.despesa.enderecoBancario,
        totalPago: this.despesa.totalPago
      }
      this.axios.post('http://localhost:3000/despesas', newDespesa).then((response)=>{
        if (response.status === 200) {
          this.listaDespesas()
          this.limparInputs()
           this.$swal("Sucesso!!", "Você cadastrou uma nova despesa", "success");
        }else{
           this.$swal("Erro!", "Não foi possível cadastar a despesa", "error");
        }
      })
    },
    listarDespesas() {
      this.axios.get("http://localhost:3000/despesas").then((response) => {
        this.listaDespesas = response.data.data;
      });
    },
    limparInputs(){
      this.despesa ={
        descricaoDespesa: '',
        valorUnit: '',
        quantidade: '',
        observacao: '',
        modPagamento:'',
        enderecoBancario: '',
        totalPago: '',
      }
    }
  },
  created() {
    this.listarDespesas();
  },
  computed: {
    temDespesas() {
      return this.listaDespesas.length > 0;
    },
  },
};
</script>

<style>
</style>