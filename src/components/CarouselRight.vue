<template>
  <div id="carousel">
    <div id="robotcarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#robotcarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#robotcarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://statics.vincom.com.vn/xu-huong/anh-revamp/thumb_1_.jpg"
            alt="swamp"
          />
        </div>
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://i.vietgiaitri.com/2022/12/15/top-28-phim-chieu-rap-moi-va-hay-nhat-moi-thoi-dai-e8031-6796455_default.webp"
            alt="flight"
          />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#robotcarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#robotcarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>