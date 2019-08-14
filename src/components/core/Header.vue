<template>
  <div class="header">
      <div class='logo-area'>
        <router-link to="/Homepage">
        <img src="../../assets/logo.png" alt="star wars logo">
        </router-link>
          
      </div>

      <div class="header-center">
        <div class="sub-heading">
            <div class="sub-heading-content">
                <img src="../../assets/logo.png" height="40" width="70" alt="star wars logo">
                <span><h3>Directory</h3></span>
            </div>
            <div class="sub-heading-desc">
                <p class="text-white">Find your favorite Characters, Films, Species, Starships and Planets</p>
            </div>
            <div class="search">
                <div class="ui left icon input">
                    <i class="search icon"></i>
                    <input 
                        type="text" name="search" 
                        placeholder="search"
                        v-model="search" @keyup="sendSearchValue"
                    >
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return{
        search : ''
    } 
  },

  methods: {
    sendSearchValue() {
    this.$emit('search:webpage', this.search)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        background: white;
        background-image: url('../../assets/hero-banner.jpg');
        height: auto;
        /* width: 100%; */
        padding: 20px;
    }

    .logo-area {
        /* float: left; */
    }

    .logo-area img {
        height: 35px;
        width: 80px;
    }

    .header-center {
        text-align: center;
    }

    .sub-heading-content {
        text-align: center;
        /* border-bottom: 2px solid white; */
        max-width: 250px;
        margin-left: auto;
        margin-right: auto;
    }

    .sub-heading-content::after {
        content: '';
        height: 5px;
        width: 100%;
        background: white;
        position: absolute;
        left: calc(55% - 10%);
        bottom: -12px;
    }


    .sub-heading img {
        /* float: left; */
        display: inline-block;
        vertical-align: middle;
    }

    .sub-heading span h3 {
        /* float: right; */
        display: inline-block;
        vertical-align: middle;
        margin-left: 1em;
        color: white;
        /* font-display: Poppins, Sans-serif; */
    }

</style>
