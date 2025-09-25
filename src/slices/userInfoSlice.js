import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'info',
  initialState: {
    value: null,
  },
  reducers: {
    userDetails: (state, action) => {
      console.log(state.value);
      console.log(action.payload);
    },
  },
})

export const { userDetails } = userInfoSlice.actions

export default userInfoSlice.reducer