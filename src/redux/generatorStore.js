import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  charLength: 15,
}

export const generatorSlice = createSlice({
  name: 'generator',
  initialState,
  reducers: {
    setCharLength: (state, action) => {
      state.charLength = action.payload;
    }
  },
})

export const { setCharLength, setCharForm } = generatorSlice.actions;

export default generatorSlice.reducer;