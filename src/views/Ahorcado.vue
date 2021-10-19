<template>
  <div class="crossword mt-5 ">
    <div>
      <h1 class="ahorcado">JUGUEMOS AL AHORCADO</h1>
      <p class="text-center InstruccionAhorcado ">Tiene 3 oportunidades para completar el juego y la palabra a encontrar viene del siguiente concepto</p>
    </div>
    <div class="concepto text-center">
      {{concepto}}
    </div>
    <br>
    <div class="intentosAhorcado ">
      Numero de Intentos: {{tries}}
    </div>

    <div class="titulo_boton">
    <a v-on:click=" muestra_oculta('contenido')" title="" class="boton_mostrar">
      <b-button class="pista mt-2">¿Quieres una pista ?</b-button> 
    </a>
</div>
<div id="contenido" class="intentosAhorcado">
 <br>
      Pista  : {{pista}}
      <br>
</div>
    <div>
      <b-row >
        <b-col class="text-center " cols="12">
          <svg class= "dibujo" height="400" width="400">
            <g id="body">
              <!--HEAD -->
              <g id="head" v-if="tries<=5">
                <circle cx="200" cy="80" r="20" stroke="black" stroke-width="4" fill="white"/>
                <g id="rEyes">
                  <circle cx="193" cy="80" r="4"/>
                  <circle cx="207" cy="80" r="4"/>
                </g>
                <g id="xEyes" class="hide">
                  <line x1="190" y1="78" x2="196" y2="84"/>
                  <line x1="204" y1="78" x2="210" y2="84"/>
                  <line x1="190" y1="84" x2="196" y2="78"/>
                  <line x1="204" y1="84" x2="210" y2="78"/>
                </g>
              </g>
              <!--BODY -->
              <line v-if="tries<=4" x1="200" y1="100" x2="200" y2="150" />
              <!--ARMS -->
              <line v-if="tries<=3" id="armL" x1="200" y1="120" x2="170" y2="140" />
              <line v-if="tries<=2" id="armR" x1="200" y1="120" x2="230" y2="140" />
              <!--LEGS -->
              <line v-if="tries<=1" id="legL" x1="200" y1="150" x2="180" y2="190" />
              <line v-if="tries<=0" id="legR" x1="200" y1="150" x2="220" y2="190" />
            </g>
            <line x1="10" y1="250" x2="150" y2="250" />
            <line id="door1" x1="150" y1="250" x2="200" y2="250" />
            <line  id="door2" x1="200" y1="250" x2="250" y2="250" />
            <line x1="250" y1="250" x2="390" y2="250" />
            <line x1="100" y1="250" x2="100" y2="20" />
            <line x1="100" y1="20" x2="200" y2="20" />
            <line id="rope" x1="200" y1="20" x2="200" y2="60" />
          </svg>
        </b-col>
        <b-col align-self="center" class="text-center mb-5 font-weight-bold" cols="12">
          <div v-for="(item,index) in showWord" :key="index" class="d-inline justify-content-center
          font-weight-bold center" style="text-align: center!important; font-size: 35px">
            {{showWord[index]}}
          </div>
        </b-col>
        <br>
        <b-col cols="12">
        </b-col>
        <b-col cols="1" l v-for="letter in letters" :key="letter" align-self="start">
            <b-button class="letra" @click="onLetter(letter)" pill size="sm">{{letter}}</b-button>
        </b-col>
      </b-row>
    </div>
        <div class="row justify-content-center mt-5 ">
           <router-link to="/juegos" class="quitar">
              <b-button class="BotonesSitio">
                <i class="fas fa-arrow-left"></i>Regresar</b-button>          
            </router-link>
          </div>
  </div>
</template>
<script>
import axios from '../plugins/axios';
export default {
  data() {
    return{
      game: 3,
      tries : null,
      letters: [],
      words: ["OMNIVOROS","CARNIVOROS","HERBIVOROS","FOTOSINTESIS","SOBREPOBLACION","DEFORESTACION","HABITAD","DESCOMPONEDORES","DEGRADACION","TROFICAS"
      ,"CONSUMIDORES","ENERGIA","ANIMALES","PRODUCTORES","ALIMENTICIAS","CONEXION","ACUATICAS"],
      randomWord: "",
      pista: "",
      concepto: "",
      array: [],
      showWord: [],
      correctLetters: [],
      winCondition: 0,
      intentosCuadro: 0,
    }
  },
  methods:{
    
    muestra_oculta(id){
      if (document.getElementById){ //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display === 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
        }
        
    },
    pistaConsulta(){
      console.log('this.randomWord: '+this.randomWord)
     switch(this.randomWord){
        
          case 'OMNIVOROS' : 
              this.pista = "Seres humanos";
              this.concepto = "Aquellos que se alimentan de carnes y plantas";
          break;
          case 'CARNIVOROS' :
              this.pista = "El león";
              this.concepto = "Animales que comen carne";
            break;
          case 'HERBIVOROS' :
              this.pista = "El conejo";
              this.concepto = "Animales que comen plantas";
            break;
          case 'FOTOSINTESIS' :
              this.pista = "Sol y agua";
              this.concepto = "Las plantas obtienen su energía a través de la";
            break;
          case 'SOBREPOBLACION' :
              this.pista = "Exceso de población";
              this.concepto = "Agotamiento de los recursos naturales";
            break;
          case 'DEFORESTACION' :
              this.pista = "Perdidas de bosques";
              this.concepto = "Tala de árboles en los bosques";
            break;
          case 'HABITAD' :
              this.pista = "Lugar para vivir";
              this.concepto = "Es el espacio adecuado de una especie para vivir";
            break;
          case 'DESCOMPONEDORES' :
              this.pista = "Bacterias y hongos";
              this.concepto = "Consumen los restos de los seres vivos muertos";
            break;
          case 'DEGRADACION' :
              this.pista = "Deterioro del hábitat";
              this.concepto = "Es la destrucción de un habitad";
            break;
          case 'TROFICAS' :
              this.pista = "Cadena alimenticia";
              this.concepto = "Las redes tróficas es la unión de varias cadenas";
            break;
          case 'CONSUMIDORES' :
              this.pista = "Animales del planeta";
              this.concepto = "Los niveles tróficos se dividen en descomponedores, productores y";
            break;
          case 'ENERGIA' :
              this.pista = "Fibra";
              this.concepto = "Todo ser vivo en el planeta necesitan alimentarse para obtener su";
            break;
          case 'ANIMALES' :
              this.pista = "Especies";
              this.concepto = "Para obtener su energía las personas se alimentan de los";
            break;
          case 'PRODUCTORES' :
              this.pista = "Pantas y algas";
              this.concepto = "Primer nivel de la cadena trófica";
            break;
          case 'ALIMENTICIAS' :
              this.pista = "Nutrición ";
              this.concepto = "las cadenas tróficas son conocidas como cadenas";
            break;
          case 'CONEXION' :
              this.pista = "Interrelación ";
              this.concepto = "Las cadenas tróficas son una";
            break;
          case 'ACUATICAS' :
              this.pista = "Marinas ";
              this.concepto = "Las cadenas alimenticias marinas son conocidas como cadenas tróficas";
            break;
        }
    },
    pickWord(){
      this.pistaConsulta()
       this.letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
       this.showWord = []
       this.tries = 6
       this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
       this.winCondition = this.randomWord.length
       this.array = this.randomWord.split('')
       for(let i=0; i<this.randomWord.length; i++){
         this.showWord[i] = "_"
       }
    },
      loadStudent(){
          
          this.nombreJugador=localStorage.getItem('NombrePrueba')
          console.log(localStorage.getItem('NombrePrueba'))
        },
      saveScored(puntaje){
        const nombrejugador = localStorage.getItem('NombrePrueba')
        const valores= {username : nombrejugador, finalScore: puntaje};
       /* axios.post('http://localhost:8181/api/save', valores)
        .then(response => element.innerHTML = response.data.id);    */
        },
        plusScored(scoredAhorcado){
          let inputValue = scoredAhorcado;
          localStorage.setItem("activarAhorcado", '0');
          localStorage.setItem("activarMemorama", '1');
          localStorage.setItem("ahorcadoScored", inputValue);

        },
    onLetter(letter){
      let index = []
      let wordIndex = null;
      let disableButton = null
      for(let i=0; i<=this.array.length; i++){
        if (this.array[i]===letter){
          this.correctLetters.push(letter)
          wordIndex = this.array.indexOf(letter)
          disableButton = this.letters.indexOf(letter)
          this.letters.splice(disableButton, 1)
          index.push(wordIndex)
          this.array[wordIndex]="0"
          this.showWord[wordIndex]=letter
          this.$forceUpdate();
        }
      }
      if (wordIndex===null){
        this.tries = this.tries -1
      }
      this.winCondition = this.winCondition-index.length
      let intentoTexto = "Volver a intentar";
      let puntaje; 
           
          if(this.tries <= 2){
            puntaje = 3;
          }else if (this.tries <= 4){
            puntaje = 5;
          }else {
            puntaje = 10;
          }

         const url =require('../assets/img/img-memorama/perdiste.png');

       if (this.intentosCuadro ===1) {
            intentoTexto = "Solo te queda 1 intento mas"
       }else if (this.intentosCuadro >=2){
            intentoTexto = "Este fue tu ultimo intento"
       }
      
      if (this.tries ===0){
            this.$swal.fire({
                title: 'PERDISTE',
                text: "Tu puntaje es de: " + puntaje,
                imageUrl:url,
                imageAlt: 'Custom image',
                confirmButtonColor: '#3085d6',
                confirmButtonText: intentoTexto,
                cancelButtonColor: '#d33',  
            }).then((result)=> {
             //console.count(this.intentosCuadro);
             this.intentosCuadro ++;
              console.log("Intentos perdiste: "+this.intentosCuadro)
              if (this.intentosCuadro >=3) {
                this.$swal.fire({ 
                title: 'Regresaremos al menu de juegos',
                }).then((result) =>{
                    if(result.isConfirmed){
                      this.plusScored(puntaje)
                    this.$router.push('juegos')
                    }else{
                      this.pickWord()
                      this.pistaConsulta()
                    }
                  }
                )
              }
              this.pickWord()
              this.pistaConsulta()
              }
            );

        this.pickWord()
        this.pistaConsulta()
        this.game = this.game -1

      }
      if(this.winCondition ===0){
          const url =require('../assets/img/img-memorama/ganaste.png');
            let puntaje;

          if(this.tries <= 2){
            puntaje = 3;
          }else if (this.tries <= 4){
            puntaje = 5;
          }else {
            puntaje = 10;
          }
         this.$swal.fire({
                title: 'GANASTE',
                text: "Tu puntaje es de: " + puntaje +"  Puntos  Bien hecho",
                imageUrl: url,
                imageAlt: 'Custom image',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Volver al menu de juegos',
          }).then((result) =>{
              if(result.isConfirmed){
                this.plusScored(puntaje)
               // this.saveScored(puntaje)
              this.$router.push('juegos')
              }else{
                this.pickWord()
              }
            }
          )
        this.pickWord()
        this.game = this.game -1
        if (this.game === 0){
          this.$router.push('juegos')
        }
      }
    }
  },
  mounted() {
     this.pickWord()
     this.pistaConsulta()
     this.muestra_oculta('contenido');
  }
}
</script>