<template>
  <div>
    <main role="main" class="container-fluid" id="app">
      <div class="row">
        <div class="col-12">
          <div class="container row justify-content-center">
            <h1 class="memoria">MEMORIA Y CONOCIMIENTO</h1>
          </div>  
          <h2 class="text-center busca mb-4 ">Busque el par de imágenes, tiene 3 oportunidades para terminar el juego</h2>    
          <div class="intentos">
          <p class="barra">
            <span class="h5 intentos">Intentos: </span>
            {{ intentos }}/{{ MAXIMOS_INTENTOS }}&nbsp;<span class="h5 intentos"
              >Aciertos:
            </span>
            {{ aciertos }} <br />
          </p>
          </div>
        </div>
      </div>
      <div v-for="(fila, indiceFila) in memorama" :key="indiceFila" class="row">
        <div
          :key="indiceFila + '' + indiceImagen"
          class="col-3"
          v-for="(imagen, indiceImagen) in fila"
        >
          <div class="mb-3">
            <div v-if="imagen.mostrar">
              <img @click="voltear(indiceFila, indiceImagen)"
                   :class="{ girar: imagen.mostrar }"
                   :src="require(`@/assets/img/img-memorama/${imagen.mostrar}` ?
               `@/assets/img/img-memorama/${imagen.ruta}` : NOMBRE_IMAGEN_OCULTA)"
                   class="card-img-top "
              />
            </div>
            <div v-else>
              <img @click="voltear(indiceFila, indiceImagen)"
                   :class="{ girar: imagen.mostrar }"
                   :src="require(`@/assets/img/img-memorama/${NOMBRE_IMAGEN_OCULTA}`)"
                   class="card-img-top "
              />
            </div>
          </div>
        </div>
      </div>
    </main>
        <div class="row justify-content-center">
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
  name: "Memorama",
  data(){
      return {
        MAXIMOS_INTENTOS : 8, // Intentos máximos que tiene el jugador
        COLUMNAS : 4, // Columnas del memorama
        SEGUNDOS_ESPERA_VOLTEAR_IMAGEN : 1.5, // Por cuántos segundos mostrar ambas imágenes
        NOMBRE_IMAGEN_OCULTA : "question.png", // La imagen que se muestra cuando la real est
           // La ruta de las imágenes. Puede ser relativa o absoluta
        imagenes: [
            "imagen1.jpeg",
            "imagen2.png",
            "imagen3.png",
            "imagen4.png",
            "imagen5.jpeg",
            "imagen6.jpeg",
        ],
        memorama: [],
        // Útiles para saber cuál fue la carta anteriormente seleccionada
        ultimasCoordenadas: {
            indiceFila: null,
            indiceImagen: null,
        },
        intentos: 0,
        aciertos: 0,
        esperandoTimeout: false,
        intentosCuadro: 0,
        nombreJugador: null,
        ahorcadoScored:0,

      

      }
  },
  methods: {
        loadStudent(){
          
          this.nombreJugador=localStorage.getItem('NombrePrueba')
          console.log(localStorage.getItem('NombrePrueba'))
          this.ahorcadoScored=localStorage.getItem('ahorcadoScored')
          console.log(localStorage.getItem('ahorcadoScored'))
        },
        
        saveScored(puntaje){
        localStorage.setItem("activarMemorama", '0');
        const nombrejugador = localStorage.getItem('NombrePrueba')
        const valores= {username : nombrejugador, finalScore: puntaje};
        axios.post('http://localhost:8181/api/save', valores)
        .then(response => element.innerHTML = response.data.id);    
        },

        // Método que muestra la alerta indicando que el jugador ha perdido; después
        // de mostrarla, se reinicia el juego
        indicarFracaso() {
         const url =require('../assets/img/img-memorama/perdiste.png');

          let intentoTexto = "Volver a intentar";
          let puntaje;
          let ahorcadoSuma = parseInt(this.ahorcadoScored)
           let suma =0;
          if(this.aciertos <= 2){
            puntaje = 3;
          }else if (this.aciertos <= 5){
            puntaje = 5;
          }else {
            puntaje = 10;
          }
           if (this.intentosCuadro ==1) {
              intentoTexto = "Solo te queda 1 intento mas"
           }else if (this.intentosCuadro >=2){
              intentoTexto = "Este fue tu ultimo intento"
           }
           console.log('Intentos: '+this.intentosCuadro)
              this.$swal.fire({
                title: 'PERDISTE',
                text: "Tu puntaje es de: " + puntaje,
                imageUrl:url,
                imageAlt: 'Custom image',
                confirmButtonColor: '#3085d6',
                confirmButtonText: intentoTexto,
            })
            .then((result)=> {
             //console.count(this.intentosCuadro);
             this.intentosCuadro ++;
              console.log("Intentos perdiste: "+this.intentosCuadro)
              if (this.intentosCuadro >=3) {
                this.$swal.fire({ 
                title: 'Regresaremos al menu de juegos',
                }).then((result) =>{
                    if(result.isConfirmed){
                    suma= `${puntaje + ahorcadoSuma}`;
                    console.log('suma:'+suma)
                    this.saveScored(suma)
                    localStorage.setItem("activaBandera", '1');
                    this.$router.push('juegos')
                    }else{
                      this.reiniciarJuego()
                    }
                  }
                )
              }
              this.reiniciarJuego()
              }
            );
        },
        // Mostrar alerta de victoria y reiniciar juego
        indicarVictoria() {
              let puntaje;
              let suma =0;
              let ahorcadoSuma = parseInt(this.ahorcadoScored)
              const url =require('../assets/img/img-memorama/ganaste.png');
          if(this.aciertos <= 2){
            puntaje = 3;
          }else if (this.aciertos <= 5){
            puntaje = 5;
          }else {
            puntaje = 10;
          }
                 this.$swal.fire({
                title: 'GANASTE',
                text: "Tu puntaje es de: " + puntaje +" Puntos  Bien hecho",
                imageUrl: url,
                imageAlt: 'Custom image',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Volver al menu de juegos',     
          }).then((result) =>{
              if(result.isConfirmed){
                 suma= `${puntaje + ahorcadoSuma}`;
                 console.log('suma:'+suma)
              this.saveScored(suma)
              localStorage.setItem("activaBandera", '1');
              this.$router.push('juegos')
              }else{
                this.reiniciarJuego()
              }
            }
          )
        },
        // Método que indica si el jugador ha ganado
        haGanado() {
            return this.memorama.every(arreglo => arreglo.every(imagen => imagen.acertada));
        },
        // Ayudante para mezclar un arreglo
        mezclarArreglo(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        },
        // Aumenta un intento y verifica si el jugador ha perdido
        aumentarIntento() {
            this.intentos++;
            if (this.intentos >= this.MAXIMOS_INTENTOS) {
                this.indicarFracaso();
            }
        },
        // Se desencadena cuando se hace click en la imagen
        voltear(indiceFila, indiceImagen) {
            // Si se está regresando una imagen a su estado original, detener flujo
            if (this.esperandoTimeout) {
                return;
            }
            // Si es una imagen acertada, no nos importa que la intenten voltear
            if (this.memorama[indiceFila][indiceImagen].acertada) {
                return;
            }
            // Si es la primera vez que la selecciona
            if (this.ultimasCoordenadas.indiceFila === null && this.ultimasCoordenadas.indiceImagen === null) {
                this.memorama[indiceFila][indiceImagen].mostrar = true;
                this.ultimasCoordenadas.indiceFila = indiceFila;
                this.ultimasCoordenadas.indiceImagen = indiceImagen;
                return;
            }
            // Si es el que estaba mostrada, lo ocultamos de nuevo
            let imagenSeleccionada = this.memorama[indiceFila][indiceImagen];
            let ultimaImagenSeleccionada = this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen];
            if (indiceFila === this.ultimasCoordenadas.indiceFila &&
                indiceImagen === this.ultimasCoordenadas.indiceImagen) {
                this.memorama[indiceFila][indiceImagen].mostrar = false;
                this.ultimasCoordenadas.indiceFila = null;
                this.ultimasCoordenadas.indiceImagen = null;
                this.aumentarIntento();
                return;
            }

            // En caso de que la haya encontrado, ¡acierta!
            // Se basta en ultimaImagenSeleccionada
            this.memorama[indiceFila][indiceImagen].mostrar = true;
            if (imagenSeleccionada.ruta === ultimaImagenSeleccionada.ruta) {
                this.aciertos++;
                this.memorama[indiceFila][indiceImagen].acertada = true;
                this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].acertada = true;
                this.ultimasCoordenadas.indiceFila = null;
                this.ultimasCoordenadas.indiceImagen = null;
                // Cada que acierta comprobamos si ha ganado
                if (this.haGanado()) {
                    this.indicarVictoria();
                }
                console.log("Ver indiceImagen: "+indiceImagen)
                console.log("Ver indiceFila: "+indiceFila)
                console.log("Ver imagenSeleccionada: "+imagenSeleccionada.ruta )
                console.log("Ver ultimaImagenSeleccionada: "+ultimaImagenSeleccionada.ruta)
                console.log("Ver ultimasCoordenadas: "+this.ultimasCoordenadas.indiceFila)
               
               let tituloLeyenda="";
               let textoLeyenda ="";
                 switch(ultimaImagenSeleccionada.ruta){
                    case "imagen1.jpeg" : 
                    console.log("Entro a imagen 1")
                    tituloLeyenda="";
                    textoLeyenda ="Diferentes tipos de habitad";
                    break;

                    case  "imagen2.png":
                    console.log("Entro a imagen 2")
                    tituloLeyenda="";
                    textoLeyenda ="Piramide trofica";
                    break;

                    case   "imagen3.jpeg":
                    console.log("Entro a imagen 3")
                    tituloLeyenda="";
                    textoLeyenda ="Ejemplo de cadena trofica acuatica";
                    break;

                    case  "imagen4.png":
                    console.log("Entro a imagen 4")
                    tituloLeyenda="";
                    textoLeyenda ="Ejemplo de cadena trofica terrestre";
                    break;

                    case  "imagen5.jpeg":
                    console.log("Entro a imagen 5")
                    tituloLeyenda="";
                    textoLeyenda ="Efecto de la deforestacion (Calentamiento Global)";
                    break;

                    case  "imagen6.jpeg":
                    console.log("Entro a imagen 6")
                    tituloLeyenda="";
                    textoLeyenda ="Causa de la degradacion del habitad (Deforestacion)";
                    break;
                }
                this.$bvToast.toast(textoLeyenda, {
                title: tituloLeyenda,
                autoHideDelay: 6000,
              })
            } else {
                // Si no acierta, entonces giramos ambas imágenes
                this.esperandoTimeout = true;
                setTimeout(() => {
                    this.memorama[indiceFila][indiceImagen].mostrar = false;
                    this.memorama[indiceFila][indiceImagen].animacion = false;
                    this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].mostrar = false;
                    this.ultimasCoordenadas.indiceFila = null;
                    this.ultimasCoordenadas.indiceImagen = null;
                    this.esperandoTimeout = false;
                }, this.SEGUNDOS_ESPERA_VOLTEAR_IMAGEN * 1000);
                this.aumentarIntento();
            }
        },
        reiniciarJuego() {
            let memorama = [];
            this.imagenes.forEach((imagen, indice) => {
                let imagenDeMemorama = {
                    ruta: imagen,
                    mostrar: false, // No se muestra la original
                    acertada: false, // No es acertada al inicio
                };
                // Poner dos veces la misma imagen
                memorama.push(imagenDeMemorama, Object.assign({}, imagenDeMemorama));
            });

            // Sacudir o mover arreglo; es decir, hacerlo aleatorio
            this.mezclarArreglo(memorama);

            // Dividirlo en subarreglos o columnas
            let memoramaDividido = [];
            for (let i = 0; i < memorama.length; i += this.COLUMNAS) {
                memoramaDividido.push(memorama.slice(i, i + this.COLUMNAS));
            }
            // Reiniciar intentos
            this.intentos = 0;
            this.aciertos = 0;
            // Asignar a instancia de Vue para que lo dibuje
            this.memorama = memoramaDividido;
        },
        // Método que precarga las imágenes para que las mismas ya estén cargadas
        // cuando el usuario gire la tarjeta
        precargarImagenes() {
            // Mostrar la alerta
            this.reiniciarJuego()
            let total = this.imagenes.length,
            contador = 0;
            let imagenesPrecarga = Array.from(this.imagenes);
            // También vamos a precargar la "espalda" de la tarjeta
            imagenesPrecarga.push(this.NOMBRE_IMAGEN_OCULTA);
            // Cargamos cada imagen y en el evento load aumentamos el contador
            imagenesPrecarga.forEach(ruta => {
                const imagen = document.createElement("img");
                imagen.src = ruta;
                imagen.addEventListener("load", () => {
                    contador++;
                    if (contador >= total) {
                        // Si el contador >= total entonces se ha terminado la carga de todas
                        this.reiniciarJuego();
                        Swal.close();
                    }
                });
                // Agregamos la imagen y la removemos instantáneamente, así no se muestra
                // pero sí se carga
                document.body.appendChild(imagen);
                document.body.removeChild(imagen);
            });
        },
  },
   mounted() {
        this.precargarImagenes();
        this.loadStudent();
    },
};
</script>