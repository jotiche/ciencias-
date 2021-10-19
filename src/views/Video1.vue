<template>
  <div class="card" >
    <div class="card-header">
      <h5 class="card-title TitulosVideos">Diferentes formas de alimentarse</h5>
    </div>
    <div class="card-body ">
    <b-embed aspect="16by9" src="https://www.youtube.com/embed/G-FdCOg5LX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></b-embed>
    </div>
        <div class="col-sm-2">
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