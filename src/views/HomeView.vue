<script setup lang="ts">
</script>

<template>
  <main>
    <div style="display: flex; width: 100%;">
      <div style="width: 70%;">
        <slide-bar-vue />
        <movie-vue v-bind:Movies="Movies"
        />
        <movie-coming-vue v-bind:ListComming="ListComming"
        />
      </div>
      <div style="width: 30%;">
        <right-bar-vue />
        <carousel-right-vue />
        <list-movie-vue v-bind:listMovie="listMovie"
        />
      </div>
    </div>
    <footer-vue />
  </main>
</template>
<script>
import axios from "axios";
import { ref } from 'vue';

import CarouselRightVue from '../components/CarouselRight.vue';
import NavBarVue from '../components/NavBar.vue';
import RightBarVue from '../components/RightBar.vue';
import SlideBarVue from '../components/SlideBar.vue';
import MovieVue from '../components/Movie.vue';
import ListMovieVue from '../components/ListMovie.vue';
import FooterVue from '../components/Footer.vue';
import MovieComingVue from '../components/MovieComing.vue';
export default {
  name: "#app",
  setup() {
    const listMovie = ref([]);
    const Movies = ref([]);
    const ListComming = ref([]);
    const getAllDatas = async () => {
      try {
        const resList = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
        );
        const resMovie = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
        );
        const comming = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
        );
        listMovie.value = resList.data.results;
        Movies.value = resMovie.data.results;
        ListComming.value = comming.data.results;
      } catch (error) {
        console.log(error);
      }
    };
    getAllDatas();
    return {
      listMovie,
      Movies,
      ListComming,
    };
  },
  
  components: {
    NavBarVue,
    SlideBarVue,
    RightBarVue,
    CarouselRightVue,
    MovieVue,
    ListMovieVue,
    FooterVue,
    MovieComingVue,
  },
  methods: {

  },
}
</script>

