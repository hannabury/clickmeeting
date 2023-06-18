<template>
  <v-container class="messages-list">
    <div class="messages-list-container">
      <div class="messages-list-header">
        <div class="messages-list-header-icon"></div>
        <div class="messages-list-header-date">Data</div>
        <div class="messages-list-header-author">Nadawca</div>
        <div class="messages-list-header-title">Tytuł</div>
        <div class="messages-list-header-actions"></div>
      </div>
      <messages-list-item v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </v-container>
</template>

<script>
import MessagesListItem from '@/components/MessagesListItem.vue';
export default {
  name: 'MessagesList',
  components: {
    MessagesListItem,
  },
  props: {
    items: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables';
.messages-list {
  &-container {
    display: table;
    width: 100%;
  }

  &-header {
    display: table-row;
    background: $color-bg-dark;
    color: $color-text-contrast;

    > div {
      display: table-cell;
      padding: 8px;
    }

    @media (max-width: 500px) {
      display: none;
    }
  }
}
</style>

