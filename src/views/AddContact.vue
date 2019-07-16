<template>
  <section class="m-b-lg">
    <div class="container add-contact__wrapper">
      <h1 class="title m-t-sm m-b-sm">Add new contact</h1>
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
            <div class="field">
              <label class="label">Birth Date</label>
              <div class="control">
                <input
                  class="input"
                  type="date"
                  placeholder="Birth Date"
                  v-model="newContact.birthDate"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Age</label>
              <div class="control">
                <input
                  class="input"
                  type="number"
                  placeholder="Enter Name"
                  v-model="newContact.age"
                />
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
            <div class="field">
              <label class="label">Telephone</label>
              <div class="control">
                <input class="input" type="tel" placeholder="Telephone" v-model="newContact.tel" />
              </div>
            </div>
            <div class="field">
              <label class="label">E-mail</label>
              <div class="control">
                <input class="input" type="email" placeholder="Email" v-model="newContact.email" />
              </div>
            </div>
          </div>
          <div class="column is-full submit-wrapper">
            <button class="button is-rounded" type="submit">baga mare</button>
          </div>
        </div>
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
      },
      uploadSucces: false,
      uploadMessage: ""
    };
  },
  methods: {
    addContact() {
      this.setCreateAt();
      DB.collection("contact-list")
        .add(this.newContact)
        .then(docRef => {
          this.uploadMessage = "New contact registered";
          console.log(docRef)
        })
        .then(() => {
          this.resetForm();
          this.uploadSucces = true;
        })
        .catch(err => console.error(err));
    },
    setCreateAt() {
      return (this.newContact.createdAt = new Date());
    },
    resetForm() {
      (this.newContact.age = ""),
        (this.newContact.birthDate = ""),
        (this.newContact.city = ""),
        (this.newContact.country = ""),
        (this.newContact.createdAt = ""),
        (this.newContact.email = ""),
        (this.newContact.name = ""),
        (this.newContact.picUrl = ""),
        (this.newContact.street = ""),
        (this.newContact.streetNo = ""),
        (this.newContact.tel = "");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/font-colors.scss";

.add-contact__wrapper {
  max-width: 90%;
  height: 100%;
  .submit-wrapper {
    display: flex;
    justify-content: center;
  }
  h1 {
    text-align: center;
    color: $headings-color-primary;
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