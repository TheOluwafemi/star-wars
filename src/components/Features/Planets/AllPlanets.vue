<template>
  <div>
    <Header @search:webpage="searchWebpage" />
    <div class="container all-starships">
      <h2 class="heading">All Planets</h2>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"  v-for="(planet, index) in displayedPlanets" :key="index">
          <div class="uk-card uk-card-default uk-animation-slide-bottom-small">
            <div class="uk-card-media-top">
              <img src="../../../assets/planet-1.jpg" alt="ship image">
            </div>
            <div class="uk-card-body">
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
                <h5><a class="header">{{planet.name}}</a></h5>
              </router-link>  
              <div class="description">
                <p>Climate: {{planet.climate}}</p>
                <p>Population: {{planet.population}}</p>
              </div>
            </div>
            <div class="uk-card-footer">
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
          <li v-for="n in numOfPages">
            <a href="" @click.prevent="setPage(n)">{{n}}</a>
          </li>
        </ul>

      </div>
    </div>
  </div>

  
</template>

<script>
import Header from '../../core/Header'

export default {
  name: 'AllPlanets',

  components: {
    Header
  },

  data() {
    return {
      planets: [],
      pageNumber: 0,
      currentPage: 1,
      perPage: 6,
      perPageOptions: [6,9],
    }
  },  

  methods: {

    async fetchAllPlanets() {
      try {
        let morePagesAvailable = true;
        let currentPage = 0;

        while(morePagesAvailable) {
          currentPage++;
          const response = await fetch(`https://swapi.co/api/planets/?page=${currentPage}`)
          let { results, count } = await response.json();
          results.forEach(e => this.planets.unshift(e));
          morePagesAvailable = currentPage < 4;
        }
        return this.planets;
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
    	return Math.ceil(this.planets.length / this.perPage);
    },

    displayedPlanets() {
      if (this.offset > this.planets.length) {
      	this.currentPage = this.numOfPages;
      }
    	return this.planets.slice(this.offset, this.limit);
    }

  },

  beforeMount() {
    this.fetchAllPlanets();
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
    width: 5%;
    background: #5b5150;
    position: absolute;
    left: calc(57% - 10%);
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
