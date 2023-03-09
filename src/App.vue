<script>
import SearchBar from "./components/SearchBar.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./data/store";

export default {
  data() {
    return {
      appname: "Boolflix",
      baseUri: "https://api.themoviedb.org/3",
      apiKey: "3f1d05d0b26cf029152f557d8edb3376",
    };
  },

  components: { SearchBar, AppMain },

  methods: {
    fetchResults(term) {
      this.fetchMovies(term);
      this.fetchTVSeries(term);
      store.searchedSomething = true;
    },

    fetchMovies(query) {
      store.areMoviesLoading = true;
      store.films = [];

      axios
        .get(`${this.baseUri}/search/movie`, {
          params: {
            api_key: this.apiKey,
            query,
          },
        })
        .then((response) => {
          const films = response.data.results.map((film) => {
            return {
              title: film.title,
              originalTitle: film.original_title,
              lang: film.original_language,
              rating: Math.ceil(film.vote_average / 2),
              poster: film.poster_path,
            };
          });

          setTimeout(() => {
            store.films = films;
            store.areMoviesLoading = false;
          }, 1000);
        });
    },

    fetchTVSeries(query) {
      store.areTvSeriesLoading = true;
      store.tvSeries = [];

      axios
        .get(`${this.baseUri}/search/tv`, {
          params: {
            api_key: this.apiKey,
            query,
          },
        })
        .then((response) => {
          const tvSeries = response.data.results.map((tvSerie) => {
            return {
              title: tvSerie.name,
              originalTitle: tvSerie.original_name,
              lang: tvSerie.original_language,
              rating: Math.ceil(tvSerie.vote_average / 2),
              poster: tvSerie.poster_path,
            };
          });

          setTimeout(() => {
            store.tvSeries = tvSeries;
            store.areTvSeriesLoading = false;
          }, 1000);
        });
    },
  },
};
</script>

<template>
  <SearchBar :title="appname" @performSearch="fetchResults"></SearchBar>
  <main class="py-5">
    <AppMain></AppMain>
  </main>
</template>

<style lang="scss">
@use "./assets/scss/general.scss";
</style>
