import { createSlice } from '@reduxjs/toolkit';

const modalDeleteSilver = createSlice({
  name: 'modalDelete',
  initialState: {
    isOpenDelete: false,
    data : {}
  },
  reducers: {
    openModalDelete(state, action) {
      state.isOpenDelete = true
      state.data = action.payload
    },
    closeModalDelete(state) {
      state.isOpenDelete = false
    },
  },
});

export const { openModalDelete, closeModalDelete } = modalDeleteSilver.actions;
export default modalDeleteSilver.reducer;