import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    registerUser: (state, action) => {
      console.log(action)
      state.users.concat(action.payload);
    }
  },
})


export const { registerUser, loginUser } = userSlice.actions;

export default userSlice.reducer