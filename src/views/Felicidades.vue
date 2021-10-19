<template>
  <div class="d-flex flex-row">
    <div>
      <img class="card-img-bottom confetiSuperior" height="550" src="../assets/img/brillo.png" />
      <h1 class="felicidades">¡¡¡FELICIDADES POR COMPLETAR EL TABLERO DE JUEGOS!!!</h1>
      </div>
        <div>
         <div >
        <div class="row justify-content-center ml-2 mt-5" >
            <router-link to="/puntaje" class="quitar">
              <b-button class="botonesFelicidades" >
                <i class="far fa-clipboard"></i>Puntajes finales</b-button>
          </router-link>
        </div>
      </div>
        </div>
        <img class="card-img-bottom confetiInferior" height="400" src="../assets/img/Brillito.png" />
  </div>
</template>
<script>
export default {
  name: "Crossword"
};
</script>