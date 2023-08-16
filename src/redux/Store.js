import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/features/rocketsSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
