<template>
  <div>
    <Header @search:webpage="searchWebpage" />

    <div class="m-3">
      <div class="ui buttons">
        <button class="ui button" @click="showAll()">All</button>
        <button class="ui button" @click="showMale()">Male</button>
        <button class="ui button" @click="showFemale()">Female</button>
        <button class="ui button" @click="showRobots()">Robots</button>
      </div>
    </div>

    <div class="container all-starships" v-if="showAllCharacters">
      <h2 class="heading">All Characters</h2>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"  v-for="(character, index) in displayedCharacters" :key="index">
          <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
              <img src="../../../assets/character-3.jpg" alt="ship image">
            </div>
            <div class="uk-card-body">
            <router-link 
              :to="{ name: 'character', 
              params: { 
                name: character.name, 
                characterDetails: {
                  name: character.name,
                  mass: character.mass,
                  gender: character.gender,
                  hair_color: character.hair_color,
                  skin_color: character.skin_color,
                  eye_color: character.eye_color,
                  birth_year: character.birth_year,
                }
              } }">
              <h4><a class="header">{{character.name}}</a></h4>
            </router-link>
              <div class="description">
                <p>Gender: {{character.gender}}</p>
                <p>Birth Year: {{character.birth_year}}</p>
              </div>
            </div>
            <div class="uk-card-footer">

            <router-link 
              :to="{ name: 'character', 
              params: { 
                name: character.name, 
                characterDetails: {
                  name: character.name,
                  mass: character.mass,
                  gender: character.gender,
                  hair_color: character.hair_color,
                  skin_color: character.skin_color,
                  eye_color: character.eye_color,
                  birth_year: character.birth_year,
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

    <div class="container all-starships" v-if="showMaleCharacters">
      <h2 class="heading">Male Characters</h2>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"  v-for="(character, index) in maleCharacters" :key="index">
          <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
              <img src="../../../assets/character-3.jpg" alt="ship image">
            </div>
            <div class="uk-card-body">
            <router-link 
              :to="{ name: 'character', 
              params: { 
                name: character.name, 
                characterDetails: {
                  name: character.name,
                  mass: character.mass,
                  gender: character.gender,
                  hair_color: character.hair_color,
                  skin_color: character.skin_color,
                  eye_color: character.eye_color,
                  birth_year: character.birth_year,
                }
              } }">
              <h4><a class="header">{{character.name}}</a></h4>
            </router-link>
              <div class="description">
                <p>Gender: {{character.gender}}</p>
                <p>Birth Year: {{character.birth_year}}</p>
              </div>
            </div>
            <div class="uk-card-footer">

            <router-link 
              :to="{ name: 'character', 
              params: { 
                name: character.name, 
                characterDetails: {
                  name: character.name,
                  mass: character.mass,
                  gender: character.gender,
                  hair_color: character.hair_color,
                  skin_color: character.skin_color,
                  eye_color: character.eye_color,
                  birth_year: character.birth_year,
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
    </div>

    <div class="container all-starships" v-if="showFemaleCharacters">
      <h2 class="heading">Female Characters</h2>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"  v-for="(character, index) in femaleCharacters" :key="index">
          <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
              <img src="../../../assets/character-3.jpg" alt="ship image">
            </div>
            <div class="uk-card-body">
            <router-link 
              :to="{ name: 'character', 
              params: { 
                name: character.name, 
                characterDetails: {
                  name: character.name,
                  mass: character.mass,
                  gender: character.gender,
                  hair_color: character.hair_color,
                  skin_color: character.skin_color,
                  eye_color: character.eye_color,
                  birth_year: character.birth_year,
                }
              } }">
              <h4><a class="header">{{character.name}}</a></h4>
            </router-link>
              <div class="description">
                <p>Gender: {{character.gender}}</p>
                <p>Birth Year: {{character.birth_year}}</p>
              </div>
            </div>
            <div class="uk-card-footer">

            <router-link 
              :to="{ name: 'character', 
              params: { 
                name: character.name, 
                characterDetails: {
                  name: character.name,
                  mass: character.mass,
                  gender: character.gender,
                  hair_color: character.hair_color,
                  skin_color: character.skin_color,
                  eye_color: character.eye_color,
                  birth_year: character.birth_year,
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

    </div>

    <div class="container all-starships" v-if="showRobotCharacters">
      <h2 class="heading">Robot Characters</h2>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"  v-for="(character, index) in robotCharacters" :key="index">
          <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
              <img src="../../../assets/character-3.jpg" alt="ship image">
            </div>
            <div class="uk-card-body">
            <router-link 
              :to="{ name: 'character', 
              params: { 
                name: character.name, 
                characterDetails: {
                  name: character.name,
                  mass: character.mass,
                  gender: character.gender,
                  hair_color: character.hair_color,
                  skin_color: character.skin_color,
                  eye_color: character.eye_color,
                  birth_year: character.birth_year,
                }
              } }">
              <h4><a class="header">{{character.name}}</a></h4>
            </router-link>
              <div class="description">
                <p>Gender: {{character.gender}}</p>
                <p>Birth Year: {{character.birth_year}}</p>
              </div>
            </div>
            <div class="uk-card-footer">

            <router-link 
              :to="{ name: 'character', 
              params: { 
                name: character.name, 
                characterDetails: {
                  name: character.name,
                  mass: character.mass,
                  gender: character.gender,
                  hair_color: character.hair_color,
                  skin_color: character.skin_color,
                  eye_color: character.eye_color,
                  birth_year: character.birth_year,
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

      </div>
    </div>



  </div>
  
</template>

<script>
import Header from '../../core/Header'

export default {
  name: 'AllCharacters',

  components: {
    Header
  },

  data() {
    return {
      characters: [],
      showAllCharacters: true,
      showMaleCharacters: false,
      showFemaleCharacters: false,
      showRobotCharacters: false,
      pageNumber: 0,
      currentPage: 1,
      perPage: 9,
      perPageOptions: [6,9],
    }
  },  

  methods: {

    async fetchAllCharacters() {
      try {
        let morePagesAvailable = true;
        let currentPage = 0;

        while(morePagesAvailable) {
          currentPage++;
          const response = await fetch(`https://swapi.co/api/people/?page=${currentPage}`)
          let { results, count } = await response.json();
          results.forEach(e => this.characters.unshift(e));
          morePagesAvailable = currentPage < 4;
        }
        return this.characters;
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
      console.log('search', search);
      this.characters = this.characters.filter(characters => characters.name.toLowerCase().includes(search.toLowerCase()))
    },

    setPage(n) {
    	this.currentPage = n;
    },

    showAll() {
      this.showAllCharacters = true;
      this.showRobotCharacters = false;
      this.showFemaleCharacters = false;
      this.showMaleCharacters = false; 
    },

    showMale() {
      this.showMaleCharacters = true;
      this.showRobotCharacters = false;
      this.showFemaleCharacters = false;
      this.showAllCharacters = false; 
    },

    showFemale() {
      this.showFemaleCharacters = true;
      this.showRobotCharacters = false;
      this.showAllCharacters = false;
      this.showMaleCharacters = false; 
    },

    showRobots() {
      this.showRobotCharacters = true;
      this.showAllCharacters = false;
      this.showFemaleCharacters = false;
      this.showMaleCharacters = false; 
    }
  },

  computed:{
  	offset() {
    	return ((this.currentPage - 1) * this.perPage);
    },

    limit() {
    	return (this.offset + this.perPage);
    },

    numOfPages() {
    	return Math.ceil(this.characters.length / this.perPage);
    },

    displayedCharacters() {
      if (this.offset > this.characters.length) {
      	this.currentPage = this.numOfPages;
      }
    	return this.characters.slice(this.offset, this.limit);
    },

    maleCharacters() {
      return this.characters.filter(character => character.gender === 'male');
    },

    femaleCharacters() {
      return this.characters.filter(character => character.gender === 'female');
    },

    robotCharacters() {
      return this.characters.filter(character => character.gender === 'n/a');
    }

  },

  beforeMount() {
    this.fetchAllCharacters();
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

.ui.button:active {
  background: darkslateblue !important;
  color: white !important;
}

.ui.button.active {
  background: darkslateblue !important;
  color: white !important;
}

</style>
