<template>
  <div class="container-head">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style="padding: 0"
    >
      <div class="container-fluid bg-dark">
        <a class="navbar-brand" href="#"
          ><img
            src="https://phimmoiyy.net/wp-content/uploads/2023/03/phimmoi.png"
            alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-light">Trang chủ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/phim-le" class="nav-link text-light">Phim lẻ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/phim-bo" class="nav-link text-light">Phim bộ</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Thể loại
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="Cate in Category" v-bind:key="Cate.id">
                  <router-link :to="`/Cate${Cate.id}`" class="dropdown-item" href="#">{{ Cate.name }}</router-link>
                </li>
                
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hãng phim
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li >
                  <a class="dropdown-item" href="#">Anh</a>
                </li>
                <li >
                  <a class="dropdown-item" href="#">Mỹ</a>
                </li>
                <li >
                  <a class="dropdown-item" href="#">Canada</a>
                </li>
                <li >
                  <a class="dropdown-item" href="#">Pháp</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex input-search" 
          @mouseout="enable"
          @mouseleave="disable"
          >
            <input
              class="form-control me-2 "
              type="search"
              placeholder="Nhập phim cần tìm"
              aria-label="Search"
              v-model="inputSearch"
            />
            <button class="btn btn-primary" type="submit">search</button>
            <ul class="film-search m-0 d-none" v-bind:class="{block : isActive}">
              <li class="w-100 m-0 d-none" v-for="movie in Movies" v-bind:key="movie.id" v-bind:class="{active : isActive}">
                <router-link :to="`/${movie.id}`" class="d-flex p-2 justify-content-between w-100 text-decoration-none" v-if="movie.original_title.includes(this.inputSearch)">
                  <img v-bind:src="'https://image.tmdb.org/t/p/original' +movie.poster_path" alt="" style="width: 50px; height: 50px;">
                  <p class="text-light">{{ movie.original_title }}</p>
                </router-link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
  
<script>

export default {
  name: "NavBar",
  data() {
    return {
      isActive: false,
      inputSearch: "",
    }
  },
  props: {
    Category: {type: Array},
    Movies: {type: Array},
  },
  methods: {
    enable() {
      this.isActive = true;
    },
    disable() {
      this.isActive = false;
    }
  },
};
</script>
  
<style scoped>
.active {
  display: flex !important;
}
.block {
  display: block !important;
}
.film-search {
  position: absolute;
  width: 288px;
  top: 60px;
  background-color: #212529;
  height: 334px;
  overflow: hidden;
  z-index: 1;
}
.input-search {
  position: relative;
}
.input-search:before {
  content: "";
    position: absolute;
    top: 39px;
    left: auto;
    height: 200px;
    width: 200px;
}
</style>