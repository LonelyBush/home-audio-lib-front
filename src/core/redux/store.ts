import { configureStore } from '@reduxjs/toolkit'
import { audioLibApi } from '../services/audioLib'
export const store = () => configureStore({
  reducer: {
    [audioLibApi.reducerPath]: audioLibApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(audioLibApi.middleware),
})



export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']