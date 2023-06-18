<template>
  <v-container class="messages-view">
    <v-container class="search">
      <v-form ref="form">
        <v-text-field v-model="searchText"  append-icon="mdi-magnify" label="Szukaj"></v-text-field>
      </v-form>
    </v-container>
    <messages-list :items="messages" />
    <div class="text-center">
      <v-pagination v-model="current" :length="4"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import MessagesList from '../components/MessagesList';
import { useMessages } from '../composables/messages';

export default {
  name: 'MessagesView',

  components: {
    MessagesList,
  },

  setup() {
    const { fetchMessages, searchMessages, messages, page } = useMessages();
    const current = ref(1);
    const searchText = ref('');

    onMounted(async () => {
      await fetchMessages();
      current.value = page.value;
    });

    watch(
      () => current.value,
      () => {
        fetchMessages(current.value);
      }
    );

    watch(
      () => searchText.value,
      () => {
        searchMessages(searchText.value);
      }
    );

    return {
      messages,
      current,
      searchText,
    };
  },
};
</script>
