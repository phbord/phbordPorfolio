// For useSelector
export type RootState = ReturnType<typeof store.getState>;

// For useDispatch
export type AppDispatch = typeof store.dispatch;
