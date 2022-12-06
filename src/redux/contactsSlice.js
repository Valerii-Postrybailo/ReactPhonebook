import { createSlice} from '@reduxjs/toolkit';
import { initialState, setError } from './store';
import { fetchContacts, deleteContacts, addContacts } from './operations';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.contacts.filter.value = action.payload;
    },
    setContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    removeContact: (state, action) => {
      let indexId = state.contacts.items.findIndex(
        el => el.id === action.payload
      );

      if (indexId === -1) {
        return alert(`Item with ${action.id} not found`);
      }

      state.contacts.items.splice(indexId, 1);
    },

    
  },
  extraReducers: builder => {
      builder.addCase(fetchContacts.pending, (state, _) =>{
        state.isLoading = true;
        state.error = '';
      })

    // [fetchContacts.pending]: state => {
    //   state.isLoading = true;
    //   state.error = '';
    // },

      builder.addCase(fetchContacts.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.contacts.items = action.payload;
      })

      builder.addCase(fetchContacts.rejected, () => setError)

    // [fetchContacts.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.contacts.items = action.payload;
    // },
    // [fetchContacts.rejected]: setError,

      builder.addCase(deleteContacts.pending, (state, _) =>{
        state.isDeleting = true;
      })

      builder.addCase(deleteContacts.fulfilled, (state, _) =>{
        state.isDeleting = false;
      })

      builder.addCase(deleteContacts.rejected, () => setError)

    // [deleteContacts.pending]: state => {
    //   state.isDeleting = true;
    // },
    // [deleteContacts.fulfilled]: state => {
    //   state.isDeleting = false;
    // },
    // [deleteContacts.rejected]: setError,

      builder.addCase(addContacts.pending, (state, _) =>{
        state.isLoading = true;
        state.isAdd = true;
      })

      builder.addCase(addContacts.fulfilled, (state, _) =>{
        state.isLoading = false;
        state.isAdd = false;
      })

      builder.addCase(addContacts.rejected, () => setError)

    // [addContacts.pending]: state => {
    //   state.isLoading = true;
    //   state.isAdd = true;
    // },
    // [addContacts.fulfilled]: state => {
    //   state.isLoading = false;
    //   state.isAdd = false;
    // },
    // [addContacts.rejected]: setError,
  },
});

export const { setFilter, setContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;