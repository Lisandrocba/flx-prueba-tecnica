import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import modalReducer from '../features/modal/modalSlive';
import modalDeleteSilver from "../features/modal/modalDeleteSilver";

export const store = configureStore({
    reducer: {
        users: userReducer,
        modal: modalReducer,
        modalDelete: modalDeleteSilver
    }
})