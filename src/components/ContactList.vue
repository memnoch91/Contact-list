<template>
  <section>
    <h1>{{title}}</h1>
    <table
      v-if="contactsData && contactsData.length"
      class="contacts-table table is-bordered is-narrow"
    >
      <thead class="contacts-table__header">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="contacts-table__body">
        <tr v-for="contact in contactsData" :key="contact.id">
          <td>
            <figure class="image">
              <img :src="contact.picUrl" alt="user pic" />
            </figure>
          </td>
          <td>{{contact.name}}</td>
          <td class="has-text-right">
            <button class="button" @click="deleteItem(contact.id)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import contacts from "../data/contacts";

export default {
  name: "ContactList",
  data() {
    return {
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
  }
};
</script>
<style lang="scss" scoped>
.contacts-table {
  margin: 0 auto;
  width: 80%;
  // display: block;
  // border: 1px solid darkblue;
  border-collapse: collapse;
  td {
    vertical-align: middle;
  }
  &__body {
    img {
      display: inline-block;
      height: 70px;
      width: auto;
    }
  }
}
</style>

