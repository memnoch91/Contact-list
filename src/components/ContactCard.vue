<template>
  <li class="card-wrapper column is-half">
    <div class="contact-card media p-md" @click="openCardDetails(card, card.id)">
      <figure class="media-left image is-64x64">
        <img :src="card.picUrl" alt="contact-image" class="is-rounded is-64x64 contact-image" />
      </figure>
      <div class="credentials media-content">
        <h2 class="name">{{ card.name }}</h2>
        <div class="contact-details">
          <span>{{card.tel}}</span>
        </div>
        <nav class="nav-card is-mobile m-t-sm">
          <div class="button-wrapper are-normal">
            <button
              @mouseenter="favoriteHover = true"
              @mouseleave="favoriteHover = false"
              class="button is-success is-rounded is-outlined is-favorite m-l-sm m-r-sm"
              title="favorite"
            >
              <span class="fas fa-heart "></span>
              <span class="far fa-heart "></span>

            </button>
            <button
              class="button is-danger  is-rounded is-outlined is-delete"
              @mouseenter="deleteHover = true"
              @mouseleave="deleteHover = false"
              title="delete"
              @click.stop.prevent="deleteMe"
            >
              <span class="far fa-trash-alt"></span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </li>
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
      // event.stopPropagation();
      // event.preventDefault();
      this.$emit("deleteMe", this.cardId);
      // return
    },
    openCardDetails(card, id) {
      const inputs = [card, id];

      this.$emit("openCardDetails", inputs);
    }
  }
};
</script>
<style lang="scss" scoped>
.card-wrapper {
  height: 150px;
  display: flex;
  align-items: center;
  list-style: none;

  .contact-card {
    cursor: pointer;
    height: 125px;
    background-color: #222222 ;
    flex-basis: 100%;
    -webkit-box-shadow: 0px 0px 5px 0px #adacb5;
    -moz-box-shadow: 0px 0px 5px 0px #adacb5;
    box-shadow: 0px 0px 5px 0px #adacb5;
    .button-wrapper {
      display: flex;
      justify-content: flex-end;
      .is-favorite {
        .far {
          display: inline-block;
        }
        .fas {
          display: none;
        }
        &:hover {
          .far {
            display: none;
          }
          .fas {
            display: inline-block;
          }
        }
      }
    }

    figure {
      img {
        display: block;
        max-height: 100%;
        cursor: pointer;
      }
    }
    .credentials {
      nav {
        z-index: 10px;
      }
    }
  }
  .contact-card:hover {
    -webkit-box-shadow: 0px 0px 4px 4px #7eb170;
    -moz-box-shadow: 0px 0px 4px 4px #7eb170;
    box-shadow: 0px 0px 4px 4px #7eb170;
  }
}
</style>

