import * as api from '@/api/messages';
import { computed, reactive } from 'vue';

export function useMessages() {
  const state = reactive({
    messages: [],
    total: 0,
    page: 1,
  });

  const setMessages = (response) => {
    state.messages = response.items;
    state.total = response.total;
    state.page = response.page;
    state.perPage = response.perPage;
  };

  const fetchMessages = async (page) => {
    const response = await api.fetchMessages(page);
    response && setMessages(response);
    return response;
  };

  const searchMessages = async (searchText) => {
    const response = await api.searchMessages(searchText);
    response && setMessages(response);
    return response;
  };

  return {
    fetchMessages,
    searchMessages,
    messages: computed(() => state.messages),
    page: computed(() => state.page),
    pages: computed(() => Math.floor(state.total/state.perPage))
  };
}
