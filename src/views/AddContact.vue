<template>
  <section class="m-b-lg">
    <div class="container add-contact__wrapper">
      <h1 class="m-t-sm m-b-sm">Add new contact</h1>
      <form v-on:submit.prevent="addContact">
        <div class="columns is-multiline ismarginless">
          <div class="column form-division is-half">
            <h3 class="m-t-sm m-b-sm">Personal Data</h3>
            <div class="field">
              <label class="label">Picture Url</label>
              <div class="control">
                <input class="input" type="text" placeholder="Pic Url" v-model="newContact.picUrl" />
              </div>
            </div>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Enter Name" v-model="newContact.name" />
              </div>
            </div>
          </div>
          <div class="column form-division is-half">
            <h3 class="m-t-sm m-b-sm">Contact Data</h3>
            <div class="field">
              <label class="label">Country</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Country of origin"
                  v-model="newContact.country"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">City</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Residence City"
                  v-model="newContact.city"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Street</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Residence street"
                  v-model="newContact.street"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Street No.</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Residence street number"
                  v-model="newContact.streetNo"
                />
              </div>
            </div>
          </div>
        </div>
        <button class="button" type="submit">baga mare</button>
      </form>
    </div>
  </section>
</template>
<script>
import contacts from "../data/contacts";

import { DB } from "../services/firebase";

export default {
  name: "AddContact",
  firestore: {
    firebaseDB: DB.collection("contact-list")
  },
  data() {
    return {
      firebaseDB: [],
      cData: contacts,
      newContact: {
        age: "",
        birthDate: "",
        city: "",
        country: "",
        createdAt: "",
        email: "",
        name: "",
        picUrl: "",
        street: "",
        streetNo: "",
        tel: ""
      }
    };
  },
  methods: {
    addContact() {
      this.cData.push(this.newContact);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/font-colors.scss";

.add-contact__wrapper {
  max-width: 90%;
  border: 1px solid turquoise;
  height: 100%;
  h1 {
    text-align: center;
  }
  .label {
    color: $form-label-primary;
  }
  h3 {
    
    color: $headings-color-primary;
    text-align: center;
  }
}
</style>


