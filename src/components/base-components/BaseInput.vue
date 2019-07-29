<template>
  <div class="edit-contact" :class="{active: hasValue}">
    <label class="edit-contact__label" for="contact-name">{{ label }}</label>
    <input
      class="input edit-contact__input"
      type="text"
      name="contact-name"
      id="contact-name"
      v-model="value"
      @blur="sendNewContactData"
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
    valueKey: String,
    dbValue: String
  },
  data() {
    return {
      hasValue: false,
      value: "",
      label: ""
    };
  },
  created() {
    this.value = this.dbValue;
    this.label = this.valueKey;
  },
  methods: {
    sendNewContactData() {
      const userInputNewValues = {
        changedField: this.label,
        newValue: this.value
      };
      if (this.value === this.dbValue) {
        return "";
      }
      this.$emit("newContactData", userInputNewValues);
    }
  },
  watch: {
    valueKey: function() {
      this.label = this.valueKey;
    },
    dbValue: function() {
      this.value = this.dbValue;
    },
    value: function() {
      if (this.value) {
        this.hasValue = true;
      } else {
        this.hasValue = false;
      }
    }
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

