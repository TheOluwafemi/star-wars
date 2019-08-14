<template>
  <div class="homepage">


    <div v-if="!loading">
      <Header @search:webpage="searchWebpage" />

      <PopularStarships :starships="starships" />
      <PopularPlanets :planets="planets" />
      <PopularCharacters :characters="characters" />

      <Footer />

    </div>

   <Loader v-if="loading" />

  </div>
</template>

<script>

import PopularStarships from "./Features/Starships/PopularStarships";
import PopularPlanets from "./Features/Planets/PopularPlanets";
import PopularCharacters from "./Features/Characters/PopularCharacters";
import Header from '../components/core/Header'
import Footer from '../components/core/Footer'
import Loader from './shared/Loader'

export default {
  name: 'Homepage',
  components: {
    Header,
    Footer,
    Loader,
    PopularStarships,
    PopularPlanets,
    PopularCharacters
  },
  data() {
    return {
      search: '',
      starships: [],
      filteredStarships: [],
      tempStarships: [],
      filteredPlanets: [],
      tempPlanets: [],
      filteredCharacters: [],
      tempCharacters: [],
      characters: [],
      planets: [],
      loading: false
    }
  },

  methods: {
    async getAllStarships() {
      try {
        this.loading = true;
        const response = await fetch('https://swapi.co/api/starships', {
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        const data = await response.json()
        this.loading = false
        let result = [];
        result = data['results']
        this.starships = result
        this.tempStarships = result;
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
        this.tempCharacters = result
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
        this.tempPlanets = result
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    },

    searchWebpage(search) {
      if (search == undefined || search == '') {
        this.starships = JSON.parse(JSON.stringify(this.tempStarships));
        this.planets = JSON.parse(JSON.stringify(this.tempPlanets))
        this.characters = JSON.parse(JSON.stringify(this.tempCharacters));
      } else {
        // filter starships
        let filteredStarships = this.starships.filter(ship=> ship.name.toLowerCase().includes(search.toLowerCase()));
        this.starships = filteredStarships;

        // filter planets 
        let filteredPlanets = this.planets.filter(planet => planet.name.toLowerCase().includes(search.toLowerCase()))
        this.planets = filteredPlanets;

        // filter characters
        let fliteredCharacters = this.characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))  
        this.characters = filteredCharacters;
      }

    },

  },


  beforeMount() {
    this.getAllStarships();
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
