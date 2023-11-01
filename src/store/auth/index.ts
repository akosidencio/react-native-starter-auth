import { createSlice } from '@reduxjs/toolkit'
const slice = createSlice({
  name: 'auth',
  initialState: { email: null },
  reducers: {
    login: (state, { payload: { email, password } }) => {
      if (typeof email !== 'undefined' && typeof password !== 'undefined') {
        state.email = email
      }
    },
  },
})
export const { login } = slice.actions
export default slice.reducer