import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const jikanApiBaseUrl = "https://api.jikan.moe/v4";

export const searchAnimeByTitle = createAsyncThunk(
  "animeSearch/searchAnimeByTitle",
  async (title, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${jikanApiBaseUrl}/anime?q=${title}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const animeSlice = createSlice({
  name: "animeSearch",
  initialState: {
    animeList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchAnimeByTitle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchAnimeByTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.animeList = action.payload;
      })
      .addCase(searchAnimeByTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const animeActions = animeSlice.actions;
export default animeSlice.reducer;
