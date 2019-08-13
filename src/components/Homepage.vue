<template>
  <div class="homepage">
    <Header @search:webpage="searchWebpage" />

    <PopularStarships :starships="starships" />
    <PopularPlanets :planets="planets" />
    <PopularCharacters :characters="characters" />

    <Footer />

  </div>
</template>

<script>

import PopularStarships from "./Features/Starships/PopularStarships";
import PopularPlanets from "./Features/Planets/PopularPlanets";
import PopularCharacters from "./Features/Characters/PopularCharacters";
import Header from '../components/core/Header'
import Footer from '../components/core/Footer'


export default {
  name: 'Homepage',
  components: {
    Header,
    Footer,
    PopularStarships,
    PopularPlanets,
    PopularCharacters
  },
  data() {
    return {
      search: '',
      starships: [],
      characters: [],
      movies: [],
      planets: []
    }
  },

  methods: {
    async getAllStarships() {
      try {
        const response = await fetch('https://swapi.co/api/starships', {
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        const data = await response.json()
        let result = [];
        result = data['results']
        this.starships = result
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    },

    async getAllMovies() {
      try {
        const response = await fetch('https://swapi.co/api/films')
        const data = await response.json()
        let result = [];
        result = data['results']
        this.movies = result
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    },

    async getAllCharacters() {
      try {
        const response = await fetch('https://swapi.co/api/people')
        const data = await response.json()
        let result = [];
        result = data['results']
        this.characters = result
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    },

    async getAllPlanets() {
      try {
        const response = await fetch('https://swapi.co/api/planets')
        const data = await response.json()
        let result = [];
        result = data['results']
        this.planets = result
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    },

    searchWebpage(search) {
      console.log('search', search);
      // this.starships = this.starships.filter(ship => ship.name.toLowerCase().includes(search.toLowerCase()))
      this.planets = this.planets.filter(planet => planet.name.toLowerCase().includes(search.toLowerCase()))
      this.characters = this.characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
    },

  },

  computed: {
    filteredStarships() {
      return this.starships.filter(ship  => {
        return ship.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      });
    }
  },

  mounted() {
    this.searchWebpage();
  },

  beforeMount() {
    this.getAllStarships();
    this.getAllMovies();
    this.getAllCharacters();
    this.getAllPlanets();
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
</style>
