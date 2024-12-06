import React from "react";
import { Stepper, Step } from "@material-tailwind/react";
import { FaStoreAlt } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { GrDeliver } from "react-icons/gr";
import { LuPackageCheck } from "react-icons/lu";
import { formatDate } from "../utils/formatDate";

const ShippingProgress = ({ transitEvents }) => {
  const shipmentState = [
    "Shipment Created",
    "Shipment Received",
    "Out for Delivery",
    "Delivered",
  ];

  const defaultStates = [
    { state: "TICKET_CREATED", timestamp: "", hub: "", reason: "" },
    { state: "PACKAGE_RECEIVED", timestamp: "", hub: "", reason: "" },
    { state: "OUT_FOR_DELIVERY", timestamp: "", hub: "", reason: "" },
    { state: "DELIVERED", timestamp: "", hub: "", reason: "" },
  ];

  const currStatus = transitEvents || [];
  const reversedStatus = currStatus.length > 0 ? [...currStatus].reverse() : [];

  const updatedStates = defaultStates.map((item) => {
    const match = reversedStatus.find((curr) => curr.state === item.state);
    return match
      ? {
          ...item,
          timestamp: match.timestamp,
          hub: match.hub,
          reason: match.reason,
        }
      : item;
  });

  const activeStepIndex =
    updatedStates.findIndex((item) => !item.timestamp) - 1;

  const getStepIcon = (index) => {
    switch (index) {
      case 0:
        return <GoPackage />;
      case 1:
        return <FaStoreAlt />;
      case 2:
        return <GrDeliver />;
      case 3:
        return <LuPackageCheck />;
      default:
        return null;
    }
  };

  const getGlobalColor = () => {
    if (currStatus.some(event => event.state === "DELIVERED")) {
      return {
        line: "bg-green-500",
        text: "text-green-600",
        background: "bg-green-100"
      };
    }

    if (currStatus.some(event => event.state === "DELIVERED_TO_SENDER")) {
      return {
        line: "bg-[--color-yellow]",
        text: "text-[--color-yellow]",
        background: "bg-[--color-yellow]"
      };
    }

    // Check for received
    if (currStatus.some(event => event.state === "CANCELLED")) {
      return {
        line: "bg-[--color-red]",
        text: "text-[--color-red]",
        background: "bg-[--color-red]"
      };
    }

    return {
      line: "bg-grey-500",
      text: "text-grey-600",
      background: "bg-grey-100"
    };
  };

  const globalColor = getGlobalColor();

  return (
    <div className="w-[90%] mx-auto h-48">
      {currStatus.length === 0 && (
        <div className="text-center text-gray-500 mb-4">
          No shipping updates available.
        </div>
      )}

      <Stepper
        activeStep={
          activeStepIndex >= 0 ? activeStepIndex : updatedStates.length - 1
        }
        className={`p-4 rounded-md flex items-center justify-between`}
        activeLineClassName={globalColor.line}
      >
        {updatedStates.map((item, index) => (
          <Step 
            key={index} 
            completed={!!item.timestamp} 
            activeClassName={globalColor.background}
            completedClassName={globalColor.background}
          >
            <div className="flex flex-col items-center w-7 h-7">
              <span className="text-2xl">{getStepIcon(index)}</span>

              <span
                className={`font-bold mt-2 ${
                  !!item.timestamp 
                    ? globalColor.text 
                    : "text-gray-500"
                }`}
              >
                {shipmentState[index]}
              </span>
              {item.timestamp && (
                <p className="text-sm text-gray-500 mt-1">
                  {formatDate(item.timestamp)}
                </p>
              )}
              {item.reason && (
                <p className="text-xs text-red-400 italic mt-1">
                  {item.reason}
                </p>
              )}
            </div>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default ShippingProgress;