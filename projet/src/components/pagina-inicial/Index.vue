<template>
  <div class="principal">
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <div class="container-fluid">
        <div class="text-muted small fw-bold me-auto" style="font-size: 2rem">
          <b-icon
            icon="egg-fill"
            class="rounded-circle bg-white p-2"
            variant="warning"
          ></b-icon>

          <a class="navbar-brand me-auto ms-2 px-2 title text-white" href="#"
            >EggSeller</a
          >
        </div>
        <!-- 
      <a class="navbar-brand" href="#">EggSeller</a>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"
            ><i class="fas fa-hamburger"></i
          ></span>
        </button> -->

        <div
          class="collapse navbar-collapse me-auto"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <b-icon icon="house-door-fill" class="" scale="1.2"></b-icon>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Preços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Contactos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Minha conta </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- start_login_and_sigIn -->
    <div class="first-content pt-2">
      <div class="form-box">
        <div class="button-box ">
          <div id="btn"></div>
          <button type="button" class="toggle-btn text-info" @click="entrar()">
            Entrar
          </button>
          <button type="button" class="toggle-btn text-info" @click="registar()">
            Registar
          </button>
        </div>
        <form id="registar" class="input-group">
          <div class="row">
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control input-field"
                id="nomeUsuario"
                placeholder="Seu nome"
                required
              />
            </div>
            <div class="col-lg-6">
              <input
                type="number"
                class="form-control input-field"
                id="contacto"
                placeholder="Telefone"
                required
              />
            </div>
            <div class="col-lg-6">
              <input
                type="email"
                class="form-control input-field"
                id="email"
                placeholder="E-mail"
                required
              />
            </div>

            <div class="col-lg-6">
              <input
                type="text"
                class="form-control input-field"
                id="provincia"
                placeholder="Provincia"
                required
              />
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control input-field"
                id="municipio"
                placeholder="Município"
                required
              />
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control input-field"
                id="bairro"
                placeholder="Bairro"
                required
              />
            </div>
            <div class="col-lg-6">
              <input
                type="number"
                class="form-control input-field"
                id="num_casa"
                placeholder="Nº casa"
                required
              />
            </div>
            <div class="col-lg-6">
              <input
                type="password"
                class="form-control input-field"
                id="senha1"
                placeholder="Senha"
                required
              />
            </div>
            <div class="col-lg-6">
              <input
                type="password"
                class="form-control input-field"
                id="senha2"
                placeholder="Confirmar"
                required
              />
            </div>
          </div>

          <div class="container">
            <button type="submit" class="submit-btn btn btn-success mt-2">Registar</button>
          </div>
        </form>
        <form id="entrar" class="input-group">
          <input
            type="text"
            class="form-control input-field"
            id="nomeUsuario"
            placeholder="Nome de usuário"
            required
          />

          <input
            type="password"
            class="form-control input-field"
            id="senha"
            placeholder="Digite a sua senha"
            required
          />
          <div class="container-fluid">
            <div class="row mt-3">
              <div class="col">
                <label class="">Descrição</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Caixa"
                  disabled
                />
              </div>
              <div class="col">
                <label class="">Quantidade</label>
                <input
                  type="number"
                  class="form-control"
                  pattern="[0-9]"
                  placeholder=""
                />
              </div>
              <div class="col mt-2">
                <label class="">Total a pagar</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder=""
                  readonly
                />
              </div>
            </div>
          </div>
          <div class="container">
            <button type="submit" class="submit-btn mt-3 btn btn-success">Encomendar</button>
          </div>
        </form>
      </div>
    </div>
    <!-- end_login_and_sigIn -->
    <!-- start_main_session -->
    <div class="main">
      <div class="container gradient py-5">
        <div class="row py-4">
          <div class="col-lg-7 pt-4 text-center">
            <h1>
              Faça sua encomenda de ovos com apenas um click sem sair de casa
            </h1>
            <button class="btn1 mt-3">Encomendar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end_main_session -->
    <!-- start_session_img -->
    <div class="new">
      <div class="container py-5">
        <div class="row pt-5">
          <div class="col-lg-7 m-auto">
            <div class="row text-center">
              <div class="col-lg-4">
                <div class="img1"><span></span></div>
                <h6>Rijop</h6>
              </div>
              <div class="col-lg-4">
                <div class="img1"><span></span></div>
                <h6>Rijop</h6>
              </div>
              <div class="col-lg-4">
                <div class="img1"><span></span></div>
                <h6>Rijop</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end_session_img -->
    <!-- start_session_img_ovos -->
    <div class="ovosImg">
      <div class="container py-5">
        <div class="row py-5">
          <div class="col-lg-5 m-auto text-center">
            <h1 class="h">Encomende a aqui!...</h1>
            <h6>Compre o que quiser</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 text-center m-auto">
            <button class="btn0" type="submit">Search</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end_session_img_ovos -->
    <!-- start_session_img_about -->
    <div class="about">
      <div class="container py-5">
        <div class="row py-5">
          <div class="col-lg-8 m-auto text-center">
            <h1>O que mais você pode fazer com ovos</h1>
            <h6>Veje abaixo algumas dicas</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <img src="" class="img-fluid mb-3" alt="" />
            <h5>Lorem ipsum dolor</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ipsam modi sequi amet esse omnis enim laboriosam eius explicabo
              dolorem ratione quasi, minima incidunt facere beatae pariatur
              maxime eos dolorum?
            </p>
            <button class="btn0 mb-2" type="submit">Search</button>
          </div>
          <div class="col-lg-4">
            <img src="" class="img-fluid mb-3" alt="" />
            <h5>Lorem ipsum dolor</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ipsam modi sequi amet esse omnis enim laboriosam eius explicabo
              dolorem ratione quasi, minima incidunt facere beatae pariatur
              maxime eos dolorum?
            </p>
            <button class="btn0 mb-2" type="submit">Search</button>
          </div>
          <div class="col-lg-4">
            <img src="" class="img-fluid" alt="" />
            <h5>Lorem ipsum dolor</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ipsam modi sequi amet esse omnis enim laboriosam eius explicabo
              dolorem ratione quasi, minima incidunt facere beatae pariatur
              maxime eos dolorum?
            </p>
            <button class="btn0 mb-2" type="submit">Search</button>
          </div>
        </div>
      </div>
    </div>
    <!-- and_session_img_about -->
    <!-- start_session_img_tipos_ovos -->
    <div class="tipOvos">
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-8 m-auto text-center">
            <h1>Lorem ipsum dolor sit amet consectetu</h1>
            <h6>ipsum dolor sit amet</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
          <div class="col-lg-3 text-center">
            <div class="card-border-0 bg-light mb-2">
              <div class="card-body">
                <img class="img1" src="" alt="" />
              </div>
            </div>
            <h6>WWWWWWWWWWW</h6>
            <p>200,99kz</p>
          </div>
        </div>
      </div>
    </div>
    <!-- obs: Lembrar de adicionar estilo nas tags h6 -->
    <!-- end_session_img_tipos_ovos -->
    <!-- start_section_img -->
    <div class="img_public py-5">
      <div class="container text-white py-5">
        <div class="row py-5">
          <div class="col-lg-6">
            <h1 class="font-weight-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus repellat hic reiciendis mollitia minim
            </h1>
            <h6>Lorem ipsum dolor sit amet consectetur</h6>
            <button class="btn1">Mais sobre nós</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end_section_img -->
    <!-- start_section_contactos -->
    <div class="contatos py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-5 m-auto text-center">
            <h1>Contacte-nos</h1>
            <h6>Sinta-se a vontade para nos contactar</h6>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-lg-9 m-auto">
            <div class="row">
              <div class="col-lg-4">
                <h6>Nossa localização</h6>
                <p>Angola - Luanda, Cacuaco - Bairro Nova Urbanização</p>
                <h6>Telefone</h6>
                <p>+244 928 973 909</p>
                <h6>Email</h6>
                <p>rijop@gmail.com</p>
              </div>
              <div class="col-lg-7">
                <div class="row">
                  <div class="col-lg-6">
                    <input
                      type="text"
                      class="form-control bg-light"
                      name=""
                      id=""
                      placeholder="Digite o seu nome"
                    />
                  </div>
                  <div class="col-lg-6">
                    <input
                      type="text"
                      class="form-control bg-light"
                      name=""
                      id=""
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 py-3">
                    <textarea
                      name=""
                      class="form-control bg-light"
                      id=""
                      cols="10"
                      rows="4"
                      placeholder="Digite alguma coisa"
                    ></textarea>
                  </div>
                  <button class="btn0">Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end_section_contactos -->
    <!-- start_section_footer -->
    <div class="footer py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-9 m-auto text-center">
            <h1>Estamos em todos os lugares</h1>
            <input type="text" class="px-3" placeholder="Digite o seu nome" />
            <button class="btn2">Enviar</button>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-lg-11">
            <div class="row">
              <div class="col-lg-3">
                <h5>Lorem ipsum dolor sit</h5>
                <p>Lorem</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum sit</p>
              </div>
              <div class="col-lg-3">
                <h5>Lorem ipsum dolor sit</h5>
                <p>Lorem</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum sit</p>
              </div>
              <div class="col-lg-3">
                <h5>Lorem ipsum dolor sit</h5>
                <p>Lorem</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum sit</p>
              </div>
              <div class="col-lg-3">
                <h5>Lorem ipsum dolor sit</h5>
                <span><i class="fa fa-facebook"></i></span>
                <span><i class="fa fa-facebook"></i></span>
                <span><i class="fa fa-facebook"></i></span>
                <span><i class="fa fa-facebook"></i></span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p class="text-center">
          Copyrigt 2021 todos os direitos reservados | avelinopedro5@gmail.com
        </p>
      </div>
    </div>
    <!-- end_section_footer -->
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {
    registar() {
      document.getElementById("entrar").style.left = "-400px";
      document.getElementById("registar").style.left = "50px";
      document.getElementById("btn").style.left = "110px";
    },
    entrar() {
      document.getElementById("entrar").style.left = "50px";
      document.getElementById("registar").style.left = "450px";
      document.getElementById("btn").style.left = "0";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* =================================Start NAVBAR==================== */
.principal {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* adicionando estilo no link RIJOP */
.navbar-brand {
  font-size: 2rem;
  color: burlywood;
}
.navbar-brand:hover {
  font-size: 2rem;
  color: rgb(16, 112, 156);
}
.nav-link {
  margin-right: 10px;
  margin-left: 10px;
  color: black;
  text-transform: uppercase;
}
.nav-link:hover {
  color: burlywood;
}
.search {
  height: 40px;
  width: 80%;
  border-radius: 60px;
  outline: none;
  margin-right: -35px;
  border: 2px solid rgb(248, 26, 92);
}
.btn0 {
  height: 40px;
  width: 30%;
  outline: none;
  border: none;
  background: rgb(208, 41, 75);
  color: white;
  border-radius: 60px;
  font-weight: 700;
}
/* =================================End NAVBAR==================== */
/* start_session */
.main {
  background: url("https://i.etsystatic.com/13485242/r/il/7b7da5/2481898650/il_794xN.2481898650_8wfj.jpg")
    no-repeat;
  background-size: cover;
  height: 90vh;
  background-position: 50%, 50%;
  width: 100%;
}
/* .gradient {
  filter: grayscale(10%) sepia(12%) brightness(91%) hue-rotate(360deg);
  -webkit-filter: grayscale(10%) sepia(12%) brightness(91%) hue-rotate(360deg);
  -moz-filter: grayscale(10%) sepia(12%) brightness(91%) hue-rotate(360deg);
} */
.main h1 {
  font-size: 3rem;
  font-weight: 700;
  color: aliceblue;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.btn1 {
  height: 45px;
  width: 50%;
  border: none;
  outline: none;
  background-color: rgb(208, 41, 75);
  color: white;
  font-weight: 700;
  border-radius: 60px;
}
.btn0:hover {
  background-color: rgb(117, 3, 37);
  transition: 0.5s;
}
.h {
  font-weight: 700;
}
.card-body {
  background: url("https://img.welt.de/img/wirtschaft/mobile114882314/1442505187-ci102l-w1024/3376-jpg.jpg")
    no-repeat;
  height: 30vh;
  width: 100%;
}
.card-body:hover {
  box-shadow: -1px -1px -25px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px -1px 25px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px -1px 25px -4px rgba(0, 0, 0, 0.75);
  /* transition: 0.6s;  Não está funcionando */
}
/* end_session */
/* start_session_about */

/* and_session_about */

/* start_section_img */
.img_public {
  background: linear-gradient(rgb(0, 0, 0, 0.2), rgba(24, 23, 23, 0.2)),
    url("https://th.bing.com/th/id/R55a2afce767a3b0685708a14cda35209?rik=O1uFKX%2baHaLkvw&pid=ImgRaw")
      no-repeat;
  background-size: cover;
  height: 80vh;
  width: 100%;
}
.img_public {
  font-family: "Lobster", cursive;
  filter: grayscale(10%) sepia(12%) brightness(91%) hue-rotate(360deg);
  -webkit-filter: grayscale(10%) sepia(12%) brightness(91%) hue-rotate(360deg);
  -moz-filter: grayscale(10%) sepia(12%) brightness(91%) hue-rotate(360deg);
}
/* end_section_img */
/* start_section_contactos */

/* end_section_contactos */
/* start_section_footer */
.footer {
  background-color: RGB(208, 41, 103);
  color: white;
}
.btn2 {
  height: 45px;
  width: 100px;
  background: white;
  margin-left: -10px;
  border: 2px solid white;
  font-weight: 600;
}
.footer input {
  height: 45px;
  width: 55%;
  border: 2px solid white;
  outline: none;
  background: black;
  color: white;
  margin-top: 20px;
  font-weight: 600;
}
.footer::placeholder {
  color: white;
}
.footer p {
  margin: 0;
}
.fab {
  font-size: 2.5rem;
  cursor: pointer;
  padding-right: 5px;
}
/* end_section_footer */
/* start_login_and_sigIn */
.first-content {
  background-position: center;
  background-size: cover;
  position: absolute;
  margin-left: 72%;
}
.form-box {
  border-radius: 3%;
  width: 320px;
  height: 480px;
  position: relative;
  margin: 6 auto;
  background: rgb(255, 255, 255);
  padding: 5px;
  overflow: hidden;
}
.button-box {
  width: 230px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 19px #0099ff1f;
  border-radius: 100px;
}
.toggle-btn {
  padding: 10px 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}
#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 100px;
  height: 44px;
  background: linear-gradient(to right, rgb(208, 41, 103), rgb(208, 41, 103));
  border-radius: 30px;
  transition: 0.5s;
}
.input-group {
  top: 120px;
  position: absolute;
  width: 250px;
  margin-left: -16px;
  transition: 0.5s;
}
.input-field {
  width: 100%;
  padding: 8px 0;
  margin: 5px 0;
  border-left: 100px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
}
.submit-btn {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  display: block;
  margin-left: 20px;
  border: 0;
  outline: none;
  border-radius: 30px;
}
#entrar {
  left: 60px;
}
#registar {
  left: 400px;
}
input:focus {
  outline: 0 !important;
  text-decoration: none;
}
li a {
  font-family: "Courier New", Courier, monospace;
}
li a:hover {
  background-color: darkgreen;
}
.active {
  background-color: darkgreen;
}
/* end_login_and_sigIn  */
</style>  