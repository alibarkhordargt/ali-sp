import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarState } from '../../types/interfaces';

const initialState: SnackbarState = {
  message: '',
  open: false,
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.open = true;
    },
    hideSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export const selectSnackbar = (state: { snackbar: SnackbarState }) =>
  state.snackbar;

export default snackbarSlice.reducer;
