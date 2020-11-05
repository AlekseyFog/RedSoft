export default {
  MUTATE_SLOTS: (state, slots) => {
    state.slots = slots;
  },
  MUTATE_CART: (state, cart) => {
    state.cart = cart;
    localStorage.cart = cart;
  },
  MUTATE_FILTER_STRING: (state, filterString) => {
    state.filterString = filterString;
  },
};
