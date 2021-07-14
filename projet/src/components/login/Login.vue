<template>
  <div class="my-login">
    <section class="login py-5 bg-light">
      <div class="container g-5">
        <div class="row content">
          <div class="col-md-6 col-lg-6">
            <img
              src="https://image.freepik.com/fotos-gratis/ovos-de-galinha-marrom-em-rack-na-mesa-cinza_23-2148067251.jpg"
              class="img-responsive"
              srcset=""
            />
          </div>
          <div class="col-md-6 col-lg-6 text-center py-5">
            <h1 class="text-uppercase">Entrar</h1>
            <h4 class="fw-bold py-2">Área administrativa</h4>
            <div class="form-row py-3 pt-3">
              <div class="offset-1 col-lg-10">
                <input
                  v-model="usuario.email"
                  type="text"
                  class="input px-3"
                  placeholder="Email do usuário"
                  required
                />
              </div>
            </div>
            <div class="form-row py-3">
              <div class="offset-1 col-lg-10">
                <input
                  v-model="usuario.senha"
                  type="password"
                  class="input px-3"
                  placeholder="Senha"
                  required
                />
              </div>
            </div>
            <div class="form-row py-3">
              <div class="offset-1 col-lg-10">
                <button
                  @click="login()"
                  type=""
                  class="btnEntrar btn-danger text-white btn-outline-success"
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        email: "",
        senha: "",
      },
    };
  },

  methods: {
    login() {
      // if (!this.email || !this.senha) {
      //   this.$swal(
      //     "Erro!!",
      //     "Seja bem vindo",
      //     "success"
      //   )
        
      // }
      let userLogin = {
        email: this.usuario.email,
        senha: this.usuario.senha,
      };
      this.axios
        .post("http://localhost:3000/login", userLogin)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.limparInputs();
            this.$router.push("/encomendas");
          } else {
            this.$swal("Erro!!", "Verifique as suas credênciais", "error");
          }
        });
    },
    limparInputs() {
      this.usuario = {
        email: "",
        senha: "",
      };
    },
  },
};
</script>

<style>
.my-login {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.content {
  background: white;
  /* border-radius: 20px; */
  box-shadow: 10px 10px 15px -4px rgba(163, 10, 10, 0.75);
  -webkit-box-shadow: 10px 10px 15px -4px rgba(163, 10, 10, 0.75);
  -moz-box-shadow: 10px 10px 15px -4px rgba(163, 10, 10, 0.75);
}

.login img {
  padding-right: 10px;
  padding-bottom: 0;
  width: 500px;
  height: 441px;
}
h1 {
  font-size: 2rem;
  font-weight: 500;
  /* font-family: 'pacifico', cursive; */
}

.input {
  height: 50px;
  width: 280px;
  border: none;
  outline: none;
  border-radius: 60px;
  box-shadow: 1px 1px 21px -3px rgba(255, 0, 0, 0.75);
  -webkit-box-shadow: 1px 1px 21px -3px rgba(255, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 21px -3px rgba(255, 0, 0, 0.75);
}

.btnEntrar {
  height: 50px;
  width: 180px;
  border: none;
  outline: none;
  border-radius: 660px;
  font-weight: 600;
  /* background: rgb(105, 195, 218)8)8)8)8)); */
  /* color: white; */
}
@media (max-width: 920px) {
  img {
    display: none;
  }
  input {
    position: relative;
    width: 8px;
  }
}
</style>