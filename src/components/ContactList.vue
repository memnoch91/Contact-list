<template>
  <section class="m-b-lg">
    <h1>{{title}}</h1>
    <div class="container contacts-list">
      <div class="columns is-multiline is-marginless">
        <div v-for="index in 7" :key="index" class="column is-half card-wrapper">
          <article class="media contact-card p-md">
            <figure class="media-left image is-64x64">
              <img
                src="https://i.imgur.com/ellhozl.jpg"
                alt="contact-image"
                class="is-rounded is-64x64 contact-image"
              />
            </figure>
            <div class="media-content credentials">
              <div class="name">
                <p>andrei tosa</p>
              </div>
              <div class="contact-details">
                <span>number | </span>
                <span>email | </span>
                <span>city</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import contacts from "../data/contacts";
import { DB } from "../services/firebase";

export default {
  name: "ContactList",
  firestore: {
    firebaseDB: DB.collection("contact-list")
  },
  data() {
    return {
      firebaseDB: [],
      title: "Contact List",
      contactsData: contacts
    };
  },
  methods: {
    deleteItem(id) {
      this.contactsData = this.contactsData.filter(
        contact => contact.id !== id
      );
    }
  },
  mounted() {
    console.log(DB.collection("contact-list"));
  }
};
</script>
<style lang="scss" scoped>
.contacts-list {
  max-width: 90%;
  border: 1px solid turquoise;
  height: 100%;
  .card-wrapper {
    display: flex;
    align-items: center;
    .contact-card {
      height: 100px;
      border: 1px solid lightgreen;
      background-color: #34495e;
      flex-basis: 100%;
      figure {
        img {
          display: block;
          max-height: 100%;
        }
      }
    }
    height: 150px;
  }
}
</style>

