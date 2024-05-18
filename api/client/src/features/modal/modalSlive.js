import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    title : "Agregar usuario",
    txtButton: 'Agregar usuario', 
    data : {}
  },
  reducers: {
    openModal(state, action) {
      state.isOpen = true
      if(action.payload){
        state.title = action.payload.title
        state.data = action.payload.data
        state.txtButton = action.payload.txtButton
      }else{
        state.title = "Agregar usuario"
        state.txtButton = 'Agregar usuario'
        state.data = {
          username: '',
          name: '',
          lastname: '',
          age: null,
          email: '',
          status: ''
        }
      }
    },
    closeModal(state) {
      state.isOpen = false
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;