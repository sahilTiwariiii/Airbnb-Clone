import LoginandRegisterModelSlice from '../features/LoginandRegisterModelSlice';
import ListingCreationModalTogglingSlice from '../features/ListingCreationModalToggling';
import ListingModelOpenAndCloseSlice from '../features/ListingModalOpenAndClose';
const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
	reducer: {
		loginandregister: LoginandRegisterModelSlice, // key 'loginandregister' for accessing the state
		listingmodel: ListingCreationModalTogglingSlice,
		listingmodelopenandclose: ListingModelOpenAndCloseSlice
	}
});
// listingmodel
