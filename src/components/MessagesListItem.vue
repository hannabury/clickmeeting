<template>
  <v-container class="messages-list-item">
    <div class="messages-list-item-icon">
      <v-icon color="grey">mdi-email-outline</v-icon>
    </div>
    <div class="messages-list-item-date">{{ item.date }}</div>
    <div class="messages-list-item-author">{{ item.author }}</div>
    <div class="messages-list-item-title">{{ item.title }}</div>
    <div class="messages-list-item-actions">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-icon color="green" v-bind="attrs" v-on="on">mdi-eye-outline</v-icon>
        </template>
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">{{ item.author }} - {{ item.title }}</v-card-title>
          <v-card-text>
            {{ item.content }}
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> Zamknij </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'MessagesListItem',
  props: {
    item: {
      required: true,
    },
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables';
.messages-list-item {
  display: table-row;

  > div {
    display: table-cell;
    padding: 8px;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid $color-contrast;

    > div {
      display: block;
    }

    &-title {
      width: 100%;
      order: 5;
    }
    &-icon {
      order: 1;
    }
    &-date {
      order: 3;
    }
    &-author {
      order: 4;
    }
    &-actions {
      order: 2;
    }
  }
}
</style>

