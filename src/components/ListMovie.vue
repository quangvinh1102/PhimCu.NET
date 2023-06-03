<template>
  <div id="list-actor">
    <h1 class="text-light text-center mt-3">Danh sách các diễn viên đình đám</h1>
    <ol v-for="movie in listMovie" v-bind:key="movie.id" 
     class="list-group list-group-numbered">
      <li 
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ movie.original_title }}</div>
          <div class="d-flex">
            <img
              style="width: 150px; height: 150px"
              v-bind:src="'https://image.tmdb.org/t/p/original'+movie.poster_path"
              alt=""
            />
            <span 
              >{{ movie.overview }}</span
            >
          </div>
        </div>
        <span class="badge bg-primary rounded-pill abc">14 Tập</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "list-actor",
  props: {
    listMovie: {type: Array}
  },
};
</script>

<style>

</style>