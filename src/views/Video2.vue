<template>
  <div class="crossword mt-5 card" >
    <div class="card-header ">
      <h5 class="card-title TitulosVideos">Niveles tróficos </h5>
    </div>
    <div class="card-body">
    <b-embed width="1080" height="720" src="https://www.youtube.com/embed/dmdgMsbtkL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></b-embed>
    </div>
          <div class="col-sm-4">
          <div class="card-body">
           <router-link to="/submenu" class="quitar">
              <b-button class="BotonesSitio">
                <i class="fas fa-arrow-left"></i>Regresar</b-button>          
            </router-link>
          </div>
          </div>
        </div>
</template>
<script>
export default {
  name: "Crossword"
};
</script>