<template>
  <div class="card-wrapper column is-half">
    <article class="contact-card media p-md">
      <figure class="media-left image is-64x64">
        <img
          :src="card.picUrl"
          alt="contact-image"
          class="is-rounded is-64x64 contact-image"
          @click="openCardDetails"
        />
      </figure>
      <div class="credentials media-content">
        <div class="name">
          <p>{{ card.name }}</p>
        </div>
        <div class="contact-details">
          <span>{{card.tel}}</span>
        </div>
        <nav class="nav-card level is-mobile m-t-sm">
          <div class="level-left">
            <button
              @mouseenter="favoriteHover = true"
              @mouseleave="favoriteHover = false"
              class="button is-success is-small is-rounded is-outlined level-item"
              title="favorite"
            >
              <span v-if="!favoriteHover">
                <i class="far fa-heart"></i>
              </span>
              <span v-if="favoriteHover">
                <i class="fas fa-heart"></i>
              </span>
            </button>
            <button
              class="button is-danger is-small is-rounded is-outlined level-item"
              @mouseenter="deleteHover = true"
              @mouseleave="deleteHover = false"
              title="delete"
              @click="deleteMe"
            >
              <span v-if="!deleteHover">
                <i class="far fa-minus-square"></i>
              </span>
              <span v-if="deleteHover">
                <i class="fas fa-minus-square"></i>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "ContactCard",
  props: {
    order: Number,
    card: Object,
    cardId: String
  },
  data() {
    return {
      favoriteHover: false,
      deleteHover: false
    };
  },
  methods: {
    deleteMe() {
      this.$emit("deleteMe", this.cardId);
    },
    openCardDetails() {
      this.$emit("openCardDetails", this.cardId);
    }
  }
};
</script>
<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  align-items: center;

  .contact-card {
    height: 125px;
    // border: 1px solid lightgreen;
    background-color: #34495e;
    flex-basis: 100%;
    -webkit-box-shadow: 2px 2px 5px 0px #adacb5;
    -moz-box-shadow: 2px 2px 5px 0px #adacb5;
    box-shadow: 2px 2px 5px 0px #adacb5;
    figure {
      img {
        display: block;
        max-height: 100%;
        cursor: pointer;
      }
    }
  }
  height: 150px;
}
</style>

