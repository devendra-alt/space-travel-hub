import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  loading: 'idle',
  error: null,
};

export const fetchRocketData = createAsyncThunk(
  'rockets/fetchRockets',
  async (rejectWithValue) => {
    try {
      const response = await axios(URL);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
    return rejectWithValue('operation failed');
  }
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketBooking(state, { payload }) {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: true };
      });
    },
    rocketBookingCancel(state, { payload }) {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) return { ...rocket, reserved: false };
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchRocketData.fulfilled, (state, { payload }) => {
        const data = payload;
        state.rockets = data.map((rocket) => {
          const rocketData = {};
          rocketData.id = rocket.id;
          rocketData.name = rocket.rocket_name;
          rocketData.type = rocket.rocket_type;
          rocketData.images = rocket.flickr_images;
          rocketData.description = rocket.description;
          rocketData.wikipedia = rocket.wikipedia;
          return rocketData;
        });
        state.loading = 'loaded';
      })
      .addCase(fetchRocketData.rejected, (state, { payload }) => {
        state.loading = 'failed';
        state.error = payload;
      });
  },
});

export const { rocketBooking, rocketBookingCancel } = rocketSlice.actions;

export default rocketSlice.reducer;
