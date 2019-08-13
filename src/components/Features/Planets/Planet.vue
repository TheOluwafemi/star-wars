<template>
  <div class="container popular-starships">
    <h2 class="heading">Popular Characters</h2>

  </div>
</template>

<script>
  export default {
    name: 'Planet',

    props: {
      
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
