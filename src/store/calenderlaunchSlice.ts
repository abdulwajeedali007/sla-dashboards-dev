import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { CalenderClusterData } from '../Types';
import axios from 'axios';
import { getAccessToken } from './utils/generateTokenService';
// import { slaRequestBody } from './util/slaRequestBody';

const apiUrl = import.meta.env.VITE_PEGA_CALENDER_LAUNCH_API_URL;

const initialState: {
  data: CalenderClusterData[] | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const fetchcalenderLaunch = createAsyncThunk<
  CalenderClusterData[],
  void,
  { rejectValue: { message: string } }
>('fetchcalenderLaunch', async (_, { rejectWithValue }) => {
  try {
    const getToken = await getAccessToken();
    const response = await axios.post(apiUrl, _, {
      headers: { Authorization: `Bearer ${getToken}` },
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Something went wrong',
      });
    }

    return rejectWithValue({
      message: 'Something went wrong',
    });
  }
});

const calenderlaunchSlice = createSlice({
  name: 'calenderlaunch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcalenderLaunch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchcalenderLaunch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchcalenderLaunch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? 'API Failed';
      });
  },
});

export default calenderlaunchSlice.reducer;
