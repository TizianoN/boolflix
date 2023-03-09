import { reactive } from "vue";

export const store = reactive({
  films: [],
  tvSeries: [],
  areTvSeriesLoading: false,
  areMoviesLoading: false,
  searchedSomething: false,
});
