import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Получение всех контактов
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  try {
    const { data } = await axios.get(
      "https://677fda3f0476123f76a86add.mockapi.io/contacts"
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

// Добавление нового контакта
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://677fda3f0476123f76a86add.mockapi.io/contacts",
        contact
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Удаление контакта по ID
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://677fda3f0476123f76a86add.mockapi.io/contacts/${id}`
      );
      return id; // Мы просто возвращаем ID контакта для удаления
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
