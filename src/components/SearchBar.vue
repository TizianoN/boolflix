<script>
export default {
  data() {
    return {
      term: "",
    };
  },

  props: {
    title: String,
  },

  emits: ["performSearch"],
};
</script>

<template>
  <nav class="navbar navbar-dark">
    <div class="container">
      <a class="navbar-brand">{{ title }}</a>
      <form
        class="d-flex"
        role="search"
        @submit.prevent="$emit('performSearch', term)"
      >
        <input
          v-model="term"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.navbar {
  &.navbar-dark {
    background-color: #202020;
  }
  .navbar-brand {
    color: $primary-color;
    cursor: pointer;
    font-size: 2.5rem;
    text-transform: uppercase;

    &:hover {
      color: $primary-color;
    }
  }

  .btn.btn-primary {
    background-color: $primary-color;
    border-color: $primary-color;
    color: white;
  }
}
</style>
