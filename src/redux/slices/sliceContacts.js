import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
	{ id: 'id-1', name: 'Саня', number: '111-22-33' },
	{ id: 'id-2', name: 'Стас', number: '444-55-66' },
	{ id: 'id-3', name: 'Рома', number: '777-88-99' },
	{ id: 'id-4', name: 'Коваль', number: '000-00-00' },
  ];

  export const contactsFormSlice = createSlice({
	name: 'contacts',
	initialState: contactsInitialState,
	reducers: {
	  add(state, action) {
		return [...state, action.payload];
	  },
	  remove(state, action) {
		return state.filter(item => item.id !== action.payload);
	  },
	},
  });

  export const contactsReducer = contactsFormSlice.reducer;

  export const { add, remove } = contactsFormSlice.actions;