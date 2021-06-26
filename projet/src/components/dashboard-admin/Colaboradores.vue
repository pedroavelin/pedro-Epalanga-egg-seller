<template>
<div>
  
 <Navbar/>
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
              <div class="container mt-3">
                <form
                  action=""
                  class="row g-3 was-validated needs-validation"
                  novalidate
                >
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">
                          Por favor insira o seu nome
                        </div>
                      </div>
                      <div class="mb-2">
                        <input
                          type="number"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Seu contacto</div>
                      </div>
                      <div class="mb-2">
                        <input
                          type="email"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">
                          Por favor insira o seu email
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Província</div>
                      </div>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Município</div>
                      </div>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Bairro</div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Número da casa</div>
                      </div>
                      <div class="mb-2">
                        <input
                          type="password"
                          class="form-control py-1"
                          aria-label="file example"
                          pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                          required
                        />
                        <div class="invalid-feedback">Criar senha</div>
                      </div>

                      <div class="mb-2">
                        <input
                          type="password"
                          class="form-control py-1"
                          aria-label="file example"
                          required
                        />
                        <div class="invalid-feedback">Confirme a sua senha</div>
                      </div>
                    </div>

                    <div class="">
                      <div class="row">
                        <div class="col-lg-4">
                          <input
                            type="number"
                            class="form-control py-1"
                            aria-label="file example"
                            required
                          />
                          <div class="invalid-feedback">Salário</div>
                        </div>
                        <div class="col-lg-4 ms-auto px-3">
                          <button class="btn btn-success" type="submit">
                            Cadastrar
                            <b-icon icon="caret-right-fill" scale="1"></b-icon>
                          </button>
                        </div>
                      </div>
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
                      <tr>
                        <td scope="row">Pedro Epalanga</td>
                        <td>928973909</td>
                        <td>avelinopedro5@gmail.com</td>
                        <td>Luanda</td>
                        <td>Cacuaco</td>
                        <td>Nova Urbanização</td>
                        <td>22</td>
                        <td>284.989,00</td>
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
                      <tr>
                        <td scope="row">Pedro Epalanga</td>
                        <td>928973909</td>
                        <td>avelinopedro5@gmail.com</td>
                        <td>Luanda</td>
                        <td>Cacuaco</td>
                        <td>Nova Urbanização</td>
                        <td>22</td>
                        <td>284.989,00</td>
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
     
    <Offcanvas />
    </div>
</template>

<script>
import Navbar from "./Navbar";
import Offcanvas from "./Offcanvas";
export default {
data(){
    return{
      name: "Colaboradores"
    }
},
components:{
  Navbar,
  Offcanvas,
}
}
</script>

<style>

</style>