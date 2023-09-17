import { createStore } from 'vuex';
import { postModule } from './postModule';

export default createStore({
  //   // ядро vuex:
  //   state: {
  //     // состояние
  //     likes: 2,
  //     isAuth: false,
  //   },
  //   getters: {
  //     // аналогично computed
  //     doubleLikes(state) {
  //       return state.likes * 2;
  //     },
  //   },
  //   mutations: {
  //     // изменеяем состояние - функции
  //     incrementLikes(state) {
  //       state.likes += 1;
  //     },
  //     decrementLikes(state) {
  //       state.likes -= 1;
  //     },
  //   },
  //   actions: {
  //     // используют мутации
  //   },
  //  => декомпозиция
  modules: {
    post: postModule,
  },
});
