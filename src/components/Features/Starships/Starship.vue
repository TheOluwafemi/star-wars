<template>
  <div class="popular-starships">
    <div class="head">
        <div class="starship-image-section">
            <div class="starship-image">
                <img src="../../../assets/starship-1.jpg" height="300" width="300" alt="starship-image">
            </div>
        </div>

        <div class="starship-name">
            <h2>{{this.$route.params.name}}</h2>
        </div>
    </div>
    <div v-if="starshipDetails">
        <div class="container">
            <div class="row details">
                <div class="">
                    <div class="ui list">
                        <div class="item">
                            <i class="map fighter jet icon"></i>
                            <div class="content">
                            <a class="header">Ship Name</a>
                            <div class="description">{{starshipDetails.name}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="map fighter jet icon"></i>
                            <div class="content">
                            <a class="header">Ship Model</a>
                            <div class="description">{{starshipDetails.model}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="map fighter jet icon"></i>
                            <div class="content">
                            <a class="header">Ship Officers</a>
                            <div class="description">{{starshipDetails.crew}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="map fighter jet icon"></i>
                            <div class="content">
                            <a class="header">Ship Passengers</a>
                            <div class="description">{{starshipDetails.passengers}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="map fighter jet icon"></i>
                            <div class="content">
                            <a class="header">Ship Manufacturer</a>
                            <div class="description">{{starshipDetails.manufacturer}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="map fighter jet icon"></i>
                            <div class="content">
                            <a class="header">Ship Cost</a>
                            <div class="description">{{starshipDetails.cost_in_credits}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="map fighter jet icon"></i>
                            <div class="content">
                            <a class="header">Ship Length</a>
                            <div class="description">{{starshipDetails.length}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="map fighter jet icon"></i>
                            <div class="content">
                            <a class="header">Ship Consumables</a>
                            <div class="description">{{starshipDetails.consumables}}</div>
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
      starshipDetails: Object,
    },

    data() {
      return {
      }
    },

    mounted() {
        console.log('details', this.starshipDetails)
    }

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
