<template>
  <div class="container popular-starships">
    <h2 class="heading">Popular Characters</h2>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"  v-for="(character, index) in selectedCharacters" :key="index">
        <div class="uk-card uk-card-default">
          <div class="uk-card-media-top">
              <img src="../../../assets/character-3.jpg" alt="ship image">
          </div>
          <div class="uk-card-body">
            <h4><a class="header">{{character.name}}</a></h4>
            <div class="description">
              <p>Gender: {{character.gender}}</p>
              <p>Birth Year: {{character.birth_year}}</p>
            </div>
          </div>
          <div class="uk-card-footer">
            <h6><a class="float-right">
              READ MORE
            </a></h6>
          </div>
        </div>
      </div>

    </div>
    <div class="text-center m-3">
      <router-link to="/all-characters">
        <button class="ui button">View More Characters</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PopularCharacters',

    props: {
      characters: Array,
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
      }
    },

    computed: {
      selectedCharacters() {
        return this.characters.slice(0, 4);
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
