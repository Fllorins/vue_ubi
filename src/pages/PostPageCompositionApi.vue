<template>
  <div>
    <h1>{{ likes }}</h1>

    <h1>Страница с постами</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostLoading" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { ref } from 'vue';
import MyButton from '@/components/UI/MyButton';
import axios from 'axios';
import MySelect from '@/components/UI/MySelect';
import MyInput from '@/components/UI/MyInput';

import { usePosts } from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';
export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,

      sortOptions: [
        { value: 'title', name: 'по названию' },
        { value: 'body', name: 'по содержанию' },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
  justify-content: center;
}
.page {
  border: 2px solid black;
  padding: 10px;
  margin: 0 5px;
}
.current-page {
  border: 1px solid teal;
}
.observer {
  height: 30px;
  background: green;
}
</style>
