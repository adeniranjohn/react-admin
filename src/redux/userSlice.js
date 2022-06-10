import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [ ],
    isLoggedIn: false

  },
  reducers: {
    registerUser: (state, action) => {
        console.log('register')
      state.users.concat(action.payload)
    },
    loginUser: (state, action) => {
        console.log('loginuser')
      state.isLoggedin =  state.users.find(user => {
          const theUser = action.payload.user
         return  user.email === theUser && user.password === theUser.password;
      })
    },
 
  },
})


export const { registerUser, loginUser } = userSlice.actions;

export default userSlice.reducer