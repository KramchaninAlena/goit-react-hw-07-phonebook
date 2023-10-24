import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAddContact, fetchDeleteContact, getContacts } from "api/api";
import Notiflix from 'notiflix';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    try {
      const data = await getContacts();
      Notiflix.Notify.info(`There are ${data.length} friends in your contacts`);
      return data
    } catch (error) {
      console.log(error)
    }
  });
  
  export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    return await fetchDeleteContact(id);
  });
  
  export const addContact =createAsyncThunk('contacts/addContact', async (contact) => {
    return await fetchAddContact(contact);
  })