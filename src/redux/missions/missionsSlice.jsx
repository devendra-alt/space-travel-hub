import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import produce from 'immer';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  loading: true,
  error: false,
};

export const getMissions = createAsyncThunk(
  'spacex/getMissions',
  async () => {
    try {
      const resp = await axios.get(baseUrl);
      return resp.data;
    } catch (e) {
      throw new Error(`API call error ${e.message}`);
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => produce(state, (draftState) => {
        draftState.loading = true;
      }))
      .addCase(getMissions.fulfilled, (state, action) => produce(state, (draftState) => {
        draftState.missions = action.payload;
        draftState.loading = false;
      }))
      .addCase(getMissions.rejected, (state) => produce(state, (draftState) => {
        draftState.error = true;
        draftState.loading = false;
      }));
  },
});

export default missionsSlice.reducer;
