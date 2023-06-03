<template>
  <div id="app">
    <nav-bar-vue 
    v-bind:Category="Category"
    v-bind:Movies="Movies"
    />
    <router-view ></router-view>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from 'vue'

import NavBarVue from './components/NavBar.vue';
export default {
  name: "#app",
  setup() {
    const Category = ref([]);
    const Movies = ref([]);
    const getAllDatas = async () => {
      try {
        const listCategory = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US"
        );
        const resMovie = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
        );
        Category.value = listCategory.data.genres;
        Movies.value = resMovie.data.results
      } catch (error) {
        console.log(error);
      }
    };
    getAllDatas();
    return {
      Category,
      Movies
    };
  },
  
  components: {
    NavBarVue,
  },
  methods: {

  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


h1, h2 {
  font-weight: normal;
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
#app {
  background: #151414;
}
</style>
