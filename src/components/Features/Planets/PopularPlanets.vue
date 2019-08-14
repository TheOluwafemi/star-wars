<template>
    <div class="container popular-planets">
      <h2 class="heading">Popular Planets</h2>

      <div uk-slider="center: true">

          <div class="uk-position-relative uk-visible-toggle uk-dark" tabindex="-1">

              <ul class="uk-slider-items uk-child-width-1-3@s">
                  <li v-for="planet in threePopularPlanets" :key="planet.name">
                      <img src="../../../assets/planet-1.jpg" alt="">
                      <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                      <router-link 
                        :to="{ name: 'planet', 
                        params: { 
                          name: planet.name, 
                          planetDetails: {
                            name: planet.name,
                            rotation_period: planet.rotation_period,
                            climate: planet.climate,
                            orbital_period: planet.orbital_period,
                            gravity: planet.gravity,
                            terrain: planet.terrain,
                            surface_water: planet.surface_water,
                            population: planet.population
                          }
                        } }">
                        <h5><a class="header text-center">{{planet.name}}</a></h5>
                      </router-link>                        
                      </div>
                  </li>
              </ul>

              <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
              <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
              <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

          </div>


      </div>

      <div class="text-center m-3">
        <router-link to="/all-planets">
          <button class="ui button">View More Planets</button>
        </router-link>
      </div>

    </div>
</template>

<script>
export default {
  name: 'PopularPlanets',

  props: {
    planets: Array,
  },

  computed: {
    threePopularPlanets() {
      return this.planets.slice(0, 6);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popular-planets{
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.heading {
  text-align: center;
  position: relative;
  margin-top: 1.5em;
  margin-bottom: 2em;
}
.heading::after {
  content: '';
  height: 5px;
  width: 10%;
  background: #5b5150;
  position: absolute;
  left: calc(55% - 10%);
  bottom: -12px;
}

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

div .card {
  margin-bottom: 2em !important;
}
</style>
