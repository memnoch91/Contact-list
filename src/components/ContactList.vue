<template>
  <section>
    <h1>{{title}}</h1>
    <table class="contacts-table">
       <thead class="contacts-table__header">
           <tr>
               <th>picture</th>
               <th>name</th>
               <th>actions</th>
           </tr>
       </thead>
       <tbody class="contacts-table__body">
           <tr v-for="contact in contactsData" :key="contact.id">
               <td><img :src="contact.picUrl" alt="user pic"/></td>
               <td>{{contact.name}}</td>
               <td>
                   <button>X</button>
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
  }
};
</script>
<style lang="scss" scoped>
    .contacts-table {
        margin: 0 auto;
        max-width: 80%;
        display: block;
        border: 1px solid darkblue;
        tr {
            display: block;
            height: 100px;
            border: 1px solid olive;
            width: 100%;
        }
        &__body {
            img {
                display: inline-block;
                height: 100%;
                width: auto;
            }
        }
    }

</style>

