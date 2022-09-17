import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from "@reduxjs/toolkit";
import { Iterable } from "immutable";
import translateReducer from "./translate";

// Augment middleware to consider Immutable.JS iterables serializable
// Disable non-serializable warning. Best to customize
const isSerializable = (value) => {
  return true;
};

const getEntries = (value) => {

  return Iterable.isIterable(value) ? value.entries() : Object.entries(value);
};

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
});

export default configureStore({
  reducer: {
    translate: translateReducer,
  },
  middleware: [serializableMiddleware],
});
