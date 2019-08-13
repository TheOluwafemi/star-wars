<template>
  <div class="container">
    <h1 class="text-center">Popular Characters</h1>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for="(character, index) in characters" v-if="index <= 3" :key="character.name">
          <div class="uk-card uk-card-default uk-child-width-1-2@s" uk-grid>
              <div class="uk-card-media-left uk-cover-container float-left">
                  <img src="../../../assets/character-1.jpg" alt="" uk-cover>
                  <!-- <canvas width="600" height="400"></canvas> -->
              </div>
              <div class="uk-card-body float-right">
                  <h3 class="uk-card-title">Media Left</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
          </div>
      </div>
    </div>
    <div class="text-center">
      <button class="ui button">View More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularCharacters',

  props: {
    characters: Array,
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

div .uk-card {
  margin-bottom: 2em !important;
}
</style>
