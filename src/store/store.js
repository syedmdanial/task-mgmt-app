import { configureStore, Tuple } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
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
  middleware: () => new Tuple(thunk, logger),
  // Additional configuration options if needed
});

export const persistor = persistStore(store);
