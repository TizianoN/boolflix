<script>
export default {
  data() {
    return {
      title: "Loader",
    };
  },
};
</script>

<template>
  <div class="overlay">
    <div class="my-fade-from-bottom">
      <font-awesome-icon icon="fa-solid fa-star" class="fa-beat fa-4x" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
