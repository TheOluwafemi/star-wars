<template>
  <div class="popular-starships">
    <div class="head">
        <div class="starship-image-section">
            <div class="starship-image">
                <img src="../../../assets/planet-1.jpg" height="200" width="200" alt="starship-image">
            </div>
        </div>

        <div class="starship-name">
            <h2>{{this.$route.params.name}}</h2>
        </div>
    </div>
    <div v-if="planetDetails">
        <div class="container">
            <div class="row details">
                <div class="">
                    <div class="ui list">
                        <div class="item">
                            <i class="globe icon"></i>
                            <div class="content">
                            <a class="header">Name</a>
                            <div class="description">{{planetDetails.name}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="globe icon"></i>
                            <div class="content">
                            <a class="header">Climate</a>
                            <div class="description">{{planetDetails.climate}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="globe icon"></i>
                            <div class="content">
                            <a class="header">Population</a>
                            <div class="description">{{planetDetails.population}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="globe icon"></i>
                            <div class="content">
                            <a class="header">Terrain</a>
                            <div class="description">{{planetDetails.terrain}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="globe icon"></i>
                            <div class="content">
                            <a class="header">Orbital Period </a>
                            <div class="description">{{planetDetails.orbital_period}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="globe icon"></i>
                            <div class="content">
                            <a class="header">Gravity</a>
                            <div class="description">{{planetDetails.gravity}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="globe icon"></i>
                            <div class="content">
                            <a class="header">Surface Water</a>
                            <div class="description">{{planetDetails.surface_water}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="globe icon"></i>
                            <div class="content">
                            <a class="header">Rotation Period</a>
                            <div class="description">{{planetDetails.rotation_period}}</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Starship',

    props: {
      planetDetails: Object,
    },

    data() {
      return {
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .popular-starships {
  }

.head {
    background: url('../../../assets/hero-banner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 400px;
    position: relative;
    padding: 40px;
    color: white !important;
}

.starship-image-section{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
}

.starship-name h2 {
    color: white !important;
}

.details {
    /* text-align: center; */
    margin-top: 2em;
    padding: 1em;
}

.item {
    mrgin-top: 1em;
    margin-bottom: 1em;
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

  div .uk-card {
    margin-bottom: 2em !important;
  }
</style>
