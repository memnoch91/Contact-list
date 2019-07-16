<template>
  <div v-if="isOpen" class="modal-wrapper">
    <h1>Hello World</h1>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    openModal() {
      this.isOpen = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.modal-wrapper {
  /* center modal */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /***                         ***/
  border: 1px solid turquoise;
  width: 728px;
  height: 728px;
}
</style>

