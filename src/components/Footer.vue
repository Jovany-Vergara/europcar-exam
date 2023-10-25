<template>
  <footer>
    <div class="footer-euripcar d-flex justify-content-center">
      <img src="/src/assets/img/autoclick.jpeg" class="d-inline-block align-text-top m-3" style="width: 5%;">
      <div class="line-vertical"></div>
      <div class="m-3">
        <h6>Atención al cliente</h6>
        <h6>01 800 272 02 91</h6>
        <h6>Nuestro horario de atención telefónica es 24 hrs.</h6>
      </div>
    </div>
    <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic checkbox toggle button group">
      <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
      <label class="btn btn-outline-primary" for="btncheck1">Sitio clásico</label>

      <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
      <label class="btn btn-outline-primary" for="btncheck2">Términos y condiciones</label>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
