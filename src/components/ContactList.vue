<template>
  <section class="m-b-lg">
    <div class="contacts-list container">
      <ul class="columns is-multiline is-marginless">
        <div class="c-c-c column is-full">
          <h1 class="list-title title">{{title}}</h1>
        </div>
        <div class="c-c-c column is-full">
          <input
            type="search"
            class="findContacts input m-t-sm m-b sm"
            id="searchContacts"
            placeholder="Search contacts..."
            v-model="searchInput"
          />
        </div>
        <ContactCard
          v-for="(cardData, index) in filteredContacts"
          :cardId="cardData.id"
          :key="cardData.id"
          :order="index"
          :card="cardData"
          @deleteMe="deleteCard"
          @openCardDetails="openCardDetails"
        />
        <NoContacts v-if="noContactFound" key="NoContacts">No contact matching "{{searchInput}}"</NoContacts>
      </ul>
    </div>
    <Modal
      :currentCard="receivedCard"
      ref="modal"
    />
    <!-- :clickedCard="card[index]"  -->
  </section>
</template>
<script>
import { DB } from "../services/firebase";
import ContactCard from "./ContactCard";
import Modal from "./Modal";
import NoContacts from "./NoContacts";
export default {
  name: "ContactList",
  firestore: {
    firebaseDB: DB.collection("contact-list")
  },
  components: {
    ContactCard,
    Modal,
    NoContacts
  },
  data() {
    return {
      firebaseDB: [],
      title: "Contact List",
      searchInput: "",
      receivedCard: []
    };
  },
  methods: {
    deleteCard(id) {
      DB.collection("contact-list")
        .doc(id)
        .delete();
    },
    openCardDetails(card) {
      this.receivedCard = [...card ]  ;
      this.$refs.modal.openModal();
    }
  },
  computed: {
    filteredContacts() {
      let requestedContact = this.searchInput;
      if (!requestedContact) {
        return this.firebaseDB;
      }
      return this.firebaseDB.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(requestedContact.toLowerCase());
      });
    },
    noContactFound() {
      return this.filteredContacts.length === 0 && this.searchInput;
    }
  }
};
</script>
<style lang="scss" scoped>
/** 
delete { check }
update,
modal details & update  when you click on the details they become updatebale
filter, { check }
shadows on cards { check }
*/
.contacts-list {
  .list-title {
    color: #f4a261;
  }
  max-width: 90%;
  height: 100%;
  .c-c-c {
    //column-center-content
    display: flex;
    justify-content: center;
    input::placeholder {
      color: #414073;
    }
    .findContacts {
      max-width: 66%;
    }
  }
}
</style>

