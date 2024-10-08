import { createSlice } from '@reduxjs/toolkit';

const ListingModelOpenAndCloseSlice = createSlice({
	// name of reducer which we will see into 'Redux Devtools'
	name: 'listingopenandclosemodel',
	initialState: false,
	reducers: {
		// Open the modal
		openListingModal: (state) => true,
		// Close the modal
		closeListingModal: (state) => false,
	}
});

export const { openListingModal, closeListingModal } = ListingModelOpenAndCloseSlice.actions;

export default ListingModelOpenAndCloseSlice.reducer;
