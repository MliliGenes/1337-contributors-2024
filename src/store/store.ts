import { configureStore } from "@reduxjs/toolkit";
import membersSlice from "./membersSlice";
export const store = configureStore({
  reducer: {
    members: membersSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
