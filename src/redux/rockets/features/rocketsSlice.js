export const fetchRocketData = createAsyncThunk(
  'rockets/fetchRockets',
  async (rejectWithValue) => {
    try {
      const response = await axios(URL);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
