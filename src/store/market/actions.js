import Api from './api';

const cloneArray = (arr) => ([...arr]);

const slotDataTransformer = (data = []) => (data.map((slot) => {
  const { isSold, cost, discount } = slot;
  const parsedCost = parseFloat(cost) || 0;
  const parsedDiscount = parseFloat(discount) || 0;
  const price = isSold ? null : parsedCost - parsedDiscount;
  return {
    ...slot,
    price,
  };
}));

export default {
  async LOAD_SLOTS({ commit }) {
    const { data, success } = await Api.LOAD_SLOTS();
    const slots = success ? slotDataTransformer(data) : [];
    commit('MUTATE_SLOTS', slots);
  },
  LOAD_CART({ commit }) {
    const cartList = localStorage.cart || [];
    commit('MUTATE_CART', cartList);
  },
  SET_FILTER_STRING({ commit }, filterString) {
    commit('MUTATE_FILTER_STRING', filterString);
  },
  async BUY_SLOT({ commit, state }, slotId) {
    const success = await Api.BUY_SLOT(slotId);
    if (success) {
      const cartList = cloneArray(state.cart);
      const slotInCartIndex = cartList.indexOf(slotId);
      if (slotInCartIndex >= 0) {
        cartList.splice(slotInCartIndex, 1);
      } else {
        cartList.push(slotId);
      }
      commit('MUTATE_CART', cartList);
    }
  },
};

