<template>
  <div>
    <Header @search:webpage="searchWebpage" />
    <Loader v-if="loading" />

    <div class="container all-starships" v-if="!loading">
      <h2 class="heading">All Starships</h2>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"  v-for="ship in availableShips" :key="ship.name">
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
              <h6><a class="float-right">
                READ MORE
              </a></h6>              
            </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination-section">
        <ul class="uk-pagination uk-flex-right uk-text-bold">
          <li v-for="(n, index) in numOfPages" :key="index">
            <a href="" @click.prevent="setPage(n)">{{n}}</a>
          </li>
        </ul>

      </div>
    </div>
  </div>

  
</template>

<script>
import Header from '../../core/Header'
import Loader from '../../shared/Loader'

export default {
  name: 'AllStarships',

  components: {
    Header,
    Loader
  },

  data() {
    return {
      starships: [],
      pageNumber: 0,
      currentPage: 1,
      perPage: 6,
      perPageOptions: [6,9],
      loading: false
    }
  },  

  methods: {

    async fetchAllStarships() {
      try {
        let morePagesAvailable = true;
        let currentPage = 0;
        this.loading = true;

        while(morePagesAvailable) {
          currentPage++;
          const response = await fetch(`https://swapi.co/api/starships/?page=${currentPage}`)
          let { results, count } = await response.json();
          results.forEach(e => this.starships.unshift(e));
          morePagesAvailable = currentPage < 4;
        }
        this.loading = false;
        return this.starships;
      } catch (error) {
          console.error(error)
      }
    },

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

    searchWebpage(search) {
      this.starships = this.starships.filter(ship => ship.name.toLowerCase().includes(search.toLowerCase()))
    },

    setPage(n) {
    	this.currentPage = n;
    },
  },

  computed:{
  	offset() {
    	return ((this.currentPage - 1) * this.perPage);
    },

    limit() {
    	return (this.offset + this.perPage);
    },

    numOfPages() {
    	return Math.ceil(this.starships.length / this.perPage);
    },

    availableShips() {
      if (this.offset > this.starships.length) {
      	this.currentPage = this.numOfPages;
      }
    	return this.starships.slice(this.offset, this.limit);
    }

  },

  beforeMount() {
    this.fetchAllStarships();
  }


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

.all-starships {
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

.header {
  font-size: 16pt;
  font-weight: 700;
  color: darkslateblue !important;
}

div .uk-card {
  margin-bottom: 2em !important;
}

.pagination-section {
  float: right;
}
</style>
