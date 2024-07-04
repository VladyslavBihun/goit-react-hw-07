import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialContactsState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState: initialContactsState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const selectContacts = (state) => state.contacts;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);

export default slice.reducer;
