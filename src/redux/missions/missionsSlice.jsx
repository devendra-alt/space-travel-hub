/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  reducers: {
    joinMission: (state, { payload }) => {
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
      state.missions = updatedMissions;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.missions = action.payload.map((mission) => ({
          ...mission,
          reserved: false,
        }));
        state.loading = false;
      })
      .addCase(getMissions.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
