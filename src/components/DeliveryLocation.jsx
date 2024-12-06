import React from "react";
import supportImage from "../assets/supportImage.jpg";
import { useTranslation } from "react-i18next";

const DeliveryLocation = () => {
  const {t} = useTranslation();
  return (
    <div className="lg:w-1/3">
      <h2 className="heading-2">{t("Delivery Address")}</h2>
      <div className="flex flex-col gap-4">
        {/* Address */}
        <div className="p-6 border-2 rounded-lg bg-gray-50">
          <h2 className="text-center lg:text-left">
            إمبابة, شارع طلعت حرب مدينة العمال بجوار البرنس, منزل 17, بلوك 22, القاهرة
          </h2>
        </div>
        {/* Customer Support Card */}
        <div className="flex justify-center lg:justify-start items-center text-center pl-2 p-4 py-4 gap-3 border-2 rounded-lg">
          <div className="w-[120px] ">
            <img className="w-full" src={supportImage} alt="support" />
          </div>
          <div className="">
            <h3 className="font-bold pb-3">{t("Problems with your Shipment ?")}</h3>
            <button className="btn">{t("Report a problem")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocation;
