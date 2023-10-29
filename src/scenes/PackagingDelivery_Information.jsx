import React from "react";
import DropDown_Structure from "../components/DropDown_Structure";
import Input_Structure from "../components/Input_Structure";

import {
  packingTypeOptions,
  packingQtyOptions,
  deliveryModeOptions,
} from "./Names";

function PackagingDelivery_Information({
  packingType,
  packingQty,
  packingQtyValue,
  deliveryMode,
  handleInputChange,
}) {
  return (
    <>
      <div className="packingDelivery">
        <div className="sub-heading">Packing and Delivery Information</div>
        <div className="parent-container">
          <div className="component">
            <DropDown_Structure
              requirement={true}
              label_value="Packing Type"
              id_value="packingType"
              value={packingType}
              onchange_value={handleInputChange}
              options_value={packingTypeOptions}
            />
          </div>
          <div className="component">
            <DropDown_Structure
              requirement={true}
              label_value="Delivery Mode"
              id_value="deliveryMode"
              value={deliveryMode}
              onchange_value={handleInputChange}
              options_value={deliveryModeOptions}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PackagingDelivery_Information;
