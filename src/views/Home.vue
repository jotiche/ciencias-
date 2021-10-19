<template>
  <div class="home">
    <div class="row justify-content-center">
      <b-row>  
        <b-col>   
          <img class="mr-5 peque" src="../assets/img/fondoalas.png"/>
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col col lg="2"></b-col>
      <b-col cols="8" class="text-center mr-5 ">
         <img class="mr-2 animales" src="../assets/img/fondoalas2.png" alt="L1"/>
        <router-link to="/submenu">
          <b-button class="botones"
            >Contenido de refuerzo <br/>
            para el octavo año</b-button>
        </router-link>
             <img class="animales mt-3" src="../assets/img/fondoalas1.png" alt="L1"/>
      </b-col>
    </b-row>
    <div>
      <b-row class="mr-5">
      <b-col cols="2" class="sm-5">
        <img
          class="izquierda mt-2 "
          src="../assets/img/fondoalas3.png"
          width="1500"
          height="180"/>
      </b-col>
    </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
