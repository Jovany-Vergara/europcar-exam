<template>
  <div class="pt-5 d-flex justify-content-center">
    <div class="card w-75">
      <h5 class="card-header text-white background-card-title">
        <i>Elige fecha y lugar</i>
      </h5>
      <div class="card-body text-white background-card">
        <h5 class="card-title d-flex justify-content-end mb-3">Paso 1</h5>
        <div class="row g-2 mb-3">
          <div class="col-md">
            <label for="floatingSelectGrid">OFICINA DE ENTREGA</label>
            <div class="form-floating">
              <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                <option selected>Selecciona una opción</option>
                <option v-for="element in appData.listStations" :value="element.StationId" :key="element.StationId">{{ element.StationName }}</option>
              </select>
            </div>
            <div class="row g-2 pt-5">
              <div class="col-md">
                <div class="form-floating">
                  <input type="date" class="form-control" id="floatingInputGrid" placeholder="date" value="date">
                  <label for="floatingInputGrid">Fecha</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating">
                  <input type="time" class="form-control" id="floatingInputGrid" placeholder="time" value="time">
                  <label for="floatingInputGrid">Fecha</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md">
            <label for="floatingSelectGrid">OFICINA DE DEVOLUCIÓN</label>
            <div class="form-floating">
              <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                <option selected>Selecciona una opción</option>
                <option v-for="element in appData.listStations" :value="element.StationId" :key="element.StationId">{{ element.StationName }}</option>
              </select>
            </div>
            <div class="row g-2 pt-5">
              <div class="col-md">
                <div class="form-floating">
                  <input type="date" class="form-control" id="floatingInputGrid" placeholder="date" value="date">
                  <label for="floatingInputGrid">Fecha</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating">
                  <input type="time" class="form-control" id="floatingInputGrid" placeholder="time" value="time">
                  <label for="floatingInputGrid">Fecha</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style="opacity: 1">
        <div class="d-flex justify-content-between">
          <h5><a class="text-white" href="">OFICINAS PRINCIPALES</a></h5>
          <button type="button" class="btn background-card-title text-white justify-content-md-end">Continuar</button>
        </div>
        <div class="alert alert-danger mt-5 d-flex justify-content-center" v-if="appData.fetchError">
          {{ appData.messageError }}
        </div>
      </div>
    </div>
  </div>
  <div class="alert alert-dark mt-5 text-white d-flex justify-content-center" role="alert">
    <h3><i>Renta desde <b style="color: rgb(43 182 223);">$30</b> al día</i></h3>
  </div>
</template>

<script>
import { login } from '../services/AuthService';
import { getStationList } from '../services/StationService';
import { onMounted, reactive } from 'vue';
export default {
  name: "FormEuropcar",
  setup() {
    const title = "Hola mundo";
    const appData = reactive({
      listStations: [],
      fetchError: false,
      messageError: ''
    })
    onMounted(async () => {
      try {
        const result = await login('0123456789', '0123456789');
        const { SessionId } = result.data
        const response = await getStationList(SessionId)
        appData.listStations = response.data;
      } catch (error) {
        console.error("ErrorApi", error);
        appData.fetchError = true;
        appData.messageError = "A ocurrido un error al obtener la información"
      }
    })
    return {
      title,
      appData,
    }
  },
};
</script>
