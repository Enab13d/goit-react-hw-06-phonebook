import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      return state.concat(action.payload);
    },
    removeContact: (state, action) => {
      const idx = state.find(contact => contact.id === action.payload.id);
      state.splice(idx, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
    