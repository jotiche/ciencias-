<template>
  <div class="container">
    <div class="container row justify-content-center">
      <h1 class="jugemos">¡¡¡JUGUEMOS!!!</h1>
    </div>
    <div class="row justify-content-center">
        <img class="card-img-bottom" src="../assets/img/juguemosfondo.png"/>
      <h1 class="TituloTablero">Para poder completar el tablero de  juegos deberás terminar los 2 niveles, logrando desbloquear el botón de la línea meta, ¡¡¡ASÍ QUE COMENCEMOS!!!</h1>
        <div class="col-sm-5">
          <div v-if="habilitaAhorcado === '1'">
          <div class="card-body row justify-content-center quitar">
            <router-link to="/ahorcado" class="quitar">
                <img src="../assets/img/koala.png" class="imagen"><b-button class='niveles' ><i class="fas fa-gamepad"></i>Nivel 1</b-button>
              </router-link>
          </div>
          </div>
          <div v-else>
            <div class="card-body quitar">
                <img src="../assets/img/koala.png" class="imagen"><b-button class='niveles' ><i class="fas fa-gamepad"></i>Nivel 1</b-button>
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div v-if="habilitaMemorama === '1'">
          <div class="card-body row justify-content-center mr-1">
              <router-link to="/memorama" class="quitar" >
                  <img src="../assets/img/koala.png" class="imagen"><b-button class='niveles'><i class="fas fa-gamepad"></i>Nivel 2</b-button>
              </router-link>
          </div>
          </div>
          <div v-else>
            <div class="card-body quitar">
                  <img src="../assets/img/koala.png" class="imagen"><b-button class='niveles'><i class="fas fa-gamepad"></i>Nivel 2</b-button>
            </div>
          </div>
        </div>
              <div class="col-sm-2 row justify-content-center ml-2">
        <div v-if="activarBande === '1'" class="row justify-content-center">
            <router-link to="/felicidades">
                <b-button class="meta">
                <p>Linea de meta</p>
                <div class="reducir">
                  <img src="../assets/img/bandera.png" height="150px"/>
                </div>
              </b-button>
            </router-link>
          </div>
          <div v-else>
                <b-button class="meta">
                <p>Linea de meta</p>
                <div class="reducir row justify-content-center" >
                  <img src="../assets/img/bandera.png" height="150px"/>
                </div>
              </b-button>
          </div>
      </div>
    </div>
         <div class="col-3 ">
        <div >
           <b-form-input class="text-center jugador  "  disabled  v-model="nombreJugador"> </b-form-input>

            <div v-if="nombreImagen === 'mario'" >
             <img class="card-img-bottom perso " src='../assets/img/mario.png'/>
            </div>
            <div v-if="nombreImagen === 'goku'" >
             <img class="card-img-bottom perso" src='../assets/img/goku.png'/>
            </div>
            <div v-if="nombreImagen === 'pikachu'" >
             <img class="card-img-bottom perso" src='../assets/img/pikachu.png'/>
            </div>
            <div v-if="nombreImagen === 'rosa'" >
             <img class="card-img-bottom perso" src='../assets/img/rosa.png'/>
            </div>
            <div v-if="nombreImagen === 'miraculos'" >
             <img class="card-img-bottom perso" src='../assets/img/miraculos.png'/>
            </div>
            <div v-if="nombreImagen === 'stichrosa'" >
             <img class="card-img-bottom perso" src='../assets/img/stichrosa.png'/>
            </div>
        </div>
      </div>
      <div >
          <div class="card-body row justify-content-center">
           <router-link to="/eligepersonaje" class="quitar">
              <b-button class="BotonesSitio">
                <i class="fas fa-arrow-left"></i>Regresar</b-button>          
            </router-link>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  name: "Juegos",
          data() {
          
            return {
               nombreJugador: null,
               nombreImagen:null,
               rutaImagen:null,
               activarBande: 0,
               habilitaMemorama:0,
               habilitaAhorcado:0,


        };
    },
  methods: {
      loadStudent(){
          this.nombreJugador=localStorage.getItem('NombrePrueba')
          console.log('Nombre de jugador: '+this.nombreJugador)
          
          this.nombreImagen=localStorage.getItem('Nombreimagen')
          console.log('Nombre de la imagen: '+this.nombreImagen)
          this.rutaImagen='../assets/img/goku.png'

          this.activarBande=localStorage.getItem('activaBandera')
          console.log('Valor Bandera: '+this.activarBande)

          this.habilitaAhorcado=localStorage.getItem('activarAhorcado')
          console.log('Valor Ahorcado: '+this.habilitaAhorcado)

          this.habilitaMemorama=localStorage.getItem('activarMemorama')
          console.log('Valor Ahorcado: '+this.habilitaMemorama)
        },
    },
  mounted(){
    this.loadStudent();
  },
};
</script>