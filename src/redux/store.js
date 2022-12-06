export const initialState = {
  error: '',
  isLoading: false,
  isDeleting: false,
  isAdd: false,
  contacts: {
    items: [],
    filter: {
      value: '',
    },
  },
};

export const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};