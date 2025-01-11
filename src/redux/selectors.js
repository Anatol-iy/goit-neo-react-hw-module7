import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filtersSlice";

// Селектор для получения списка контактов
export const selectContacts = (state) => state.contacts.items;

// Селектор для статуса загрузки
export const selectContactsLoading = (state) => state.contacts.loading;

// Селектор для ошибок
export const selectContactsError = (state) => state.contacts.error;

// Селектор для отфильтрованных контактов
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
