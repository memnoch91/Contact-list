<template>
  <div class="contact-detail columns is-multiline is-marginless">

  </div>
</template>
<script>
export default {
  name: "BaseInfoDisplay",
  props: {},
  methods: {
    editMe() {
      this.$emit("editField", true);
    }
  }
};
</script>
<style lang="scss" scoped>
.contact-detail {
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
}
</style>

