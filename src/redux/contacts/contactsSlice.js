import { createSelector, createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contactsOps';
import { selectNameFilter } from '../filters/selectors';


// const contactList = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const handlePending = state => {
  state.loading = true;
};

const handleReject = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleReject)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // console.log(action.payload);
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          number: action.payload.number,
        });
      })
      .addCase(addContact.rejected, handleReject)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // console.log(action.payload)
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handleReject);
  },
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  selectContacts,
  selectNameFilter,
  (items, name) => {
    // console.log('memoazed?');
    const normalizedFilter = name.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const contactsReducer = contactsSlice.reducer;
