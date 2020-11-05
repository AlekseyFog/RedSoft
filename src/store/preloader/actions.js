const cloneArray = (arr) => ([...arr]);

export default {
  SHOW_PRELOADER({ commit, state }, id) {
    const list = cloneArray(state.list);
    list.push(id);
    commit('MUTATE_PRELOADER_LIST', list);
  },
  HIDE_PRELOADER({ commit, state }, id) {
    const list = cloneArray(state.list);
    const index = list.indexOf(id);
    list.splice(index, 1);
    commit('MUTATE_PRELOADER_LIST', list);
  },
};
