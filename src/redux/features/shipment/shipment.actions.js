import { shipmentSlice } from './shipment.slice';
import * as requestFromServer from './shipment.api';

const { actions: shipmentActions } = shipmentSlice;

export const fetchShipmentData = (id) => async (dispatch) => {
  dispatch(shipmentActions.openLoader());
  try {
    const shipData = await requestFromServer.fetchApi(id);
    if (shipData) {
      await dispatch(shipmentActions.fetchData(shipData));
    } else {
      dispatch(shipmentActions.catchError(shipData));
    }
  } catch (error) {
    dispatch(shipmentActions.catchError(error));
  } finally {
    dispatch(shipmentActions.closeLoader());
  }
};
