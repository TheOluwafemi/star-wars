<template>
  <div class="container popular-starships">
    <h2 class="heading">Popular Starships</h2>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"  v-for="ship in selectedStarship" :key="ship.name">
        <div class="uk-card uk-card-default uk-animation-slide-bottom-small">
          <div class="uk-card-media-top">
              <img src="../../../assets/starship-1.jpg" alt="ship image">
          </div>
          <div class="uk-card-body">
            <router-link 
              :to="{ name: 'starship', 
              params: { 
                name: ship.name, 
                starshipDetails: {
                  name: ship.name,
                  model: ship.model,
                  manufacturer: ship.manufacturer,
                  cost_in_credits: ship.cost_in_credits,
                  length: ship.length,
                  max_atmosphering_speed: ship.max_atmosphering_speed,
                  crew: ship.crew,
                  passengers: ship.passengers,
                  cargo_capacity: ship.cargo_capacity,
                  consumables: ship.consumables,
                  hyperdrive_rating: ship.hyperdrive_rating,
                  MGLT: ship.MGLT,
                  starship_class: ship.starship_class
                }
              } }">
              <h4><a class="header">{{ship.name}}</a></h4>
            </router-link>
            <div class="description">
              <p>Model: {{ship.model}}</p>
              <p>Capacity: {{ship.cargo_capacity}}</p>
            </div>
          </div>
          <div class="uk-card-footer">
            <router-link 
              :to="{ name: 'starship', 
              params: { 
                name: ship.name, 
                starshipDetails: {
                  name: ship.name,
                  model: ship.model,
                  manufacturer: ship.manufacturer,
                  cost_in_credits: ship.cost_in_credits,
                  length: ship.length,
                  max_atmosphering_speed: ship.max_atmosphering_speed,
                  crew: ship.crew,
                  passengers: ship.passengers,
                  cargo_capacity: ship.cargo_capacity,
                  consumables: ship.consumables,
                  hyperdrive_rating: ship.hyperdrive_rating,
                  MGLT: ship.MGLT,
                  starship_class: ship.starship_class
                }
              } }">
              <h6>
                <a class="float-right">
                  READ MORE
                </a>
              </h6>
            </router-link>

          </div>
        </div>
      </div>

    </div>
    <div class="text-center m-3">
      <router-link to="/all-starships">
        <button class="ui button">View More</button>
      </router-link>
     
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PopularStarships',

    props: {
      starships: Array,
    },

    data() {
      return {
        pics: ['starship-1', 'starship-2', 'starship-3', 'starship-4', 'starship-5', 'starship-6'],
        limit: 5,
      }
    },

    methods: {
      getPic(index) {
        return './images/' + this.pics[index] + '.jpg';
      },

      getImagePath() {
        let i;
        pics: ['starship-1', 'starship-2', 'starship-3', 'starship-4', 'starship-5', 'starship-6'];
        for (i = 0; i < pics.length; i++) {
          return './images/' + pics[i] + '.jpg';
        }
      },
      gotoStarship(shipName) {
        this.$router.push({name:'starship', params: {name: shipName}})
      }
    },

    computed: {
      selectedStarship() {
        return this.starships.slice(0, 6);
      }
    },

    mounted() {
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .popular-starships {
    margin-top: 2em;
    padding: 10px;
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

.header {
  font-size: 16pt;
  font-weight: 700;
  color: darkslateblue !important;
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
