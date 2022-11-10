import { configureStore } from '@reduxjs/toolkit';

import LoaderSlice from '../screens/Common/Loader/LoaderSlice';

const store = configureStore({
    reducer: {
        // Add all slice here
        loaderData: LoaderSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;