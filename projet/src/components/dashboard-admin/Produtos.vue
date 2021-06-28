<template>
  <div>
    <Offcanvas />
    <!-- end_main_despesas -->
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
              placeholder="pesquisar despesa..."
            />
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="container">
                <button type="button" class="btn btn-success py-1 p-2 mb-2">
                  <b-icon icon="cart-check-fill" scale="1"></b-icon> Registar
                </button>
              </div>
              <div class="container mt-3">
                <form
                  action=""
                  class="row g-3 was-validated needs-validation"
                  novalidate
                >
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="mb-2">
                        <input
                          type="number"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Descrição</div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="mb-2">
                        <input
                          type="number"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Preço unitário</div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control py-1"
                          aria-label="file example"
                          value=""
                          required
                        />
                        <div class="invalid-feedback">quantidade</div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="mb-2">
                        <select
                          class="form-select py-1"
                          required
                          aria-label="select example"
                        >
                          <option value="">Tipo</option>
                          <option value="1">M</option>
                          <option value="2">G</option>
                        </select>
                        <div class="invalid-feedback">Tipo de pagamento</div>
                      </div>

                      <button type="button" class="btn btn-success py-1 mb-2">
                        <b-icon icon="hand-thumbs-up" scale="1"></b-icon> Salvar
                      </button>
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
                        <th scope="col">Drecrição</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">opções</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr>
                        <td>Caixa de Ovos</td>
                        <td>30.000</td>
                        <td>2</td>
                        <td>M</td>
                      
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
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Offcanvas from "./Offcanvas";
export default {
  components: {
    Navbar,
    Offcanvas,
  },
};
</script>

<style>
</style>