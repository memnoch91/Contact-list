<template>
  <div class="edit-contact" :class="{active: hasValue}">
    <label class="edit-contact__label" for="contact-name">{{ label }}</label>
    <input
      class="input edit-contact__input"
      type="text"
      name="contact-name"
      id="contact-name"
      v-model="value"
    />
    <!-- <slot name="label"></slot>
    <slot>input here</slot>
    <slot name="button"></slot>-->
  </div>
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    dbValue: String,
    valueKey: String
  },
  data() {
    return {
      hasValue: false,
      value: "",
      label:""
    };
  },
  created() {
    this.value = this.dbValue;
    this.label = this.valueKey
  },
  methods: {
    makeActive() {
      const workingValue = this.value;
      if (workingValue) {
        return (this.hasValue = true);
      }
    },
    makeInactive() {
      const workingValue = this.value;
      if (!workingValue) {
        return (this.hasValue = false);
      }
    }
  },
  watch: {
    dbValue: function() {
      this.value = this.dbValue;
    },
    valueKey: function() {
      this.label = this.valueKey
    },
    value: function() {
      if(this.value) {
        this.hasValue = true
      } else {
        this.hasValue = false
      }
    },
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/font-colors.scss";
.edit-contact {
  position: relative;
  &__label {
    color: $vue-logo-light-accent;
    position: absolute;
    transform-origin: top left;
    transform: translate(10px, 12px) scale(1);
    transition: all 0.1s ease-in-out;
    z-index: 10;
  }
  &__input {
    height: 50px;
    border: 0;
    background: transparent;
    color: $vue-logo-green;
  }
  &__input:focus {
    -webkit-box-shadow: 0px 0px 6px 1px $vue-logo-light-accent;
    -moz-box-shadow: 0px 0px 6px 1px $vue-logo-light-accent;
    box-shadow: 0px 0px 6px 1px $vue-logo-light-accent;
  }
  &.active {
    label {
      transform: translate(10px, 1px) scale(0.75);
    }
  }
}
</style>

