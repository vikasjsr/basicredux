import {configureStore} from '@reduxjs/toolkit';
import { customReducer } from './reducer';

const store = configureStore({

    reducer:{
        // we have to put all reducers here it will combine automatically
        custom:customReducer,
    },

});

export default store;