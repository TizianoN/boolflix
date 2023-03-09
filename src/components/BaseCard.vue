<script>
export default {
  data() {
    return {
      cast: [],
    };
  },

  props: {
    title: String,
    originalTitle: String,
    lang: String,
    rating: Number,
    poster: String,
  },

  methods: {
    getFlag(country) {
      country = country.toUpperCase();

      if (country == "EN") return "https://flagsapi.com/US/flat/64.png";
      if (country == "HY") return "https://flagsapi.com/AM/flat/64.png";
      if (country == "JA") return "https://flagsapi.com/JP/flat/64.png";
      if (country == "KO") return "https://flagsapi.com/KR/flat/64.png";

      return "https://flagsapi.com/" + country + "/flat/64.png";
    },
  },
};
</script>

<template>
  <div class="col">
    <div class="card my-fade-from-bottom">
      <div class="card-flip">
        <div class="card-front">
          <img
            class="card-img"
            :src="'https://image.tmdb.org/t/p/w342' + poster"
            alt=""
          />
        </div>
        <div class="card-back p-3">
          <h3>{{ title }}</h3>
          <h4>{{ originalTitle }}</h4>
          <img :src="getFlag(lang)" />
          <p>
            <font-awesome-icon icon="fa-solid fa-star" v-for="i in rating" />
            <font-awesome-icon
              icon="fa-regular fa-star"
              v-for="i in 5 - rating"
            />
          </p>
        </div>
      </div>
    </div>
    <!-- 
    <p>
      <img :src="'https://image.tmdb.org/t/p/w342' + poster" alt="" />
    </p> -->
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 40vw;
  background-color: #202020;
  perspective: 1000px;
  cursor: pointer;
  border-radius: 10px;

  .card-flip {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s ease-out;

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      background-color: #111;
      color: white;
      border-radius: 10px;
      overflow: hidden;
    }

    .card-front {
      .card-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .card-back {
      transform: rotateY(180deg);
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
  &:hover .card-flip {
    transform: rotateY(180deg);
  }
}
</style>
