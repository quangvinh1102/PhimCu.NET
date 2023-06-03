<template>
  <div class="category-details">
    <section class="section-products">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8 col-lg-6">
            <div class="header">
              <h2 class="text-light">Theo Loại</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Single Product -->
          <template v-for="movie in Movies" :key="movie.id">
            <div v-if="movie.genre_ids.includes(parseInt($route.params.id))" class="col-md-6 col-lg-4 col-xl-3" >
              <div  id="product-1" class="single-product">
                <div class="part-1">
                  <img
                    v-bind:src="
                      'https://image.tmdb.org/t/p/original' + movie.poster_path
                    "
                    alt=""
                    style="height: 300px; width: 300px"
                  />
                </div>
                <div class="part-2">
                  <h3 class="product-title text-light">
                    {{ movie.original_title }}
                  </h3>
                  <h4 class="product-price text-light">
                    Lượt xem {{ movie.popularity }}
                  </h4>
                </div>
              </div>
              
            </div>
          </template>
          <!-- Single Product -->
        </div>
      </div>
    </section>
  </div>
  <footer-vue />
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import MovieVue from "../components/Movie.vue";
import FooterVue from "../components/Footer.vue";

export default {
  name: "category-details",
  data() {
    return {
      isDisable: true,
    }
  },
  setup() {
    const Movies = ref([]);
    const getAllDatas = async () => {
      try {
        const resMovie = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
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
  methods: {
    foudId(num, arr) {
        if (arr.includes(num)) {
            return 1;
        }else{
          return 0;
        }
    }
  },
  components: {
    MovieVue,
    FooterVue,
  },
};
</script>

<style scoped>
  .disabled {
    display: none;
  }
</style>