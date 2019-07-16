<template>
    <div class="message-wrap column is-full">
        <div class="message p-sm">
            <slot></slot>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'NoContacts'
  }
</script>
<style lang="scss" scoped>
@import "../styles/font-colors.scss";
    .message-wrap {
        display: flex;
        justify-content: center;
        .message{
            width: 66%;
            border-radius: 6px;
            color: $vue-logo-green;
        }
    }
</style>
