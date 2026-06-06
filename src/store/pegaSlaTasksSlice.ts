import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { SlaTask } from '../Types';
import axios from 'axios';
import { getAccessToken } from './utils/generateTokenService';
import { slaRequestBody } from './utils/slaRequestBody';

const apiUrl = import.meta.env.VITE_PEGA_TASK_API_URL;

const initialState: {
  data: SlaTask[] | null;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

export const fetchSlaTasks = createAsyncThunk<
  SlaTask[],
  string,
  { rejectValue: { message: string } }
>('fetchSlaTasks', async (id = '', { rejectWithValue }) => {
  console.log(id);
  try {
    const getToken = await getAccessToken();
    const response = await axios.post(apiUrl, slaRequestBody(id), {
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

const slaTasksSlice = createSlice({
  name: 'slatasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlaTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSlaTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSlaTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? 'API Failed';
      });
  },
});

export default slaTasksSlice.reducer;
