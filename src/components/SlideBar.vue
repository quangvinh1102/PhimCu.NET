<template>
  <div id="slideBar">
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://images2.thanhnien.vn/528068263637045248/2023/4/5/poster-16806835170391695170009.jpg" class="d-block img-slide" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="text-light">Phim kinh dị hồng kông</h5>
            <p class="text-light">Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://images2.thanhnien.vn/528068263637045248/2023/4/5/poster-16806835170391695170009.jpg" class="d-block img-slide" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="text-light">Phim kinh dị hồng kông</h5>
            <p class="text-light">Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://images2.thanhnien.vn/528068263637045248/2023/4/5/poster-16806835170391695170009.jpg" class="d-block img-slide" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="text-light">Phim kinh dị hồng kông</h5>
            <p class="text-light">Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "slideBar",
  data() {
    return {};
  },
};
</script>
  
<style scoped>
.img-slide {
    width: 100%;
    height: 500px;
}
</style>