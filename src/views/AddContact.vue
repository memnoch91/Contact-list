<template>
  <div class="about">
    <h1>Add new contact</h1>
    <form v-on:submit.prevent="addContact" class="container">
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
      <button class="button" type="submit">
        baga mare
      </button>
    </form>
  </div>
</template>
<script>
import contacts from "../data/contacts";

import { DB } from "../services/firebase"

export default {
  name: "AddContact",
  firebase: {
    firebaseDB: DB.collection("contact-list")
  },
  data() {
    return {
      firebaseDB: [],
      cData: contacts,
      newContact: {
        id: "",
        name: "",
        age: "",
        picUrl: "",
        tel: "",
        email: "",
        adress: "",
        birthDate: "",
        createdAt: ""
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

