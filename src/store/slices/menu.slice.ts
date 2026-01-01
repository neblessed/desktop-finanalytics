import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { MenuItems } from '../../types/MenuItems';

const menuSlice = createSlice({
   name: 'operations',
   initialState: 'home' as MenuItems,
   reducers: {
      setMenu: (state, action: PayloadAction<MenuItems>) => {
         return action.payload;
      },
   },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
