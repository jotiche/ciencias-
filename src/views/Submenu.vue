 <template>
   <div class=”container”>
     <div class=”container”>     
      <div class="row justify-content-center">
          <div>
            <h1 class="titulos">Flujo de energía en los ecosistemas</h1>
          </div>
          <img class="card-img-bottom"  width="100" height="150" src="../assets/img/floresrosas.png" />
          <div class="col-sm-4">
              <div class="card-body row justify-content-center">
                <router-link to="/video1" class="quitar">
                  <b-button class="videos">
                    Diferentes formas de alimentarse<div><i class="fas fa-caret-square-right"></i></div></b-button>
                </router-link>
              </div>
          </div>
          <div class="col-sm-5">
              <div class="card-body row justify-content-center">
                 <router-link to="/video2" class="quitar">
                <b-button class="NivelesTroficos">
                    Niveles tróficos <div><i class="fas fa-caret-square-right"></i></div></b-button>
                </router-link>
              </div>
          </div>
          <div class="container row justify-content-center">
            <h1 class="titulos mt-4">Las cadenas y redes tróficas</h1>
          </div>
          <img class="card-img-bottom" width="100" height="150" src="../assets/img/floresrosas.png" />  
          <div class="col-sm-4">
              <div class="card-body row justify-content-center">
                <router-link to="/video3" class="quitar">
                  <b-button class='videos'>  
                  Las cadenas tróficas <div><i class="fas fa-caret-square-right"></i></div></b-button>
                </router-link>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="card-body row justify-content-center">
                 <router-link to="/video4" class="quitar">
                    <b-button class='videos'>  
                    Las redes tróficas <div><i class="fas fa-caret-square-right"></i></div></b-button>
                  </router-link>
              </div>
          </div>    
          <div class="container row justify-content-center">
                <h1 class="titulos mt-4">La degradación de los hábitats</h1>
          </div>
          <img class="card-img-bottom" width="100" height="150" src="../assets/img/floresrosas.png" />
          <div class="col-sm-5">
              <div class="card-body">
                 <router-link to="/video5" class="quitar">
                    <b-button class='videos'>  
                   ¿Cuales son las causas de la degradación de un hábitat? <div><i class="fas fa-caret-square-right"></i></div></b-button>
                 </router-link>
              </div>
          </div>
          <div class="col-sm-5 ">
              <div class="card-body">
                 <router-link to="/video6" class="quitar">
                  <b-button class='efectos'>  
                    Efectos de la degradación de un hábitat<div><i class="fas fa-caret-square-right"></i></div></b-button>                 </router-link>
              </div>
          </div>
      </div>
      <div class=" row justify-content-center mt-5">
            <router-link to="/eligepersonaje" class="quitar ">
              <b-button class="BotonesSitio">
                <i class="fas fa-lightbulb"></i> Pon a prueba tus conocimientos jugando</b-button>
          </router-link>
        <div class="col-sm-5">
          <div class="card-body row justify-content-center">
           <router-link to="/" class="quitar ">
              <b-button class="BotonesSitio">
                <i class="fas fa-arrow-left"></i> Regresar</b-button>
          </router-link>
          </div>
        </div>
      </div>
   </div>
  </div>
</template>
<script>
export default {
  name: "Submenu",
};
</script>