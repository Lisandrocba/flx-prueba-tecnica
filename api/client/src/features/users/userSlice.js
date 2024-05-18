import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        userList: [],
        loading: false,
        error: null,
      },
    reducers: {
          getUsersStart(state) {
            state.loading = true;
            state.error = null;
          },
          getUsersSuccess(state, action) {
            state.userList = action.payload;
            state.loading = false;
          },
          getUsersFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
          },
    }
})

export const { getUsersStart, getUsersSuccess, getUsersFailure } = userSlice.actions
export default userSlice.reducer