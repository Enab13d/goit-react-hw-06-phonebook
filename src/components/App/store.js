import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import filterReducer from 'features/filter/filterSlice'
import contactReducer from 'features/contacts/contactsSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactReducer,
  },
})