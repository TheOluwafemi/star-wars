<template>
  <div class="character">
    <div class="head">
        <div class="character-image-section">
            <div class="character-image">
                <img src="../../../assets/character-1.jpg" height="200" width="200" alt="character-image">
            </div>
        </div>

        <div class="character-name">
            <h2>{{this.$route.params.name}}</h2>
        </div>
    </div>

    <ul class="uk-breadcrumb m-3">
      <li><router-link to="/Homepage">Home</router-link></li>
      <li><router-link to="/all-characters">all characters</router-link></li>
      <li class="uk-disabled">character details</li>
    </ul>

    <div v-if="characterDetails">
        <div class="container">
            <div class="row details">
                <div class="">
                    <div class="ui list">
                        <div class="item">
                            <i class="user icon"></i>
                            <div class="content">
                            <a class="header">Name</a>
                            <div class="description">{{characterDetails.name}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="user icon"></i>
                            <div class="content">
                            <a class="header">Gender</a>
                            <div class="description">{{characterDetails.gender}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="user icon"></i>
                            <div class="content">
                            <a class="header">Mass</a>
                            <div class="description">{{characterDetails.mass}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="user icon"></i>
                            <div class="content">
                            <a class="header">Height</a>
                            <div class="description">{{characterDetails.height}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="user icon"></i>
                            <div class="content">
                            <a class="header">Hair Color </a>
                            <div class="description">{{characterDetails.hair_color}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="user icon"></i>
                            <div class="content">
                            <a class="header">Skin Color</a>
                            <div class="description">{{characterDetails.skin_color}}</div>
                            </div>
                        </div>

                        <div class="item">
                            <i class="user icon"></i>
                            <div class="content">
                            <a class="header">Birth Year </a>
                            <div class="description">{{characterDetails.birth_year}}</div>
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
      characterDetails: Object,
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

.character-image-section{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
}

.character-name h2 {
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
