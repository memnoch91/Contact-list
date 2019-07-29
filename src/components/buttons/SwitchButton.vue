<template>
  <label class="tgl-container">
    <input class="tgl" type="checkbox" name="tgl-dark" @change="toggleDarkMode" />
    <span class="tgl-dark__custom round"></span>
  </label>
</template>

<script>
export default {
  name: "ToggleButton",
  methods: {
    toggleDarkMode() {
      this.$emit("is-editable", event.target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/font-colors.scss";
.tgl-container {
  position: relative;
  display: inline-block;
  content: "";
  width: 2.25em;
  height: 1.375em;
  font-size: 17px;  
  .tgl {
    position: absolute;
    top: 3px;
    opacity: 0;
    margin: 0;
    width: 2.25em;
    height: 1em;
  }

  .tgl-dark__custom {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #cccccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}

.tgl-dark__custom:before {
  position: absolute;
  content: "";
  height: 0.875em;
  width: 0.875em;
  left: 2px;
  bottom: 2px;
  background-color: #ffffff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.tgl:checked + .tgl-dark__custom {
  background-color:  $vue-logo-green;
}

.tgl:checked + .tgl-dark__custom:before {
  -webkit-transform: translateX(0.875em);
  -ms-transform: translateX(0.875em);
  transform: translateX(0.875em);
}

.tgl-dark__custom.round {
  border-radius: 1.5em;
  border: 2px solid $vue-logo-light-accent;
}

.tgl-dark__custom.round:before {
  border-radius: 50%;
}
</style>
