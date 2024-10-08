import { createSlice } from '@reduxjs/toolkit';

const ListingCreationModalTogglingSlice = createSlice({
	name: 'tooglelistingmodel',
	initialState: 1, // This is fine if you're using numbers to track steps
	reducers: {
		goForward: (state) => state + 1, // Increase step count
		goBackward: (state) => state - 1 // Decrease step count
	}
});

export const { goForward, goBackward } = ListingCreationModalTogglingSlice.actions;

export default ListingCreationModalTogglingSlice.reducer;
