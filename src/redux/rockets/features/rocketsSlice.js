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
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
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

export default rocketSlice.reducer;
