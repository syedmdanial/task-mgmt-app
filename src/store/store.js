import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, createMigrate } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import migrations from "./migrations";

const persistConfig = {
  key: "TASK-MGMT-APP-STORE",
  storage,
  version: 0,
  migrate: createMigrate(migrations, { debug: false }),
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: pReducer,
  // Additional configuration options if needed
});

export const persistor = persistStore(store);
