<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-nabvar">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/formEuropcar">Formulario Europcar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      <img src="/src/assets/img/europcar-logo.png" alt="" width="100" height="40" class="d-inline-block align-text-top">
      <img src="/src/assets/img/llamada.png" alt="" width="40" height="40" class="d-inline-block align-text-top">
    </div>
  </nav>
  <router-view />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
