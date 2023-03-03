import { createSlice } from '@reduxjs/toolkit';

type ScoreState = {
  value: number;
};

const initialState = { value: 0 } as ScoreState;

const scoreSlice = createSlice({
  name: 'scoreSlice',
  initialState,
  reducers: {
    addScore(state, action) {
      state.value += action.payload;
    },
  },
});

export const { addScore } = scoreSlice.actions;
export default scoreSlice.reducer;
