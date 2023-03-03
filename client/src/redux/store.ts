import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themesSlice from './slices/themeSlice'

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  themes: themesSlice,
});


export default store;