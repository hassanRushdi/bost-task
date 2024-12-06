import { configureStore } from "@reduxjs/toolkit";
import { shipmentReducer  } from "../features/shipment/shipment.slice.js"

export const store = configureStore({
  reducer: {
    shipment: shipmentReducer,
  },
});