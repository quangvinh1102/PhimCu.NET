<template>
  <div class="about">
    <movie-vue v-bind:Movies="Movies" style="width: 100%;"
        />
    <footer-vue />
  </div>
</template>

<style>
</style>
<script>
import axios from "axios";
import { ref } from 'vue';
import MovieVue from '../components/Movie.vue';
import FooterVue from '../components/Footer.vue';

export default {
  name: "#app",
  setup() {
    const Movies = ref([]);
    const getAllDatas = async () => {
      try {
        const resMovie = await axios.get(
          "https://api.themoviedb.org/3/movie/297762/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
        );
        Movies.value = resMovie.data.results;
      } catch (error) {
        console.log(error);
      }
    };
    getAllDatas();
    return {
      Movies,
    };
  },
  
  components: {
    MovieVue,
    FooterVue
  },
  methods: {

  },
}
</script>
