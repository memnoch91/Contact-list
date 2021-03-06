<template>
  <div
    class="modal"
    :class="isOpen ? 'is-active': ''"
    v-if="currentCard && currentCard.length"
    tabindex="0"
    v-bind:aria-hidden="isOpen ? 'false' : 'true'"
  >
    <div class="modal-background" @click="closeModal"></div>
    <form class="modal-content">
      <ul class="columns is-multiline is-marginless">
        <li class="column is-full flex-row-justify-center">
          <figure class="image is-128x128">
            <img
              class="is-rounded is-128x128 contact-image"
              :src="currentCard[0].picUrl"
              :alt="currentCard[0].name"
            />
          </figure>
        </li>
        <li
          class="column is-half-desktop is-full-tablet is-full-mobile"
          v-for="(value, name, index) in displayObjectFilter"
          :key="index"
        >
          <BaseInput :dbValue="value" :valueKey="name" @newContactData="receiveNewContactData" />
        </li>
        <li class="column is-full flex-row-justify-center">
          <button
            class="button is-primary is-normal"
            :disabled="canSave"
            @click.prevent="updateModal"
          >Save</button>
        </li>
      </ul>
    </form>
    <button class="modal-close is-large" aria-label="close" @click="closeModal">x</button>
  </div>
</template>
<script>
import { DB } from "../services/firebase";
import BaseInput from "./base-components/BaseInput";
// import BaseInfoDisplay from "./base-components/BaseInfoDisplay";
import { undefinedUser } from "@/services/defaultValues";
export default {
  name: "Modal",
  props: {
    currentCard: {
      type: Array,
      default: function() {
        return [undefinedUser, "with undefined ID"];
      }
    }
  },
  components: {
    BaseInput
    // BaseInfoDisplay
  },
  data() {
    return {
      isOpen: false,
      editedContact: "",
      infoMessage: ""
    };
  },

  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
      this.editedContact = "";
    },
    receiveNewContactData(payload) {
      if(!payload) {
        return this.editedContact = ""
      }
      const existingContact = { ...this.currentCard[0] };
      const editedField = payload.changedField;
      const editedValue = payload.newValue;
      existingContact[editedField] = editedValue;
      this.editedContact = existingContact;
    },
    updateModal() {
      const displayedContactId = this.currentCard[1];
      DB.collection("contact-list")
        .doc(displayedContactId)
        .set(this.editedContact)
        .then( res =>  {
          this.infoMessage = "Contact updated";
          console.log(res)
        })
        .catch(err => {
          this.infoMessage = "Error while updating contact please try again";
          console.error(err)
        })
    }
  },
  computed: {
    displayObjectFilter() {
      const tempCard = { ...this.currentCard[0] };
      if (!tempCard) {
        return undefinedUser;
      }

      function localizeDate(date, localeString) {
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        };
        return date.toLocaleDateString(localeString, options);
      }
      Object.keys(tempCard).forEach(key => {
        if (key === "createdAt") {
          let formatedDate = tempCard[key].toDate();
          formatedDate = localizeDate(formatedDate, "en-Eu");
          tempCard[key] = formatedDate;
        }
      });
      return tempCard;
    },
    canSave() {
      return this.editedContact ? false : true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/util-classes.scss";
@import "../styles/font-colors.scss";
.modal-content {
  border: 1px solid greenyellow;
  .full_wrapper {
    &__image {
      .square {
        height: 125px;
        width: 125px;
        img {
          border-top-left-radius: 50% 50%;
          border-top-right-radius: 50% 50%;
          border-bottom-right-radius: 50% 50%;
          border-bottom-left-radius: 50% 50%;
          height: auto;
          width: 100%;
        }
      }
    }
  }
  .switch-label {
    &__left {
      display: flex;
      flex-flow: row;
      justify-content: flex-end;
      p {
        .light-on {
          color: inherit;
          font-weight: 600;
        }
        .light-off {
          color: $night-mode-font-secondary;
          font-weight: 400;
        }
      }
    }
    &__right {
      p {
        .light-on {
          color: inherit;
          font-weight: 600;
        }
        .light-off {
          color: $night-mode-font-secondary;
          font-weight: 400;
        }
      }
    }
  }
  .info-wrapper {
    display: flex;
    h3 {
      flex-basis: 33%;
      font-size: 1.1rem;
    }

    // p {
    //   margin-left: 15px;
    // }
  }
  // .component-fade {
  //   &-enter-active,
  //   &-leave-active {
  //     transition: opacity 0.3s ease;
  //   }
  //   &-fade-enter,
  //   &-fade-leave-to {
  //     opacity: 0;
  //   }
  // }
}
</style>

