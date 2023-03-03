import { createSlice } from '@reduxjs/toolkit';

import type {ThemeType} from '../../../types'
import getThemesThunkAction from '../apiFeatures/themesAction';



const initialState:ThemeType[] = []

const themesSlice = createSlice({
  name: 'themesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder.addCase(
     getThemesThunkAction.fulfilled, 
     (state,action)=>  action.payload
    )
  }
});

// export const { } = themesSlice.actions;
export default themesSlice.reducer;
