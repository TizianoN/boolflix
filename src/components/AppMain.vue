<script>
import { store } from "../data/store";
import BaseCard from "./BaseCard.vue";
import BaseLoader from "./BaseLoader.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { BaseCard, BaseLoader },
};
</script>

<template>
  <div class="container">
    <div v-if="store.films.length">
      <h2 class="my-5">Films</h2>
      <div class="row row-cols-3 g-4">
        <BaseCard
          v-for="film in store.films"
          :title="film.title"
          :originalTitle="film.originalTitle"
          :lang="film.lang"
          :rating="film.rating"
          :poster="film.poster"
        />
      </div>
    </div>

    <div v-if="store.tvSeries.length">
      <h2 class="my-5">Serie TV</h2>
      <div class="row row-cols-3 g-3">
        <BaseCard
          v-for="tvSerie in store.tvSeries"
          :title="tvSerie.title"
          :originalTitle="tvSerie.originalTitle"
          :lang="tvSerie.lang"
          :rating="tvSerie.rating"
          :poster="tvSerie.poster"
        />
      </div>
    </div>

    <h2
      v-if="
        !store.films.length &&
        !store.tvSeries.length &&
        !store.areMoviesLoading &&
        !store.areTvSeriesLoading &&
        !store.searchedSomething
      "
      class="my-5"
    >
      Inizia la ricerca
    </h2>
    <h2
      v-if="
        !store.films.length &&
        !store.tvSeries.length &&
        !store.areTvSeriesLoading &&
        !store.areMoviesLoading &&
        store.searchedSomething
      "
      class="my-5"
    >
      Nessun risultato
    </h2>

    <BaseLoader v-if="store.areMoviesLoading || store.areTvSeriesLoading" />
  </div>
</template>

<style lang="scss" scoped></style>
