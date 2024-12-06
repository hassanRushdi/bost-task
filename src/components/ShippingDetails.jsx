import ShippingProgress from "./ShippingProgress";
import { formatDate } from "../utils/formatDate";
import { useTranslation } from "react-i18next";

const ShippingDetails = ({ shipmentID, status, provider, estimatedDate }) => {
  const { t } = useTranslation();
  return (
    <section>
      {/* Details */}
      <div className="grid grid-cols-4 gap-5 text-center m-3 p-4 items-center">
        <div>
          <p className="details-header">
            {t("Shipment ID")}: {shipmentID}
          </p>
          <p
            className={`details-subheader font-semibold ${
              status.state == "CANCELLED" && "text-[--color-red]"
            } ${status.state == "DELIVERED" && "text-[--color-green]"} ${
              status.state == "DELIVERED_TO_SENDER" && "text-[--color-yellow]"
            }`}
          >
            {status.state}
          </p>
        </div>
        <div>
          <p className="details-header">{t("Last Updated")}</p>
          <p className="details-subheader">{formatDate(status.timestamp)}</p>
        </div>
        <div>
          <p className="details-header">{t("Merchant")}</p>
          <p className="details-subheader">{provider}</p>
        </div>
        <div>
          <p className="details-header">{t('Delivery Date')}</p>
          <p className="details-subheader">{formatDate(estimatedDate)}</p>
        </div>
      </div>
    </section>
  );
};

export default ShippingDetails;
