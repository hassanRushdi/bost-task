import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const DetailsTable = ({info}) => {

  const [updatedInfo, setUpdatedInfo] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (Array.isArray(info)) {
      const newInfo = info.map((item) => ({
        ...item,
        state: item.state.split('_').join(' ').toLowerCase(),
      }));
      setUpdatedInfo(newInfo);
    }
  }, [info]);

  return (
    <div className="w-full lg:w-3/4 h-full">
      <h2 className="heading-2">{t("Shipment Details")}</h2>
      <div className="overflow-x-auto rounded-lg border-2">
        <table className="w-full text-center">
          <thead className="table-header">
            <tr>
              <th>{t("Branch")}</th>
              <th>{t("Date")}</th>
              <th>{t("Time")}</th>
              <th>{t("Details")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
          {updatedInfo &&
                updatedInfo?.map((item, index) => (
                  <tr className="table-row" key={index}>
                    <td className="table-cell">{item.hub || '-'}</td>
                    <td className="table-cell">{item.timestamp}</td>
                    <td className="table-cell">{item.timestamp}</td>
                    <td className="table-cell">{item.state}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
              
  );
};

export default DetailsTable;
