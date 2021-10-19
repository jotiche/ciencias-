<template>
  <b-container>
    <div class="container">
      <p class="tipo row justify-content-center">Ingresa el nombre del jugador</p>
      <input class="form-control input-sm" style="font-size: 20px" id="inputsm" type="text" />
      <p class="tipo row justify-content-center">Elige tu personaje favorito</p>
      <div class="crossword mt-3 ">
        <div class="card-body text-center">
          <b-row class="row justify-content-center">
            <label>
              <input type="radio" id="radio1" name="test" value="mario">
              <img src="../assets/img/mario.png">
            </label>
            <label>
            <input type="radio" id="radio1" name="test" value="goku">
              <img src="../assets/img/goku.png" >
            </label>
            <label>
                <input type="radio" id="radio1" name="test" value="pikachu">
                <img src="../assets/img/pikachu.png">
            </label>
          </b-row>
          <b-row class="row justify-content-center">
            <label>
              <input type="radio" id="radio1" name="test" value="rosa" >
              <img src="../assets/img/rosa.png" width="200" height="200" >
            </label>
            <label>
              <input type="radio" id="radio1" name="test" value="miraculos">
              <img src="../assets/img/miraculos.png"  width="200" height="200">
            </label>
            <label>
              <input type="radio" id="radio1" name="test" value="stichrosa">
              <img src="../assets/img/stichrosa.png" width="200" height="200">
            </label>
        </b-row>                
        </div>
      </div>
      <div class="row row justify-content-center">
        <div class="col-sm-5">
          <div class=" row justify-content-center mt-1">
            <router-link to="/juegos" class="quitar">
              <b-button class="BotonesSitio" v-on:click="addStudent">
                <i class="fas fa-play-circle"></i>Empezar a jugar</b-button>
          </router-link>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="row justify-content-center mt-2">
           <router-link to="/submenu" class="quitar">
              <b-button class="BotonesSitio">
                <i class="fas fa-arrow-left"></i>Regresar</b-button>          
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
  name: "Eligepersonaje",
  data() {
    return {
      selected: 'A',
        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'D', name: 'Option C', notEnabled: true },
          { item: { d: 1 }, name: 'Option D' }
        ]
    };
  },
  methods: {
    addStudent(name) {
      let inputValue = document.getElementById("inputsm").value;
      this.radioimg()
      if (inputValue == "") {
        this.$swal
          .fire({
            title: "Ingresa un nombre de jugador",
          })
          .then((result) => {
            this.$router.push("eligepersonaje");
          });
      } else {
        this.$router.push("juegos");
        localStorage.setItem("NombrePrueba", inputValue);
        localStorage.setItem("activarAhorcado", '1');
      }
    },
    radioimg(){
        var test = document.getElementsByName('test');
       //console.log('valor: '+test.value)
        var radiovalor;
       for(var i = 0;i < test.length;i++)
     {
        if(test[i].checked)
        {
        radiovalor= document.getElementById('radio1').innerHTML = test[i].value;
        }
         localStorage.setItem("Nombreimagen", radiovalor);
     }

    },
  },
  mounted() {
    //this.radioimg()
  },
};
</script>