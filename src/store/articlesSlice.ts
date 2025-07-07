import { createSlice } from '@reduxjs/toolkit';
import type { Article } from '../data/articles';
import { articles } from '../data/articles';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articles as Article[],
  reducers: {
  },
});

export const articlesReducer = articlesSlice.reducer;
