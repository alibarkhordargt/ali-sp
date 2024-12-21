import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../types/interfaces';

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export const selectLoading = (state: { loading: LoadingState }) =>
  state.loading.isLoading;

export default loadingSlice.reducer;
