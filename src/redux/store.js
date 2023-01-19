import { configureStore } from '@reduxjs/toolkit';
import generatorStore from "./generatorStore";

export const store = configureStore({
  reducer: generatorStore,
})