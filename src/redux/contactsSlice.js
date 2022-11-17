import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contactsList.push(action.payload);
    },

    removeContact(state, action) {
      state.contactsList = state.contactsList.filter(
        el => el.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;
