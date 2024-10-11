import { isMember } from "@/guards/isMember";
import { MembersState } from "@/types/member";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: MembersState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchMembers = createAsyncThunk(
  "members/fetchMembers",
  async () => {
    try {
      const userFiles = import.meta.glob("../json/*.json");

      const importPromises = Object.entries(userFiles).map(
        async ([path, module]) => {
          const userData = await module();
          // @ts-ignore
          const user = userData.default[0];
          if (isMember(user)) {
            return user;
          } else {
            console.warn(`Invalid member data in file ${path}:`, user);
            return null;
          }
        }
      );

      return Promise.all(importPromises);
    } catch (e) {
      console.log(e);
    }
  }
);

export const membersSlice: any = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        // @ts-ignore
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch members";
      });
  },
});

export default membersSlice.reducer;
