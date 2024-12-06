import { useEffect } from "react";
import ShippingDetails from "../components/ShippingDetails";
import DetailsTable from "../components/DetailsTable";
import DeliveryLocation from "../components/DeliveryLocation";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { useParams } from "react-router-dom";
import { fetchShipmentData } from "../redux/features/shipment/shipment.actions";
import ShippingProgress from "../components/ShippingProgress";

const TrackingShipmentPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const data = useAppSelector((state) => state.shipment.data);

  useEffect(() => {
    if (id) {
      dispatch(fetchShipmentData(id));
    } else {
      console.log("Invalid shipment ID.");
    }
  }, [id, dispatch]);

  return (
    <div className="container">
      <div className=" border-2 my-10 rounded-lg ">
        <ShippingDetails
          shipmentID={data?.TrackingNumber || "Not Available"}
          status={data?.CurrentStatus || "Not Available"}
          provider={data?.provider || "Not Available"}
          estimatedDate={data?.PromisedDate || "Not Available"}
        />
        {/* Middle Border */}
        <div className="w-full border-b border-gray-300 mb-8 "></div>
        <ShippingProgress transitEvents={data?.TransitEvents || []} />
      </div>
      <div className="sub-container">
        <DetailsTable info={data?.TransitEvents || 'Not Available'} />
        <DeliveryLocation />
      </div>
    </div>
  );
};

export default TrackingShipmentPage;
